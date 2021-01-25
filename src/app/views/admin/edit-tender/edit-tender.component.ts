import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from 'src/app/Services/crud.service';
import { UtilService } from 'src/app/Services/util.service';
import { SwalMixinService } from 'src/app/Services/swal-mixin.service';
import { CompanyService } from 'src/app/Services/company.service';

@Component({
  selector: 'app-edit-tender',
  templateUrl: './edit-tender.component.html',
  styleUrls: ['./edit-tender.component.scss']
})
export class EditTenderComponent implements OnInit {
  loading = false;
  uploadLoading = false;
  tenderForm: FormGroup;
  category = '';
  tender: any;
  mdas = [];

  constructor(
    private crudService: CrudService,
    private utilService: UtilService,
    private companyService: CompanyService,
    private swalService: SwalMixinService,
    private form: FormBuilder,
    ) { }

  ngOnInit(): void {
    this.getTender();
    this.getMda();

    this.tenderForm = this.form.group({
      title: [this.tender.title, Validators.required],
      mdaId: [this.tender.mdaId, Validators.required],
      openingInfo: [this.tender.openingInfo, Validators.required],
      applicationFee: [this.tender.applicationFee, Validators.required],
      collectionOfBidDocument: [this.tender.collectionOfBidDocument, Validators.required],
      introduction: [this.tender.introduction, Validators.required],
      disclaimer: [this.tender.disclaimer, Validators.required],
      notes: [this.tender.notes, Validators.required],
      lotsGroups: [this.tender.lotsGroups, Validators.required],
      category: [this.tender.category, Validators.required],
      otherReq: [this.tender.otherReq, Validators.required],
      openingDate: [this.tender.openingDate, Validators.required],
      expiryDate: [this.tender.expiryDate, Validators.required],
    });
  }

  editTender() {
    this.loading = true;
    this.tenderForm.value.id = this.tender.id;
    this.crudService.putRequest('api/tender/edit', this.tenderForm.value).subscribe((res: any) => {
    this.loading = false;
    console.log(res);
    if (res.code === 0) {
        this.swalService.success(res.message);
      } else {
        this.swalService.error('An Error Occured');
      }
    }, err => {
      this.loading = false;
      console.log(err);
      this.swalService.error('An Error Occured');
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
        this.tenderForm.value.billOfQuantityUrl = res.message;
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

  getMda() {
    const token = this.utilService.getToken();
    this.crudService.getRequestImAuth('api/mda/findAll', token).subscribe((res: any) => {
      console.log(res);
      res.map(elem => {
        const { mdaPojo } = elem;
        if (mdaPojo !== null ) {
          const { id, name } = mdaPojo;
          const tempUser = {
            id,
            name,
          };
          this.mdas.push(tempUser);
        }
      });
    }, err => console.log(err));
  }
  getTender() {
    this.tender = this.companyService.getTender();
  }

}
