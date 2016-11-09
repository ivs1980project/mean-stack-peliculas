import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-film-store',
  templateUrl: './film-store.component.html',
  styleUrls: ['./film-store.component.css']
})
export class FilmStoreComponent implements OnInit {
  prueba="esto marcha";
  filmStore: Film[];
  constructor() {
    this.filmStore=createNewFilmStore;
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

  createNewFilmStore():Film[]{
    let film1 : Film;
    let film2 : Film;
    let film3 : Film;
    let filmStore2: Film[];
    film1 = new Film(1,"Los Gonnies","Arnold","1990");
    film2 = new Film(2,"Blade","Michael","2001");
    film3 = new Film(3,"Terminator","Jonas","2003");
    filmStore2.push(film1);
    filmStore2.push(film2);
    filmStore2.push(film3);
    return filmStore2
  }

}

class Film{
  id:number;
  titulo:string;
  autor:string;
  anio:number;
  constructor(id,titulo,autor,anio){
    this.id=id;
    this.titulo=titulo;
    this.autor=autor;
    this.anio=anio;
  }
}
