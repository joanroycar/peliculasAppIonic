import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Pelicula } from 'src/app/interfaces/interfaces';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshow-pares',
  templateUrl: './slideshow-pares.component.html',
  styleUrls: ['./slideshow-pares.component.scss'],
})
export class SlideshowParesComponent implements OnInit {
  @Input() peliculas: Pelicula[] = [];

  @Input() slidesPerView: any;

  @Output() cargarMas = new EventEmitter();
  // slidesPerView = 3.3;
  loopSlide = true;
  spaceBetweenSlide = -10;
  constructor(private modalCrtl: ModalController) {}

  ngOnInit() {}

  onClick() {
    this.cargarMas.emit();
  }


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
