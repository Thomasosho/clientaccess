import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/Services/crud.service';
import { UtilService } from 'src/app/Services/util.service';
import { CompanyService } from 'src/app/Services/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: any[] = [];
  loading = false;

  constructor(
    private crudService: CrudService,
    private utilService: UtilService,
    private companyService: CompanyService,
    private router: Router,
  ) {
    // this.companyService.getCompany().subscribe(company => {
    //   const { id } = company;
    //   this.getCompanyProjects(id);
    // });
  }

  ngOnInit(): void {
    this.getCompanyProjects();
  }

  getCompanyProjects() {
    const { id } = this.utilService.getCompany();
    this.loading = true;
    const token = this.utilService.getToken();
    this.crudService.getRequestImAuth(`/api/project/allByCompanyId/${id}`, token).subscribe((res: any) => {
      // console.log(res);
      this.projects = res;
      this.loading = false;
    }, err => {
      console.log(err);
      this.loading = false;
    });
  }

  setProject(project, type = 'edit') {
    this.companyService.setProject(project);
    if (type === 'edit') {
      this.router.navigate(['/contractor/company/projects/edit-project']);
    } else {
      this.router.navigate(['/contractor/company/certificates']);
    }
  }

}
