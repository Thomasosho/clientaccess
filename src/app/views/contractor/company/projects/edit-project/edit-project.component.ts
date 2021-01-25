import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/Services/crud.service';
import { UtilService } from 'src/app/Services/util.service';
import { SwalMixinService } from 'src/app/Services/swal-mixin.service';
import { CompanyService } from 'src/app/Services/company.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss']
})
export class EditProjectComponent implements OnInit {
  projectForm: FormGroup;
  uploadLoading = false;
  project = this.companyService.getProject();
  uploadAwardLoading = false;
  loading = false;
  fileUrl = '';

  constructor(
    private crudService: CrudService,
    private swalService: SwalMixinService,
    private companyService: CompanyService,
    private form: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.projectForm = this.form.group({
      jobTitle: [this.project.jobTitle, Validators.required],
      breifDescription: [this.project.breifDescription, Validators.required],
      awardee: [this.project.awardee, Validators.required],
      startDate: [this.project.startDate, Validators.required],
      endDate: [this.project.endDate, Validators.required],
    });
  }

  getUploadUrl(file, destination) {
    destination === 'award' ? this.uploadAwardLoading = true : this.uploadLoading = true;
    const fileUri = file.target.files[0];
    const formData = new FormData();
    formData.append('file', fileUri, fileUri.name);

    this.crudService.postRequestFile('uploadMe', formData).subscribe((res: any) => {
      // console.log(res);
      if (res.code === 0) {
        if (destination === 'award') {
          this.project.awardCertificateUrl = res.message;
        } else {
          this.project.completionCertificateUrl = res.message;
        }
        this.swalService.success('File path saved.');
      } else {
        this.swalService.error('An error occured');
      }
      this.uploadAwardLoading = false;
      this.uploadLoading = false;
    }, err => {
      console.log(err);
      this.uploadLoading = false;
      this.swalService.error('Could not get file path.');
    });
  }

  updateProject() {
    this.projectForm.value.id = this.project.id;
    this.projectForm.value.companyId = this.project.companyId;
    this.projectForm.value.completionCertificateUrl = this.project.completionCertificateUrl;
    this.projectForm.value.awardCertificateUrl = this.project.awardCertificateUrl;
    this.crudService.putRequest('api/project/edit', this.projectForm.value).subscribe((res: any) => {
      console.log(res);
      if (res.code === 0) {
        this.swalService.success(res.message);
      } else {
        this.swalService.error('An Error Occured');
      }
    }, err => {
      console.log(err);
      this.swalService.error('An Error Occured');
    });
  }

}
