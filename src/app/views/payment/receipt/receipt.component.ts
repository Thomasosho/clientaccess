import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/Services/util.service';
import { CompanyService } from 'src/app/Services/company.service';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss']
})
export class ReceiptComponent implements OnInit {
  receipt = this.companyService.getDocument();
  company: any = this.util.getCompany();
  user = this.util.getUserObj();
  today = new Date();

  constructor(
    private companyService: CompanyService,
    private util: UtilService,
  ) {
    console.log(this.company);
    console.log(this.user);
  }

  ngOnInit() {
  }
}
