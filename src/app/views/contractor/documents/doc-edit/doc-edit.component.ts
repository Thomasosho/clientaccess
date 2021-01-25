import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from 'src/app/Services/crud.service';
import { UtilService } from 'src/app/Services/util.service';
import { SwalMixinService } from 'src/app/Services/swal-mixin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from 'src/app/Services/company.service';

@Component({
  selector: 'app-doc-edit',
  templateUrl: './doc-edit.component.html',
  styleUrls: ['./doc-edit.component.scss']
})
export class DocEditComponent implements OnInit {
  uploadType = {
    cac: 'api/cac/edit',
    irr: 'api/irr/edit',
    itf: 'api/itf/edit',
    nsitf: 'api/nsitf/edit',
    pencomm: 'api/pension/edit',
    tax: 'api/taxclearance/edit',
  };
  document = this.companyService.getDocument();
  uploadmessage: '';
  postUrl: string;
  documentForm: FormGroup;
  loading = false;
  years: number[];
  uploadLoading = false;
  docType = '';

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
    const type = this.route.snapshot.params['doc'];
    this.docType = type;
    this.postUrl = this.uploadType[type];

    this.documentForm = this.form.group({
      description: [this.document.description, Validators.required],
      certificateNum: [this.document.certificateNum, Validators.required],
      year: [this.document.year, Validators.required],
    });
  }

  getYear(yearsBack: number): number[] {
    const currentYear = new Date().getFullYear();
    return [...Array(yearsBack).keys()].map(i => currentYear - i);
  }

  updateDocument() {
    this.loading = true;
    this.documentForm.value.imageUrl = this.document.imageUrl;
    this.documentForm.value.id = this.document.id;
    this.documentForm.value.companyId = this.utilService.getCompany().id;
    this.crudService.putRequest(this.postUrl, this.documentForm.value).subscribe((res: any) => {
      if (res.code === 0) {
        console.log(res);
        this.loading = false;
        this.swalService.success('Updated Successfully');
        this.router.navigate([`/contractor/documents/${this.docType}`]);
      } else {
        this.swalService.error('An error occured');
      }
    }, err => {
      console.log(err);
      this.loading = false;
      this.swalService.error(err.message);
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
