import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { chart } from 'highcharts';
import * as Highcharts from 'highcharts';

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

  constructor() { }

  ngOnInit() {
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


}
