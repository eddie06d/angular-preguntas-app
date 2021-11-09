import { PreguntasService } from './../../services/preguntas.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {
  pregunta: any;
  boton: boolean = true;
  messageBoton: string = 'Siguiente';
  siguiente: boolean = false;
  timer: number = 20;
  idTimer: any;
  iconComprobar: boolean = false;
  disabledList: boolean = false;

  constructor(private preguntasService: PreguntasService, private router: Router) { }

  ngOnInit(): void {
    this.pregunta = this.preguntasService.getFirst();
    this.idTimer = setInterval(() => {
      this.timer--;
      this.preguntasService.tiempo++;
      /* if(this.timer === -1) this.verificarTimer(); */
    },1000);
    //console.log(this.pregunta);
  }

  seleccionarOpcion(opcionI: number) {
    if(!this.disabledList){
      this.preguntasService.setSeleccionado(opcionI);
      this.boton = false;
    }
  }

  aceptar() {
    this.iconComprobar = true;
    this.disabledList = true;
    if(this.preguntasService.index === this.preguntasService.getAll().length-1){
      this.messageBoton = 'Finalizar';
    }
    clearInterval(this.idTimer);
    let opcion = document.getElementsByClassName('active')[0];
    //console.log(opcion.textContent.trim());
    console.log(this.preguntasService.getRpta());
    opcion.classList.remove('active');
    if(opcion.textContent.trim() === this.preguntasService.getRpta()){
      opcion.classList.add('list-group-item-success');

    }else {
      opcion.classList.add('list-group-item-danger');
    }
    this.boton = true;
    this.siguiente = true;
  }

  siguientePreg() {
    this.iconComprobar = false;
    this.disabledList = false;
    this.timer = 20;
    if(this.messageBoton === 'Finalizar'){
      this.router.navigate(['/resultado']);
      this.preguntasService.index = 0;
    }else{
      this.pregunta = this.preguntasService.getNext();
      this.idTimer = setInterval(() => {
        this.timer--;
        this.preguntasService.tiempo++;
      },1000);
    }
    let opcion = Array.from(document.getElementsByClassName('list-group-item'));
    this.siguiente = false;
    opcion.map(link => link.classList.remove('correcto','incorrecto'));
  }

  iconCorrecto(opcion: any) {
    if(this.iconComprobar) return (opcion.sel && opcion.res) ? true : false;
  }

  iconIncorrecto(opcion: any) {
    if(this.iconComprobar) return (opcion.sel && !opcion.res) ? true : false;
  }

  verificarTimer() {
    //this.preguntasService.index++;
    console.log(this.preguntasService.index);
    if(this.preguntasService.index === this.preguntasService.getAll().length-1){
      this.router.navigate(['/resultado']);
      this.preguntasService.index = 0;
      console.log('entro al final');
    }else this.pregunta = this.preguntasService.getNext();
    let opcion = Array.from(document.getElementsByClassName('list-group-item'));
    opcion.map(link => link.classList.remove('active'));
    this.timer = 20;
    //this.preguntasService.setOpcionesSeleccionadas();
  }

}
