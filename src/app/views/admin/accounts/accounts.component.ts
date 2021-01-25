import { Component, OnInit } from '@angular/core';
import { SwalMixinService } from 'src/app/Services/swal-mixin.service';
import { CrudService } from 'src/app/Services/crud.service';
import { UtilService } from 'src/app/Services/util.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {
  loading: boolean;
  users: any;

  constructor(
    private crudService: CrudService,
    private swalService: SwalMixinService,
    private utilService: UtilService,
  ) { }

  ngOnInit(): void {
    this.getAccounts();
  }

  getAccounts() {
    this.loading = true;
    const token = this.utilService.getToken();
    this.crudService.getRequestImAuth('api/users/findAll', token).subscribe((res: any) => {
      console.log(res);
      this.users = res;
      this.loading = false;
    }, err => {
      console.log(err);
      this.loading = false;
      this.swalService.error('There was an error fetching all accounts.');
    });
  }

  resetPassword(email) {
    this.loading = true;
    this.crudService.getRequestNoAuth(`api/users/forgotPassword/${email}`).subscribe((res: any) => {
      this.loading = false;
      this.swalService.success(res.message);
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
