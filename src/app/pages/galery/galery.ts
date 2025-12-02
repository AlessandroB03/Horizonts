import { Component } from '@angular/core';
import { Image } from '../../services/images';
import { Images } from '../../services/images';

@Component({
  selector: 'app-galery',
  imports: [],
  templateUrl: './galery.html',
  styleUrl: './galery.scss',
})

export class Galery {
  imagenes: Image[] = [];

  constructor(private imagesService: Images) {
    this.imagenes = this.imagesService.getImages();
  }
}
