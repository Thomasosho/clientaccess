import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/Services/crud.service';
import { UtilService } from 'src/app/Services/util.service';
import { SwalMixinService } from 'src/app/Services/swal-mixin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-doc-upload',
  templateUrl: './doc-upload.component.html',
  styleUrls: ['./doc-upload.component.scss']
})
export class DocUploadComponent implements OnInit {
  uploadType = {
    cac: '/api/cac/add',
    irr: '/api/irr/add',
    itf: '/api/itf/add',
    nsitf: '/api/nsitf/add',
    pencomm: '/api/pension/add',
    tax: '/api/taxclearance/add',
  };
  uploadmessage: '';
  postUrl: string;
  documentForm: FormGroup;
  loading = false;
  fileUrl = '../../../../../assets/img/no-image-available.jpg';
  selectedYear = '2020';
  years: number[];
  uploadLoading = false;
  docType = '';

  constructor(
    private crudService: CrudService,
    private utilService: UtilService,
    private swalService: SwalMixinService,
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
      description: ['', Validators.required],
      certificateNum: ['', Validators.required],
      year: ['', Validators.required],
    });
  }

  getYear(yearsBack: number): number[] {
    const currentYear = new Date().getFullYear();
    return [...Array(yearsBack).keys()].map(i => currentYear - i);
  }

  uploadDocument() {
    this.loading = true;
    if (this.fileUrl) {
      this.documentForm.value.imageUrl = this.fileUrl;
      this.documentForm.value.id = 0;
      this.documentForm.value.companyId = this.utilService.getCompany().id;
      this.crudService.postRequest(this.postUrl, this.documentForm.value).subscribe((res: any) => {
        if (res.code === 0) {
          console.log(res);
          this.loading = false;
          this.swalService.success('Uploaded Successfully');
          this.router.navigate([`/contractor/documents/${this.docType}`]);
        } else {
        this.swalService.error('An error occured');
      }
      }, err => {
        console.log(err);
        this.loading = false;
        this.swalService.error(err.message);
      });
    } else {
      this.loading = false;
      this.swalService.error('Could not upload file, file path is empty.');
    }
  }

  getUploadUrl(file) {
    this.uploadLoading = true;
    const fileUri = file.target.files[0];
    const formData = new FormData();
    formData.append('file', fileUri, fileUri.name);
    let url = 'uploadMe';

    if (this.docType === 'audit') {
      url = 'uploadMePdf';
    }

    this.crudService.postRequestFile(url, formData).subscribe((res: any) => {
      // console.log(res);
      if (res.code === 0) {
        this.uploadLoading = false;
        this.fileUrl = res.message;
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
