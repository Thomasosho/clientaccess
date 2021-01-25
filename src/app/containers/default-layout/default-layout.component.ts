import { Component, OnDestroy, OnInit } from '@angular/core';
import { navItems } from '../../_nav';
import { UtilService } from 'src/app/Services/util.service';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/Services/crud.service';
import { TenderHistoryComponent } from 'src/app/views/procurement/tender-history/tender-history.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent implements OnInit{
  roles = [];
  role: string;
  public sidebarMinimized = false;
  public navItems = navItems;
  currentYear: number;
  profileImg: string;
  username = this.utilService.getEmail();
  styleTheme: string;
  notificationCount = 0;
  isActive = false;

  constructor(
    private utilService: UtilService,
    private crudService: CrudService,
    private router: Router,
    ) {
    const date = new Date();
    this.currentYear = date.getFullYear();
    this.roles = this.utilService.getRoles();
    this.role = this.roles[0].toLowerCase();
    this.navItems = navItems.filter(
      (elem) => elem.role === this.role
    );
    this.styleSwitcher();
  }

  ngOnInit() {
    if (this.role === 'contractor') {
      const company = this.utilService.getCompany();
      this.profileImg = company.logoUrl;
      this.username = company.companyName;
    } else {
      this.utilService.getProfile().subscribe((data: any) => {
        // console.log(data);
        this.profileImg = data.logoUrl;
      }, err => console.log(err));
    }

    this.getNotification();
    const userId = this.utilService.getUser();
    this.getUserSubscriptions(userId);
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  showLeftNav(currentNav) {
    return this.navItems.some((e) => e.name === currentNav);
  }

  logout() {
    this.utilService.clearStorage();
    this.router.navigate(['/']);
  }
  styleSwitcher() {
    this.styleTheme = `app-body__${this.role}`;
  }

  getNotification() {
    this.utilService.getNotification().subscribe((res: any) => {
      // console.log(res);
      const unread = res.filter(elem => elem.read === false);
      this.notificationCount = unread.length;
    }, err => {
      console.log(err);
    });
  }

  viewProfile() {
    if (this.role === 'contractor') {
      return this.router.navigate(['/contractor/company']);
    }
    return this.router.navigate([`/${this.role}/profile`]);
  }

  getUserSubscriptions(userId) {
    this.crudService.getRequest(`/api/usersubscription/findValidSubscribedUserByUserId/${userId}`).subscribe((res: any) => {
      const expired = new Date(res[0].endDate) < new Date();
      this.isActive = res.length > 0 && !expired;
    }, err => {
      console.log(err);
    });
  }

  // getProfile(url) {
  //   const token = this.utilService.getToken();
  //   this.crudService.getRequestImAuth(url, token).subscribe((res: any) => {
  //     console.log(res);
  //     this.profileImg = res.logoUrl;
  //   }, err => {
  //     console.log(err);
  //   });
  // }
}
