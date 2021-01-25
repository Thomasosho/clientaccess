import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from 'src/app/Services/crud.service';
import { UtilService } from 'src/app/Services/util.service';
import { CompanyService } from 'src/app/Services/company.service';
import { SwalMixinService } from 'src/app/Services/swal-mixin.service';

@Component({
  selector: 'app-tender-lot',
  templateUrl: './tender-lot.component.html',
  styleUrls: ['./tender-lot.component.scss'],
})
export class TenderLotComponent implements OnInit {
  loading = false;
  tenderLotForm: FormGroup;
  tender: any;
  tenderLot = [];
  tenderCategory = [];
  isAdd = true;
  lot = null;
  category;

  constructor(
    private crudService: CrudService,
    private utilService: UtilService,
    private companyService: CompanyService,
    private swalService: SwalMixinService,
    private form: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getTender();
    this.getTenderLot();
    this.getTenderCategory();

    this.tenderLotForm = this.form.group({
      description: ['', Validators.required],
      lotNumber: ['', Validators.required],
      category: ['', Validators.required],
    });
  }

  getTender() {
    this.tender = this.companyService.getTender();
  }

  getTenderCategory() {
    const token = this.utilService.getToken();
    this.crudService
      .getRequestImAuth(
        `api/tendercategory/allByTender/${this.tender.id}`,
        token
      )
      .subscribe(
        (res: any) => {
          // console.log(res);
          if (Array.isArray(res)) {
            this.tenderCategory = res;
          }
        },
        (err) => console.log(err)
      );
  }

  editLot(item) {
    console.log(item);
    const { category, description, lotNumber } = item;
    this.tenderLotForm.setValue({
      category,
      description,
      lotNumber,
    });
    this.isAdd = false;
    this.lot = item;
  }

  getTenderLot() {
    const token = this.utilService.getToken();
    this.crudService
      .getRequestImAuth(`api/tenderlot/allByTender/${this.tender.id}`, token)
      .subscribe(
        (res: any) => {
          // console.log(res);
          if (res.length !== 0) {
            this.tenderLot = res;
          }
        },
        (err) => console.log(err)
      );
  }

  addTenderLot() {
    this.loading = true;
    this.tenderLotForm.value.id = 0;
    this.tenderLotForm.value.tenderId = this.tender.id;
    this.tenderLotForm.value.category = this.category.categoryName;
    this.tenderLotForm.value.tenderCategoryId = this.category.id;

    let request = this.crudService.postRequest(
      'api/tenderlot/add',
      this.tenderLotForm.value
    );

    if (!this.isAdd) {
      this.tenderLotForm.value.id = this.lot.id;
      this.tenderLotForm.value.tenderId = this.lot.tenderId;
      request = this.crudService.putRequest(
        'api/tenderlot/edit',
        this.tenderLotForm.value
      );
    }
    request.subscribe(
      (res: any) => {
        this.loading = false;
        // console.log(res);
        if (res.code === 0) {
          this.swalService.success(res.message);
          this.getTenderLot();
        } else {
          this.swalService.error('An Error Occured');
        }
      },
      (err) => {
        this.loading = false;
        console.log(err);
        this.swalService.error('An Error Occured');
      }
    );
  }

  setCategory(categoryId) {
    const category = this.tenderCategory.filter(elem => elem.id === Number(categoryId));
    this.category = category[0];
  }
}
