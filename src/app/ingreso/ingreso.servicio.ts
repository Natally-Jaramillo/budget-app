import { Ingreso } from "./ingreso.model";

export class IngresoServicio{
    ingresos:Ingreso[] = [
        new Ingreso("salario",4000),
        new Ingreso("Venta coche",500)
    ];
     eliminar(ingreso:Ingreso){
         const indice: number = this.ingresos.indexOf(ingreso); //Nos da el indice del objeto que estamos recibiendo (ingreso)
         this.ingresos.splice(indice,1); //eliminar 1 objeto apartir del indice que le estamos indicando.
     }
}