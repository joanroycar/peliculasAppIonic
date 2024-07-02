import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Pelicula } from 'src/app/interfaces/interfaces';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {
  @Input() peliculas: Pelicula[] = [];
  slideOpts = { slidesPerView: 1.1, freMode: true };
  constructor(private modalCrtl: ModalController) {}

  ngOnInit() {}

  async verDetalle(id: any) {
    const modal = await this.modalCrtl.create({
      component: DetalleComponent,
      componentProps: {
        id
      },
    });

    modal.present();
  }
}
