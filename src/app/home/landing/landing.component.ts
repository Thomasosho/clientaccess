import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/Services/crud.service';
import { map, tap, catchError } from 'rxjs/operators';
import { SwalMixinService } from 'src/app/Services/swal-mixin.service';
import { throwError } from 'rxjs';
export enum userType {
  artisans = 'artisans',
  experts = 'experts',
  suppliers = 'suppliers',
  contractor = 'contractor',
}
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  publicTenders$ = this.crud
    .getRequest('api/tender/allPublishedPublic')
    .pipe(map((x: any[]) => x.map((y) => y.companyProfilePojo)));

  allContractors$ = this.crud
    .getRequest('api/users/allContractorPublic')
    .pipe(map((x: any[]) => x.map((y) => y.companyProfilePojo)));

  allArtisans$ = this.crud.getRequest('api/users/allArtisanPublic').pipe(
    map((x: any[]) => x.map((y) => y.artisan).filter((z: any) => Boolean(z))),
    map(this.getFullName)
  );

  allExperts$ = this.crud.getRequest('api/users/allExpertPublic').pipe(
    map((x: any[]) => x.map((y) => y.expert)),
    map(this.getFullName)
  );

  allSuppliers$ = this.crud
    .getRequest('api/users/allSuppliersPublic')
    .pipe(map((x: any[]) => x.map((y) => y.supplierPojo)));

  type = userType;
  expertPage = 1;
  contractorPage = 1;
  supplierPage = 1;
  artisanPage = 1;
  contractorFilter: any = {
    companyName: '',
    classification: '',
  };
  expertArtisanFilter: any = {
    fullName: '',
    category: '',
  };

  supplierFilter: any = {
    category: '',
    businessName: '',
  };
  newsletterSubscriber: any = {
    email: '',
    id: 0
  };
  constructor(private crud: CrudService, private swal: SwalMixinService) {}

  ngOnInit(): void {}

  getFiveItems(arr: any[]) {
    return arr.slice(0, 5);
  }
  getFullName(userArray: any[]) {
    return userArray.map((user) => {
      user.fullName = `${user.firstName || ''} ${user.lastName || ''}`.trim();
      return user;
    });
  }
  subscribeHandler() {
    this.crud
      .postRequest('api/newsletter/add', this.newsletterSubscriber)
      .pipe(
        tap((res: any) =>
          res.code === 0 ? this.swal.success(res.message) : null
        ),
        catchError((err) => {
          this.swal.success('Error occurred while subscribing, try again');
          return throwError(err);
        })
      )
      .subscribe();
  }
}
