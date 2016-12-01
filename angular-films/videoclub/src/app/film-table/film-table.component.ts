import { Component, OnInit, EventEmitter } from '@angular/core';
import { Film } from '../modelo/film';


@Component({
  selector: 'app-film-table',
  templateUrl: './film-table.component.html',
  styleUrls: ['./film-table.component.css'],
  inputs: ['filmStore', 'film'],
  outputs: ['eventRowClickFilm', 'eventOrderFilmTable']
})
export class FilmTableComponent implements OnInit {

  film: Film;

  private eventRowClickFilm: EventEmitter<Film> = new EventEmitter<Film>();
  private eventOrderFilmTable: EventEmitter<string[]> = new EventEmitter<string[]>();


  constructor() { }

  ngOnInit() {
  }

  onRowClick(film) {
    //this.film = film;
    console.log('eventRowClickFilm: ' + film);
    this.eventRowClickFilm.emit(film);
  }

  setOrder(orden, tipo) {
    var orderCriteria = [orden, tipo];
    console.log('eventOrderFilmTable: ' + orderCriteria);
    //TODO: Pasar el orden y el tipo al parent
    this.eventOrderFilmTable.emit(orderCriteria);
  }

}
