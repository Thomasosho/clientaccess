import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from 'src/app/Services/crud.service';
import { UtilService } from 'src/app/Services/util.service';
import { Router } from '@angular/router';
import { SwalMixinService } from 'src/app/Services/swal-mixin.service';
import { Login } from 'src/app/Models/login';
import { CompanyService } from 'src/app/Services/company.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @ViewChild('ShowHideInput', { static: false }) ShowHideInput: ElementRef;
  @ViewChild('ShowHideIcon', { static: false }) ShowHideIcon: ElementRef;
  loginForm: FormGroup;
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
    this.loginForm = this.form.group({
      username: ['', [
        Validators.required,
        Validators.email,
      ]],
      password: ['', [ Validators.minLength(8), Validators.required ]],
    });
   }

  // ngOnInit() {
  // }

  peekPassword() {

    if (this.ShowHideInput.nativeElement.getAttribute('type') === 'password') {
      this.ShowHideInput.nativeElement.setAttribute('type', 'text');
      this.ShowHideIcon.nativeElement.classList.replace('fa-eye', 'fa-eye-slash');

    } else {
      this.ShowHideInput.nativeElement.setAttribute('type', 'password');
      this.ShowHideIcon.nativeElement.classList.replace('fa-eye-slash', 'fa-eye');

    }
  }

  login() {
    this.loading = true;
    this.crudService.postRequestNoAuth('api/users/login', this.loginForm.value).subscribe((res: Login) => {
      // this.utilService.encryptData(res.user, 'user');
      // this.utilService.encryptData(res.roles, 'roles');
      this.loading = false;
      this.utilService.clearStorage();
      this.swalService.success(res.message);
      this.utilService.setToken(res.token);
      this.utilService.setUserObj(res.user);
      this.utilService.setUser(res.user.id);
      this.utilService.setEmail(res.user.email);
      this.utilService.setRoles(res.roles);
      if (res.roles.includes('ADMIN')) {
        this.router.navigate(['admin']); // navigate to tender
      } else if (res.roles.includes('CONTRACTOR')) {
        this.utilService.setCompany(res.companyProfileList[0]);
        this.router.navigate(['contractor']); // navigate to dashboard
      } else if (res.roles.includes('ARTISAN')) {
        this.router.navigate(['artisan']); // navigate to artisan home
      } else if (res.roles.includes('EXPERT')) {
        this.router.navigate(['expert']); // navigate to expert home
      } else if (res.roles.includes('MDA')) {
        this.router.navigate(['mda']); // navigate to mda home
      } else if (res.roles.includes('SUPPLIER')) {
        this.router.navigate(['supplier']); // navigate to supplier home
      }
    }, err => {
      console.log(err);
      this.loading = false;
      if (err.status === 401) {
        this.swalService.error('Incorrect email or password');
      }else {
        this.swalService.error(err.message);
      }
    });
  }

}
