import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TiendaComponent} from "./components/tienda/tienda.component";
import {NosotrosComponent} from "./components/nosotros/nosotros.component";
import {FichaComponent} from "./components/ficha/ficha.component";
import {CategoriaComponent} from "./components/categoria/categoria.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tienda',
    pathMatch: 'full'
  },
  {
    path: 'tienda',
    component: TiendaComponent
  },
  {
    path: 'nosotros',
    component: NosotrosComponent
  },
  {
    path:'ficha/:id',
    component: FichaComponent
  },
  {
    path:'categoria',
    component: CategoriaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
