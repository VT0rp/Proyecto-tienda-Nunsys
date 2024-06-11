import {Component, OnInit} from '@angular/core';
import {CarouselService} from "../../services/carousel.service";
import {Carousel} from "../../interfaces/Carousel";
import {Banner} from "../../interfaces/Banner";
import {BannerService} from "../../services/banner.service";
import {CategoriaService} from "../../services/categoria.service";
import {Categoria} from "../../interfaces/Categoria";

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit{
  carousel: Carousel[] = [];
  banners: Banner[] = [];
  categorias: Categoria[] = [];
  constructor(private carouselService:CarouselService, private bannerService:BannerService, private categoriaService: CategoriaService) {

  }

  ngOnInit() {
    this.loadCarousel();
    this.loadBanner();
    this.loadCategorias();
  }

  private loadCarousel(){
    this.carouselService.getCarousel().subscribe({
      next: value => {
        this.carousel = value;
      },
      complete: () => {
        console.log('Carousel cargado');
      }
    })
  }

  private loadBanner(){
    this.bannerService.getBanner().subscribe({
      next: value => {
        this.banners = value;
      },
      complete: () => {
        console.log('Banners cargados');
      }
    })
  }

  private loadCategorias(){
    this.categoriaService.getAllCategories().subscribe({
      next: value => {
        this.categorias = value;
      },
      complete: () => {
        console.log('Categorias cargadas');
      }
    })
  }
}
