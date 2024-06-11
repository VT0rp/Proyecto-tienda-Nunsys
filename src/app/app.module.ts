import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { FichaComponent } from './components/ficha/ficha.component';
import {HttpClientModule} from "@angular/common/http";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TiendaComponent,
    NosotrosComponent,
    CategoriaComponent,
    FichaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
