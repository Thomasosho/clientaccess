import { Component, OnInit, OnDestroy, TemplateRef } from '@angular/core';
import { CrudService } from 'src/app/Services/crud.service';
import { UtilService } from 'src/app/Services/util.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { CompanyService } from 'src/app/Services/company.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-doc-view',
  templateUrl: './doc-view.component.html',
  styleUrls: ['./doc-view.component.scss']
})
export class DocViewComponent implements OnInit, OnDestroy {
  modalRef: BsModalRef;
  viewType = {
    cac: 'api/cac/allByCompanyId',
    irr: 'api/irr/allIrrByCompanyId',
    itf: 'api/itf/allIrrByCompanyId',
    nsitf: 'api/nsitf/allIrrByCompanyId',
    pencomm: 'api/pension/allIrrByCompanyId',
    tax: 'api/taxclearance/allByCompanyId',
    audit: 'api/auditedaccount/allByCompanyId',
  };
  documents = [];
  docType = '';
  getUrl = '';
  navigationSubscription;
  loading = false;

  constructor(
    private crudService: CrudService,
    private utilService: UtilService,
    private route: ActivatedRoute,
    private modalService: BsModalService,
    private companyService: CompanyService,
    private router: Router,
  ) {
    // subscribe to the router events. Store the subscription so we can
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // tslint:disable-next-line: no-string-literal
      const type = this.route.snapshot.params['doc'];
      this.docType = type;
      const companyId = this.utilService.getCompany().id;
      this.getUrl = `${this.viewType[type]}/${companyId}`;
      this.documents = [];
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.getAllDocuments();
      }
    });
   }

  ngOnInit(): void {

  }

  getAllDocuments() {
    this.loading = true;
    this.crudService.getRequest(this.getUrl).subscribe((res: any) => {
      console.log(res);
      this.documents = res;
      this.loading = false;
    }, err => {
      console.log(err);
      this.loading = false;
    });
  }

  setDocument(document) {
    this.companyService.setDocument(document);
    if (this.docType === 'audit') {
      this.router.navigate([`/contractor/documents/audit/edit`]);
    } else {
      this.router.navigate([`/contractor/documents/edit/${this.docType}`]);
    }
  }

  openModal(template: TemplateRef<any>, document) {
    this.companyService.setDocument(document);
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

}
