import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/Services/crud.service';
import { UtilService } from 'src/app/Services/util.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {
  company;
  email = '';
  contact1: any;
  contact2: any;

  constructor(
    private crudService: CrudService,
    private utilService: UtilService,
  ) {
    this.fetchCompanyProfile();
  }

  ngOnInit(): void {
    this.email = this.utilService.getEmail();
  }

  fetchCompanyProfile() {
    const userId = this.utilService.getUser();
    const token = this.utilService.getToken();
    this.crudService.getRequestImAuth(`api/companyprofile/allByUserId/${userId}`, token).subscribe(res => {
      console.log(res);
      this.company = res[0];
      this.fetchContactPerson(this.company.id);
    }, err => {
      console.log(err);
    });
  }

  fetchContactPerson(companyId) {
    this.crudService.getRequest(`/api/contactperson/allByCompanyId/${companyId}`).subscribe((res: any[]) => {
      console.log(res);
      if (res[0]) {
        this.contact1 = res[0];
      }
      if (res[1]) {
        this.contact2 = res[1];
      }
    }, err => {
      console.log(err);
    });
  }

}
