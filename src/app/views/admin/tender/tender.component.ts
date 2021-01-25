import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/Services/crud.service';
import { UtilService } from 'src/app/Services/util.service';
import { SwalMixinService } from 'src/app/Services/swal-mixin.service';
import { CompanyService } from 'src/app/Services/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tender',
  templateUrl: './tender.component.html',
  styleUrls: ['./tender.component.scss']
})
export class TenderComponent implements OnInit {
  allTender = [];
  loading = false;
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
    private utilService: UtilService,
    private router: Router,
    private companyService: CompanyService,
    private swalService: SwalMixinService,
  ) {
    this.getTender();
  }

  ngOnInit(): void {
  }

  isAdmin() {
    return this.router.url.includes('admin');
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

  getTender() {
    this.loading = true;
    const token = localStorage.getItem('token');

    this.crudService.getRequestImAuth('api/tender/findAll', token).subscribe((res: any) => {
      console.log(res);
      this.allTender = res;
      this.loading = false;
    }, err => {
      console.log(err);
      this.loading = false;
      this.swalService.error('There was an error fetching all tender.');
    });
  }

  publishTender(tenderId) {
    this.loading = true;
    this.crudService.getRequest(`api/tender/publishTender/${tenderId}`).subscribe((res: any) => {
      console.log(res);
      this.swalService.success('Tender has been published');
      this.getTender();
      this.loading = false;
    }, err => {
      console.log(err);
      this.loading = false;
      this.swalService.error('There was an error publishing tender.');
    });
  }

  unPublishTender(tenderId) {
    this.loading = true;
    this.crudService.getRequest(`api/tender/unPublishTender/${tenderId}`).subscribe((res: any) => {
      console.log(res);
      this.swalService.success('Tender has been unpublished');
      this.getTender();
      this.loading = false;
    }, err => {
      console.log(err);
      this.loading = false;
      this.swalService.error('There was an error unpublishing tender.');
    });
  }

  setTender(tender, view = 'edit') {
    this.companyService.setTender(tender);
    if (view === 'lot') {
      this.router.navigate(['/admin/tender-lot']);
    } else if (view === 'req'){
      this.router.navigate(['/admin/tender-requirement']);
    } else if (view === 'category'){
      this.router.navigate(['/admin/tender-categories']);
    } else {
      this.router.navigate(['/admin/edit-tender']);
    }
  }
}
