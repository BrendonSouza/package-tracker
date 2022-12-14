import { Rastreio, Objeto } from './../models/rastreio';
import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ConsultaRastreioService {

  constructor(private http: HttpClient ) {
  }

  rastreio(codigo:string):Observable<any>{
    return this.http.get(`http://localhost:4200/api/v1/sro-rastro/${codigo}`);
  }

}
