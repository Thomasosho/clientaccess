import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/Services/crud.service';
import { CompanyService } from 'src/app/Services/company.service';
import { Router } from '@angular/router';
import { SwalMixinService } from 'src/app/Services/swal-mixin.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {
  subscriptions = [];

  constructor(
    private crud: CrudService,
    private swal: SwalMixinService,
    private companyService: CompanyService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getSubscriptions();
  }

  getSubscriptions() {
    this.crud.getRequest('api/subscription/findAll').subscribe(res => {
      console.log(res);
      this.subscriptions = res as any;
    }, err => {
      console.log(err);
    });
  }

  setSubscription(sub, type = 'view') {
    this.companyService.setSub(sub);

    if (type === 'edit') {
      return this.router.navigate(['/admin/subscription/edit']);
    }
    return this.router.navigate(['/admin/subscription/priviledges']);
  }

  deleteSubscription(id) {
    this.crud.deleteRequest(`api/subscription/delete/${id}`).subscribe((res: any) => {
      this.swal.success(res.message);
      this.getSubscriptions();
    }, err => {
      console.log(err);
      this.swal.error('An error occured.');
    });
  }

}
