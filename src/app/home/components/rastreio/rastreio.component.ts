import { DadosRastreio } from './../../../models/dados-rastreio';
import { Rastreio } from './../../../models/rastreio';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-rastreio',
  templateUrl: './rastreio.component.html',
  styleUrls: ['./rastreio.component.scss']
})
export class RastreioComponent implements OnInit,OnChanges {

  @Input() rastreio: DadosRastreio
  constructor() { }

  ngOnInit(): void {
    console.log(this.rastreio)
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }
  

}
