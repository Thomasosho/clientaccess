import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/Services/crud.service';
import { UtilService } from 'src/app/Services/util.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dashboardCount = {
    clientsCount: 0,
    experienceCount: 0,
    qualificationCount: 0,
    skillCount: 0
  };

  constructor(
    private crud: CrudService,
    private util: UtilService,
  ) { }

  ngOnInit(): void {
    this.getDashboardCount();
  }
  getDashboardCount() {
    const id = Number(this.util.getUser());
    this.crud.getRequest(`api/expert/dashboardCount/${id}`).subscribe(res => {
      console.log(res);
      this.dashboardCount = res as any;
    }, err => console.log(err));
  }

}
