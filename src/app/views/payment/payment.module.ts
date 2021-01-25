import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentComponent } from './payment.component';
import { Angular4PaystackModule } from 'angular4-paystack';
import { AngularRaveModule } from 'angular-rave';
import { SubscriptionComponent } from './subscription/subscription.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { NgxPrintModule } from 'ngx-print';
import { AddSubsctriptionComponent } from './subscription/add-subsctription/add-subsctription.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PurchaseSubscriptionComponent } from './subscription/purchase-subscription/purchase-subscription.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    PaymentComponent,
    SubscriptionComponent,
    ReceiptComponent,
    AddSubsctriptionComponent,
    PurchaseSubscriptionComponent,
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    NgxPrintModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    // Angular4PaystackModule.forRoot('pk_test_d9f4d84fa5feda78ef50cc355efe00dd50a3d48f'),
    Angular4PaystackModule.forRoot('pk_test_961f74cc9467b58c13450983fff659a6bb8a52d3'),
    AngularRaveModule.forRoot({
      key: 'FLWPUBK_TEST-a95caf78b6504bde29af398c56b5eeab-X',
      isTest: true,
    }),
  ]
})
export class PaymentModule { }
