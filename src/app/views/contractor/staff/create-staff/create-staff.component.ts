import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from 'src/app/Services/crud.service';
import { UtilService } from 'src/app/Services/util.service';
import { SwalMixinService } from 'src/app/Services/swal-mixin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-staff',
  templateUrl: './create-staff.component.html',
  styleUrls: ['./create-staff.component.scss']
})
export class CreateStaffComponent implements OnInit {
  staffForm: FormGroup;
  uploadLoading = false;
  loading = false;
  fileUrl = '../../../../../assets/img/no-image-available.jpg';

  constructor(
    private crudService: CrudService,
    private utilService: UtilService,
    private swalService: SwalMixinService,
    private router: Router,
    private form: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.staffForm = this.form.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', Validators.required],
      gender: ['', Validators.required],
      designation: ['', Validators.required],
      qualification: ['', Validators.required],
      yearsOfExperience: ['', Validators.required],
      profile: ['', Validators.required],
    });
  }

  getUploadUrl(file) {
    const fileUri = file.target.files[0];
    const formData = new FormData();
    formData.append('file', fileUri, fileUri.name);
    this.uploadLoading = true;

    this.crudService.postRequestFile('uploadMe', formData).subscribe((res: any) => {
      // console.log(res);
      if (res.code === 0) {
        this.fileUrl = res.message;
        this.uploadLoading = false;
        this.swalService.success('File path saved.');
      } else {
        this.swalService.error('An error occured');
        this.uploadLoading = false;
      }
    }, err => {
      console.log(err);
      this.uploadLoading = false;
      this.swalService.error('Could not get file path.');
    });
  }

  addStaff() {
    this.loading = true;
    this.staffForm.value.id = 0;
    this.staffForm.value.companyId = this.utilService.getCompany().id;
    this.staffForm.value.imageUrl = this.fileUrl;
    this.crudService.postRequest('/api/staffprofile/add', this.staffForm.value).subscribe((res: any) => {
      console.log(res);
      this.loading = false;
      if (res.code === 0) {
        this.swalService.success(res.message);
        this.router.navigate([`/contractor/staff/`]);
      } else {
        this.swalService.error('An Error Occured');
      }
    }, err => {
      console.log(err);
      this.loading = false;
      this.swalService.error('An Error Occured');
    });
  }

}
