import { Component, OnInit, EventEmitter } from '@angular/core';
import { Film } from '../modelo/film';

@Component({
  selector: 'app-film-form',
  templateUrl: './film-form.component.html',
  styleUrls: ['./film-form.component.css'],
  inputs: ['film'],
  outputs: ['eventAddFilm', 'eventDeleteFilm', 'eventModifyFilm']
})
export class FilmFormComponent implements OnInit {

  film: Film;
  /* constructor(private film: Film) {
     this.film = new Film(0, "Default", "", 1970);
   }
 */

  private eventAddFilm: EventEmitter<Film> = new EventEmitter<Film>();
  private eventDeleteFilm: EventEmitter<Film> = new EventEmitter<Film>();
  private eventModifyFilm: EventEmitter<Film> = new EventEmitter<Film>();


  constructor() { }

  ngOnInit() {

  }

  addFilm(film): void {
    //this.film = film;
    console.log("Evento add enviado!");
    //Emitir el mensaje hay que hacerlo al final del metodo para que no de problemas
    this.eventAddFilm.emit(film);
  }
  deleteFilm(film) {
    //this.film = film;
    console.log("Evento delete enviado!");
    //Emitir el mensaje hay que hacerlo al final del metodo para que no de problemas
    this.eventDeleteFilm.emit(film);
  }
  modifyFilm(film) {
    this.film = film;
    console.log("Evento modify enviado!");
    //Emitir el mensaje hay que hacerlo al final del metodo para que no de problemas
    this.eventModifyFilm.emit(film);
  }

}
