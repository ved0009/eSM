import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGardGuard implements   CanActivate,CanLoad    {
  constructor(
    private router: Router//,
    // private authenticationService: AuthenticationService
) { }
  canLoad(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
    debugger
    const token = localStorage.getItem('jwtToken') ;
        if (token !== "" && token != undefined && token != null) {
            // check if route is restricted by role
            let isNotAutherize=false;
            if (isNotAutherize) {
                // role not authorised so redirect to home page
                this.router.navigate(['/']);
                return false;
            }

            // authorised so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: this.router.url } });
        return false;
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const token = localStorage.getItem('jwtToken') ;
        if (token !== "" && token != undefined && token != null) {
            // check if route is restricted by role
            let isNotAutherize=false;
            if (isNotAutherize) {
                // role not authorised so redirect to home page
                this.router.navigate(['/']);
                return false;
            }

            // authorised so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: this.router.url } });
        return false;
  }
}
