import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CrudService } from 'src/app/Services/crud.service';
import { UtilService } from 'src/app/Services/util.service';
import { SwalMixinService } from 'src/app/Services/swal-mixin.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CompanyService } from 'src/app/Services/company.service';

@Component({
  selector: 'app-doc-upload',
  templateUrl: './doc-upload.component.html',
  styleUrls: ['./doc-upload.component.scss']
})
export class DocUploadComponent implements OnInit {
  loading = false;
  fileUrl: string;
  uploadLoading = false;
  uploadSuccessful = false;
  tender = this.utilService.getTender();
  lots$: Observable<any[]>;

  constructor(
    private crudService: CrudService,
    private utilService: UtilService,
    private swalService: SwalMixinService,
    private companyService: CompanyService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.tender = this.companyService.getTender();
    this.lots$ = this.getTenderLots(this.tender.id);
  }

  getTenderLots(tenderId): Observable<any> {
    return this.crudService.getRequest(`api/tenderlot/allByTender/${tenderId}`);
  }

  setTenderLot(lotNumber) {
    this.tender.lotNumber = lotNumber;
    console.log(this.tender);
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
      this.crudService.postRequest('api/bankreferral/add', data).subscribe((res: any) => {
        // if (res.code === 0) {
        //   console.log(res);
        this.loading = false;
        this.uploadSuccessful = true;
        this.swalService.success('Uploaded Successfully');
        // } else {
        //   this.loading = false;
        //   this.swalService.error('An error occured');
        // }
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
      this.utilService.setTender(this.tender);
      this.router.navigate(['/contractor/procurement/summary']);
    }
  }
}
