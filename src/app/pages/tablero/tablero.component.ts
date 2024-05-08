import { Component, OnInit } from '@angular/core';
import { PalabraService } from 'src/app/services/palabra.service';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.sass']
})
export class TableroComponent implements OnInit {
//conjunto de palabras posibles
  public palabras: string[] = [];
//palabra a adivinar
  public palabra: string = '';
  public iteracion : any[] =[];
  public turno = 0;
  nivelDificultad: string = 'facil'; // Por defecto, nivel fácil
  
  
constructor(
  public palabraSer:PalabraService
  
) { }
ngOnInit(): void {
  //this.palabras = ['adios','perro','carro'];
  this.palabraSer.get().subscribe((res: any)=>{
    res.forEach((element: any) => {
      this.palabras.push(element.palabra)
      });
      this.palabra = this.palabras[Math.floor(Math.random() * this.palabras.length)];
      this.iteracion = new Array(6).fill('');
  });

}
establecerIntentosPermitidos(): void {
  switch (this.nivelDificultad) {
    case 'facil':
      this.iteracion = new Array(8).fill("");
      break;
    case 'normal':
      this.iteracion = new Array(6).fill("");
      break;
    case 'dificil':
      this.iteracion = new Array(3).fill("")
      break;
    default:
      this.iteracion = new Array(8).fill(""); // Por defecto, nivel fácil
  }
}

cambiarNivelDificultad(nivel: string): void {
  this.nivelDificultad = nivel;
}

}

