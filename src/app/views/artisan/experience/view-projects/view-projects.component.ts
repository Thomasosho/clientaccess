import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/Services/util.service';
import { CrudService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-view-projects',
  templateUrl: './view-projects.component.html',
  styleUrls: ['./view-projects.component.scss']
})
export class ViewProjectsComponent implements OnInit {
  projectImages = [];
  loading = false;

  constructor(
    private crudService: CrudService,
    private utilService: UtilService,
  ) { }

  ngOnInit(): void {
    this.getProjectImages();
  }

  getProjectImages() {
    this.loading = true;
    const artisanExperienceId = localStorage.getItem('project');
    this.crudService.getRequest(`api/artisanexperienceimage/allByArtisanExperienceId/${artisanExperienceId}`).subscribe((res: any) => {
      console.log(res);
      this.projectImages = res;
      this.loading = false;
    }, err => {
      console.log(err);
      this.loading = false;
    });
  }

}
