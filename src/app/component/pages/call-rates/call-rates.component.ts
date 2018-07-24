import { Component, OnInit } from '@angular/core';
import { ExtraService } from 'src/app/service/extra.service';
import { forEach } from '@angular/router/src/utils/collection';
import { Rates } from 'src/app/model/rates.model';

@Component({
  selector: 'app-call-rates',
  templateUrl: './call-rates.component.html',
  styleUrls: ['./call-rates.component.css']
})
export class CallRatesComponent implements OnInit {
  
  res=[];
  public response = {
    "retCode": 0,
    "infoFeeRates": [
      {
        "feePrefix": "0001",
        "areaCode": "91",
        "type": 4,
        "areaName": "INDIAOther",
        "infoFeeRateSections": [
          
        ],
        "fee": 3.9166666666666665E-5,
        "period": 1,
        "lockType": 0,
        "ivrFee": 0.0,
        "ivrPeriod": 6
      },
      {
        "feePrefix": "",
        "areaCode": "91",
        "type": 4,
        "areaName": "INDIAOther",
        "infoFeeRateSections": [
          
        ],
        "fee": 3.9166666666666665E-5,
        "period": 1,
        "lockType": 0,
        "ivrFee": 0.0,
        "ivrPeriod": 6
      },
      {
        "feePrefix": "",
        "areaCode": "91",
        "type": 4,
        "areaName": "INDIAOther",
        "infoFeeRateSections": [
          
        ],
        "fee": 3.9166666666666665E-5,
        "period": 1,
        "lockType": 0,
        "ivrFee": 0.0,
        "ivrPeriod": 6
      }
    ]
  }


  constructor(private extraService: ExtraService) { }

  ngOnInit() {
    this.GetFeeRate();
    console.log(this.response);
    this.response.infoFeeRates.forEach(element => {
      debugger;
      let rates = new Rates();
     rates.areaCode=element.areaCode;
     rates.areaName=element.areaName;
     rates.fee=element.fee;
      this.res.push(rates);
      
  });
  }
  GetFeeRate() {
    let request = {
      'feeRateGroup': ['jabbi']
    }
    this.extraService.getFeeRate(request).subscribe((res) => {
      console.log(res);
    });
  }
}
