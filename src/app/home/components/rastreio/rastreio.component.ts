import { DialogMoreInfoComponent } from './../dialog-more-info/dialog-more-info.component';
import { RetornoDto } from './../../../models/retorno-dto';
import { DadosRastreio } from './../../../models/dados-rastreio';
import { Component, Inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-rastreio',
  templateUrl: './rastreio.component.html',
  styleUrls: ['./rastreio.component.scss']
})
export class RastreioComponent implements OnInit, OnChanges {
  
  @Input() rastreio: DadosRastreio
  date = new Date()
  map = new Map()
  ultimoEvento: string
  retornoDTO: RetornoDto = {
    codObjeto: '',
    etapas: [],

  }
  entregue: boolean = false
  emRotaDeEntrega: boolean = false

  
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.agrupaPorUnidade(this.rastreio)
  }

  agrupaPorUnidade(dados: DadosRastreio) {

    dados.objetos[0].eventos.forEach(dado => {
      if (this.map.has(dado.unidade.endereco.cidade)) {
        this.map.get(dado.unidade.endereco.cidade).push(dado)
      } else {
        if (dado.unidade.endereco.cidade == undefined) {
          dado.unidade.endereco.cidade = dado.unidade.nome
        }
        this.map.set(dado.unidade.endereco.cidade, [dado])
      }
    })
    this.map.forEach((value, key) => {
      this.retornoDTO.codObjeto = dados.objetos[0].codObjeto
      this.retornoDTO.etapas.push({ cidade: key, eventos: value })
    })
    this.ultimoEvento = this.retornoDTO.etapas.at(-1).eventos.at(-1).descricao
    if (this.ultimoEvento == 'Objeto entregue ao destinatário') {
      this.entregue = true
    }
    if (this.ultimoEvento == 'Objeto saiu para entrega ao destinatário') {
      this.emRotaDeEntrega = true
    }

    
  }
  openDialog() {
    this.dialog.open(DialogMoreInfoComponent)}

}
