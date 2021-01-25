import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/Services/crud.service';
import { SwalMixinService } from 'src/app/Services/swal-mixin.service';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.scss']
})
export class SuppliersComponent implements OnInit {
  loading: boolean;
  suppliers = [];

  constructor(
    private crudService: CrudService,
    private swalService: SwalMixinService,
  ) { }

  ngOnInit(): void {
    this.getAccounts();
  }

  getAccounts() {
    this.loading = true;
    this.crudService.getRequest('api/supplier/findAll').subscribe((res: any) => {
      // console.log(res);
      this.loading = false;
      res.map(elem => {
        const {email, dateCreated: regDate, businessName, phoneNumber} = elem;
        const tempUser = {
          businessName,
          email,
          phoneNumber,
          regDate,
        };
        this.suppliers.push(tempUser);
      });
    }, err => {
      // console.log(err);
      this.loading = false;
      this.swalService.error('There was an error fetching all suppliers.');
    });
  }
}
