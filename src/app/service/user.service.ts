import { Injectable } from '@angular/core';
import { Constant } from './constant';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  appUrl: any;
  

  constructor(private http: HttpClient) { 
    this.appUrl = Constant.getAppURL();
  }

  public createCustomer(request: any) {
    return this.http.post<any>(this.appUrl+'external/server/CreateCustomer', request).pipe(map((res: any) => {
      return res;
    }));
  }

  public getCustomer(request: any) {
    return this.http.post<any>(this.appUrl+'external/server/GetCustomer', request).pipe(map((res: any) => {
      return res;
    }));
  }

  public createPhone(request: any) {
    return this.http.post<any>(this.appUrl+'external/server/CreatePhone', request).pipe(map((res: any) => {
      return res;
    }));
  }

  public modifyCustomer(request: any) {
    return this.http.post<any>(this.appUrl+'external/server/ModifyCustomer', request).pipe(map((res: any) => {
      return res;
    }));
  }

  public getPhone(request: any) {
    return this.http.post<any>(this.appUrl+'external/server/GetPhone', request).pipe(map((res: any) => {
      return res;
    }));
  }

  public modifyPhone(request: any) {
    return this.http.post<any>(this.appUrl+'external/server/ModifyPhone', request).pipe(map((res: any) => {
      return res;
    }));
  }

  public getCustomerPhoneBook(request: any) {
    return this.http.post<any>(this.appUrl+'external/server/GetCustomerPhoneBook', request).pipe(map((res: any) => {
      return res;
    }));
  }

  public createCustomerPhoneBook(request: any) {
    return this.http.post<any>(this.appUrl+'external/server/CreateCustomerPhoneBook', request).pipe(map((res: any) => {
      return res;
    }));
  }

  public deleteCustomerPhoneBook(request: any) {
    return this.http.post<any>(this.appUrl+'external/server/DeleteCustomerPhoneBook', request).pipe(map((res: any) => {
      return res;
    }));
  }

  public deleteCustomer(request: any) {
    return this.http.post<any>(this.appUrl+'external/server/DeleteCustomer', request).pipe(map((res: any) => {
      return res;
    }));
  }

  public deletePhone(request: any) {
    return this.http.post<any>(this.appUrl+'external/server/DeletePhone', request).pipe(map((res: any) => {
      return res;
    }));
  }

  public getConsumption(request: any) {
    return this.http.post<any>(this.appUrl+'external/server/GetConsumption', request).pipe(map((res: any) => {
      return res;
    }));
  }
}
