import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { TransfersService } from 'src/app/services/transfers/transfers.service';
import {MatDialog} from '@angular/material';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/services/utils.service';
@Component({
  selector: 'app-list-transfers',
  templateUrl: './list-transfers.component.html',
  styleUrls: ['./list-transfers.component.scss']
})
export class ListTransfersComponent implements OnInit {
  testebool = false;
  recalculationForm: FormGroup;
  cnpjs;
  listaPontosExpirados;
  submitted = false;
  page = 0;
  totalPages = 0;
  arrayPages = [];
  lastPage: number;
  checks = [];
  valueRange : number;
  optionChangeRange : string;
  recalcParams;
  recalcIds = [];
  searchOn = false;
  reportRecalc = false;
  newData;
  dataOld: Date;
  checksTrue = [];
  public loading = false;
  teste = [{id: '', razaoSocial: '', cnpj: '', check : '', data: null, newData: '', qtdePontos: ''}];
  exist = true;

  //variaveis validação de paginador
  antShow = false;
  proxShow = false;
  
  constructor(
      private formBuilder: FormBuilder,
      private transfersServ: TransfersService,
      public dialog: MatDialog,
      private router: Router,
      private utilsServ: UtilsService
      ) { }

  ngOnInit() {    
    this.recalculationForm = this.formBuilder.group({
      cpfCnpj: [''],
      tipoParametro: [''],
      rangeDataExpiracao: ['']
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.recalculationForm.controls; }

  search(pagination) : void {

    this.teste = [{id: '', razaoSocial: '', cnpj: '', check : '', data: '', newData: '', qtdePontos: ''}];
    
    if(pagination == false){
      this.page = this.page - 1;
    } else if(pagination == true) {
      this.page = this.page + 1;
    }

    
    console.log(this.antShow);
    this.submitted = true;

    console.log(this.page);

    // stop here if form is invalid
    if (this.recalculationForm.invalid) {
      return;
    }

    this.loading = true;

    this.transfersServ.listTransfer(this.recalculationForm.value).subscribe(
      data => {
        this.loading = false;
        
        this.searchOn = true;
        this.cnpjs = data;
        this.listaPontosExpirados = this.cnpjs.listaPontosExpirados;
        this.totalPages = this.cnpjs.totalPages;
        
        var ok = false;
        
        this.pagination();
        this.checkPagination();
        this.searchCheckbox();
      }, err => {
        this.loading = false;
      }
    )
  }

  checkPagination(){
    //verifica se deve aparecer o botão de proximo
    console.log("entrou");
    if(this.page == (this.lastPage - 1)){
      this.proxShow = false;
    } else if(this.page < this.lastPage){
      this.proxShow = true;
    }

    //verifica se deve aparecer o botão de anterior
    if(this.page <= 0){
      this.antShow = false;
    } else if(this.page > 0){
      this.antShow = true;
    }
  }

  pagination() : void{
    this.arrayPages = [];
    for (let index = 0; index < this.totalPages; index++) {
      this.arrayPages.push(index + 1);      
      this.lastPage = index + 1;
    }
  }

  searchCheckbox() : void{
    this.checks = [];
    this.teste = [{id: '', razaoSocial: '', cnpj: '', check : '', data: '', newData: '', qtdePontos: ''}];
    this.listaPontosExpirados.forEach(data => {
      if(data.id == localStorage.getItem(`${data.id}`)){

        this.checks.push({id: `${data.id}`, name: `${data.id}`, cnpj: data.cpfCnpj, check : 'true', data: data.dataExpiracaoPonto, newData: ''});
        this.teste.push({id: `${data.id}`, razaoSocial: `${data.id}`, cnpj: data.cpfCnpj, check : 'true', data: data.dataExpiracaoPonto, newData: '', qtdePontos: data.qtdePontos});
      } else {

        this.checks.push({id: `${data.id}`, name: `${data.id}`, check : 'false', data: data.dataExpiracaoPonto, newData: ''});

      }
    });
  }


 
  // generateArchive(){

  //   this.loading = true;

  //   this.pointsServ.generateArchive(this.page, this.recalculationForm.value).subscribe( data => {
  //     this.loading = false;

  //     const blob = new Blob([data], {type: 'text/csv'});
  //     const url = window.URL.createObjectURL(blob);
      
  //     if(navigator.msSaveOrOpenBlob) {
  //       navigator.msSaveBlob(blob, 'pontosAExpirar.csv');
  //     } else {
  //         let a = document.createElement('a');
  //         a.href = url;
  //         a.download = 'pontosAExpirar.csv';
  //         document.body.appendChild(a);
  //         a.click();        
  //         document.body.removeChild(a);
  //     }
  //     window.URL.revokeObjectURL(url);
  //   }, err => {
  //     this.loading = false;
  //   })

  // }

  goBack(){
    this.teste = [{id: '', razaoSocial: '', cnpj: '', check : '', data: '', newData: '', qtdePontos: ''}];
    this.reportRecalc = false;
  }
}
