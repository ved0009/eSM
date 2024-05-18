import { Component } from '@angular/core';
import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'ngx-scrm',
  templateUrl: './scrm.component.html',
  styleUrls: ['./scrm.component.scss']
})
export class ScrmComponent {
  menu = MENU_ITEMS;

}
