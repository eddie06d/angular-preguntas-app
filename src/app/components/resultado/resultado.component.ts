import { PreguntasService } from './../../services/preguntas.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {
  preguntas: any[];
  correctas: number;
  time: number;

  constructor(private preguntaService:PreguntasService, private router: Router) { }

  ngOnInit(): void {
    this.preguntas = this.preguntaService.getAll();
    this.correctas = this.preguntaService.getCorrectas();
    this.time = this.preguntaService.tiempo;
  }

  regresar() {
    this.preguntaService.setOpcionesSeleccionadas();
    this.router.navigate(['/dashboard']);
    this.preguntaService.tiempo = 0;
  }

}
