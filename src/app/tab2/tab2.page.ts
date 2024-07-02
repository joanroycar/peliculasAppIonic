import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../components/detalle/detalle.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  textoBuscar = '';

  ideas: string[] = ['PERU', 'BOLIVIA', 'BRASIL'];
  constructor(private moviesService: MoviesService, private modalCtrl: ModalController) {}

  peliculas: Pelicula[] = [];
  buscando = false;
  buscar(event: any) {
    console.log(event);

    const valor = event.detail?.value ?? event;

    this.textoBuscar = valor;

    if (valor.length === 0) {
      this.buscando = false;
      this.peliculas = [];
    }

    this.buscando = true;

    this.moviesService.buscarPeliculas(valor).subscribe((resp: any) => {
      this.peliculas = resp.results;
      console.log(resp);
      this.buscando = false;
    });
  }

  async detalle(id: any) {
    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: {
        id,
      },
    });

    modal.present();
  }




}
