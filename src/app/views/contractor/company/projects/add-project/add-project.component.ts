import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/Services/crud.service';
import { UtilService } from 'src/app/Services/util.service';
import { SwalMixinService } from 'src/app/Services/swal-mixin.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {
  projectForm: FormGroup;
  uploadLoading = false;
  uploadAwardLoading = false;
  loading = false;
  fileUrl = '';
  completionCertificateUrl = '';
  awardCertificateUrl = '';

  constructor(
    private crudService: CrudService,
    private utilService: UtilService,
    private swalService: SwalMixinService,
    private form: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.projectForm = this.form.group({
      jobTitle: ['', Validators.required],
      breifDescription: ['', Validators.required],
      awardee: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
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
          this.awardCertificateUrl = res.message;
        } else {
          this.completionCertificateUrl = res.message;
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

  addProject() {
    this.projectForm.value.id = 0;
    this.projectForm.value.completionCertificateUrl = this.completionCertificateUrl;
    this.projectForm.value.awardCertificateUrl = this.awardCertificateUrl;
    this.projectForm.value.companyId = this.utilService.getCompany().id;
    this.crudService.postRequest('/api/project/add', this.projectForm.value).subscribe((res: any) => {
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
