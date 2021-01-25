import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/Services/crud.service';
import { UtilService } from 'src/app/Services/util.service';
import { CompanyService } from 'src/app/Services/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  clients = [];
  loading = false;

  constructor(
    private crudService: CrudService,
    private utilService: UtilService,
    private companyService: CompanyService,
    private router: Router,
  ) {
   }

  ngOnInit(): void {
    this.getClients();
  }

  getClients() {
    this.loading = true;
    const artisanId = this.utilService.getUser();
    this.crudService.getRequest(`api/artisanpastclient/allByArtisanId/${artisanId}`).subscribe((res: any) => {
      console.log(res);
      this.clients = res;
      this.loading = false;
    }, err => {
      console.log(err);
      this.loading = false;
    });
  }

  setDocument(document) {
    this.companyService.setDocument(document);
    this.router.navigate([`/artisan/edit-client`]);
  }
}
