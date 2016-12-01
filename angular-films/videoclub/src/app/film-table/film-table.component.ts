import { Component, OnInit } from '@angular/core';
import { Film } from '../modelo/film';


@Component({
  selector: 'app-film-table',
  templateUrl: './film-table.component.html',
  styleUrls: ['./film-table.component.css'],
  inputs: ['filmStore', 'film']
})
export class FilmTableComponent implements OnInit {

  film: Film;

  constructor() { }

  ngOnInit() {
  }

  onRowClick(film) {
    this.film = film;
    console.log(film);
  }

  setOrder(orden, tipo) {
    //TODO: Pasar el orden y el tipo al parent
    //this.filmService.setOrder(orden, tipo);
  }

}
