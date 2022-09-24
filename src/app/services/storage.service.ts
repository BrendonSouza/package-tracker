import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StorageService {
  st: Storage
  constructor( ) {
    this.st = window.localStorage;
  }

  set(ket:string,value:string){
    this.st.setItem(ket,value);
  }
  get(key:string){
    return this.st.getItem(key);
  }
  remove(key:string){
    this.st.removeItem(key);
  }
  clear(){
    this.st.clear();
  }

}
