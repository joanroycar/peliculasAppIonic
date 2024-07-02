import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  constructor(private moviesService: MoviesService) {}

  peliculaRecientes: Pelicula[] = [];
  populares: Pelicula[] = [];

  ngOnInit() {
    this.moviesService.getFeature().subscribe((resp) => {
      this.peliculaRecientes = resp.results; // Cast to Pelicula[]
    });

    this.getPopulares();
  }

  cargarMas() {
    this.getPopulares();
  }

  getPopulares() {
    this.moviesService.getPopulares().subscribe((resp) => {

      console.log(resp)
      const arrTemp = [...this.populares, ...resp.results];

      this.populares = arrTemp; // Cast to Pelicula[]

    });
  }
}
