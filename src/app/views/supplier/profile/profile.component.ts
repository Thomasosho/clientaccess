import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/Services/crud.service';
import { UtilService } from 'src/app/Services/util.service';
import { SwalMixinService } from 'src/app/Services/swal-mixin.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  loading = false;
  profile = {
    address: '',
    briefDescription: '',
    businessName: '',
    category: '',
    dateCreated: '',
    email: '',
    facebook: '',
    name: '',
    id: 0,
    instagram: '',
    logoUrl: '',
    phoneNumber: '',
    twitter: '',
    userId: 0,
    whatsAppNumber: ''
  };
  url: string;
  role: any;
  isActive = false;

  constructor(
    private crudService: CrudService,
    private utilService: UtilService,
    private swalService: SwalMixinService,
  ) { }

  ngOnInit(): void {
    this.getProfile();
    const userId = this.utilService.getUser();
    this.getUserSubscriptions(userId);
  }

  getProfile() {
    this.loading = true;
    const userId = this.utilService.getUser();
    const token = this.utilService.getToken();
    this.crudService.getRequestImAuth(`api/supplier/get/${userId}`, token).subscribe(res => {
      console.log(res);
      this.profile = res as any;
      this.loading = false;
    }, err => {
      // console.log(err);
      this.loading = false;
    });
  }

  getUserSubscriptions(userId) {
    this.loading = true;
    this.crudService.getRequest(`/api/usersubscription/findValidSubscribedUserByUserId/${userId}`).subscribe((res: any) => {
      console.log(res);
      this.loading = false;
      this.isActive = res.length > 0;
      console.log(this.isActive);
    }, err => {
      console.log(err);
      this.loading = false;
    });
  }

  getUploadUrl(file) {
    this.loading = true;
    const fileUri = file.target.files[0];
    const formData = new FormData();
    formData.append('file', fileUri, fileUri.name);

    this.crudService.postRequestFile('uploadMe', formData).subscribe((res: any) => {
      if (res.code === 0) {
        // this.loading = false;
        this.profile.logoUrl = res.message;
        this.updateProfile();
        this.swalService.success('File path saved.');
      } else {
        this.loading = false;
        this.swalService.error('An error occured');
      }
    }, err => {
      // console.log(err);
      this.loading = false;
      this.swalService.error('Could not get file path.');
    });
  }

  updateProfile() {
    this.loading = true;
    this.profile.userId = Number(this.utilService.getUser());
    this.crudService.putRequest('api/supplier/edit', this.profile).subscribe(res => {
      // console.log(res);
      this.getProfile();
      this.swalService.success('Profile updated successfully');
      this.loading = false;
    }, err => {
      // console.log(err);
      this.loading = false;
      this.swalService.error('There was an error updating your profile');
    });
  }


}
