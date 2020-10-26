import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { 
    var t = localStorage.getItem('token');
    var headers = new Headers();
    headers.append("Authorization", "Bearer " + t);
  }
  
  dateFormat(data){
    let dataTemporaria = data.split('-');
    var dataAtual = new Date(dataTemporaria[0], dataTemporaria[1] - 1, dataTemporaria[2]);
    var dataAux = new Date(dataTemporaria[0], dataTemporaria[1] - 1, dataTemporaria[2]);
    
    var dataFormatada = dataAux.getDate() + '/' + (dataAux.getMonth() + 1) + '/' + dataAux.getFullYear();
    return dataFormatada;
  }
}
