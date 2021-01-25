import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from 'src/app/Services/crud.service';
import { UtilService } from 'src/app/Services/util.service';
import { SwalMixinService } from 'src/app/Services/swal-mixin.service';
import { CompanyService } from 'src/app/Services/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-staff',
  templateUrl: './edit-staff.component.html',
  styleUrls: ['./edit-staff.component.scss']
})
export class EditStaffComponent implements OnInit {
  staffForm: FormGroup;
  uploadLoading = false;
  loading = false;
  staff = this.companyService.getStaff();

  constructor(
    private crudService: CrudService,
    private utilService: UtilService,
    private swalService: SwalMixinService,
    private router: Router,
    private companyService: CompanyService,
    private form: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.staffForm = this.form.group({
      firstName: [this.staff.firstName, Validators.required],
      lastName: [this.staff.lastName, Validators.required],
      phoneNumber: [this.staff.phoneNumber, Validators.required],
      email: [this.staff.email, Validators.required],
      gender: [this.staff.gender, Validators.required],
      designation: [this.staff.designation, Validators.required],
      qualification: [this.staff.qualification, Validators.required],
      yearsOfExperience: [this.staff.yearsOfExperience, Validators.required],
      profile: [this.staff.profile, Validators.required],
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
        this.staff.imageUrl = res.message;
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

  updateStaff() {
    this.loading = true;
    this.staffForm.value.id = this.staff.id;
    this.staffForm.value.companyId = this.utilService.getCompany().id;
    this.staffForm.value.imageUrl = this.staff.imageUrl;
    this.crudService.putRequest('api/staffprofile/edit', this.staffForm.value).subscribe((res: any) => {
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
