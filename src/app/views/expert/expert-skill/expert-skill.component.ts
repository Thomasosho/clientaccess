import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/Services/crud.service';
import { UtilService } from 'src/app/Services/util.service';
import { SwalMixinService } from 'src/app/Services/swal-mixin.service';

@Component({
  selector: 'app-expert-skill',
  templateUrl: './expert-skill.component.html',
  styleUrls: ['./expert-skill.component.scss']
})
export class ExpertSkillComponent implements OnInit {
  skill = '';
  allSkills = [];
  expertSkills = [];
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
    const expertId = this.utilService.getUser();
    this.crudService.getRequestImAuth('api/expertskill/findAll', token).subscribe((res: any) => {
      this.allSkills = [...new Set(res.map(skill => skill.skillSet))];
      console.log(this.allSkills);
    }, err => {
      console.log(err);
      this.swalService.error('There was an error fetching all skills.');
    });
  }

  getSkills() {
    const token = localStorage.getItem('token');
    const expertId = this.utilService.getUser();
    this.crudService.getRequestImAuth(`api/expertskill/allByExpertId/${expertId}`, token).subscribe((res: any) => {
      console.log(res);
      this.expertSkills = res;
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
    const expertId = this.utilService.getUser();
    const data  = {
      expertId,
      id: 0,
      skillSet: this.skill
    };
    this.loading = true;
    const token = localStorage.getItem('token');
    this.crudService.postRequestImAuth('api/expertskill/add', data, token).subscribe((res: any) => {
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

  deleteSkill(id) {
    this.crudService.deleteRequest(`api/expertskill/delete/${id}`).subscribe((res: any) => {
      console.log(res);
      this.swalService.success(res.message);
      this.getSkills();
    }, err => {
      this.swalService.success('An error occured.');
    });
  }

}
