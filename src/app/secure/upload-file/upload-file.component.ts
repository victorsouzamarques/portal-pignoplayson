import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransfersService } from 'src/app/services/transfers/transfers.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmModalComponent } from 'src/app/modals/confirm-modal/confirm-modal.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';

const HttpUploadOptions = {
  headers: new HttpHeaders({ "Content-Type": "multipart/form-data" })
}
@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  tableForm: FormGroup;
  submitted = false;
  excellDocument;
  public loading = false;
  fileName: any;
  fileContent : any;
  fileExtension: any;
  fileExtensionError: boolean = true;

  constructor(
      private formBuilder: FormBuilder,
      public transfersServ: TransfersService,
      public dialog: MatDialog,
      public http: HttpClient,
      private snackBar: MatSnackBar
    ) { }

  ngOnInit() {
    this.tableForm = this.formBuilder.group({
      document: ['', [Validators.required]],
      value: [156.99, [Validators.required]],
      token: [localStorage.getItem('token')]
    });
  }

  setDocument(files:FileList){
    if(files.item(0) != null){
      this.excellDocument = files.item(0);
      this.fileName = this.excellDocument.name;
      var allowedExtensions = "xlsx";

      this.fileExtension = this.fileName.split('.').pop();
      if(this.fileExtension == allowedExtensions){
        this.fileExtensionError = true;
      } else {
        this.submitted = true;
        this.fileExtensionError = false;
    }
    } else {
      this.fileExtensionError = true;
    }
  }

  // convenience getter for easy access to form fields
  get f() { return this.tableForm.controls; }

  onSubmit(confirmed) {
    this.loading = true;
    // this.openDialog();

      this.submitted = true;

      // stop here if form is invalid
      if (this.tableForm.invalid || this.fileExtensionError == false) {
        this.loading = false;
        return;
      }
      let mensagem;
      if(confirmed == true){
      this.transfersServ.uploadDocument(this.excellDocument, this.tableForm.value).subscribe(
        data => {
          console.log('deu certo')
          this.loading = false;
          mensagem = "Execução Finalizada!";
          this.snackBar.open(mensagem, "close", {
            duration: 6000,
            panelClass: ['sucess-snackbar']
          });
        },
        err => {
          console.log('deu errado')
          this.loading = false;
          mensagem = "Ocorreu um erro";
          if(err.error.detail != null){
            mensagem = "Ocorreu um erro";
          }
          this.snackBar.open(mensagem, "close", {
            duration: 6000,
            panelClass: ['error-snackbar']
          });
        }
      )
      } else {
        this.loading = false;
      }
  }

  openDialog() {
    const dialogRef = this.dialog.open(ConfirmModalComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      this.onSubmit(result);
    });    
  }
}
