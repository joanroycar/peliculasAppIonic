import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { ImagenPipe } from '../pipes/imagen.pipe';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';
import { SlideshowParesComponent } from './slideshow-pares/slideshow-pares.component';
import { ParesPipe } from '../pipes/pares.pipe';
import { DetalleComponent } from './detalle/detalle.component';

@NgModule({
  // entryComponents: [DetalleComponent],

  declarations: [
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    SlideshowParesComponent,
    DetalleComponent,
  ],
  imports: [CommonModule, IonicModule, ImagenPipe, ParesPipe],
  exports: [
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    SlideshowParesComponent,
    DetalleComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
