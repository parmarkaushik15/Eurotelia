import { Component, OnInit, AfterViewInit, AfterViewChecked, AfterContentInit } from '@angular/core';

declare var $:any;
//Metadata
export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    ab: string;
    type?: string;
}

//Menu Items
export const ROUTES: RouteInfo[] = [
  {
    path: '/app/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fa fa-bars'
 },{
  path: '/app/user/profile',
  title: 'User Profile',
  type: 'link',
  icontype: 'fa fa-id-card-o'
},{
  path: '/app/call/forward',
  title: 'Call Forward',
  type: 'link',
  icontype: 'fa fa-cog'
},{
  path: '/app/call/records',
  title: 'Call Records',
  type: 'link',
  icontype: 'fa fa-pie-chart'
},{
  path: '/app/pay/history',
  title: 'Pay History',
  type: 'link',
  icontype: 'fa fa-credit-card'
},{
  path: '/app/voice/mail',
  title: 'Voice Mail',
  type: 'link',
  icontype: 'fa fa-phone'
},{
  path: '/app/call/rates',
  title: 'Call Rates',
  type: 'link',
  icontype: 'fa fa-money'
},{
  path: '/app/phonebook',
  title: 'Phone Book',
  type: 'link',
  icontype: 'fa fa-book'
}
];
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  isNotMobileMenu(){
      if($(window).width() > 991){
          return false;
      }
      return true;
  }

  ngOnInit() {
      var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
      this.menuItems = ROUTES.filter(menuItem => menuItem);

      isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;

      if (isWindows){
         // if we are on windows OS we activate the perfectScrollbar function
         $('.sidebar .sidebar-wrapper, .main-panel').perfectScrollbar();
         $('html').addClass('perfect-scrollbar-on');
     } else {
         $('html').addClass('perfect-scrollbar-off');
     }
  }
  ngAfterViewInit(){
      var $sidebarParent = $('.sidebar .nav > li.active .collapse li.active > a').parent().parent().parent();

      var collapseId = $sidebarParent.siblings('a').attr("href");

      $(collapseId).collapse("show");
  }
}
