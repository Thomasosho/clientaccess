import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentComponent } from './payment.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { AddSubsctriptionComponent } from './subscription/add-subsctription/add-subsctription.component';
import { PurchaseSubscriptionComponent } from './subscription/purchase-subscription/purchase-subscription.component';


const routes: Routes = [
  {
    path: '',
    component: PaymentComponent
  },
  {
    path: 'receipt',
    component: ReceiptComponent,
  },
  {
    path: 'subscription',
    component: SubscriptionComponent,
  },
  {
    path: 'add-subscription',
    component: AddSubsctriptionComponent,
  },
  {
    path: 'purchase-subscription',
    component: PurchaseSubscriptionComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
