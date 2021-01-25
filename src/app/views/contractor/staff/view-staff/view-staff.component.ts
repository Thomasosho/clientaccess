import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/Services/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-staff',
  templateUrl: './view-staff.component.html',
  styleUrls: ['./view-staff.component.scss']
})
export class ViewStaffComponent implements OnInit {
  staff = this.companyService.getStaff();

  constructor(
    private companyService: CompanyService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    console.log(this.staff);
  }

  setStaff(staff) {
    this.companyService.setStaff(staff);
    this.router.navigate(['/contractor/staff/edit-staff']);
  }

}
