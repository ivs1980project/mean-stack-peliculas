import { Component, OnInit } from '@angular/core';
import { Film } from '../modelo/film';
import { FilmService } from '../servicios/film.service';

@Component({
  selector: 'app-film-store',
  templateUrl: './film-store.component.html',
  styleUrls: ['./film-store.component.css'],
  providers: [FilmService]
})
export class FilmStoreComponent implements OnInit {
  filmStore: Film[];
  film: Film;

  constructor(private filmService: FilmService) {
    this.filmStore = this.filmService.filmStore;
    this.film = this.filmService.film;
  }

  ngOnInit() {
  }

  addFilm(film) {
    this.filmService.addFilm(film);
  }
  deleteFilm(film) {
    film.id = 2;
    this.filmService.deleteFilm(film);
  }
  modifyFilm(film) {
    film.id = 3;
    film.titulo = "otroTituloMas";
    this.filmService.modifyFilm(film);
  }
  setOrder(orden, tipo) {
    this.filmService.setOrder(orden, tipo);
  }

  onRowClick(film) {
    console.log(film);
  }

  /*  setOrder(orden, tipo) {
      this.filmService.filmStore.sort(function (a, b) {
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
      console.log(this.filmService.filmStore);
    }*/


  /*createNewFilmStore(): Film[] {
    let film1: Film = new Film(1, "Los Gonnies", "Arnold", 1990);
    let film2: Film = new Film(2, "Blade", "Michael", 2001);
    let film3: Film = new Film(3, "Terminator", "Jonas", 2003);
    let film4: Film = new Film(4, "300", "Jonas", 1998);
    let film5: Film = new Film(5, "PI", "Maciulis", 2015);
    let filmStore2: Film[] = new Array<Film>();
    filmStore2.push(film5, film3, film2, film4, film1);
    return filmStore2
  }*/

}