import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/Services/company.service';
import { Observable } from 'rxjs';
import { CrudService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile = {
    companyId: 0,
    dateCreated: '',
    designation: '',
    email: '',
    firstName: '',
    gender: '',
    id: 0,
    imageUrl: '',
    lastName: '',
    phoneNumber: '',
    profile: '',
    qualification: '',
    yearsOfExperience: 0
  };
  qualifications$: Observable<any[]>;

  constructor(
    private companyService: CompanyService,
    private crud: CrudService,
  ) { }

  ngOnInit(): void {
    this.profile = this.companyService.getStaff();
    this.qualifications$ = this.getStaffQualification(this.profile.id);
  }

  getStaffQualification(id): Observable<any> {
    return this.crud.getRequest(`api/professionalqualification/allIrrByStaffProfileId/${id}`);
  }

}
