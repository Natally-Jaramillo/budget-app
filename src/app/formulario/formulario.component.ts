import { Component, OnInit } from '@angular/core';
import { Egreso } from '../degreso/egreso.model';
import { EgresoServicio } from '../degreso/egreso.servico';
import { Ingreso } from '../ingreso/ingreso.model';
import { IngresoServicio } from '../ingreso/ingreso.servicio';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  tipo:string= "ing";
  descriptionInput:string;
  valorInput:number;
  constructor(private ingresoServicio: IngresoServicio,
              private egresoServicio: EgresoServicio) { }

  ngOnInit() {}

  tipoOperacion(evento){
  this.tipo = evento.target.value;
  }
  agregarValor(){
    if(this.tipo === "ing")
    this.ingresoServicio.ingresos.push(new Ingreso(this.descriptionInput, this.valorInput))
    else
     this.egresoServicio.egresos.push(new Egreso(this.descriptionInput, this.valorInput))
  }

}
