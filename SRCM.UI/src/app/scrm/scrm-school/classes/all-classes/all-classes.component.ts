import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-all-classes',
  templateUrl: './all-classes.component.html',
  styleUrls: ['./all-classes.component.scss']
})
export class AllClassesComponent {
  constructor(private router:Router){}
  classDetail = [
    { Profile: '../assets/images/jack.png', tClass: '1st', StudentCount:'3' },
    { Profile: '../assets/images/nick.png', tClass: '2nd', StudentCount:'4' },
    { Profile: '../assets/images/lee.png', tClass: '3rd', StudentCount:'6' },
    { Profile: '../assets/images/images.jpg', tClass: '4th', StudentCount:'3' }
    
  ];
  showSearch: boolean = false;
 

  toggleSearch() {
    this.showSearch = !this.showSearch;
  }
  image:string='../assets/images/jack.png'
  refresh(){
    alert("refresh works")
  }

  search() {
    alert("Search button Click !!")
  }
add(){
  debugger
  this.router.navigate(['/scrm/School/Class/newclass']); 
}
  edit() {
   alert("edit button Click !!")
  }

  delete() {
    alert("Delete button Click !!")
  }
}
