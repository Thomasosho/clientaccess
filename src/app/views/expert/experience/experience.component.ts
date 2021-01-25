import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/Services/crud.service';
import { UtilService } from 'src/app/Services/util.service';
import { CompanyService } from 'src/app/Services/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experiences = [];
  loading = false;

  constructor(
    private crudService: CrudService,
    private utilService: UtilService,
    private companyService: CompanyService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.getExperience();
  }

  getExperience() {
    this.loading = true;
    const expertId = this.utilService.getUser();
    this.crudService.getRequest(`api/expertexperience/allByExpertId/${expertId}`).subscribe((res: any) => {
      console.log(res);
      this.experiences = res;
      this.loading = false;
    }, err => {
      console.log(err);
      this.loading = false;
    });
  }

  setDocument(document) {
    this.companyService.setDocument(document);
    this.router.navigate([`/expert/edit-experience`]);
  }
}
