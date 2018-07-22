import { Injectable } from '@angular/core';
import { Constant } from './constant';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProvideRoutingService {

  appUrl: any;
  constructor(private http: HttpClient) { 
    this.appUrl = Constant.getAppURL();
  }

  public getGatewayRouting(request: any) {
    return this.http.post<any>(this.appUrl+'external/server/GetGatewayRouting', request).subscribe(user => {
        console.log(user);
        return user;
    });
  }
  
  public createGatewayRouting(request: any) {
    return this.http.post<any>(this.appUrl+'external/server/CreateGatewayRouting', request).subscribe(user => {
        console.log(user);
        return user;
    });
  }

  public modifyGatewayRouting(request: any) {
    return this.http.post<any>(this.appUrl+'external/server/ModifyGatewayRouting', request).subscribe(user => {
        console.log(user);
        return user;
    });
  }
}
