import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-recalculation-modal',
  templateUrl: './recalculation-modal.component.html',
  styleUrls: ['./recalculation-modal.component.scss']
})
export class RecalculationModalComponent implements OnInit {

  recalculationForm: FormGroup;
  constructor(public dialogRef: MatDialogRef<RecalculationModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder) { 
    }

  ngOnInit() {
    this.recalculationForm = this.formBuilder.group({
      optionChangeRange: [''],
      valueRange: ['']
    });
  }

}
