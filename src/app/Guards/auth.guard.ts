import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UtilService } from '../Services/util.service';
import { SwalMixinService } from '../Services/swal-mixin.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private utilService: UtilService,
    private swalService: SwalMixinService,

  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const token = this.utilService.getToken();

      if (token) {
      return true;
    }
    // navigate to login page
      this.router.navigate(['/login']);
    // you can save redirect url so after authing we can move them back to the page they requested
      this.swalService.error('Access denied, please login.');
      return false;
  }

}
