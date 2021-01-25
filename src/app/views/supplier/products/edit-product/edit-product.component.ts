import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from 'src/app/Services/crud.service';
import { UtilService } from 'src/app/Services/util.service';
import { SwalMixinService } from 'src/app/Services/swal-mixin.service';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/Services/company.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  productForm: FormGroup;
  loading = false;
  category = '';
  uploadLoading = false;
  product = this.companyService.getDocument();

  constructor(
    private crudService: CrudService,
    private utilService: UtilService,
    private swalService: SwalMixinService,
    private companyService: CompanyService,
    private form: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.productForm = this.form.group({
      productName: [this.product.productName, Validators.required],
      price: [this.product.price, Validators.required],
      category: [this.product.category, Validators.required],
      imageUrl: [this.product.imageUrl, Validators.required],
    });
  }

  getUploadUrl(file) {
    const fileUri = file.target.files[0];
    const formData = new FormData();
    formData.append('file', fileUri, fileUri.name);
    this.uploadLoading = true;

    this.crudService.postRequestFile('uploadMe', formData).subscribe((res: any) => {
      // console.log(res);
      if (res.code === 0) {
        this.productForm.value.imageUrl = res.message;
        this.swalService.success('File path saved.');
      } else {
        this.swalService.error('An error occured');
      }
      this.uploadLoading = false;
    }, err => {
      console.log(err);
      this.uploadLoading = false;
      this.swalService.error('Could not get file path.');
    });
  }

  updateProduct() {
    this.productForm.value.id = this.product.id;
    this.loading = true;
    this.productForm.value.supplierId = Number(this.utilService.getUser());
    this.crudService.putRequest('api/supplierproduct/edit', this.productForm.value).subscribe((res: any) => {
      console.log(res);
      if (res.code === 0) {
        this.swalService.success(res.message);
      } else {
        this.swalService.error('An Error Occured');
      }
      this.loading = false;
      this.router.navigate(['/supplier/products']);
    }, err => {
      console.log(err);
      this.swalService.error('An Error Occured');
      this.loading = false;
    });
  }

}
