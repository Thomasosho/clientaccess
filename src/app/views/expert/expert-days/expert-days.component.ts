import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/Services/crud.service';
import { UtilService } from 'src/app/Services/util.service';
import { SwalMixinService } from 'src/app/Services/swal-mixin.service';

@Component({
  selector: 'app-expert-days',
  templateUrl: './expert-days.component.html',
  styleUrls: ['./expert-days.component.scss']
})
export class ExpertDaysComponent implements OnInit {
  loading = false;
  expertDays = {
    id: 0,
    expertId: 0,
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
    this.getExpertDays();
  }

  toggleSelectedDay(day) {
    this.expertDays[day] = !this.expertDays[day];
  }

  getExpertDays() {
    this.loading = true;
    const expertId = this.utilService.getUser();
    const token = this.utilService.getToken();
    this.crudService.getRequestImAuth(`api/expertdaysoftheweek/allByExpertId/${expertId}`, token).subscribe((res: any) => {
      console.log(res);
      if (res.length > 0) {
        this.expertDays = res[0];
      }
      this.loading = false;
    }, err => {
      console.log(err);
      this.loading = false;
      this.swalService.error('There was an error getting expert days.');
    });
  }

  addExpertDays() {
    this.loading = true;
    const expertId = this.utilService.getUser();
    const data = this.expertDays;
    data.expertId = Number(expertId);
    this.crudService.postRequest(`api/expertdaysoftheweek/add`, data).subscribe((res: any) => {
      console.log(res);
      this.expertDays = res;
      this.loading = false;
      this.getExpertDays();
      this.swalService.success('Added successfully.');
    }, err => {
      console.log(err);
      this.loading = false;
      this.swalService.error('There was an error adding expert days.');
    });
  }

  updateExpertDays() {
    this.loading = true;
    const expertId = this.utilService.getUser();
    const data = this.expertDays;
    data.expertId = Number(expertId);

    this.crudService.putRequest(`api/expertdaysoftheweek/edit`, data).subscribe((res: any) => {
      console.log(res);
      this.expertDays = res;
      this.loading = false;
      this.getExpertDays();
      this.swalService.success('Updated successfully.');
    }, err => {
      console.log(err);
      this.loading = false;
      this.swalService.error('There was an error updating expert days.');
    });
  }
}
