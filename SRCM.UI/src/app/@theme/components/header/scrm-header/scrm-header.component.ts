import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';

import { UserData } from '../../../../@core/data/users';
import { LayoutService } from '../../../../@core/utils';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { TokenServiceService } from '../../../../Services/TokenService/token-service.service';

@Component({
  selector: 'ngx-scrm-header',
  templateUrl: './scrm-header.component.html',
  styleUrls: ['./scrm-header.component.scss']
})
export class ScrmHeaderComponent {

  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: any;
  adminType:any;



  themes = [
    {
      value: 'default',
      name: 'Light',
    },
    {
      value: 'dark',
      name: 'Dark',
    },
    {
      value: 'cosmic',
      name: 'Cosmic',
    },
    {
      value: 'corporate',
      name: 'Corporate',
    },
  ];

  currentTheme = 'default';

  userMenu = [ { title: 'Profile' }, { title: 'Log out' } ];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private themeService: NbThemeService,
              private userService: UserData ,
              private layoutService: LayoutService,
              private token:TokenServiceService,

              private breakpointService: NbMediaBreakpointsService) {
  }

  ngOnInit() {

    this.toggleSidebar();
const userDetails = this.token.getUser();
    this.currentTheme = this.themeService.currentTheme;

    this.userService.getUsers()
      .pipe(takeUntil(this.destroy$))
      .subscribe((users: any) => this.user = users.nick);
      this.user.name = userDetails.fullName;
      this.adminType = userDetails.roleId == 1 ?'SCRM':userDetails.roleName;

    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$),
      )
      .subscribe((isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl);

    this.themeService.onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(this.destroy$),
      )
      .subscribe(themeName => this.currentTheme = themeName);

      this.menuService.onItemClick().subscribe({
        next:res=>{
          if (res.item.title ==='Log out') {
            this.token.signout();
          }
        },
        error:err=>{
          console.log('err',err);

        }
      })
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }


  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }
}
