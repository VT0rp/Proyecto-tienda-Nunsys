import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Banner} from "../interfaces/Banner";

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor(private http:HttpClient) { }

  getBanner():Observable<Banner[]>{
    return this.http.get<Banner[]>('http://localhost:3001/banners');
  }
}
