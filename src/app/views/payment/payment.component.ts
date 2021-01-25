import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/Services/crud.service';
import { SwalMixinService } from 'src/app/Services/swal-mixin.service';
import { UtilService } from 'src/app/Services/util.service';
import { CompanyService } from 'src/app/Services/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  loading = false;
  receipts = [];

  constructor(
    private crudService: CrudService,
    private utilService: UtilService,
    private swalService: SwalMixinService,
    private companyService: CompanyService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getReceipts();
  }

  getReceipts() {
    this.loading = true;
    const userId = Number(this.utilService.getUser());
    this.crudService.getRequest(`api/paymentrecept/allByUserId/${userId}`).subscribe((res: any) => {
      console.log(res);
      this.receipts = res;
      this.loading = false;
    }, err => {
      console.log(err);
      this.swalService.error('There was an error fetching the documents.');
      this.loading = false;
    });
  }

  setDocument(document) {
    this.companyService.setDocument(document);
    this.router.navigate([`/billing/receipt`]);
  }
}
