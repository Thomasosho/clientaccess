import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from 'src/app/Services/crud.service';
import { SwalMixinService } from 'src/app/Services/swal-mixin.service';
import { CompanyService } from 'src/app/Services/company.service';
import { ActivatedRoute } from '@angular/router';
import { UtilService } from 'src/app/Services/util.service';
export type QualificationType = 'upload' | 'update';

@Component({
  selector: 'app-add-qualification',
  templateUrl: './add-qualification.component.html',
  styleUrls: ['./add-qualification.component.scss']
})
export class AddQualificationComponent implements OnInit {
  type = {
    upload: '',
    update: '',
  };
  docType = '';
  postUrl = '';
  qualificationForm: FormGroup;
  uploadLoading = false;
  loading = false;
  fileUrl = '';
  qualification = {
    id: 0,
    endDate: '',
    imageUrl: '',
    name: '',
    staffId: 0,
    startDate: '',
  };

  constructor(
    private crudService: CrudService,
    private util: UtilService,
    private swalService: SwalMixinService,
    private companyService: CompanyService,
    private route: ActivatedRoute,
    private form: FormBuilder,
  ) {}

  ngOnInit(): void {
    // tslint:disable-next-line: no-string-literal
    const type = this.route.snapshot.params['type'];
    this.docType = type;
    this.postUrl = this.type[type];

    this.qualificationForm = this.form.group({
      name: [this.qualification.name, Validators.required],
      endDate: [this.qualification.endDate, Validators.required],
      startDate: [this.qualification.startDate, Validators.required],
    });

    if (this.docType === 'update') {
      this.qualification = this.companyService.getDocument();
    }
  }

  getUploadUrl(file) {
    const fileUri = file.target.files[0];
    const formData = new FormData();
    formData.append('file', fileUri, fileUri.name);
    this.uploadLoading = true;

    this.crudService.postRequestFile('uploadMe', formData).subscribe((res: any) => {
      // console.log(res);
      if (res.code === 0) {
        this.qualification.imageUrl = res.message;
        this.swalService.success('File path saved.');
      } else {
        this.swalService.error('An error occured');
      }
      this.uploadLoading = false;
    }, err => {
      console.log(err);
      this.uploadLoading = false;
      this.swalService.error('Could not get file path.');
    });
  }

  uploadQualification() {
    this.qualificationForm.value.id = this.qualification.id;
    this.qualificationForm.value.staffId = this.qualification.staffId || Number(this.companyService.getStaff().id);
    this.qualificationForm.value.imageUrl = this.qualification.imageUrl;
    let request = this.crudService.postRequest('api/professionalqualification/add', this.qualificationForm.value);
    if (this.docType === 'edit') {
      request = this.crudService.putRequest('api/professionalqualification/edit', this.qualificationForm.value);
    }
    request.subscribe((res: any) => {
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
