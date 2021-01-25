import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/Services/company.service';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent implements OnInit {
  project: any;

  constructor(
    private companyService: CompanyService,
  ) {
    this.project = this.companyService.getProject();
  }

  ngOnInit(): void {
  }

}
