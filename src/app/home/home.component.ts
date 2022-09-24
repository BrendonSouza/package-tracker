import { DadosRastreio } from './../models/dados-rastreio';
import { StorageService } from './../services/storage.service';
import { Rastreio } from './../models/rastreio';
import { ConsultaRastreioService } from './../services/consulta-rastreio.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  form: FormGroup
  resultado: any;
  dadosRastreio: DadosRastreio
  constructor(private fb: FormBuilder, private service: ConsultaRastreioService, private storage: StorageService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      codigo: ['']
    })
    if(this.storage.get('codigo')){
      console.log(this.storage.get('codigo'))
    }
  }

  consulta() {
    this.storage.set('codigo', this.form.get('codigo').value)
    this.service.rastreio(this.form.get('codigo').value).subscribe((res) => {
      this.dadosRastreio = res.objetos
    })
    console.log(this.dadosRastreio)
  }
}
