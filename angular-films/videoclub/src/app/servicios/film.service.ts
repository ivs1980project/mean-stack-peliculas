import { Injectable } from '@angular/core';
import { Film } from '../modelo/film';

@Injectable()
export class FilmService {

  filmStore: Film[];
  film: Film;
  id: number = 1;

  constructor() {
    this.filmStore = this.createNewFilmStore();
    this.film = this.createDefaultFilm();
    console.log("create store");
  }

  addFilm(film) {
    film.id = this.id++;
    this.filmStore.push(film);

    //    this.filmStore.push(new Film(this.id++, film.titulo, film.autor, film.anio));
  }

  deleteFilm(film) {
    let filmToDeletePosition = this.searchFilm(film);
    if (filmToDeletePosition != null) {
      this.filmStore.splice(filmToDeletePosition, 1);
    }
  }


  modifyFilm(film) {
    let filmToModifyPosition = this.searchFilm(film);
    if (filmToModifyPosition != null) {
      this.filmStore.splice(filmToModifyPosition, 1);
      this.filmStore.push(film);
    }
  }

  //Devuelve la posicion de la pelicula en el array o null si no está
  searchFilm(film): number {
    for (var position = 0; position < this.filmStore.length; position++) {
      let compareFilm = this.filmStore[position];
      if (compareFilm.getId() == film.id) {
        return position;
      }
    }
    return null;
  }

  setOrder(orden, tipo) {
    this.filmStore.sort(function (a, b) {
      switch (orden) {
        case "id":
          if (tipo == 'up') {
            return a.getId() - b.getId();
          } else {
            return b.getId() - a.getId();
          }
        case "titulo":
          if (tipo == 'up') {
            return a.getTitulo().localeCompare(b.getTitulo());
          } else {
            return b.getTitulo().localeCompare(a.getTitulo());
          }
        case "director":
          if (tipo == 'up') {
            return a.getAutor().localeCompare(b.getAutor());
          } else {
            return b.getAutor().localeCompare(a.getAutor());
          }
        case "fecha":
          if (tipo == 'up') {
            return a.getAnio() - b.getAnio();
          } else {
            return b.getAnio() - a.getAnio();
          }

      }
    });
    console.log("click en el " + orden + " tipo " + tipo);
  }

  createNewFilmStore(): Film[] {
    let film1: Film = new Film(this.id++, "Los Gonnies", "Arnold", 1990);
    let film2: Film = new Film(this.id++, "Blade", "Michael", 2001);
    let film3: Film = new Film(this.id++, "Terminator", "Jonas", 2003);
    let film4: Film = new Film(this.id++, "300", "Jonas", 1998);
    let film5: Film = new Film(this.id++, "PI", "Maciulis", 2015);
    let filmStore2: Film[] = new Array<Film>();
    filmStore2.push(film5, film3, film2, film4, film1);
    return filmStore2
  }

  createDefaultFilm(): Film {
    return new Film(0, "Default", "Default", 1970);
  }

}
