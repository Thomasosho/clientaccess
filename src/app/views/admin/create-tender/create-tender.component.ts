import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from 'src/app/Services/crud.service';
import { SwalMixinService } from 'src/app/Services/swal-mixin.service';
import { UtilService } from 'src/app/Services/util.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-tender',
  templateUrl: './create-tender.component.html',
  styleUrls: ['./create-tender.component.scss']
})
export class CreateTenderComponent implements OnInit {
  loading = false;
  tenderForm: FormGroup;
  category = '';
  mdas = [];
  uploadLoading = false;
  fileUrl: any;
  certUrl: any;

  constructor(
    private crudService: CrudService,
    private router: Router,
    private swalService: SwalMixinService,
    private form: FormBuilder,
    ) { }

  ngOnInit(): void {
    // this.getMda();

    this.tenderForm = this.form.group({
      title: ['', Validators.required],
      mdaName: ['', Validators.required],
      openingInfo: ['', Validators.required],
      applicationFee: ['', Validators.required],
      collectionOfBidDocument: ['', Validators.required],
      closingInfo: ['', Validators.required],
      introduction: ['', Validators.required],
      disclaimer: ['', Validators.required],
      notes: ['', Validators.required],
      category: ['', Validators.required],
      openingDate: ['', Validators.required],
      expiryDate: ['', Validators.required],
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

  // getMda() {
  //   const token = this.utilService.getToken();
  //   this.crudService.getRequestImAuth('api/mda/findAll', token).subscribe((res: any) => {
  //     console.log(res);
  //     res.map(elem => {
  //       const { mdaPojo } = elem;
  //       if (mdaPojo !== null ) {
  //         const { id, name } = mdaPojo;
  //         const tempUser = {
  //           id,
  //           name,
  //         };
  //         this.mdas.push(tempUser);
  //       }
  //     });
  //   }, err => console.log(err));
  // }

  addTender() {
    this.loading = true;
    this.tenderForm.value.id = 0;
    this.tenderForm.value.billOfQuantityUrl = this.fileUrl;
    this.tenderForm.value.mdaId = Number(this.tenderForm.value.mdaId);
    this.crudService.postRequest('api/tender/add', this.tenderForm.value).subscribe((res: any) => {
      console.log(res);
      this.loading = false;
      if (res.code === 0) {
        this.swalService.success(res.message);
        this.router.navigate(['/admin/tender']);
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
