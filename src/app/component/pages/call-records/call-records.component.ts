import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { ExtraService } from 'src/app/service/extra.service';
import { AfterViewInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { InfoCdr } from 'src/app/model/infocdr.model';
import { User } from 'src/app/model/user.model';
import { chart } from 'highcharts';
import * as Chartist from 'chartist';
declare var $:any;
@Component({
  selector: 'app-call-records',
  templateUrl: './call-records.component.html',
  styleUrls: ['./call-records.component.css']
})
export class CallRecordsComponent implements OnInit, AfterViewInit {
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


  
var data: any = {
  labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
  series: [
      [ 1, 5, 9, 2, 4, 3, 7],
      [7, 5, 1, 3, 9, 2, 4]
  ]
};

var data1: any = {
  labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
  series: [
      [ 10, 15,9, 1, 7, 2, 8],
      [7, 9, 15, 10, 2, 1, 20]
  ]
};

var options1: any = {
    seriesBarDistance: 10,
    axisX: {
        showGrid: false
    },
    height: "245px"
};

var responsiveOptions: any[] = [
    ['screen and (max-width: 640px)', {
        seriesBarDistance: 5,
        axisX: {
            labelInterpolationFnc: function (value) {
                return value[0];
            }
        }
    }]
];

var incommingChartActivity = new Chartist.Line('#incommingChartActivity', data, options1, responsiveOptions);
var outGoingChartActivity = new Chartist.Line('#outGoingChartActivity', data1, options1, responsiveOptions);


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
