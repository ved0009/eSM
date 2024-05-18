import { Component } from '@angular/core';

@Component({
  selector: 'ngx-school-lists',
  templateUrl: './school-lists.component.html',
  styleUrls: ['./school-lists.component.scss']
})
export class SchoolListsComponent {
  isaddschool:Boolean = false;


  activeAddSchool(){
    this.isaddschool = true;
  }
}
