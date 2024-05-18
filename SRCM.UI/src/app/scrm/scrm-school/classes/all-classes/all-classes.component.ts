 import { AfterViewInit, Component, Input, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { MasterClientService } from "../../../../Services/MasterClient/master-client.service";
import { ToasterService } from "../../../../Services/Toaster/toaster.service";
import { webToasterPosition } from "../../../../Services/Toaster/ToastSettings";
import { NbThemeService } from "@nebular/theme";
import { delay } from "rxjs/operators";

@Component({
  selector: "ngx-all-classes",
  templateUrl: "./all-classes.component.html",
  styleUrls: ["./all-classes.component.scss"],
})
export class AllClassesComponent  implements   AfterViewInit, OnDestroy {

  private value = 0;

  @Input()
  set chartValue(value: number) {
    this.value = value;

    if (this.option.series) {
      this.option.series[0].data[0].value = value;
      this.option.series[0].data[1].value = 100 - value;
      this.option.series[1].data[0].value = value;
    }
  }

  option: any = {};
  themeSubscription: any;

  classLists: any;
  constructor(
    private router: Router,
    private _api: MasterClientService,
    private _toaster: ToasterService,
    private theme: NbThemeService
  ) {}
  classDetail = [
    { Profile: "../assets/images/jack.png", tClass: "1st", StudentCount: "3" },
    { Profile: "../assets/images/nick.png", tClass: "2nd", StudentCount: "4" },
    { Profile: "../assets/images/lee.png", tClass: "3rd", StudentCount: "6" },
    {
      Profile: "../assets/images/images.jpg",
      tClass: "4th",
      StudentCount: "3",
    },
  ];
  showSearch: boolean = false;
  ngOnInit(): void {
    this.getAllClass();
  }

  getAllClass() {
    this._api.GetList("Classes", "GetAllClassess").subscribe({
      next: (res) => {
        if (res.statusCode === 200 && res.success) {
          this.classLists = res.responseData;
          console.log('class',this.classLists);

        } else {
          this._toaster.showToast(webToasterPosition.toasterTopLeftPosition,'info','No record found');
        }
      },
      error: (err) => {
        this._toaster.showToast(webToasterPosition.toasterTopLeftPosition,'danger',err.message);
      },
    });
  }
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
   image: string = "../assets/images/jack.png";
  refresh() {
    alert("refresh works");
  }

  search() {
    alert("Search button Click !!");
  }
  add() {
    debugger;
    this.router.navigate(["/scrm/School/Class/newclass"]);
  }
  edit(item:any) {
    this.router.navigate(['/scrm/School/Class/editClass', item.id]);

  }

  delete() {
    alert("Delete button Click !!");
  }
  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().pipe(delay(1)).subscribe(config => {

      const solarTheme: any = config.variables.solar;

      this.option = Object.assign({}, {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        series: [
          {
            name: ' ',
            clockWise: true,
            hoverAnimation: false,
            type: 'pie',
            center: ['45%', '50%'],
            radius: solarTheme.radius,
            data: [
              {
                value: this.value,
                name: ' ',
                label: {
                  normal: {
                    position: 'center',
                    formatter: '{d}%',
                    textStyle: {
                      fontSize: '22',
                      fontFamily: config.variables.fontSecondary,
                      fontWeight: '600',
                      color: config.variables.fgHeading,
                    },
                  },
                },
                tooltip: {
                  show: false,
                },
                itemStyle: {
                  normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      {
                        offset: 0,
                        color: solarTheme.gradientLeft,
                      },
                      {
                        offset: 1,
                        color: solarTheme.gradientRight,
                      },
                    ]),
                    shadowColor: solarTheme.shadowColor,
                    shadowBlur: 0,
                    shadowOffsetX: 0,
                    shadowOffsetY: 3,
                  },
                },
                hoverAnimation: false,
              },
              {
                value: 100 - this.value,
                name: ' ',
                tooltip: {
                  show: false,
                },
                label: {
                  normal: {
                    position: 'inner',
                  },
                },
                itemStyle: {
                  normal: {
                    color: solarTheme.secondSeriesFill,
                  },
                },
              },
            ],
          },
          {
            name: ' ',
            clockWise: true,
            hoverAnimation: false,
            type: 'pie',
            center: ['45%', '50%'],
            radius: solarTheme.radius,
            data: [
              {
                value: this.value,
                name: ' ',
                label: {
                  normal: {
                    position: 'inner',
                    show: false,
                  },
                },
                tooltip: {
                  show: false,
                },
                itemStyle: {
                  normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      {
                        offset: 0,
                        color: solarTheme.gradientLeft,
                      },
                      {
                        offset: 1,
                        color: solarTheme.gradientRight,
                      },
                    ]),
                    shadowColor: solarTheme.shadowColor,
                    shadowBlur: 7,
                  },
                },
                hoverAnimation: false,
              },
              {
                value: 28,
                name: ' ',
                tooltip: {
                  show: false,
                },
                label: {
                  normal: {
                    position: 'inner',
                  },
                },
                itemStyle: {
                  normal: {
                    color: 'none',
                  },
                },
              },
            ],
          },
        ],
      });
    });
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
 
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
