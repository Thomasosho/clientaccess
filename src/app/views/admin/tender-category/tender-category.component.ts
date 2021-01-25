import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CompanyService } from 'src/app/Services/company.service';
import { CrudService } from 'src/app/Services/crud.service';
import { SwalMixinService } from 'src/app/Services/swal-mixin.service';
import { UtilService } from 'src/app/Services/util.service';

@Component({
  selector: 'app-tender-category',
  templateUrl: './tender-category.component.html',
  styleUrls: ['./tender-category.component.scss']
})
export class TenderCategoryComponent implements OnInit {
  loading = false;
  tenderCategoryForm: FormGroup;
  tender: any;
  tenderCategory = [];
  isAdd = true;
  category = null;

  constructor(
    private crudService: CrudService,
    private utilService: UtilService,
    private companyService: CompanyService,
    private swalService: SwalMixinService,
    private form: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.getTender();
    this.getTenderCategory();

    this.tenderCategoryForm = this.form.group({
      categoryName: ['', Validators.required],
    });
  }

  getTender() {
    this.tender = this.companyService.getTender();
  }

  editCategory(item) {
    console.log(item);
    const { categoryName } = item;
    this.tenderCategoryForm.setValue({
      categoryName,
    });
    this.isAdd = false;
    this.category = item;
  }

  getTenderCategory() {
    const token = this.utilService.getToken();
    this.crudService.getRequestImAuth(`api/tendercategory/allByTender/${this.tender.id}`, token).subscribe((res: any) => {
      // console.log(res);
      if (Array.isArray(res)) {
        this.tenderCategory = res;
      }
    }, err => console.log(err));
  }

  addTenderCategory() {
    this.loading = true;
    this.tenderCategoryForm.value.id = 0;
    this.tenderCategoryForm.value.tenderId = this.tender.id;
    let request = this.crudService.postRequest('api/tendercategory/add', this.tenderCategoryForm.value);

    if (!this.isAdd) {
      this.tenderCategoryForm.value.id = this.category.id;
      this.tenderCategoryForm.value.tenderId = this.category.tenderId;
      request = this.crudService.putRequest('api/tendercategory/edit', this.tenderCategoryForm.value);
    }
    request.subscribe((res: any) => {
    this.loading = false;
    // console.log(res);
    if (res.code === 0) {
        this.swalService.success(res.message);
        this.getTenderCategory();
      } else {
        this.swalService.error('An Error Occured');
      }
    }, err => {
      this.loading = false;
      console.log(err);
      this.swalService.error('An Error Occured');
    });
  }

  deleteCategory(category) {
    const token = this.utilService.getToken();
    this.crudService.deleteRequest(`api/tendercategory/delete/${category.id}`).subscribe((res: any) => {
      if (res.code === 0) {
        this.swalService.success(res.message);
        this.getTenderCategory();
      } else {
        this.swalService.error('An Error Occured');
      }
    }, err => {
      this.loading = false;
      console.log(err);
      this.swalService.error('An Error Occured');
    });
  }
}
