import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'add-product',
    component: AddProductComponent,
  },
  {
    path: 'edit-product',
    component: EditProductComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierRoutingModule { }
