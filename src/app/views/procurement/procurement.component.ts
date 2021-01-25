import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/Services/crud.service';
import { SwalMixinService } from 'src/app/Services/swal-mixin.service';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/Services/util.service';

@Component({
  selector: 'app-procurement',
  templateUrl: './procurement.component.html',
  styleUrls: ['./procurement.component.scss']
})
export class ProcurementComponent implements OnInit {
  isHome = false;
  loading: boolean;
  allTender = [];
  procured = [];
  filter = {
    addedBy: '',
    category: '',
    collectionOfBidDocument: '',
    title: '',
    mdaName: '',
    openingInfo: '',
    dateAdded: '',
    expiryDate: '',
    publishDate: '',
    openingDate: '',
  };

  constructor(
    private crudService: CrudService,
    private swalService: SwalMixinService,
    private utilService: UtilService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.isHome = this.router.url === '/';
    if (this.isHome) {
      this.getPublicPublishedTender();
    } else {
      this.getPublishedTender();
      this.getProcured();
    }
  }

  getYear(yearsBack: number): number[] {
    const currentYear = new Date().getFullYear();
    return [...Array(yearsBack).keys()].map(i => currentYear - i);
  }
  getMonths() {
    return [
      { name: 'Jan', value: '01' },
      { name: 'Feb', value: '02' },
      { name: 'Mar', value: '03' },
      { name: 'Apr', value: '04' },
      { name: 'May', value: '05' },
      { name: 'Jun', value: '06' },
      { name: 'Jul', value: '07' },
      { name: 'Aug', value: '08' },
      { name: 'Sep', value: '09' },
      { name: 'Oct', value: '10' },
      { name: 'Nov', value: '11' },
      { name: 'Dec', value: '12' },
    ];
  }

  checkExpired(expiryDate) {
    const today = new Date();
    const date = new Date(expiryDate);

    if (today > date) {
      return false;
    }
    return true;
  }

  checkProcured(id) {
    const procured = this.procured.filter(elem => elem.id === id);
    return procured.length;
  }

  getProcured() {
    this.loading = true;
    const companyProfileId = this.utilService.getCompany().id;
    this.crudService
      .getRequest(
        `api/tenderapplication/allByCompanyProfileId/${companyProfileId}`
      )
      .subscribe(
        (res: any) => {
          this.loading = false;
          this.procured = res;
        },
        (err) => {
          this.loading = false;
          this.swalService.error('There was an error fetching all tender.');
        }
      );
  }

  getPublishedTender() {
    this.loading = true;
    const token = this.utilService.getToken();
    this.crudService.getRequestImAuth('api/tender/allPublished', token).subscribe((res: any) => {
      // console.log(res);
      this.allTender = res;
      this.loading = false;
    }, err => {
      console.log(err);
      this.loading = false;
      this.swalService.error('There was an error fetching all tender.');
    });
  }

  getPublicPublishedTender() {
    this.loading = true;
    this.crudService.getRequestNoAuth('api/tender/allPublishedPublic').subscribe((res: any) => {
      // console.log(res);
      this.allTender = res;
      this.loading = false;
    }, err => {
      console.log(err);
      this.loading = false;
      this.swalService.error('There was an error fetching all tender.');
    });
  }

  setTender(tender, type = 'view') {
    const procured = this.checkProcured(tender.id);
    tender.procured = procured;
    this.utilService.setTender(tender);
    if (type === 'procure') {
      return this.router.navigate(['/contractor/procurement/upload/affidavit']);
    }
    return this.router.navigate(['/contractor/procurement/view-tender']);
  }
}
