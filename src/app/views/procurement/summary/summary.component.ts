import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/Services/crud.service';
import { UtilService } from 'src/app/Services/util.service';
import { SwalMixinService } from 'src/app/Services/swal-mixin.service';
import { CompanyService } from 'src/app/Services/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  loading = false;
  tender = this.utilService.getTender();
  paymentInstance: any;
  email = this.utilService.getEmail();
  ref = this.generateReference();
  applicationData = {
    companyProfileId: 0,
    id: 0,
    lotNumber: 0,
    tenderId: 0,
  };

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
    this.applicationData.tenderId = this.tender.id;
    this.applicationData.lotNumber = this.tender.lotNumber;
    this.applicationData.companyProfileId = this.utilService.getCompany().id;
  }

  generateReference(): string {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 15; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return 'CA-' + text;
  }

  paymentFailure(res) {
    console.log('Payment Failed', res);
    this.swalService.error('There was an error processing your payment');
  }

  async paymentSuccess(res) {
    console.log('Payment complete', res);
    if (res.status === 'success') {
      await this.logTransaction(res);
      await this.tenderApplication();
      this.router.navigate(['/contractor/procurement/tender-history']);
    }
  }

  paymentInit(paymentInstance) {
    this.paymentInstance = paymentInstance;
    console.log('Payment about to begin', paymentInstance);
  }

  logTransaction({ reference: referenceNum }) {
    const {
      applicationFee: amount,
      mdaName,
      category,
    } = this.tender;
    const data = {
      amount,
      id: 0,
      referenceNum,
      type: `Payment for ${mdaName} - ${category} - ${this.tender.lotNumber}`,
      userId: this.utilService.getUser(),
    };
    this.crudService.postRequest('api/paymentrecept/add', data).subscribe(res => {
      console.log(res);
    }, err => console.log(err));
  }

  tenderApplication() {
    this.crudService.postRequest('api/tenderapplication/add', this.applicationData).subscribe((res: any) => {
      console.log(res);
      if (res.code === 0) {
        this.swalService.success(res.message);
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
