import { Component, OnInit, Input } from '@angular/core';
import { CompanyService } from 'src/app/Services/company.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  @Input() doctype = 'audit';
  document = this.companyService.getDocument();

  constructor(
    private companyService: CompanyService,
  ) { }

  ngOnInit(): void {
  }

}
