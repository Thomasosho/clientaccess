import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from 'src/app/Services/crud.service';
import { Router } from '@angular/router';
import { SwalMixinService } from 'src/app/Services/swal-mixin.service';
import { MustMatch } from 'src/app/Helpers/must-match.validator';

@Component({
  selector: 'app-register-contractor',
  templateUrl: 'register-contractor.component.html'
})
export class RegisterContractorComponent {
  registerForm: FormGroup;
  alertsDismiss: any = [];
  message = '';
  successful = false;
  dismissible = true;
  loading = false;

  constructor(
    private form: FormBuilder,
    private crudService: CrudService,
    private router: Router,
    private swalService: SwalMixinService,
  ) {
    this.registerForm = this.form.group({
      companyName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      terms: [false, [
        Validators.required,
        Validators.requiredTrue,
      ]],
      email: ['', [
        Validators.required,
        Validators.email,
      ]],
      password: ['', [Validators.minLength(8), Validators.required]],
      confirmPassword: ['', [Validators.minLength(8), Validators.required]],
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  register() {
    this.registerForm.value.id = 0;
    this.loading = true;
    this.crudService.postRequestNoAuth('api/users/register/contractor', this.registerForm.value).subscribe((res: any) => {
      console.log(res);
      this.loading = false;
      if (res.code === 0) {
        this.swalService.success('Company registered successfully');
        this.router.navigate(['login']); // navigate to login page
        } else {
          const message = res.message || 'An error occured, please try again.';
          this.swalService.error(message);
        }
    }, err => {
      this.loading = false;
      this.swalService.error(err.message);
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
