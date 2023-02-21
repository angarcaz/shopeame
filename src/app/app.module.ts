import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RatingModule} from 'primeng/rating';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PagesModule } from './pages/pages.module';
import { ProductoServicioService } from './servicios/producto-servicio.service';


@NgModule({
  declarations: [
    AppComponent,
  
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule, 
    PagesModule,
    FormsModule,
    RatingModule
  ],

  providers: [ProductoServicioService],

  bootstrap: [AppComponent]
})

export class AppModule { }
