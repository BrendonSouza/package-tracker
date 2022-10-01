import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-erro-dialog',
  templateUrl: './erro-dialog.component.html',
  styleUrls: ['./erro-dialog.component.scss']
})
export class ErroDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
