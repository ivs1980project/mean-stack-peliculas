import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-film-store',
  templateUrl: './film-store.component.html',
  styleUrls: ['./film-store.component.css']
})
export class FilmStoreComponent implements OnInit {
  prueba="esto marcha";
  filmStore: string[];
  constructor() {
    this.filmStore["Blade"];
   }

  ngOnInit() {
  }


  addFilm(film){
    this.filmStore.push(film);
  }
  deleteFilm(film){
    //TODO
  }
  searchFilm(film){
    //TODO
  }

}
