import { Component, OnInit } from '@angular/core';
import { Film } from '../modelo/film';
import { FilmService } from '../servicios/film.service';

@Component({
  selector: 'app-film-form',
  templateUrl: './film-form.component.html',
  styleUrls: ['./film-form.component.css']
})
export class FilmFormComponent implements OnInit {

  private film: Film;

  constructor() {
      this.film= new Film (0,"","autor no soy yo", 1889);
  }

  ngOnInit() {
  }

  enviarFormulario(formulario: any){
    console.log("Datos del formulario enviado: "+formulario);
    console.log("Peli: " +this.film);
  }

}

