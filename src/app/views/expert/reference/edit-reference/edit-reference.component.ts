import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from 'src/app/Services/crud.service';
import { UtilService } from 'src/app/Services/util.service';
import { SwalMixinService } from 'src/app/Services/swal-mixin.service';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/Services/company.service';

@Component({
  selector: 'app-edit-reference',
  templateUrl: './edit-reference.component.html',
  styleUrls: ['./edit-reference.component.scss']
})
export class EditReferenceComponent implements OnInit {
  document = this.companyService.getDocument();
  refereeForm: FormGroup;
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
    this.refereeForm = this.form.group({
      name: [this.document.name, Validators.required],
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

  editReferee() {
    this.loading = true;
    this.refereeForm.value.id = this.document.id;
    this.refereeForm.value.imageUrl = this.document.imageUrl;
    this.refereeForm.value.expertId = this.document.expertId;
    this.crudService.putRequest('api/expertreference/edit', this.refereeForm.value).subscribe((res: any) => {
      console.log(res);
      if (res.code === 0) {
        this.swalService.success(res.message);
        this.router.navigate(['/expert/referee']);
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
