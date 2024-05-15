import { Injectable } from '@angular/core';
import { LocalStorageService } from '../LocalStorage/local-storage.service';
import { Router } from '@angular/router';
import { ToasterService } from '../Toaster/toaster.service';
import { webToasterMessage, webToasterPosition } from '../Toaster/ToastSettings';

@Injectable({
  providedIn: 'root'
})
export class TokenServiceService {
  token?: string;
  user: any[] = [];
  Amount: any[] = [];
  AmountDetails = "AmountDetail";
  UserDetails = "UserDetails";
  billDetails = "billDetails";
  isAuthenticated?: Boolean;
  isLogin = "isLogin";
  JwtToken = "jwtToken";

  // user:User;
  // user$ = (new BehaviorSubject<User>(this.ls.getItem('TestByMe')));
  constructor(
    private ls: LocalStorageService,
    private router: Router,
    private toaster: ToasterService // private toaster: ToasterService
  ) {}

  public makeLogin() {
    if (this.isLoggedIn()) {
      debugger
      const roleId = this.getUser().roleId;
      if (roleId == 1) {
        this.router.navigateByUrl("scrm/admin/dashboard");
      } else if (roleId == 13) {
        this.router.navigateByUrl("pages");
      }else if (roleId == 200) {
        this.router.navigateByUrl('ereport/admin/');
      }
    } else {
      // this.toaster.showToast(webToasterPosition.toasterTopLeftPosition, 'default', 'Your browser out of memory');
      alert("device out of service");
    }
  }
  isLoggedIn(): Boolean {
    return !!this.GetJwtToken();
  }

  GetJwtToken() {
    return this.ls.getItem(this.JwtToken);
  }
  getUser() {
    const data = this.ls.getItem(this.UserDetails);
    return data;
  }
  updateUserDetails(userdata) {
    this.ls.setItem(this.UserDetails, userdata);
    return "success";
  }
  getAmount() {
    const data = this.ls.getItem(this.AmountDetails);
    return data;
  }
  getBill() {
    const data = this.ls.getItem(this.billDetails);
    return data;
  }

  setMode() {
    let mode = "default";
    let time = new Date();

    let hr = time.getHours();
    if (hr > 19 && hr > 10) {
      mode = "dark";
    } else {
      mode = mode;
    }
    this.ls.setItem("mode", mode);
  }
  getMode() {
    return this.ls.getItem("mode");
  }

  SaveUserAndToken(token: string, user: any, isAuthenticated: any) {
    this.isAuthenticated = isAuthenticated;
    this.token = token;
    this.user = user;
    //  this.user$.next(user);
    this.ls.setItem(this.JwtToken, token);
    this.ls.setItem(this.UserDetails, user);
    this.ls.setItem(this.isLogin, isAuthenticated);
  }

  public signout() {
    this.ls.clear();
    this.router.navigateByUrl("/auth/login");
    this.toaster.showToast(
      webToasterPosition.toasterTopRightPosition,
      "danger",
      webToasterMessage.logoutSuccess
    );
  }


}
