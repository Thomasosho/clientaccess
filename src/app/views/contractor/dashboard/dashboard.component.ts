import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/Services/crud.service';
import { UtilService } from 'src/app/Services/util.service';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  dashboardCount = {
    allDocuments: 0,
    certificate: 0,
    equipment: 0,
    project: 0,
    keyStaff: 0,
  };

  constructor(
    private crud: CrudService,
    private util: UtilService,
  ) { }

  ngOnInit(): void {
    this.getDashboardCount();
  }
  getDashboardCount() {
    const { id } = this.util.getCompany();
    this.crud.getRequest(`api/companyprofile/dashboardCount/${id}`).subscribe(res => {
      console.log(res);
      this.dashboardCount = res as any;
    }, err => console.log(err));
  }
}
