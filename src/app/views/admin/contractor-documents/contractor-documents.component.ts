import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/Services/crud.service';
import { UtilService } from 'src/app/Services/util.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contractor-documents',
  templateUrl: './contractor-documents.component.html',
  styleUrls: ['./contractor-documents.component.scss']
})
export class ContractorDocumentsComponent implements OnInit {
  loading: boolean;
  documents: any;

  constructor(
    private crudService: CrudService,
    private utilService: UtilService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    // tslint:disable-next-line: no-string-literal
    const companyId = this.route.snapshot.params['id'];
    this.getAllDocuments(companyId);
  }

  getAllDocuments(companyId) {
    this.loading = true;
    this.crudService.getRequest(`api/companyprofile/getByCompanyId/${companyId}`).subscribe((res: any) => {
      console.log(res);
      this.documents = res;
      this.loading = false;
    }, err => {
      console.log(err);
      this.loading = false;
    });
  }

}
