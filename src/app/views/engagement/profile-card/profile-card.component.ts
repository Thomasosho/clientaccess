import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent implements OnInit {
  @Input() inputObservable: Observable<any>;
  @Input() title: string;
  @Input() type: string;
  constructor() {}

  ngOnInit(): void {}
  getKeyByValue(object, value) {
    value  = Object.keys(object).find((key) => object[key] === value);
    return value.split(/(?=[A-Z])/).join(' ').toLowerCase();
  }
}
