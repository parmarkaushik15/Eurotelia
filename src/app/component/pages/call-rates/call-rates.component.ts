import { Component, OnInit } from '@angular/core';
import { ExtraService } from 'src/app/service/extra.service';
declare var $:any;
@Component({
  selector: 'app-call-rates',
  templateUrl: './call-rates.component.html',
  styleUrls: ['./call-rates.component.css']
})
export class CallRatesComponent implements OnInit {
  
  callrates=[];
 
  constructor(private extraService: ExtraService) { }

  ngOnInit() {
    this.getFeeRate();
  }
  getFeeRate() {
    let request = {"feeRateGroup":"jabbi","areaCodes":["91"]}
    this.extraService.getFeeRate(request).subscribe((res) => {
      console.log(res);
      if(res.retCode == 0){
      this.callrates = res.infoFeeRates
      }else{
        this.showNotification('danger', 'Server Error Please contact administrator', 'top','right', '');
      }
      console.log(this.callrates);
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
