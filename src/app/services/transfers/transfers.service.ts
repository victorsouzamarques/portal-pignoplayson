import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalService } from '../global/global.service';
import { UtilsService } from '../utils.service';

@Injectable({
  providedIn: 'root'
})
export class TransfersService {

  constructor(private http: HttpClient, private globalServ: GlobalService, private utilServ: UtilsService) { }

  uploadDocument(document: File, transferInfo){
    const formData:FormData = new FormData();
    formData.append('filetoupload', document);
    formData.append('value', transferInfo.value);
    formData.append('token', transferInfo.token);
    var headers = new Headers();
    console.log(formData);
    return this.http.post<any>(`${this.globalServ.urlApi}transfer`, formData);
  }

  listTransfer(filterInfo) {
    return this.http.get<any>(`${this.globalServ.urlApi}transfer/listTransfer`, filterInfo);
  }
}
