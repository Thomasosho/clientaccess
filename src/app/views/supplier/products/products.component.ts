import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/Services/crud.service';
import { UtilService } from 'src/app/Services/util.service';
import { CompanyService } from 'src/app/Services/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products = [];
  loading = false;

  constructor(
    private crudService: CrudService,
    private utilService: UtilService,
    private companyService: CompanyService,
    private router: Router,
  ) {
   }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.loading = true;
    const supplierId = this.utilService.getUser();
    this.crudService.getRequest(`/api/supplierproduct/allBySupplierId/${supplierId}`).subscribe((res: any) => {
      console.log(res);
      this.products = res;
      this.loading = false;
    }, err => {
      console.log(err);
      this.loading = false;
    });
  }

  editProduct(product) {
    this.companyService.setDocument(product);
    this.router.navigate(['/supplier/edit-product']);
  }

}
