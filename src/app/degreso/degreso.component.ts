import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from './egreso.model';
import { EgresoServicio } from './egreso.servico';

@Component({
  selector: 'app-degreso',
  templateUrl: './degreso.component.html',
  styleUrls: ['./degreso.component.css']
})
export class DegresoComponent implements OnInit {
  
  egresos: Egreso[] = [];
  @Input() ingresoTotal:number;
  constructor(private egresoServicio: EgresoServicio) { }

  ngOnInit() {
    this.egresos = this.egresoServicio.egresos;
  }
  eliminarRegistro(egreso: Egreso){
    this.egresoServicio.eliminar(egreso);
  }
  calcularPorcentaje(egreso: Egreso){
    return egreso.valor/this.ingresoTotal;
  }
}
