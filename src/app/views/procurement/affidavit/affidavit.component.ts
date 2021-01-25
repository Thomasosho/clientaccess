import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/Services/crud.service';
import { UtilService } from 'src/app/Services/util.service';
import { SwalMixinService } from 'src/app/Services/swal-mixin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-affidavit',
  templateUrl: './affidavit.component.html',
  styleUrls: ['./affidavit.component.scss']
})
export class AffidavitComponent implements OnInit {
  loading = false;
  fileUrl: string;
  uploadLoading = false;
  uploadSuccessful = false;
  tender = this.utilService.getTender();

  constructor(
    private crudService: CrudService,
    private utilService: UtilService,
    private swalService: SwalMixinService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  uploadDocument() {
    this.loading = true;
    if (this.fileUrl) {
      const data = {
        imageUrl: this.fileUrl,
        id: 0,
        projectId: this.tender.id,
        companyId: Number(this.utilService.getCompany().id),
      };
      this.crudService.postRequest('api/affidavit/add', data).subscribe((res: any) => {
        console.log(res);
        this.loading = false;
        this.uploadSuccessful = true;
        this.swalService.success('Uploaded Successfully');
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

    this.crudService.postRequestFile('uploadMe', formData).subscribe((res: any) => {
      // console.log(res);
      if (res.code === 0) {
        this.uploadLoading = false;
        this.fileUrl = res.message;
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

  nextProcess() {
    if (!this.uploadSuccessful) {
      return this.swalService.warning('Please upload the required document then click next to proceed.');
    } else {
      this.router.navigate(['/contractor/procurement/upload/bank-refferal']);
    }
  }
}
