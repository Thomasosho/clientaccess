import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from 'src/app/Services/crud.service';
import { UtilService } from 'src/app/Services/util.service';
import { Router } from '@angular/router';
import { SwalMixinService } from 'src/app/Services/swal-mixin.service';
import { Login } from 'src/app/Models/login';
import { MustMatch } from 'src/app/Helpers/must-match.validator';

@Component({
  // selector: 'app-reset-password',
  selector: 'app-dashboard',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  @ViewChild('ShowHideInput', { static: false }) ShowHideInput: ElementRef;
  @ViewChild('ShowHideInput2', { static: false }) ShowHideInput2: ElementRef;
  @ViewChild('ShowHideInput3', { static: false }) ShowHideInput3: ElementRef;
  @ViewChild('ShowHideIcon', { static: false }) ShowHideIcon: ElementRef;
  @ViewChild('ShowHideIcon2', { static: false }) ShowHideIcon2: ElementRef;
  @ViewChild('ShowHideIcon3', { static: false }) ShowHideIcon3: ElementRef;
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
      oldPassword: ['', [ Validators.minLength(8), Validators.required ]],
      newPassword: ['', [ Validators.minLength(8), Validators.required ]],
      confirmPassword: ['', [Validators.minLength(8), Validators.required]],
    }, {
      validator: MustMatch('newPassword', 'confirmPassword')
    });
   }

  peekPassword(input = 1) {
    let field;
    let icon;

    switch (input) {
      case 2:
        field = this.ShowHideInput2;
        icon = this.ShowHideIcon2;
        break;
      case 3:
        field = this.ShowHideInput3;
        icon = this.ShowHideIcon3;
        break;
      default:
        field = this.ShowHideInput;
        icon = this.ShowHideIcon;
        break;
    }

    if (field.nativeElement.getAttribute('type') === 'password') {
      field.nativeElement.setAttribute('type', 'text');
      icon.nativeElement.classList.replace('fa-eye', 'fa-eye-slash');

    } else {
      field.nativeElement.setAttribute('type', 'password');
      icon.nativeElement.classList.replace('fa-eye-slash', 'fa-eye');

    }
  }

  resetPassword() {
    this.loading = true;
    this.resetForm.value.userId = Number(this.utilService.getUser());
    this.crudService.postRequest('api/users/resetPassword', this.resetForm.value).subscribe((res: Login) => {
      console.log(res);
      this.loading = false;
      this.swalService.success(res.message);
    }, err => {
      console.log(err);
      this.loading = false;
      this.swalService.success('Password reset was not successful');
    });
  }

}
