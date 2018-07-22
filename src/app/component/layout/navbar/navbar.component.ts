import { Component, OnInit, ViewChild, Renderer, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
var misc:any ={
  navbar_menu_visible: 0,
  active_collapse: true,
  disabled_collapse_init: 0,
}
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private listTitles: any[];
  private nativeElement: Node;
  private toggleButton;
  private sidebarVisible: boolean;

  @ViewChild("navbar-cmp") button;

  constructor(private renderer : Renderer, private router: Router, private element : ElementRef) {
      this.nativeElement = element.nativeElement;
      this.sidebarVisible = false;
  }

  ngOnInit(){
      var navbar : HTMLElement = this.element.nativeElement;
      this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
      if($('body').hasClass('sidebar-mini')){
          misc.sidebar_mini_active = true;
      }
      $('#minimizeSidebar').click(function(){
          var $btn = $(this);

          if(misc.sidebar_mini_active == true){
              $('body').removeClass('sidebar-mini');
              misc.sidebar_mini_active = false;

          }else{
              setTimeout(function(){
                  $('body').addClass('sidebar-mini');

                  misc.sidebar_mini_active = true;
              },300);
          }

          // we simulate the window Resize so the charts will get updated in realtime.
          var simulateWindowResize = setInterval(function(){
              window.dispatchEvent(new Event('resize'));
          },180);

          // we stop the simulation of Window Resize after the animations are completed
          setTimeout(function(){
              clearInterval(simulateWindowResize);
          },1000);
      });
  }

  isMobileMenu(){
      if($(window).width() < 991){
          return false;
      }
      return true;
  }

sidebarOpen(){
  var toggleButton = this.toggleButton;
  var body = document.getElementsByTagName('body')[0];
  setTimeout(function(){
      toggleButton.classList.add('toggled');
  },500);
  body.classList.add('nav-open');
  this.sidebarVisible = true;
}
sidebarClose(){
  var body = document.getElementsByTagName('body')[0];
  this.toggleButton.classList.remove('toggled');
  this.sidebarVisible = false;
  body.classList.remove('nav-open');
}
sidebarToggle(){
  if(this.sidebarVisible == false){
      this.sidebarOpen();
  } else {
      this.sidebarClose();
  }
}
    logoutUser() {
        localStorage.removeItem('currentUser');
        this.router.navigate(['login']);
    }

}
