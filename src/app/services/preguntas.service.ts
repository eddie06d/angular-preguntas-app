import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {
  index: number = 0;
  tiempo: number = 0;
  preguntas: any[] = [
    {
      title: '¿Cuál es la capital de Argentina?',
      opciones: [
        { descripcion: 'Buenos Aires', res: true, sel: false },
        { descripcion: 'Brasilia', res: false, sel: false },
        { descripcion: 'Santiago', res: false, sel: false },
        { descripcion: 'Lima', res: false, sel: false }
      ]
    },
    {
      title: '¿Cuál es la capital de España?',
      opciones: [
        { descripcion: 'Barcelona', res: false, sel: false },
        { descripcion: 'Madrid', res: true, sel: false },
        { descripcion: 'Dublín', res: false, sel: false },
        { descripcion: 'Roma', res: false, sel: false }
      ]
    },
    {
      title: '¿Cuál es la capital de Bolivia?',
      opciones: [
        { descripcion: 'Sucre', res: false, sel: false },
        { descripcion: 'Caracas', res: false, sel: false },
        { descripcion: 'Montevideo', res: false, sel: false },
        { descripcion: 'La Paz', res: true, sel: false }
      ]
    },
    {
      title: '¿Cuál es la capital de Alemania?',
      opciones: [
        { descripcion: 'Berlín', res: true, sel: false },
        { descripcion: 'Kosovo', res: false, sel: false },
        { descripcion: 'Kiev', res: false, sel: false },
        { descripcion: 'Praga', res: false, sel: false }
      ]
    },
    {
      title: '¿Cuál es la capital de Ecuador?',
      opciones: [
        { descripcion: 'Bogotá', res: false, sel: false },
        { descripcion: 'La Habana', res: false, sel: false },
        { descripcion: 'Quito', res: true, sel: false },
        { descripcion: 'Asunción', res: false, sel: false }
      ]
    },
    {
      title: '¿Cuál es la capital de Inglaterra?',
      opciones: [
        { descripcion: 'Moscú', res: false, sel: false },
        { descripcion: 'Londres', res: true, sel: false },
        { descripcion: 'Copenhague', res: false, sel: false },
        { descripcion: 'Lisboa', res: false, sel: false }
      ]
    },
    {
      title: '¿Cuál es la capital de México?',
      opciones: [
        { descripcion: 'Ciudad de México', res: true, sel: false },
        { descripcion: 'Otawa', res: false, sel: false },
        { descripcion: 'San José', res: false, sel: false },
        { descripcion: 'Kingston', res: false, sel: false }
      ]
    },
    {
      title: '¿Cuál es la capital de Suecia?',
      opciones: [
        { descripcion: 'París', res: false, sel: false },
        { descripcion: 'Estocolmo', res: true, sel: false },
        { descripcion: 'Zagreb', res: false, sel: false },
        { descripcion: 'Helsinki', res: false, sel: false }
      ]
    },
    {
      title: '¿Cuál es la capital de Rep. Dominicana?',
      opciones: [
        { descripcion: 'Santo Domingo', res: true, sel: false },
        { descripcion: 'Puebla', res: false, sel: false },
        { descripcion: 'Puerto España', res: false, sel: false },
        { descripcion: 'San Salvador', res: false, sel: false }
      ]
    },
    {
      title: '¿Cuál es la capital de Mongolia?',
      opciones: [
        { descripcion: 'Tokyo', res: false, sel: false },
        { descripcion: 'Ulan-Bator', res: true, sel: false },
        { descripcion: 'Manila', res: false, sel: false },
        { descripcion: 'Yakarta', res: false, sel: false }
      ]
    }
  ];

  constructor() { }

  getAll(): any[] {
    return this.preguntas;
  }

  getFirst(): any {
    return this.preguntas[this.index];
  }

  getNext(): any {
    this.index++;
    return this.preguntas[this.index];
  }

  setSeleccionado(opcionIndex: number): void {
    for(let i=0; i < 4; i++){
      if(i === opcionIndex) this.preguntas[this.index].opciones[i].sel = true;
      else this.preguntas[this.index].opciones[i].sel = false;
    }
  }

  getRpta(): string {
    for(let opcion of this.preguntas[this.index].opciones){
      if(opcion.res) return opcion.descripcion;
    }
  }

  getCorrectas(): number {
    let cantidad = 0;
    for(let pregunta of this.preguntas){
      let opciones = pregunta.opciones;
      for(let option of opciones){
        if(option.sel && option.res){
          cantidad++;
          break;
        }
      }
    }
    return cantidad;
  }

  setOpcionesSeleccionadas() {
    for(let pregunta of this.preguntas){
      let opciones = pregunta.opciones;
      for(let option of opciones) option.sel = false;
    }
  }

}
