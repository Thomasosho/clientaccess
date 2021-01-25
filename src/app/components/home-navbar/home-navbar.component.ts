import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-home-navbar',
  templateUrl: './home-navbar.component.html',
  styleUrls: ['./home-navbar.component.scss'],
})
export class HomeNavbarComponent implements OnInit {

  isScrolled = false;

  constructor() {}

  @HostListener('window: scroll')
  onWindowScroll() {
    const scrollPosition = window.pageYOffset;
    if (scrollPosition >= 100) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }
  ngOnInit(): void {}
}
