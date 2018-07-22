import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constant } from './constant';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerMappingService {

  appUrl: any;
  constructor(private http: HttpClient) { 
    this.appUrl = Constant.getAppURL();
  }

  public createGatewayMapping(request: any) {
    return this.http.post<any>(this.appUrl+'external/server/CreateGatewayMapping', request).pipe(map((res: any) => {
      return res;
    }));
  }

  public getGatewayMapping(request: any) {
    return this.http.post<any>(this.appUrl+'external/server/GetGatewayMapping', request).pipe(map((res: any) => {
      return res;
    }));
  }

  public modifyGatewayMapping(request: any) {
    return this.http.post<any>(this.appUrl+'external/server/ModifyGatewayMapping', request).pipe(map((res: any) => {
      return res;
    }));
  }
}
