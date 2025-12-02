import { Component } from '@angular/core';

@Component({
  selector: 'app-conocenos',
  standalone: true,
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  equipo = [
    { nombre: 'Nicolás', rol: 'Montañista', descripcion: 'Pionero en conquistar cumbres desafiantes, conocido por abrir rutas en cordilleras remotas.' },
    { nombre: 'Zaira', rol: 'Etnógrafa', descripcion: 'Estudia comunidades en lugares apartados, buscando comprender tradiciones y formas de vida únicas.' },
    { nombre: 'Koru', rol: 'Guía Nómada', descripcion: 'Viajero de tierras lejanas con habilidades para comunicarse sin palabras y gran curiosidad por las culturas humanas.' },
    { nombre: 'Profesor Álvarez', rol: 'Cartógrafo', descripcion: 'Maestro de los mapas y el tiempo, sus estudios sobre territorios desconocidos revolucionaron la exploración.' },
    { nombre: 'Lucía', rol: 'Piloto de Expediciones', descripcion: 'Experta en conducir caravanas y atravesar terrenos inhóspitos con precisión.' },
    { nombre: 'Xelán', rol: 'Embajador Cultural', descripcion: 'Representante de pueblos ancestrales que promueve la paz y el intercambio entre comunidades.' },
    { nombre: 'Cassandra', rol: 'Ingeniera de Rutas', descripcion: 'Diseña puentes, campamentos y herramientas para viajes largos por tierras salvajes.' },
    { nombre: 'Darío', rol: 'Recolector de Reliquias', descripcion: 'Busca fragmentos históricos y objetos únicos que cuentan la historia de la humanidad.' },
    { nombre: 'Noelia', rol: 'Exploradora de Horizontes', descripcion: 'Recorre continentes en busca de nuevos paisajes y lugares habitables para futuras generaciones.' }
 ];
}

