import { Injectable } from '@angular/core';
import { Constant } from './constant';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  appUrl: any;
  constructor(private http: HttpClient) { 
    this.appUrl = Constant.getAppURL();
  }

  public createCustomer(request: any) {
    return this.http.post<any>(this.appUrl+'external/server/CreateCustomer', request).subscribe(user => {
        console.log(user);
        return user;
    });
  }

  public getCustomer(request: any) {
    return this.http.post<any>(this.appUrl+'external/server/GetCustomer', request).subscribe(user => {
        console.log(user);
        return user;
    });
  }

  public createPhone(request: any) {
    return this.http.post<any>(this.appUrl+'external/server/CreatePhone', request).subscribe(user => {
        console.log(user);
        return user;
    });
  }

  public modifyCustomer(request: any) {
    return this.http.post<any>(this.appUrl+'external/server/ModifyCustomer', request).subscribe(user => {
        console.log(user);
        return user;
    });
  }

  public getPhone(request: any) {
    return this.http.post<any>(this.appUrl+'external/server/GetPhone', request).subscribe(user => {
        console.log(user);
        return user;
    });
  }

  public modifyPhone(request: any) {
    return this.http.post<any>(this.appUrl+'external/server/ModifyPhone', request).subscribe(user => {
        console.log(user);
        return user;
    });
  }

  public getCustomerPhoneBook(request: any) {
    return this.http.post<any>(this.appUrl+'external/server/GetCustomerPhoneBook', request).subscribe(user => {
        console.log(user);
        return user;
    });
  }

  public createCustomerPhoneBook(request: any) {
    return this.http.post<any>(this.appUrl+'external/server/CreateCustomerPhoneBook', request).subscribe(user => {
        console.log(user);
        return user;
    });
  }

  public deleteCustomerPhoneBook(request: any) {
    return this.http.post<any>(this.appUrl+'external/server/DeleteCustomerPhoneBook', request).subscribe(user => {
        console.log(user);
        return user;
    });
  }

  public deleteCustomer(request: any) {
    return this.http.post<any>(this.appUrl+'external/server/DeleteCustomer', request).subscribe(user => {
        console.log(user);
        return user;
    });
  }

  public deletePhone(request: any) {
    return this.http.post<any>(this.appUrl+'external/server/DeletePhone', request).subscribe(user => {
        console.log(user);
        return user;
    });
  }

  public getConsumption(request: any) {
    return this.http.post<any>(this.appUrl+'external/server/GetConsumption', request).subscribe(user => {
        console.log(user);
        return user;
    });
  }
}
