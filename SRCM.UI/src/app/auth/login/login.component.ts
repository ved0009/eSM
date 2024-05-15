import { Component } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { NbToastrService } from "@nebular/theme";
import { min } from "rxjs-compat/operator/min";
import { MasterClientService } from "../../Services/MasterClient/master-client.service";
import { webToasterPosition } from "../../Services/Toaster/ToastSettings";
import { ToasterService } from "../../Services/Toaster/toaster.service";
import { TokenServiceService } from "../../Services/TokenService/token-service.service";

@Component({
  selector: "ngx-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  loginform: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _api: MasterClientService,
    private _toast: ToasterService,
    private _token : TokenServiceService
  ) {}

  ngOnInit(): void {
    this.loginform = this._fb.group({
      username: new FormControl("", [
        Validators.required,
        Validators.min(6),
        Validators.max(10)
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.min(6),
        Validators.max(10)
      ]),
    });
  }

  login() {
    console.log(this.loginform.value);
    debugger;
    const data = {
      userName: this.loginform.controls["username"].value,
      password: this.loginform.controls["password"].value,
    };
    this._api.Post(data, "Auth", "Login").subscribe({
      next: (res) => {
        if (res.success == true) {
          var username =
            res.responseData.fullName;
          this._toast.showToast(
            webToasterPosition,
            "success",
            res.message + " " + username
          );
          this._token.SaveUserAndToken(res.token, res.responseData, true);
          this._token.makeLogin();
        } else {
          this._toast.showToast(webToasterPosition, "warning", res.message);
        }
      },
      error: (err) => {
        debugger;
        console.log("login error", err);
      },
    })

  }
}
