import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from 'src/app/Services/crud.service';
import { UtilService } from 'src/app/Services/util.service';
import { Router } from '@angular/router';
import { SwalMixinService } from 'src/app/Services/swal-mixin.service';
import { MustMatch } from 'src/app/Helpers/must-match.validator';

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.scss']
})
export class RegisterAdminComponent implements OnInit {

  registerForm: FormGroup;
  alertsDismiss: any = [];
  message = '';
  successful = false;
  dismissible = true;
  loading = false;

  constructor(
    private form: FormBuilder,
    private crudService: CrudService,
    private utilService: UtilService,
    private router: Router,
    private swalService: SwalMixinService,
  ) {
    this.registerForm = this.form.group({
      email: ['', Validators.required],
      terms: [false, [
        Validators.required,
        Validators.requiredTrue,
      ]],
      phoneNumber: ['', [
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(11),
      ]],
      password: ['', [Validators.minLength(8), Validators.required]],
      confirmPassword: ['', [Validators.minLength(8), Validators.required]],
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  ngOnInit() {
  }

  register() {
    this.registerForm.value.id = 0;
    this.loading = true;
    this.crudService.postRequestNoAuth('api/users/register/admin', this.registerForm.value).subscribe((res: any) => {
      console.log(res);
      this.loading = false;
      if (res.code === 0) {
      this.swalService.success('Admin registered successfully');
      this.router.navigate(['login']); // navigate to login page
      } else {
        this.swalService.error('An error occured, please try again.');
      }
    }, err => {
      this.loading = false;
      // this.swalService.error(err.message);
      this.swalService.error('There was an error registering the administrator, please try again.');
    });
  }

  showNotification(type, msg): void {
    this.alertsDismiss.push({
      type,
      msg,
      // type: 'info',
      // msg: `This alert will be closed in 5 seconds (added: ${new Date().toLocaleTimeString()})`,
      timeout: 5000
    });
  }


}
