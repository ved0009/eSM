import { Component } from '@angular/core';

@Component({
  selector: 'ngx-scrm-columns',
  styleUrls: ['./scrm-columns.component.scss'],
  template: `
    <nb-layout windowMode>
      <nb-layout-header fixed>
        <ngx-scrm-header></ngx-scrm-header>
      </nb-layout-header>

      <nb-sidebar class="menu-sidebar" tag="menu-sidebar" responsive>
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>

      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-footer fixed style="padding: 0%;">
       <ngx-scrm-footer></ngx-scrm-footer>
      </nb-layout-footer>
    </nb-layout>
  `
})
export class ScrmColumnsComponent {

}
