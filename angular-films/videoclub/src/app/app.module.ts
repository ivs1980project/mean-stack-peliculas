import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FilmStoreComponent } from './film-store/film-store.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmStoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [FilmStoreComponent]
})
export class AppModule { }
