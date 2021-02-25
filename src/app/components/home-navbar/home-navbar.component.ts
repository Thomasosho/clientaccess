import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  HostListener,
  Input,
} from '@angular/core';
import { userType } from '../../home/landing/landing.component';

@Component({
  selector: 'app-home-navbar',
  templateUrl: './home-navbar.component.html',
  styleUrls: ['./home-navbar.component.scss'],
})
export class HomeNavbarComponent implements OnInit {

  @Input() user: any;
  @Input() type: userType;
  userType = userType;

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
