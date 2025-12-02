import { Injectable } from '@angular/core';

export interface Image{
  id: number;
  nombre:string;
  descripcion: string;
  imagen: string;
}

@Injectable({
  providedIn: 'root'
})

export class Images {
  
  private images: Image[] = [
    {
      id: 1,
      nombre: 'Exploradores de Montañas',
      descripcion: 'Aventureros que ascienden cumbres nevadas para descubrir nuevas rutas y estudiar la geografía de las cordilleras.',
      imagen: '/backgraunds/exploradores.png'
    },
    {
      id: 2,
      nombre: 'Navegantes Oceánicos',
      descripcion: 'Viajeros que recorren mares desconocidos en busca de nuevas tierras y culturas, enfrentando tormentas y corrientes.',
      imagen: '/backgraunds/Oceanicos.png'
    },
    {
      id: 3,
      nombre: 'Exploradores del Desierto',
      descripcion: 'Se adentran en dunas interminables para estudiar oasis ocultos y las adaptaciones de la vida en climas áridos.',
      imagen: '/backgraunds/desierto.webp'
    },
    {
      id: 4,
      nombre: 'Viajeros de la Selva',
      descripcion: 'Recorren selvas densas para descubrir especies únicas y aprender de comunidades que habitan en armonía con la naturaleza.',
      imagen: '/backgraunds/selva.webp'
    },
    {
      id: 5,
      nombre: 'Cartógrafos del Mundo',
      descripcion: 'Dibujan mapas detallados de territorios desconocidos, abriendo caminos para futuras generaciones de exploradores.',
      imagen: '/backgraunds/cartografia.webp'
    },
    {
      id: 6,
      nombre: 'Exploradores de Cuevas',
      descripcion: 'Se internan en cavernas profundas para estudiar formaciones rocosas y descubrir secretos ocultos bajo la tierra.',
      imagen: '/backgraunds/cuevas.webp'
    },
    {
      id: 7,
      nombre: 'Aventureros Polares',
      descripcion: 'Viajan a regiones heladas para investigar glaciares y sobrevivir en condiciones extremas de frío.',
      imagen: '/backgraunds/Polares.jpg'
    },
    {
      id: 8,
      nombre: 'Recolectores de Reliquias',
      descripcion: 'Buscan vestigios históricos y objetos antiguos que cuentan la historia de civilizaciones pasadas.',
      imagen: '/backgraunds/reliquiasjpg.jpg'
    },
    {
      id: 9,
      nombre: 'Exploradores Urbanos',
      descripcion: 'Descubren rincones ocultos en ciudades, desde túneles subterráneos hasta edificios abandonados llenos de historias.',
      imagen: '/backgraunds/urbano.webp'
    },
    {
      id: 10,
      nombre: 'Viajeros de Horizontes',
      descripcion: 'Se lanzan a recorrer continentes en busca de paisajes nuevos y culturas que expanden la visión del mundo.',
      imagen: '/backgraunds/horizontes.webp'
    }
  ]

  constructor(){}

  getImages(): Image[] {
    return this.images;
  }
}