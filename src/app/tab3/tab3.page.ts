import { Component, OnInit } from '@angular/core';
import { DataLocalService } from '../services/data-local.service';
import { Genre, PeliculaDetalle } from '../interfaces/interfaces';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  peliculas: PeliculaDetalle[] = [];

  generos: Genre[]=[];

  constructor(private dataLocalService: DataLocalService, private moviesService:MoviesService) {}

  async ngOnInit() {


    this.peliculas = await this.dataLocalService.cargarFavoritos();

    this.generos = await this.moviesService.cargarGeneros();


    console.log('JOAN',this.generos)

    


  }
}
