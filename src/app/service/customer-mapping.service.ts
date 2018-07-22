import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constant } from './constant';

@Injectable({
  providedIn: 'root'
})
export class CustomerMappingService {

  appUrl: any;
  constructor(private http: HttpClient) { 
    this.appUrl = Constant.getAppURL();
  }

  public createGatewayMapping(request: any) {
    return this.http.post<any>(this.appUrl+'external/server/CreateGatewayMapping', request).subscribe(user => {
        console.log(user);
        return user;
    });
  }

  public getGatewayMapping(request: any) {
    return this.http.post<any>(this.appUrl+'external/server/GetGatewayMapping', request).subscribe(user => {
        console.log(user);
        return user;
    });
  }

  public modifyGatewayMapping(request: any) {
    return this.http.post<any>(this.appUrl+'external/server/ModifyGatewayMapping', request).subscribe(user => {
        console.log(user);
        return user;
    });
  }
}
