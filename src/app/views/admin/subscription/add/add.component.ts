import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from 'src/app/Services/crud.service';
import { UtilService } from 'src/app/Services/util.service';
import { CompanyService } from 'src/app/Services/company.service';
import { SwalMixinService } from 'src/app/Services/swal-mixin.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit, OnDestroy {
  loading = false;
  subscriptionForm: FormGroup;
  subscription = {
    id: 0,
    category: '',
    amount: 0,
  };
  isAdd = true;
  navigationSubscription;

  constructor(
    private crudService: CrudService,
    private companyService: CompanyService,
    private swalService: SwalMixinService,
    private router: Router,
    private route: ActivatedRoute,
    private form: FormBuilder,
  ) { 
    // subscribe to the router events. Store the subscription so we can
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // tslint:disable-next-line: no-string-literal
      const type = this.route.snapshot.params['type'];
      if (type === 'edit') {
        this.isAdd = false;
        this.subscription = this.companyService.getSub();
      }
    });
  }

  ngOnInit(): void {
    this.subscriptionForm = this.form.group({
      category: [this.subscription.category, Validators.required],
      amount: [this.subscription.amount, Validators.required],
    });
  }

  addSubscription() {
    this.loading = true;
    this.subscriptionForm.value.id = 0;
    let request = this.crudService.postRequest('api/subscription/add', this.subscriptionForm.value);

    if (!this.isAdd) {
      request = this.crudService.putRequest('api/subscription/edit', this.subscriptionForm.value);
      this.subscriptionForm.value.id = this.subscription.id;
    }
    request.subscribe((res: any) => {
    this.loading = false;
    // console.log(res);
    if (res.code === 0) {
        this.swalService.success(res.message);
        this.router.navigate(['/admin/subscription']);
      } else {
        this.swalService.error('An Error Occured');
      }
    }, err => {
      this.loading = false;
      console.log(err);
      this.swalService.error('An Error Occured');
    });
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }
}
