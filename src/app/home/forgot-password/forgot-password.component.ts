import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from 'src/app/Services/crud.service';
import { UtilService } from 'src/app/Services/util.service';
import { Router } from '@angular/router';
import { SwalMixinService } from 'src/app/Services/swal-mixin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  resetForm: FormGroup;
  message = '';
  successful = false;
  loading = false;

  constructor(
    private form: FormBuilder,
    private crudService: CrudService,
    private utilService: UtilService,
    private router: Router,
    private swalService: SwalMixinService,
  ) {
    this.resetForm = this.form.group({
      email: ['', [
        Validators.required,
        Validators.email,
      ]],
    });
   }

   resetPassword() {
    this.loading = true;
    this.crudService.getRequestNoAuth(`api/users/forgotPassword/${this.resetForm.value.email}`).subscribe((res: any) => {
      this.loading = false;
      this.swalService.success(res.message);
      this.router.navigate(['/']); // navigate to home
    }, err => {
      console.log(err);
      this.loading = false;
      if (err.status === 401) {
        this.swalService.error('Incorrect email');
      }else {
        this.swalService.error(err.message);
      }
    });
  }
}
