import { Component, OnInit } from '@angular/core';
import { Film } from '../modelo/film';

@Component({
  selector: 'app-film-store',
  templateUrl: './film-store.component.html',
  styleUrls: ['./film-store.component.css']
})
export class FilmStoreComponent implements OnInit {
  filmStore: Film[];
  constructor() {
    this.filmStore = this.createNewFilmStore();
    console.log("create store");
  }

  ngOnInit() {
  }


  addFilm(film) {
    this.filmStore.push(film);
  }
  deleteFilm(film) {
    //TODO
  }
  searchFilm(film) {
    //TODO
  }

  setOrder(orden) {

    this.filmStore.sort(function (a, b) {
      switch (orden) {
        case "id":
          return a.getId() - b.getId();
        //case "titulo":
        //  return a.getTitulo() > b.getTitulo();
        //case "director":
        //  return a.getAutor() > b.getAutor();
        case "fecha":
          return a.getAnio() - b.getAnio();
      }
    });
    console.log(this.filmStore);
    console.log("click en el " + orden);
  }

  createNewFilmStore(): Film[] {
    let film1: Film = new Film(1, "Los Gonnies", "Arnold", 1990);
    let film2: Film = new Film(2, "Blade", "Michael", 2001);
    let film3: Film = new Film(3, "Terminator", "Jonas", 2003);
    let film4: Film = new Film(4, "300", "Jonas", 1998);
    let film5: Film = new Film(5, "PI", "Maciulis", 2015);
    let filmStore2: Film[] = new Array<Film>();
    filmStore2.push(film1, film3, film2, film4, film5);
    return filmStore2
  }

}

//class Film{
//  id:number;
//  titulo:string;
//  autor:string;
//  anio:number;
//  constructor(id,titulo,autor,anio){
//    this.id=id;
 //   this.titulo=titulo;
//    this.autor=autor;
//    this.anio=anio;
//  }
//}
