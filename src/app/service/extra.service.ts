import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constant } from './constant';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExtraService {
  
  appUrl: any;
  constructor(private http: HttpClient) { 
    this.appUrl = Constant.getAppURL();
  }

  public getFeeRate(request: any) {
    return this.http.post<any>(this.appUrl+'external/server/GetFeeRate', request).pipe(map((res: any) => {
      return res;
    }));
  }

  public getCurrentSuite(request: any) {
    return this.http.post<any>(this.appUrl+'external/server/GetCurrentSuite', request).pipe(map((res: any) => {
      return res;
    }));
  }

  public getPhoneOnline(request: any) {
    return this.http.post<any>(this.appUrl+'external/server/GetPhoneOnline', request).pipe(map((res: any) => {
      return res;
    }));
  }

  public getReportCustomerFee(request: any) {
    return this.http.post<any>(this.appUrl+'external/server/GetReportCustomerFee', request).pipe(map((res: any) => {
      return res;
    }));
  }

  public getReportCustomerLocationFee(request: any) {
    return this.http.post<any>(this.appUrl+'external/server/GetReportCustomerLocationFee', request).pipe(map((res: any) => {
      return res;
    }));
  }

  public getReportPhoneFee(request: any) {
    return this.http.post<any>(this.appUrl+'external/server/GetReportPhoneFee', request).pipe(map((res: any) => {
      return res;
    }));
  }

  public getCdr(request: any) {
    return this.http.post<any>(this.appUrl+'external/server/GetCdr', request).pipe(map((res: any) => {
      return res;
    }));
  }

  public getPayHistory(request: any) {
    return this.http.post<any>(this.appUrl+'external/server/GetPayHistory', request).pipe(map((res: any) => {
      return res;
    }));
  }

  public pay(request: any) {
    return this.http.post<any>(this.appUrl+'external/server/Pay', request).pipe(map((res: any) => {
      return res;
    }));
  }

  public playAudio(request: any) {
    return this.http.post<any>(this.appUrl+'external/server/PlayAudio', request).pipe(map((res: any) => {
      return res;
    }));
  }

  public createSuiteOrder(request: any) {
    return this.http.post<any>(this.appUrl+'external/server/CreateSuiteOrder', request).pipe(map((res: any) => {
      return res;
    }));
  }

  public deleteSuiteOrder(request: any) {
    return this.http.post<any>(this.appUrl+'external/server/DeleteSuiteOrder', request).pipe(map((res: any) => {
      return res;
    }));
  }
}
