import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/Services/crud.service';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { userType } from '../landing/landing.component';

@Component({
  selector: 'app-non-admins',
  templateUrl: './non-admins.component.html',
  styleUrls: ['./non-admins.component.scss']
})
export class NonAdminsComponent implements OnInit {
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

  navigationSubscription;
  type = userType;
  userType = '';
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
  constructor(
    private crud: CrudService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.userType = this.router.url.split('/')[1];
  }

  getFullName(userArray: any[]) {
    return userArray.map((user) => {
      user.fullName = `${user.firstName || ''} ${user.lastName || ''}`.trim();
      return user;
    });
  }

}
