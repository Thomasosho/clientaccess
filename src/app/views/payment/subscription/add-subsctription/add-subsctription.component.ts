import { Component, OnInit, TemplateRef } from '@angular/core';
import { CrudService } from 'src/app/Services/crud.service';
import { UtilService } from 'src/app/Services/util.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-subsctription',
  templateUrl: './add-subsctription.component.html',
  styleUrls: ['./add-subsctription.component.scss'],
})
export class AddSubsctriptionComponent implements OnInit {
  subscriptions = [];
  userSubscriptions;
  loading = false;

  constructor(
    private crudService: CrudService,
    private utilSevice: UtilService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.getSubscriptionPriviledges();
  }

  getSubscriptionPriviledges() {
    this.loading = true;
    this.crudService.getRequest('api/subscription/findAll').subscribe(
      (res) => {
        console.log(res);
        this.loading = false;
        this.subscriptions = res as any;
      },
      (err) => {
        console.log(err);
        this.loading = false;
      }
    );
  }

  getUserSubscriptions(userId) {
    this.crudService
      .getRequest(
        `/api/usersubscription/findValidSubscribedUserByUserId/${userId}`
      )
      .subscribe(
        (res) => {
          console.log(res);
          this.userSubscriptions = res as any;
        },
        (err) => {
          console.log(err);
        }
      );
  }

  setSubsription(sub) {
    this.utilSevice.setSubscription(sub);
    this.router.navigate(['/billing/purchase-subscription']);
  }

}
