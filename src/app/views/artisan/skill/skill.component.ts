import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/Services/crud.service';
import { UtilService } from 'src/app/Services/util.service';
import { SwalMixinService } from 'src/app/Services/swal-mixin.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  skill = '';
  allSkills = [];
  artisanSkills = [];
  loading = false;

  constructor(
    private crudService: CrudService,
    private utilService: UtilService,
    private swalService: SwalMixinService,
  ) {}

  ngOnInit(): void {
    this.getAllSkills();
    this.getSkills();
  }

  getAllSkills() {
    const token = localStorage.getItem('token');
    const artisanId = this.utilService.getUser();
    this.crudService.getRequestImAuth('api/artisanSkill/findAll', token).subscribe((res: any) => {
      this.allSkills = [...new Set(res.map(skill => skill.skillSet))];
      console.log(this.allSkills);
    }, err => {
      console.log(err);
      this.swalService.error('There was an error fetching all skills.');
    });
  }

  getSkills() {
    const token = localStorage.getItem('token');
    const artisanId = this.utilService.getUser();
    this.crudService.getRequestImAuth(`api/artisanSkill/allByArtisanId/${artisanId}`, token).subscribe((res: any) => {
      console.log(res);
      this.artisanSkills = res;
    }, err => {
      console.log(err);
      this.swalService.error('There was an error fetching all skills.');
    });
  }

  addSkill() {
    if (this.skill === '') {
      this.swalService.warning('You have not entered the skill.');
      return null;
    }
    const artisanId = this.utilService.getUser();
    const data  = {
      artisanId,
      id: 0,
      skillSet: this.skill
    };
    this.loading = true;
    const token = localStorage.getItem('token');
    this.crudService.postRequestImAuth('api/artisanSkill/add', data, token).subscribe((res: any) => {
      console.log(res);
      this.swalService.success('Skill has been added');
      this.loading = false;
      this.skill = '';
      this.getSkills();
    }, err => {
      console.log(err);
      this.loading = false;
      this.swalService.error('There was an error adding skill.');
    });
  }

  deleteTrade(id) {
    this.crudService.deleteRequest(`api/artisanSkill/delete/${id}`).subscribe((res: any) => {
      console.log(res);
      this.swalService.success(res.message);
      this.getSkills();
    }, err => {
      this.swalService.success('An error occured.');
    });
  }

}
