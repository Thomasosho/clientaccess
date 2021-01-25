import { Component, OnInit, Input } from '@angular/core';
import { userType } from '../landing/landing.component';

@Component({
  selector: 'app-table-card',
  templateUrl: './table-card.component.html',
  styleUrls: ['./table-card.component.scss'],
})
export class TableCardComponent implements OnInit {
  @Input() user: any;
  @Input() type: userType;
  userType = userType;
  constructor() {}

  ngOnInit(): void {}
}
