import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  Type,
} from '@angular/core';
import { CrudService } from 'src/app/Services/crud.service';
import {
  map,
  catchError,
  retry,
  switchMap,
  tap,
  takeUntil,
  mapTo,
} from 'rxjs/operators';
import { Observable, of, EMPTY, merge, Subject } from 'rxjs';
import { SwalMixinService } from 'src/app/Services/swal-mixin.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { UtilService } from 'src/app/Services/util.service';
import { EngagementService } from 'src/app/Services/engagement.service';

export type EngagementType =
  | 'artisans'
  | 'experts'
  | 'suppliers'
  | 'contractor';

@Component({
  selector: 'app-engagement',
  templateUrl: './engagement.component.html',
  styleUrls: ['./engagement.component.scss'],
})
export class EngagementComponent implements OnInit, AfterViewInit, OnDestroy {
  type: EngagementType;
  result$: Observable<any[]>;
  destroy$: Subject<boolean> = new Subject<boolean>();

  allArtisans$ = this.crudService
    .getRequest('api/artisan/findAll')
    .pipe(map(this.getFullName));

  allSuppliers$ = this.crudService.getRequest('/api/supplier/getAll').pipe(
    map((t: any[]) => {
      t.map((x) => (x.fullName = x.businessName));
      return t;
    })
  );
  allExperts$ = this.crudService
    .getRequest('/api/expert/findAll')
    .pipe(map(this.getFullName));

  filter: any = {
    fullName: '',
    category: '',
  };
  constructor(
    private crudService: CrudService,
    private route: ActivatedRoute,
    private util: UtilService,
    private swal: SwalMixinService,
    private engagementService: EngagementService
  ) {}

  ngAfterViewInit(): void {
    this.result$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.type = params.get('type') as EngagementType;
        let response: Observable<any>;
        if (this.type === 'artisans') {
          response = this.allArtisans$;
        } else if (this.type === 'experts') {
          response = this.allExperts$;
        } else {
          response = this.allSuppliers$;
        }
        return merge(of(null), response);
      }),
      retry(3),
      catchError((err) => this.errorHandler(err))
    );
  }

  ngOnInit(): void {}

  getFullName(user: any[]) {
    return user.map((a) => ({
      ...a,
      fullName: `${a.firstName || ''} ${a.lastName || ''}`.trim(),
    }));
  }

  errorHandler(error: HttpErrorResponse): Observable<any> {
    if (error.status === 403) {
      this.swal.error('Session Timed Out', 'Please login');
    } else {
      this.swal.error("can't fetcht list");
    }
    return EMPTY;
  }
  engageHandler(user?: any) {
    const notification = {
      id: 0,
      message: `${this.util.getUserObj().email} want's to  Engage you `,
      title: 'NEW ENGAGEMENT',
      type: 'Engage',
      userId: user.id,
    };
    this.crudService
      .postRequest('notification/add', notification)
      .pipe(
        tap((res) => {
          if (res) {
            this.swal.success(`notification sent to ${user.fullName}`);
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
  profileHandler(profile: any) {
    this.engagementService.selectedProfile = profile;
  }
  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
