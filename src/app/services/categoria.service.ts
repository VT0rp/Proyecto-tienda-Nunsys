import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Categoria} from "../interfaces/Categoria";

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  getAllCategories():Observable<Categoria[]>{
    return this.http.get<Categoria[]>('http://localhost:3001/categorias');
  }
}
