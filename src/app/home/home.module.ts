import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProcurementModule } from '../views/procurement/procurement.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LandingComponent } from './landing/landing.component';
import { MainLayoutComponent } from '../layout/main-layout/main-layout.component';
import { ComponentsModule } from '../components/components.module';
import { RegisterExpertComponent } from './register/register-types/register-expert/register-expert.component';
import { RegisterContractorComponent } from './register/register-types/register-contractor/register-contractor.component';
import { RegisterArtisanComponent } from './register/register-types/register-artisan/register-artisan.component';
import { RegisterAdminComponent } from './register/register-types/register-admin/register-admin.component';
import { RegisterSupplierComponent } from './register/register-types/register-supplier/register-supplier.component';
import { RegisterMdaComponent } from './register/register-types/register-mda/register-mda.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { TableCardComponent } from './table-card/table-card.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { NonAdminsComponent } from './non-admins/non-admins.component';
import { TableCard2Component } from './table-card2/table-card2.component';

@NgModule({
  declarations: [
    MainLayoutComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    RegisterContractorComponent,
    RegisterArtisanComponent,
    RegisterAdminComponent,
    RegisterSupplierComponent,
    RegisterMdaComponent,
    ForgotPasswordComponent,
    LandingComponent,
    RegisterExpertComponent,
    TermsAndConditionsComponent,
    TableCardComponent,
    NonAdminsComponent,
    TableCard2Component,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    ProcurementModule,
    ComponentsModule,
    FilterPipeModule,
  ]
})
export class HomeModule { }
