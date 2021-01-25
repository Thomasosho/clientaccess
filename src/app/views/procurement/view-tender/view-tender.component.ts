import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CompanyService } from 'src/app/Services/company.service';
import { CrudService } from 'src/app/Services/crud.service';
import { UtilService } from 'src/app/Services/util.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-tender',
  templateUrl: './view-tender.component.html',
  styleUrls: ['./view-tender.component.scss']
})
export class ViewTenderComponent implements OnInit {
  tender = {
    applicationFee: 0,
    billOfQuantityUrl: '',
    category: '',
    collectionOfBidDocument: '',
    closingInfo: '',
    openingInfo: '',
    dateAdded: '',
    disclaimer: '',
    id: 0,
    expiryDate: '',
    lotsGroups: '',
    mdaName: '',
    notes: '',
    openingDate: '',
    publish: null,
    publishDate: '',
    title: '',
    updatedBy: '',
    procured: 0,
  };
  requirements$: Observable<any[]>;
  lots$: Observable<any[]>;
  procured = [];

  constructor(
    private companyService: CompanyService,
    private util: UtilService,
    private router: Router,
    private crud: CrudService,
  ) { }

  ngOnInit(): void {
    this.tender = this.companyService.getTender();
    this.requirements$ = this.getTenderRequirements(this.tender.id);
    this.lots$ = this.getTenderLots(this.tender.id);
  }

  getTenderRequirements(tenderId): Observable<any> {
    return this.crud.getRequest(`api/tenderrequirement/allByTender/${tenderId}`);
  }

  getTenderLots(tenderId): Observable<any> {
    return this.crud.getRequest(`api/tenderlot/allByTender/${tenderId}`);
  }

  setTender(tender) {
    this.util.setTender(tender);
    return this.router.navigate(['/contractor/procurement/upload/affidavit']);
  }
}
