import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {
  
  @Input() presupuestoTotal:number;
  @Input() ingresoTotal:number;
  @Input() egresoTotal:number;
  @Input() porcetajeTotal:number;
  constructor() { }

  ngOnInit(): void {
  }

}
