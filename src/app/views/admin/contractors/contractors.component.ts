import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/Services/crud.service';
import { SwalMixinService } from 'src/app/Services/swal-mixin.service';

@Component({
  selector: 'app-contractors',
  templateUrl: './contractors.component.html',
  styleUrls: ['./contractors.component.scss']
})
export class ContractorsComponent implements OnInit {
  loading: boolean;
  users = [];

  constructor(
    private crudService: CrudService,
    private swalService: SwalMixinService,
  ) { }

  ngOnInit(): void {
    this.getAccounts();
  }

  getAccounts() {
    this.loading = true;
    this.crudService.getRequest('api/users/findAllContractors').subscribe((res: any) => {
      console.log(res);
      res.map(elem => {
        const {userResponsePojo, companyProfilePojo} = elem;
        const {id, companyName, website} = companyProfilePojo;
        const {email, phoneNumber, regDate } = userResponsePojo;
        const tempUser = {
          id,
          companyName,
          email,
          phoneNumber,
          website,
          regDate
        };
        this.users.push(tempUser);
      });

      console.log(this.users);
      this.loading = false;
    }, err => {
      console.log(err);
      this.loading = false;
      this.swalService.error('There was an error fetching all tender.');
    });
  }
}
