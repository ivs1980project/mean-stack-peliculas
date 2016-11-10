import { Component, OnInit } from '@angular/core';
import {Film} from '../modelo/film';

@Component({
  selector: 'app-film-store',
  templateUrl: './film-store.component.html',
  styleUrls: ['./film-store.component.css']
})
export class FilmStoreComponent implements OnInit {
  prueba="esto marcha";
  filmStore: Film[];
  constructor() {
    this.filmStore=this.createNewFilmStore();
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
    let film1 : Film = new Film(1,"Los Gonnies","Arnold",1990);
    let film2 : Film = new Film(2,"Blade","Michael",2001);
    let film3 : Film = new Film(3,"Terminator","Jonas",2003);
    let filmStore2: Film[] = new Array<Film>();
    filmStore2.push(film1,film2,film3);
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
