import { Component, OnInit, TemplateRef } from '@angular/core';
import { CrudService } from 'src/app/Services/crud.service';
import { SwalMixinService } from 'src/app/Services/swal-mixin.service';
import { UtilService } from 'src/app/Services/util.service';
import { CompanyService } from 'src/app/Services/company.service';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {
  modalRef: BsModalRef;
  userSubscriptions = [];
  loading = false;
  subscriptions = [];
  paymentInstance: any;
  email = this.utilService.getEmail();
  ref = this.generateReference();
  amount = 0;
  paymentOptions = {
    PBFPubKey: 'FLWPUBK_TEST-a95caf78b6504bde29af398c56b5eeab-X',
    customer_email: this.utilService.getEmail(),
    customer_firstname: 'Manasseh',
    customer_lastname: 'Omachonu',
    custom_description: 'Payment for goods',
    amount: 5000,
    currency: 'NGN',
    customer_phone: '09024878207',
    txref: this.generateReference(),
  };
  update = {
    newSubscriptionId: 0,
    currentSubscriptionId: 0,
    months: 0,
    userId: 0,
    userSubscriptionId: 0,
  };

  constructor(
    private crudService: CrudService,
    private utilService: UtilService,
    private swal: SwalMixinService,
    private modalService: BsModalService,
  ) { }

  ngOnInit(): void {
    const userId = this.utilService.getUser();
    this.getUserSubscriptions(userId);
    this.getSubscriptionPriviledges();
  }

  setSub(sub, template) {
    // console.log(sub);
    const userId = Number(this.utilService.getUser());
    this.update.userId = userId;
    this.update.currentSubscriptionId = sub.subscriptionId;
    this.update.userSubscriptionId = sub.userSubscriptionId;
    this.update.months = sub.months;
    this.amount = sub.amount;
    // console.log(this.update);

    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }

  setnewSub(id) {
    this.update.newSubscriptionId = Number(id);
  }

  getUserSubscriptions(userId) {
    this.loading = true;
    this.crudService.getRequest(`api/usersubscription/findValidSubscribedUserByUserId/${userId}`).subscribe(res => {
      console.log(res);
      this.loading = false;
      this.userSubscriptions = res as any;
    }, err => {
      console.log(err);
      this.loading = false;
    });
  }

  getSubscriptionPriviledges() {
    this.loading = true;
    this.crudService.getRequest('api/subscription/findAll').subscribe(
      (res) => {
        console.log(res);
        this.loading = false;
        this.subscriptions = res as any;
      },
      (err) => {
        console.log(err);
        this.loading = false;
      }
    );
  }

  isActive(date){
    const endDate = new Date(date);
    const today = new Date();
    return endDate >= today;
  }

  upgradeSubscription() {
    this.crudService.postRequest('api/usersubscription/upgradeSubscription', this.update).subscribe(
      (res: any) => {
        console.log(res);
        this.swal.success(res.message);
        this.getUserSubscriptions(this.update.userId);
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
    this.upgradeSubscription();
    this.modalRef.hide();
    // this.paymentInstance.close();
  }

  paymentInit(paymentInstance) {
    this.paymentInstance = paymentInstance;
    console.log('Payment about to begin', this.paymentInstance);
  }
}
