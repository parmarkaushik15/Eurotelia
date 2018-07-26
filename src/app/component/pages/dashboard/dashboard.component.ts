import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { chart } from 'highcharts';
import * as Highcharts from 'highcharts';
import { User } from '../../../model/user.model';
import { UserService } from '../../../service/user.service';
import { ExtraService } from '../../../service/extra.service';
import { InfoCdr } from '../../../model/infocdr.model';
declare var $:any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  @ViewChild('outgoingChart') outgoingChart: ElementRef;
  @ViewChild('incommingChart') incommingChart: ElementRef;
  outGoingChartOpt: Highcharts.ChartObject;
  incommingChartOpt: Highcharts.ChartObject;
  userInfo = new User();
  incommingCallsList: InfoCdr[];
  outgoingCallsList: InfoCdr[]; 
  constructor(private userService: UserService, private extraService: ExtraService) { }

  ngOnInit() {
      this.getCustomer();
      this.getCurrentSuite();
      this.getCdr();
  }

  ngAfterViewInit() {
    const options: Highcharts.Options = {
      chart: {
          type: 'pie',
          options3d: {
              enabled: true,
              alpha: 45
          }
      },
      title: {
          text: ''
      },
      subtitle: {
          text: ''
      },
      plotOptions: {
          pie: {
              innerSize: 100,
              depth: 45
          }
      },
      series: []
    };
  
    this.outGoingChartOpt = chart(this.outgoingChart.nativeElement, options);
    this.incommingChartOpt = chart(this.incommingChart.nativeElement, options);
    this.outGoingChartOpt.addSeries({
        name: 'Country',
        data: [
            ['India', 8],
            ['USA', 3],
            ['UK', 1],
            ['France', 6]
        ]
    })
    this.incommingChartOpt.addSeries({
      name: 'Country',
      data: [
          ['India', 8],
          ['USA', 3],
          ['UK', 10]
      ]
  })  
  }

  getCustomer() {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    console.log(currentUser);
    let request = {
      'e164s': [currentUser.account],
      'accounts': [currentUser.account]
    }
    this.userService.getCustomer(request).subscribe((res) => {
      if(res.retCode == 0){
        this.userInfo = res.infoCustomers[0];
        console.log(this.userInfo);
      }else{
        this.showNotification('danger', 'Server Error Please contact administrator', 'top','right', '');
      }
    });
  }

  getCurrentSuite() {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    console.log(currentUser);
    let request = {
      'ownerName': currentUser.account,
      'ownerType': 2
    }
    this.extraService.getCurrentSuite(request).subscribe((res) => {
        console.log(res);
      if(res.retCode == 0){
        
      }else{
        this.showNotification('danger', 'Server Error Please contact administrator', 'top','right', '');
      }
    });
  }

  getCdr() {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    console.log(currentUser);
    let request = {"accounts":[currentUser.account],"beginTime":"20180722","endTime":"20180723"}
    this.extraService.getCdr(request).subscribe((res) => {
        console.log(res);
      if(res.retCode == 0){
        
      }else{
        this.showNotification('danger', res.exception, 'top','right', '');
      }
    });
  }

  showNotification(type: any, message: any, from: any, align: any, icon: any) {
    $.notify({
      icon: icon,
      message: message
    },{
        type: type,
        timer: 3000,
        placement: {
            from: from,
            align: align
        }
    });
}
}
