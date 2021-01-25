import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-footer',
  templateUrl: './home-footer.component.html',
  styleUrls: ['./home-footer.component.scss']
})
export class HomeFooterComponent implements OnInit {
  currentYear: number;

  constructor() {
    const date = new Date();
    this.currentYear = date.getFullYear();
  }

  ngOnInit(): void {
  }

}
