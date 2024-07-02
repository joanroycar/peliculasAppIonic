import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Cast, PeliculaDetalle } from 'src/app/interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DataLocalService } from 'src/app/services/data-local.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {
  @Input() id: any;

  pelicula: PeliculaDetalle;
  actores: Cast[] = [];
  oculto = 150;
  estrella='star-outline';
  constructor(
    private moviesService: MoviesService,
    private modalCtrl: ModalController,
    private dataLocal: DataLocalService
  ) {}

  async ngOnInit() {

    await this.dataLocal.existePelicula(this.id).
    then(existe => this.estrella = (existe) ? 'star': 'star-outline');




    console.log(this.id);
    this.moviesService.getPeliculaDetalle(this.id).subscribe((resp) => {
      this.pelicula = resp;
      console.log('PIPIPI', resp)
    });

    this.moviesService.getActores(this.id).subscribe((resp) => {
      this.actores = resp.cast;
    });
  }

  regresar() {
    this.modalCtrl.dismiss();
  }

  favorito() {

    const existe = this.dataLocal.guardarPelicula(this.pelicula);
    this.estrella = (existe) ? 'star': 'star-outline';

  }
}
