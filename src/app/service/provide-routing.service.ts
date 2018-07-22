import { Injectable } from '@angular/core';
import { Constant } from './constant';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProvideRoutingService {

  appUrl: any;
  constructor(private http: HttpClient) { 
    this.appUrl = Constant.getAppURL();
  }

  public getGatewayRouting(request: any) {
    return this.http.post<any>(this.appUrl+'external/server/GetGatewayRouting', request).pipe(map((res: any) => {
      return res;
    }));
  }
  
  public createGatewayRouting(request: any) {
    return this.http.post<any>(this.appUrl+'external/server/CreateGatewayRouting', request).pipe(map((res: any) => {
      return res;
    }));
  }

  public modifyGatewayRouting(request: any) {
    return this.http.post<any>(this.appUrl+'external/server/ModifyGatewayRouting', request).pipe(map((res: any) => {
      return res;
    }));
  }
}
