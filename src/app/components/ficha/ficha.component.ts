import {Component, OnInit} from '@angular/core';
import {ArticulosService} from "../../services/articulos.service";
import {ActivatedRoute} from "@angular/router";
import {Articulo} from "../../interfaces/Articulo";
import {faHeart, faMailBulk, faRuler, faStar} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faPinterest, faTwitter} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.css']
})
export class FichaComponent implements OnInit{
  articulo!: Articulo;
  constructor(private articuloService:ArticulosService, private ar: ActivatedRoute) {
  }

  ngOnInit() {
    this.loadArticulo();
  }

  private loadArticulo(){
    const id = this.ar.snapshot.params["id"];
    this.articuloService.getOne(id).subscribe({
      next: value => {
        this.articulo = value[0];
      },
      error: err => {
        console.error(err);
      },
      complete: () => {
        console.log("Articulo cargado")
      }
    })
  }

  protected readonly faStar = faStar;
  protected readonly faRuler = faRuler;
  protected readonly faMailBulk = faMailBulk;
  protected readonly faHeart = faHeart;
  protected readonly faTwitter = faTwitter;
  protected readonly faFacebook = faFacebook;
  protected readonly faPinterest = faPinterest;
}
