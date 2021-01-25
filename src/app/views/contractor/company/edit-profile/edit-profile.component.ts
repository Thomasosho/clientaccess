import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CrudService } from 'src/app/Services/crud.service';
import { UtilService } from 'src/app/Services/util.service';
import { SwalMixinService } from 'src/app/Services/swal-mixin.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  @ViewChild('newClassification', { static: false }) newClassification: ElementRef;
  model: any;
  classification = [];
  company = {
    id: 0,
    companyName: null,
    address: null,
    classification: null,
    dateOfIncorporation: null,
    logoUrl: null,
    missionAndVisionStatement: null,
    website: null,
    whatWeDo: null,
    others: null,
  };
  contact1 = {
    companyId: 0,
    email: '',
    firstName: '',
    id: 0,
    lastName: '',
    phoneNumber: ''
  };
  contact2 = {
    companyId: 0,
    email: '',
    firstName: '',
    id: 0,
    lastName: '',
    phoneNumber: ''
  };
  email: string;
  updateLoading = false;
  token: string;
  uploadLoading = false;

  constructor(
    private crudService: CrudService,
    private utilService: UtilService,
    private swalService: SwalMixinService,
  ) {
    this.token = this.utilService.getToken();
  }

  ngOnInit() {
    this.email = this.utilService.getEmail();
    this.fetchCompanyProfile();
  }

  getYear(yearsBack: number): number[] {
    const currentYear = new Date().getFullYear();
    return [...Array(yearsBack).keys()].map(i => currentYear - i);
  }

  getClassification() {
    this.crudService.getRequestImAuth('api/companyprofileclassification/findAll', this.token).subscribe((res: any) => {
      console.log(res);
      this.classification = res;
    });
  }

  addClassification(classification) {
    const data = {
      id: 0,
      classification
    };

    this.crudService.postRequest('api/companyprofileclassification/add', data).subscribe(res => {
      console.log(res);
    });
  }

  fetchCompanyProfile() {
    const userId = this.utilService.getUser();
    // console.log(userId);

    this.crudService.getRequestImAuth(`api/companyprofile/allByUserId/${userId}`, this.token).subscribe(res => {
      console.log(res);
      this.company = res[0];
      this.fetchContactPerson(this.company.id);
      this.getClassification();
    }, err => {
      console.log(err);
    });
  }

  fetchContactPerson(companyId) {
    this.crudService.getRequest(`api/contactperson/allByCompanyId/${companyId}`).subscribe((res: any[]) => {
      console.log(res);
      if (res[0]) {
        this.contact1 = res[0];
      }
      if (res[1]) {
        this.contact2 = res[1];
      }
    }, err => {
      console.log(err);
    });
  }

  updateCompanyProfile() {
    this.updateLoading = true;
    if (this.company.classification === 'others') {
      const classification = this.newClassification.nativeElement.value;
      this.company.classification = classification;
      this.addClassification(classification);
    }
    this.crudService.putRequest('/api/companyprofile/edit', this.company).subscribe((res: any) => {
      console.log(res);
      this.updateLoading = false;
      this.swalService.success(res.message);
    }, err => {
      console.log(err);
      this.updateLoading = false;
      this.swalService.error(err.message);
    });
  }

  addContact(contact) {
    contact.companyId = this.company.id;
    console.log(contact);
    this.updateLoading = true;
    this.crudService.postRequest('/api/contactperson/add', contact).subscribe((res: any[]) => {
      console.log(res);
      this.updateLoading = false;
      this.swalService.success('Created Successfully');
      contact = res;
    }, err => {
      console.log(err);
      this.updateLoading = false;
      this.swalService.success(err.message);
    });
  }

  updateContactPerson(contact) {
    this.updateLoading = true;
    console.log(contact);
    this.crudService.putRequest('/api/companyprofile/edit', contact).subscribe(res => {
      console.log(res);
      contact = res;
      this.updateLoading = false;
      this.swalService.success('Updated Successfully');
    }, err => {
      console.log(err);
      this.updateLoading = false;
      this.swalService.success(err.message);
    });
  }

  getUploadUrl(file) {
    this.uploadLoading = true;
    const fileUri = file.target.files[0];
    const formData = new FormData();
    formData.append('file', fileUri, fileUri.name);

    this.crudService.postRequestFile('uploadMe', formData).subscribe((res: any) => {
      if (res.code === 0) {
        this.uploadLoading = false;
        this.company.logoUrl = res.message;
        this.swalService.success('File path saved.');
      } else {
        this.uploadLoading = false;
        this.swalService.error('An error occured');
      }
    }, err => {
      console.log(err);
      this.uploadLoading = false;
      this.swalService.error('Could not get file path.');
    });
  }
}
