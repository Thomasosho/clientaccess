import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/Services/crud.service';
import { UtilService } from 'src/app/Services/util.service';
import { SwalMixinService } from 'src/app/Services/swal-mixin.service';

@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.scss']
})
export class EquipmentsComponent implements OnInit {
  equipments = [];
  loading = false;

  constructor(
    private crudService: CrudService,
    private utilService: UtilService,
    private swalService: SwalMixinService,
  ) { }

  ngOnInit(): void {
    this.getEquipments();
  }

  getEquipments() {
    this.loading = true;
    const { id: companyId } = this.utilService.getCompany();
    const token = this.utilService.getToken();
    this.crudService.getRequestImAuth(`api/equipment/allByCompanyId/${companyId}`, token).subscribe((res: any) => {
      console.log(res);
      this.equipments = res;
      this.loading = false;
    }, err => {
      console.log(err);
      this.swalService.error('An error occured while fetching equipments.');
      this.loading = false;
    });
  }

  deleteEquipment(id) {
    this.loading = true;
    this.crudService.deleteRequest(`api/equipment/delete/${id}`).subscribe((res: any) => {
      console.log(res);
      this.getEquipments();
      this.loading = false;
      this.swalService.success(res.message);
    }, err => {
      console.log(err);
      this.loading = false;
      this.swalService.error('Could not delete this equipment.');
    });
  }

}
