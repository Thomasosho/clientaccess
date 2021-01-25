import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeNavbarComponent } from './home-navbar/home-navbar.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';



@NgModule({
  declarations: [
    HomeNavbarComponent,
    HomeFooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    HomeNavbarComponent,
    HomeFooterComponent
  ]
})
export class ComponentsModule { }
