import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/Services/util.service';
import { CrudService } from 'src/app/Services/crud.service';
import { SwalMixinService } from 'src/app/Services/swal-mixin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase-subscription',
  templateUrl: './purchase-subscription.component.html',
  styleUrls: ['./purchase-subscription.component.scss'],
})
export class PurchaseSubscriptionComponent implements OnInit {
  amount = 0;
  paymentInstance: any;
  email = this.util.getEmail();
  ref = this.generateReference();
  sub = this.util.getSubscription();
  paymentOptions = {
    PBFPubKey: 'FLWPUBK_TEST-a95caf78b6504bde29af398c56b5eeab-X',
    customer_email: this.util.getEmail(),
    customer_firstname: 'Manasseh',
    customer_lastname: 'Omachonu',
    custom_description: 'Payment for goods',
    amount: 5000,
    currency: 'NGN',
    customer_phone: '09024878207',
    txref: this.generateReference(),
  };
  subInfo = {
    months: 1,
    subscriptionId: 0,
    userId: 0,
  };
  constructor(
    private util: UtilService,
    private crud: CrudService,
    private swal: SwalMixinService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.subInfo.subscriptionId = this.sub.id;
    this.amount = this.sub.amount;
    this.subInfo.userId = Number(this.util.getUser());
  }

  onChange(month) {
    console.log(month);
    this.amount = this.sub.amount * month;
  }

  addSubscription() {
    this.crud.postRequest('api/usersubscription/add', this.subInfo).subscribe(
      (res: any) => {
        console.log(res);
        this.swal.success(res.message);
        this.router.navigate(['/billing/subscription']);
      },
      (err) => {
        console.log(err);
        const { error } = err;
        const message = error?.message || 'An error occured, please try again.';
        this.swal.error(message);
      }
    );
  }

  generateReference(): string {
    let text = '';
    const possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 15; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return 'CA-' + text;
  }

  paymentFailure(res) {
    console.log('Payment Failed', res);
  }

  paymentSuccess(res) {
    console.log('Payment complete', res);
    this.addSubscription();
    // this.paymentInstance.close();
  }

  paymentInit(paymentInstance) {
    this.paymentInstance = paymentInstance;
    console.log('Payment about to begin', this.paymentInstance);
  }
}
