import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/Services/crud.service';
import { SwalMixinService } from 'src/app/Services/swal-mixin.service';

@Component({
  selector: 'app-mdas',
  templateUrl: './mdas.component.html',
  styleUrls: ['./mdas.component.scss']
})
export class MdasComponent implements OnInit {
  loading: boolean;
  mdas = [];

  constructor(
    private crudService: CrudService,
    private swalService: SwalMixinService,
  ) { }

  ngOnInit(): void {
    this.getAccounts();
  }

  getAccounts() {
    this.loading = true;
    this.crudService.getRequest('api/mda/findAll').subscribe((res: any) => {
      console.log(res);
      res.map(elem => {
        const {userResponsePojo, mdaPojo} = elem;
        const {name, acronym, category} = mdaPojo;
        const {email } = userResponsePojo;
        const tempUser = {
          name,
          email,
          category,
          acronym,
        };
        this.mdas.push(tempUser);
      });
      this.loading = false;
    }, err => {
      console.log(err);
      this.loading = false;
      this.swalService.error('There was an error fetching all tender.');
    });
  }
}
