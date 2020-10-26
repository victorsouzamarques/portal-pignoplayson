import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from '../global/global.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private globalServ: GlobalService) { }

  login(user){
    return this.http.post<any>(`${this.globalServ.urlApi}auth/authenticate`, user, {observe: 'response'});
  }
}
