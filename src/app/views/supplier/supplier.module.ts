import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierRoutingModule } from './supplier-routing.module';
import { ProductsComponent } from './products/products.component';
import { NgxLoadingXModule } from 'ngx-loading-x';
import { AddProductComponent } from './products/add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';


@NgModule({
  declarations: [ProductsComponent, AddProductComponent, ProfileComponent, EditProductComponent],
  imports: [
    CommonModule,
    SupplierRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxLoadingXModule
  ]
})
export class SupplierModule { }
