import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from 'src/app/Services/crud.service';
import { UtilService } from 'src/app/Services/util.service';
import { SwalMixinService } from 'src/app/Services/swal-mixin.service';
import { CompanyService } from 'src/app/Services/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.scss']
})
export class EditExperienceComponent implements OnInit {
  document = this.companyService.getDocument();
  experiencesForm: FormGroup;
  loading = false;

  constructor(
    private crudService: CrudService,
    private utilService: UtilService,
    private swalService: SwalMixinService,
    private companyService: CompanyService,
    private router: Router,
    private form: FormBuilder,
  ) { }

  ngOnInit(): void {
    console.log(this.document);

    this.experiencesForm = this.form.group({
      name: [this.document.name, Validators.required],
      startYear: [this.document.startYear, Validators.required],
      endYear: [this.document.endYear, Validators.required],
    });
  }

  updateExperiences() {
    this.experiencesForm.value.id = this.document.id;
    this.experiencesForm.value.value = 0;
    this.experiencesForm.value.imageUrl = '';
    this.experiencesForm.value.location = '';
    this.loading = true;
    this.experiencesForm.value.artisanId = Number(this.utilService.getUser());
    this.crudService.putRequest('api/artisanexperience/edit', this.experiencesForm.value).subscribe((res: any) => {
      console.log(res);
      if (res.code === 0) {
        this.swalService.success(res.message);
        this.router.navigate(['/artisan/project']);
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
