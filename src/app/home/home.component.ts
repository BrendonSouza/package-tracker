import { ErroDialogComponent } from './components/erro-dialog/erro-dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DadosRastreio } from './../models/dados-rastreio';
import { StorageService } from './../services/storage.service';
import { Rastreio, Objeto } from './../models/rastreio';
import { ConsultaRastreioService } from './../services/consulta-rastreio.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  form: FormGroup
  resultado: any;
  dadosRastreio: DadosRastreio = {
    objetos: []
  }
  constructor(
    private fb: FormBuilder,
    private service: ConsultaRastreioService,
    private storage: StorageService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    if (this.storage.get('codigo')) {
      this.form = this.fb.group({
        codigo: [this.storage.get('codigo')]
      })
      this.consulta(false)
    }
    else {
      this.form = this.fb.group({
        codigo: ['']
      })
    }
  }

  consulta(isClick?: boolean) {
    if (isClick) {
      this.dadosRastreio.objetos = []
    }
    this.service.rastreio(this.form.get('codigo').value).subscribe((res) => {
      res.objetos.forEach((objeto: Objeto) => {
        var objeto: Objeto
        if (objeto.eventos) {
          objeto.eventos = objeto.eventos.reverse()
          objeto.codObjeto = objeto.codObjeto
          this.dadosRastreio.objetos.push(objeto)
          this.storage.set('codigo', this.form.get('codigo').value)
        }
        else {
          this.dadosRastreio.objetos = []
          this.storage.clear()
          this.openDialog()
          this.form = this.fb.group({
            codigo: ['']
          })
        }
      })
       

    },
    (err:HttpErrorResponse) => { 
      this.openDialog(err.status)
      this.form = this.fb.group({
        codigo: ['']
      })
    })
  }


  openDialog(erro?:any) {
    this.dialog.open(ErroDialogComponent,{
      data: {
        statusErro: erro,
      },
    })
  }
}
