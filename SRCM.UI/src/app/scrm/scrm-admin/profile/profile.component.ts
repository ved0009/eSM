import { Component } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { MasterClientService } from "../../../Services/MasterClient/master-client.service";
import { ToasterService } from "../../../Services/Toaster/toaster.service";
import { webToasterMessage, webToasterPosition } from "../../../Services/Toaster/ToastSettings";
import { NbSpinnerService } from "@nebular/theme";

@Component({
  selector: "ngx-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent {
  profileForm: FormGroup;
  profileDetails: any;

  constructor(
    private _fb: FormBuilder,
    private _api: MasterClientService,
    private _tost: ToasterService,
    private _loader:NbSpinnerService
  ) {}

  ngOnInit(): void {
    this.profileLoanForm();
    this.loadProfileDetails();
  }
  //Common/GetProfileDetails

  profileLoanForm() {
    this.profileForm = this._fb.group({
      username: new FormControl("", Validators.required),
      fname: new FormControl("", Validators.required),
      lname: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      phone: new FormControl("", Validators.required),
      dob: new FormControl("", Validators.required),
      gender: new FormControl("", Validators.required),
    });
  }

  loadProfileDetails() {
    this._loader.registerLoader;
    this._api.Get("Common", "GetProfileDetails").subscribe({
      next:res=>{
        if (res.success) {
          this.profileDetails = res.responseData;
          this.profileForm.setValue({
            username: this.profileDetails.userName,
            fname: this.profileDetails.fName,
            lname: this.profileDetails.lName,
            email: this.profileDetails.email,
            phone: this.profileDetails.phone,
            dob: this.profileDetails.dob,
            gender: this.profileDetails.gender,
          });
          this._loader.clear();
        } else {
          this._loader.clear();
          this._tost.showToast(webToasterPosition.toasterTopLeftPosition,'warning',webToasterMessage.NoRecordFound);
        }
      },
      error:err=>{
        this._loader.clear();
        this._tost.showToast(webToasterPosition.toasterTopLeftPosition,'warning',webToasterMessage.apiErrorHead);
      }
    });
  }
}
