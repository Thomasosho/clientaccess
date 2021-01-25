import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from 'src/app/Services/crud.service';
import { UtilService } from 'src/app/Services/util.service';
import { SwalMixinService } from 'src/app/Services/swal-mixin.service';
import { CompanyService } from 'src/app/Services/company.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.scss']
})
export class AuditComponent implements OnInit {
  uploadType = {
    add: 'api/auditedaccount/add',
    edit: 'api/auditedaccount/edit',
  };
  uploadmessage: '';
  postUrl: string;
  documentForm: FormGroup;
  loading = false;
  years: number[];
  uploadLoading = false;
  docType = '';
  document = {
    id: 0,
    description: '',
    imageUrl: '',
  };

  constructor(
    private crudService: CrudService,
    private utilService: UtilService,
    private swalService: SwalMixinService,
    private companyService: CompanyService,
    private route: ActivatedRoute,
    private router: Router,
    private form: FormBuilder,
  ) {
    this.years = this.getYear(25);
  }


  ngOnInit(): void {
    // tslint:disable-next-line: no-string-literal
    const type = this.route.snapshot.params['type'];
    this.docType = type;
    this.postUrl = this.uploadType[type];

    if (this.docType === 'edit') {
      document = this.companyService.getDocument();
    }

    this.documentForm = this.form.group({
      description: [this.document.description, Validators.required],
    });
  }

  getYear(yearsBack: number): number[] {
    const currentYear = new Date().getFullYear();
    return [...Array(yearsBack).keys()].map(i => currentYear - i);
  }

  updateDocument() {
    this.loading = true;
    this.documentForm.value.id = this.document.id;
    this.documentForm.value.imageUrl = this.document.imageUrl;
    this.documentForm.value.companyId = this.utilService.getCompany().id;
    if (this.docType === 'add') {
      this.crudService.postRequest(this.postUrl, this.documentForm.value).subscribe((res: any) => {
        if (res.code === 0) {
          console.log(res);
          this.loading = false;
          this.swalService.success('Uploaded Successfully');
          this.router.navigate([`/contractor/documents/audit`]);
        } else {
          this.loading = false;
          this.swalService.error('An error occured');
        }
      }, err => {
        console.log(err);
        this.loading = false;
        this.swalService.error(err.message);
      });
    } else {
      this.crudService.putRequest(this.postUrl, this.documentForm.value).subscribe((res: any) => {
        if (res.code === 0) {
          console.log(res);
          this.loading = false;
          this.swalService.success('Updated Successfully');
          this.router.navigate([`/contractor/documents/audit`]);
        } else {
          this.loading = false;
          this.swalService.error('An error occured');
        }
      }, err => {
        console.log(err);
        this.loading = false;
        this.swalService.error(err.message);
      });
    }
  }

  getUploadUrl(file) {
    this.uploadLoading = true;
    const fileUri = file.target.files[0];
    const formData = new FormData();
    formData.append('file', fileUri, fileUri.name);

    this.crudService.postRequestFile('uploadMePdf', formData).subscribe((res: any) => {
      // console.log(res);
      if (res.code === 0) {
        this.uploadLoading = false;
        this.document.imageUrl = res.message;
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


}
