import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from 'src/app/Services/crud.service';
import { UtilService } from 'src/app/Services/util.service';
import { SwalMixinService } from 'src/app/Services/swal-mixin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.scss']
})
export class AddExperienceComponent implements OnInit {
  experiencesForm: FormGroup;
  loading = false;
  current = true;

  constructor(
    private crudService: CrudService,
    private utilService: UtilService,
    private swalService: SwalMixinService,
    private router: Router,
    private form: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.experiencesForm = this.form.group({
      name: ['', Validators.required],
      startYear: ['', Validators.required],
      endYear: ['', Validators.required],
    });
  }

  addExperiences() {
    this.experiencesForm.value.id = 0;
    this.loading = true;
    this.experiencesForm.value.expertId = Number(this.utilService.getUser());
    this.crudService.postRequest('api/expertexperience/add', this.experiencesForm.value).subscribe((res: any) => {
      console.log(res);
      if (res.code === 0) {
        this.swalService.success(res.message);
        this.router.navigate(['/expert/experience']);
      } else {
        this.swalService.error('An Error Occured');
      }
      this.loading = false;
    }, err => {
      console.log(err);
      this.swalService.error('An Error Occured');
      this.loading = false;
    });
  }

}
