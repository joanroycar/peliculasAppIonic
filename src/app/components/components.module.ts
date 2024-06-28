import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { ImagenPipe } from '../pipes/imagen.pipe';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';


@NgModule({
  declarations: [SlideshowBackdropComponent,SlideshowPosterComponent],
  imports: [
    CommonModule,
    IonicModule,
    ImagenPipe
  ],
  exports:[SlideshowBackdropComponent,SlideshowPosterComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]

})
export class ComponentsModule { }
