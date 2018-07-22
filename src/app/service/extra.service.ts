import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constant } from './constant';

@Injectable({
  providedIn: 'root'
})
export class ExtraService {
  
  appUrl: any;
  constructor(private http: HttpClient) { 
    this.appUrl = Constant.getAppURL();
  }

  public getFeeRate(request: any) {
    return this.http.post<any>(this.appUrl+'external/server/GetFeeRate', request).subscribe(user => {
        console.log(user);
        return user;
    });
  }

  public getCurrentSuite(request: any) {
    return this.http.post<any>(this.appUrl+'external/server/GetCurrentSuite', request).subscribe(user => {
        console.log(user);
        return user;
    });
  }

  public getPhoneOnline(request: any) {
    return this.http.post<any>(this.appUrl+'external/server/GetPhoneOnline', request).subscribe(user => {
        console.log(user);
        return user;
    });
  }

  public getReportCustomerFee(request: any) {
    return this.http.post<any>(this.appUrl+'external/server/GetReportCustomerFee', request).subscribe(user => {
        console.log(user);
        return user;
    });
  }

  public getReportCustomerLocationFee(request: any) {
    return this.http.post<any>(this.appUrl+'external/server/GetReportCustomerLocationFee', request).subscribe(user => {
        console.log(user);
        return user;
    });
  }

  public getReportPhoneFee(request: any) {
    return this.http.post<any>(this.appUrl+'external/server/GetReportPhoneFee', request).subscribe(user => {
        console.log(user);
        return user;
    });
  }

  public getCdr(request: any) {
    return this.http.post<any>(this.appUrl+'external/server/GetCdr', request).subscribe(user => {
        console.log(user);
        return user;
    });
  }

  public getPayHistory(request: any) {
    return this.http.post<any>(this.appUrl+'external/server/GetPayHistory', request).subscribe(user => {
        console.log(user);
        return user;
    });
  }

  public pay(request: any) {
    return this.http.post<any>(this.appUrl+'external/server/Pay', request).subscribe(user => {
        console.log(user);
        return user;
    });
  }

  public playAudio(request: any) {
    return this.http.post<any>(this.appUrl+'external/server/PlayAudio', request).subscribe(user => {
        console.log(user);
        return user;
    });
  }

  public createSuiteOrder(request: any) {
    return this.http.post<any>(this.appUrl+'external/server/CreateSuiteOrder', request).subscribe(user => {
        console.log(user);
        return user;
    });
  }

  public deleteSuiteOrder(request: any) {
    return this.http.post<any>(this.appUrl+'external/server/DeleteSuiteOrder', request).subscribe(user => {
        console.log(user);
        return user;
    });
  }
}
