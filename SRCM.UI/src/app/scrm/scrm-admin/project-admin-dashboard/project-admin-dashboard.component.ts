import { Component } from "@angular/core";
import { MasterClientService } from "../../../Services/MasterClient/master-client.service";

@Component({
  selector: "ngx-project-admin-dashboard",
  templateUrl: "./project-admin-dashboard.component.html",
  styleUrls: ["./project-admin-dashboard.component.scss"],
})
export class ProjectAdminDashboardComponent {
  list: any;

  /**
   *
   */
  constructor(private _api: MasterClientService) {}

  ngOnInit(): void {
    this._api.GetList("TestDb", "TestDbConnection").subscribe({
      next: (res) => {
        this.list = res.responseData;
      },
      error: (err) => {
        console.log("error", err);
      },
    });
  }
}
