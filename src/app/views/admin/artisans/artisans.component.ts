import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/Services/crud.service';
import { SwalMixinService } from 'src/app/Services/swal-mixin.service';

@Component({
  selector: 'app-artisans',
  templateUrl: './artisans.component.html',
  styleUrls: ['./artisans.component.scss']
})
export class ArtisansComponent implements OnInit {

  loading: boolean;
  users = [];

  constructor(
    private crudService: CrudService,
    private swalService: SwalMixinService,
  ) { }

  ngOnInit(): void {
    this.getAccounts();
  }

  getAccounts() {
    this.loading = true;
    this.crudService.getRequest('api/artisan/findAll').subscribe((res: any) => {
      console.log(res);
      this.users = res;
      this.loading = false;
    }, err => {
      console.log(err);
      this.loading = false;
      this.swalService.error('There was an error fetching all tender.');
    });
  }
}
