import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from 'src/app/Services/crud.service';
import { UtilService } from 'src/app/Services/util.service';
import { SwalMixinService } from 'src/app/Services/swal-mixin.service';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/Services/company.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditExperienceComponent implements OnInit {
  document = this.companyService.getDocument();
  experiencesForm: FormGroup;
  loading = false;
  current = this.document.endYear === '' ? true : false;

  constructor(
    private crudService: CrudService,
    private utilService: UtilService,
    private swalService: SwalMixinService,
    private companyService: CompanyService,
    private router: Router,
    private form: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.experiencesForm = this.form.group({
      name: [this.document.name, Validators.required],
      startYear: [this.document.startYear, Validators.required],
      endYear: [this.document.endYear, Validators.required],
    });

  }

  updateExperiences() {
    this.experiencesForm.value.id = this.document.id;
    this.loading = true;
    this.experiencesForm.value.expertId = this.document.expertId;
    if (this.current) { this.experiencesForm.value.endYear = ''; }

    this.crudService.putRequest('api/expertexperience/edit', this.experiencesForm.value).subscribe((res: any) => {
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
