
import { Component, Inject, Input, OnInit } from '@angular/core';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-dialog-more-info',
  templateUrl: './dialog-more-info.component.html',
  styleUrls: ['./dialog-more-info.component.scss']
})
export class DialogMoreInfoComponent implements OnInit {


  constructor(){}

  ngOnInit(): void {
  }

}
