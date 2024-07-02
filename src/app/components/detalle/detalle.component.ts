import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Cast, PeliculaDetalle } from 'src/app/interfaces/interfaces';
import { ModalController } from '@ionic/angular';

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
  constructor(private moviesService: MoviesService, private modalCtrl :ModalController) {}

  ngOnInit() {
    console.log(this.id);
    this.moviesService.getPeliculaDetalle(this.id).subscribe((resp) => {
      this.pelicula = resp;
    });

    this.moviesService.getActores(this.id).subscribe((resp) => {
      this.actores = resp.cast;
    });
  }

  regresar() {
    this.modalCtrl.dismiss();
  }

  favorito() {}
}
