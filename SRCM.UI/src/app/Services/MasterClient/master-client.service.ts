import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterClientService {

  private baseUrl = 'https://localhost:7103/api/';
  private basepath = '/assest/UserProfileImage/'

  constructor(private http: HttpClient) {}

  Get(apiName: string, method: string): Observable<any> {
    return this.http.get<any>(this.baseUrl + apiName + '/' + method);
  }
  GetList(apiName: string, method: string): Observable<any> {
    return this.http.get<any>(this.baseUrl + apiName + '/' + method);
  }
  Post(data: any, apiName: string, method: string): Observable<any> {

    return  this.http.post<any>(this.baseUrl + apiName + '/' + method, data);
  }
  UploadImage(image:any,actionName:string){
 return  this.http.post<any>(this.baseUrl+'user/'+actionName,image);
  }
  GetImage(imgname){
    return this.http.get<any>(
      this.baseUrl +'commonApi/getFiles/'+imgname
    );
  }
}
