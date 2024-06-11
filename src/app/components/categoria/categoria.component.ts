import {Component, OnInit} from '@angular/core';
import {ArticulosService} from "../../services/articulos.service";
import {Articulo} from "../../interfaces/Articulo";
import {faHeart} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit{

  articulos: Articulo[] = [];
  constructor(private articuloService: ArticulosService) {
  }

  ngOnInit() {
    this.loadArticulos();
  }

  loadArticulos(){
    this.articuloService.getAll().subscribe({
      next: value => {
        this.articulos = value;
      },
      complete: () => {
        console.log('Articulos cargados')
      }
    })
  }

  protected readonly location = location;
  protected readonly faHeart = faHeart;
}
