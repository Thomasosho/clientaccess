import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/Services/crud.service';
import { UtilService } from 'src/app/Services/util.service';
import { SwalMixinService } from 'src/app/Services/swal-mixin.service';

@Component({
  selector: 'app-days-available',
  templateUrl: './days-available.component.html',
  styleUrls: ['./days-available.component.scss']
})
export class DaysAvailableComponent implements OnInit {
  loading = false;
  artisanDays = {
    id: 0,
    artisanId: 0,
    monday: true,
    tuesday: true,
    wednesday: true,
    thursday: true,
    friday: false,
    saturday: false,
    sunday: false,
  };

  constructor(
    private crudService: CrudService,
    private utilService: UtilService,
    private swalService: SwalMixinService,
  ) { }

  ngOnInit(): void {
    this.getArtisanDays();
  }

  toggleSelectedDay(day) {
    this.artisanDays[day] = !this.artisanDays[day];
  }

  getArtisanDays() {
    this.loading = true;
    const artisanId = this.utilService.getUser();
    const token = this.utilService.getToken();
    this.crudService.getRequestImAuth(`api/artisandaysoftheweek/allByArtisanId/${artisanId}`, token).subscribe((res: any) => {
      console.log(res);
      if (res.length > 0) {
        this.artisanDays = res[0];
      }
      this.loading = false;
    }, err => {
      console.log(err);
      this.loading = false;
      this.swalService.error('There was an error getting artisan days.');
    });
  }

  addArtisanDays() {
    this.loading = true;
    const artisanId = this.utilService.getUser();
    const data = this.artisanDays;
    data.artisanId = Number(artisanId);

    console.log(data);

    this.crudService.postRequest(`api/artisandaysoftheweek/add`, data).subscribe((res: any) => {
      console.log(res);
      this.artisanDays = res;
      this.loading = false;
      this.getArtisanDays();
      this.swalService.success('Added successfully.');
    }, err => {
      console.log(err);
      this.loading = false;
      this.swalService.error('There was an error adding artisan days.');
    });
  }

  updateArtisanDays() {
    this.loading = true;
    const artisanId = this.utilService.getUser();
    const data = this.artisanDays;
    data.artisanId = Number(artisanId);

    this.crudService.putRequest(`api/artisandaysoftheweek/edit`, data).subscribe((res: any) => {
      console.log(res);
      this.artisanDays = res;
      this.loading = false;
      this.getArtisanDays();
      this.swalService.success('Updated successfully.');
    }, err => {
      console.log(err);
      this.loading = false;
      this.swalService.error('There was an error updating artisan days.');
    });
  }
}
