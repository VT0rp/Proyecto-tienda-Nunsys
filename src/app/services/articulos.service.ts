import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Articulo} from "../interfaces/Articulo";

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  constructor(private http: HttpClient) { }

  getAll():Observable<Articulo[]>{
    return this.http.get<Articulo[]>('http://localhost:3001/articulos');
  }

  getOne(id:string):Observable<Articulo[]>{
    return this.http.get<Articulo[]>('http://localhost:3001/articulos/' + id);
  }
}
