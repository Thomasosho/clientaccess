import { Component, OnInit } from '@angular/core';
import { EngagementService } from 'src/app/Services/engagement.service';
import { BehaviorSubject, of, Observable, EMPTY, Subject, concat } from 'rxjs';
import { CrudService } from 'src/app/Services/crud.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap, catchError, takeUntil, map } from 'rxjs/operators';
import { EngagementType } from '../engagement.component';
import { SwalMixinService } from 'src/app/Services/swal-mixin.service';
import { UtilService } from 'src/app/Services/util.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  userProfile: any;
  destroy$: Subject<boolean> = new Subject<boolean>();
  supplierProducts$: Observable<any>;
  skill$: Observable<any>;
  education$: Observable<any>;
  experience$: Observable<any>;
  pastClients$: Observable<any>;
  referee$: Observable<any>;
  daysOfWeek$: Observable<any>;
  type: EngagementType;
  profile$: Observable<any> = this.route.queryParamMap.pipe(
    switchMap((paramMap) => {
      const type: EngagementType = (this.type = paramMap.get(
        'type'
      ) as EngagementType);
      const userId = paramMap.get('id');
      switch (type) {
        case 'artisans':
          this.skill$ = this.getArtisanSkill(userId);
          this.education$ = this.getArtisanEducation(userId);
          this.experience$ = this.getArtisanExperience(userId);
          this.pastClients$ = this.getArtisanClient(userId);
          this.referee$ = this.getArtisanReferee(userId);
          this.daysOfWeek$ = this.getArtisanDaysOfWeek(userId);
          return this.getArtisan(userId);
        case 'suppliers':
          this.supplierProducts$ = this.getSupplierProduct(userId);
          return this.getSupplier(userId);
        case 'experts':
          this.skill$ = this.getExpertSkill(userId);
          this.education$ = this.getExpertEducation(userId);
          this.experience$ = this.getExpertExperience(userId);
          this.pastClients$ = this.getExpertClient(userId);
          this.referee$ = this.getExpertReferee(userId);
          this.daysOfWeek$ = this.getExpertDaysOfWeek(userId);
          return this.getExpert(userId);
      }
    }),
    tap((profile) => (this.userProfile = profile)),
    catchError((err) => this.errorHandler(err))
  );
  getArtisanDaysOfWeek(id): Observable<any> {
    return this.crud.getRequest(`api/artisandaysoftheweek/allByArtisanId/${id}`);
  }
  getArtisanReferee(id): Observable<any> {
    return this.crud.getRequest(`api/artisanreferences/allByArtisanId/${id}`);
  }
  getArtisanExperience(id): Observable<any> {
    return this.crud.getRequest(`api/artisanexperience/allByArtisanId/${id}`);
  }
  getArtisanEducation(id): Observable<any> {
    return this.crud.getRequest(
      `api/artisanqualification/allByArtisanId/${id}`
    );
  }
  getArtisanClient(id): Observable<any> {
    return this.crud.getRequest(`api/artisanpastclient/allByArtisanId/${id}`);
  }
  getArtisanSkill(id): Observable<any> {
    return this.crud.getRequest(`api/artisanSkill/allByArtisanId/${id}`);
  }
  getArtisan(id): Observable<any> {
    return this.crud.getRequest(`api/artisan/get/${id}`);
  }
  getSupplier(id): Observable<any> {
    return this.crud.getRequest(`api/supplier/get/${id}`);
  }
  getExpertDaysOfWeek(id): Observable<any> {
    return this.crud.getRequest(`api/expertdaysoftheweek/allByExpertId/${id}`);
  }
  getExpertReferee(id): Observable<any> {
    return this.crud.getRequest(`api/expertreference/allByExpertId/${id}`);
  }
  getExpertExperience(id): Observable<any> {
    return this.crud.getRequest(`api/expertexperience/allByExpertId/${id}`);
  }
  getExpertEducation(id): Observable<any> {
    return this.crud.getRequest(`api/expertqualification/allByExpertId/${id}`);
  }
  getExpertClient(id): Observable<any> {
    return this.crud.getRequest(`api/expertpastclient/allByExpertId/${id}`);
  }
  getExpertSkill(id): Observable<any> {
    return this.crud.getRequest(`api/expertskill/allByExpertId/${id}`);
  }
  getExpert(id): Observable<any> {
    return this.crud.getRequest(`api/expert/get/${id}`);
  }
  getUser(id): Observable<any> {
    return this.crud.getRequest(`api/users/get/${id}`);
  }
  getSupplierProduct(id): Observable<any> {
    return this.crud.getRequest(`api/supplierproduct/allBySupplierId//${id}`);
  }
  constructor(
    private route: ActivatedRoute,
    private crud: CrudService,
    private swal: SwalMixinService,
    private util: UtilService
  ) {}

  ngOnInit(): void {}
  engageHandler() {
    const notification = {
      id: 0,
      message: `${this.util.getUserObj().email} want's to  Engange you `,
      title: 'NEW ENGAGEMENT',
      type: 'Engage',
      userId: this.userProfile.id,
    };
    this.crud
      .postRequest('notification/add', notification)
      .pipe(
        tap((res) => {
          if (res) {
            this.swal.success(
              `notification sent to ${this.userProfile.firstName || ''} ${
                this.userProfile.lastName || ''
              } ${this.userProfile.businessName || ''}`
            );
          }
        }),
        catchError((err) => {
          this.swal.error('Error', 'Notification was not sent');
          return EMPTY;
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  errorHandler(error: HttpErrorResponse): Observable<any> {
    if (error.status === 403) {
      this.swal.error('Session Timed Out');
    } else if (error.status === 417) {
      this.swal.error(error.error.message);
    } else {
      this.swal.error('can\'t fetch list');
    }
    return EMPTY;
  }
}
