import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from 'src/app/Services/crud.service';
import { UtilService } from 'src/app/Services/util.service';
import { CompanyService } from 'src/app/Services/company.service';
import { SwalMixinService } from 'src/app/Services/swal-mixin.service';
import { isArray } from 'util';

@Component({
  selector: 'app-priviledges',
  templateUrl: './priviledges.component.html',
  styleUrls: ['./priviledges.component.scss']
})
export class PriviledgesComponent implements OnInit {
  loading = false;
  priviledgeForm: FormGroup;
  tender: any;
  priviledges = [];
  isAdd = true;
  priviledge = null;
  navigationSubscription;
  subscription = {
    id: 0,
    category: ''
  };

  constructor(
    private crudService: CrudService,
    private utilService: UtilService,
    private companyService: CompanyService,
    private swalService: SwalMixinService,
    private form: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.getTender();
    this.subscription = this.companyService.getSub();
    this.getPriviledges(this.subscription.id);

    this.priviledgeForm = this.form.group({
      privilege: ['', Validators.required],
    });
  }

  getTender() {
    this.tender = this.companyService.getTender();
  }

  editPriviledge(item) {
    const { privilege } = item;
    this.priviledgeForm.setValue({
      privilege,
    });
    this.isAdd = false;
    this.priviledge = item;
  }

  getPriviledges(subscriptionId) {
    const token = this.utilService.getToken();
    this.crudService.getRequestImAuth(`api/subscriptionprivilege/allBySubscriptionId/${subscriptionId}`, token).subscribe((res: any) => {
      if (Array.isArray(res)) {
        this.priviledges = res;
      }
    }, err => console.log(err));
  }

  addpriviledge() {
    this.loading = true;
    this.priviledgeForm.value.id = 0;
    this.priviledgeForm.value.subscriptionId = this.subscription.id;
    let request = this.crudService.postRequest('api/subscriptionprivilege/add', this.priviledgeForm.value);

    if (!this.isAdd) {
      this.priviledgeForm.value.id = this.priviledge.id;
      this.priviledgeForm.value.subscriptionId = this.priviledge.subscriptionId;
      request = this.crudService.putRequest('api/subscriptionprivilege/edit', this.priviledgeForm.value);
    }
    request.subscribe((res: any) => {
    this.loading = false;
    // console.log(res);
    if (res.code === 0) {
        this.swalService.success(res.message);
        this.getPriviledges(this.subscription.id);
      } else {
        this.swalService.error('An Error Occured');
      }
    }, err => {
      this.loading = false;
      console.log(err);
      this.swalService.error('An Error Occured');
    });
  }

  deletePriviledge(id) {
    this.crudService.deleteRequest(`api/subscriptionprivilege/delete/${id}`).subscribe((res: any) => {
      this.swalService.success(res.message);
      this.getPriviledges(this.subscription.id);
    }, err => {
      console.log(err);
      this.swalService.error('An error occured.');
    })
  }
}
