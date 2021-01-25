import { Component, OnInit, OnDestroy } from '@angular/core';
import { CrudService } from 'src/app/Services/crud.service';
import { UtilService } from 'src/app/Services/util.service';
import { SwalMixinService } from 'src/app/Services/swal-mixin.service';
import { NavigationEnd, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-doc-view',
  templateUrl: './doc-view.component.html',
  styleUrls: ['./doc-view.component.scss'],
})
export class DocViewComponent implements OnInit, OnDestroy {
  viewType = {
    affidavit: 'api/affidavit/allByCompanyId',
    'bank-refferal': 'api/bankreferral/allByCompanyId',
  };
  documents = [];
  docType = '';
  getUrl = '';
  navigationSubscription;
  loading = false;

  constructor(
    private crudService: CrudService,
    private utilService: UtilService,
    private swalService: SwalMixinService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // subscribe to the router events. Store the subscription so we can
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // tslint:disable-next-line: no-string-literal
      const type = this.route.snapshot.params['doc'];
      this.docType = type;
      const companyId = this.utilService.getCompany().id;
      this.getUrl = `${this.viewType[type]}/${companyId}`;

      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.getAllDocuments();
      }
    });
  }

  ngOnInit(): void {}

  getAllDocuments() {
    this.loading = true;
    this.crudService.getRequest(this.getUrl).subscribe(
      (res: any) => {
        console.log(res);
        this.documents = res;
        this.loading = false;
      },
      (err) => {
        console.log(err);
        this.swalService.error('There was an error fetching the documents.');
        this.loading = false;
      }
    );
  }

  download(document) {
    const { imageUrl, dateUploaded } = document;
    const format = imageUrl.substr(
      imageUrl.lastIndexOf('.'),
      imageUrl.length - 1
    );
    const name = this.docType + ' - ' + dateUploaded + format;
    // const name = this.docType + ' - ' + dateUploaded;
    this.crudService
      .downloadFile(imageUrl)
      .subscribe((data) => saveAs(data, `${name}`));
      // .subscribe((data) => saveAs(data, `${name}.pdf`));
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }
}
