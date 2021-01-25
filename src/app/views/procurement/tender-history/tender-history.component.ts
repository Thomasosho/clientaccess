import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/Services/crud.service';
import { SwalMixinService } from 'src/app/Services/swal-mixin.service';
import { UtilService } from 'src/app/Services/util.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-tender-history',
  templateUrl: './tender-history.component.html',
  styleUrls: ['./tender-history.component.scss'],
})
export class TenderHistoryComponent implements OnInit {
  loading = false;
  allTender = [];

  constructor(
    private crudService: CrudService,
    private swalService: SwalMixinService,
    private utilService: UtilService
  ) {}

  ngOnInit(): void {
    this.getTenderHistory();
  }

  getTenderHistory() {
    this.loading = true;
    const companyProfileId = this.utilService.getCompany().id;
    this.crudService
      .getRequest(
        `api/tenderapplication/allByCompanyProfileId/${companyProfileId}`
      )
      .subscribe(
        (res: any) => {
          console.log(res);
          this.allTender = res;
          this.loading = false;
        },
        (err) => {
          console.log(err);
          this.loading = false;
          this.swalService.error('There was an error fetching all tender.');
        }
      );
  }

  download(tender) {
    const { billOfQuantityUrl, mdaName, category } = tender;
    const name = mdaName + ' - ' + category;
    this.crudService
      .downloadFile(billOfQuantityUrl)
      .subscribe((data) => saveAs(data, `${name}.pdf`));
  }
}
