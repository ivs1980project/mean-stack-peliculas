import { Component, OnInit } from '@angular/core';
import { Film } from '../modelo/film';

@Component({
  selector: 'app-film-form',
  templateUrl: './film-form.component.html',
  styleUrls: ['./film-form.component.css'],
  inputs: ['film']
})
export class FilmFormComponent implements OnInit {

  /* constructor(private film: Film) {
     this.film = new Film(0, "Default", "", 1970);
   }
 */
  constructor() { }

  ngOnInit() {

  }

  addFilm(film) {
    //TODO:mandar el objeto film al padre
  }
  deleteFilm(film) {
    //TODO:mandar el objeto film al padre
  }
  modifyFilm(film) {
    //TODO:mandar el objeto film al padre
  }

}
