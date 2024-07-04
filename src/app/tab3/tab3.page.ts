import { Component, OnInit } from '@angular/core';
import { DataLocalService } from '../services/data-local.service';
import { Genre, PeliculaDetalle } from '../interfaces/interfaces';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page  {
  // peliculas: PeliculaDetalle[] = [];

  generos: Genre[] = [];

  favoritoGenero: any[] = [
    {
      genero: 'Acción',
      pelis: [],
    }
  ];

  constructor(
    private dataLocalService: DataLocalService,
    private moviesService: MoviesService
  ) {}
  get peliculas(): PeliculaDetalle[]{
    return  this.dataLocalService.getLocalpeliculas;
  }
  async ionViewWillEnter() {
    // this.peliculas = await this.dataLocalService.cargarFavoritos();
    console.log('pelissss', this.peliculas);

    this.generos = await this.moviesService.cargarGeneros();


    this.pelisPorGenero(this.generos, this.peliculas);

    console.log('JOAN', this.generos);
  }

  // ionViewWillEnter(){
  //   this.pelisPorGenero();
  // }

  pelisPorGenero(generos: Genre[], peliculas: PeliculaDetalle[]) {
    this.favoritoGenero = [];

    console.log('PELIS', peliculas)

    generos.forEach(genero => {
      this.favoritoGenero.push({
        genero: genero.name,
        pelis: peliculas.filter(peli => {
          return peli.genres.find((genre: any) => genre.id === genero.id);
        }),

        
      });

    });

    console.log('HOLA',this.favoritoGenero)


  }
}
