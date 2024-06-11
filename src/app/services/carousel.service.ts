import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Carousel} from "../interfaces/Carousel";

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor(private http: HttpClient) { }

  getCarousel():Observable<Carousel[]>{
    return this.http.get<Carousel[]>('http://localhost:3001/carousel');
  }
}
