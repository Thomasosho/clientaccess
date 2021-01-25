import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from 'src/app/Services/crud.service';
import { UtilService } from 'src/app/Services/util.service';
import { SwalMixinService } from 'src/app/Services/swal-mixin.service';
import { CompanyService } from 'src/app/Services/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  document = this.companyService.getDocument();
  qualificationForm: FormGroup;
  uploadLoading = false;
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
    this.qualificationForm = this.form.group({
      name: [this.document.name, Validators.required],
      institutionName: [this.document.institutionName, Validators.required],
      startDate: [this.document.startDate, Validators.required],
      endDate: [this.document.endDate, Validators.required],
    });
  }

  reset() {
    this.qualificationForm.reset();
  }

  getUploadUrl(file) {
    this.uploadLoading = true;
    const fileUri = file.target.files[0];
    const formData = new FormData();
    formData.append('file', fileUri, fileUri.name);

    this.crudService.postRequestFile('uploadMe', formData).subscribe((res: any) => {
      // console.log(res);
      if (res.code === 0) {
        this.document.imageUrl = res.message;
        this.uploadLoading = false;
        this.swalService.success('File path saved.');
      } else {
        this.swalService.error('An error occured');
      }
    }, err => {
      console.log(err);
      this.uploadLoading = false;
      this.swalService.error('Could not get file path.');
    });
  }

  updateQualification() {
    this.loading = true;
    this.qualificationForm.value.id = this.document.id;
    this.qualificationForm.value.imageUrl = this.document.imageUrl;
    this.qualificationForm.value.artisanId = this.document.expertId;
    this.crudService.putRequest('api/artisanqualification/edit', this.qualificationForm.value).subscribe((res: any) => {
      console.log(res);
      if (res.code === 0) {
        this.swalService.success(res.message);
        this.router.navigate(['/artisan/qualification']);
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
