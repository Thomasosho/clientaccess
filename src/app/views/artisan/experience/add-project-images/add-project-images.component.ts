import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/Services/crud.service';
import { SwalMixinService } from 'src/app/Services/swal-mixin.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UtilService } from 'src/app/Services/util.service';

@Component({
  selector: 'app-add-project-images',
  templateUrl: './add-project-images.component.html',
  styleUrls: ['./add-project-images.component.scss']
})
export class AddProjectImagesComponent implements OnInit {
  projectImageForm: FormGroup;
  uploadLoading = false;
  loading = false;
  fileUrl = '';

  constructor(
    private crudService: CrudService,
    private utilService: UtilService,
    private swalService: SwalMixinService,
    private router: Router,
    private form: FormBuilder,
  ) { }

  ngOnInit(): void {
    console.log(localStorage.getItem('project'));

    this.projectImageForm = this.form.group({
      title: ['', Validators.required],
    });
  }

  getUploadUrl(file) {
    this.uploadLoading = true;
    const fileUri = file.target.files[0];
    const formData = new FormData();
    formData.append('file', fileUri, fileUri.name);

    this.crudService.postRequestFile('uploadMe', formData).subscribe((res: any) => {
      // console.log(res);
      if (res.code === 0) {
        this.fileUrl = res.message;
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

  addProjectImage() {
    this.loading = true;
    this.projectImageForm.value.id = 0;
    this.projectImageForm.value.imageUrl = this.fileUrl;
    this.projectImageForm.value.artisanExperienceId = Number(localStorage.getItem('project'));
    this.crudService.postRequest('api/artisanexperienceimage/add', this.projectImageForm.value).subscribe((res: any) => {
      console.log(res);
      if (res.code === 0) {
        this.swalService.success(res.message);
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
