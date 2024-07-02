import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {
  @Input() peliculas: Pelicula[] = [];
  slidesPerView = 3;
  loopSlide = true;

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
