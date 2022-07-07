import { Egreso } from "./egreso.model";

export class EgresoServicio{
    egresos:Egreso[]=[
        new Egreso("Renta Dto", 900),
        new Egreso("ropa", 200)
    ];
    eliminar(egreso:Egreso){
        const indice: number = this.egresos.indexOf(egreso); //Nos da el indice del objeto que estamos recibiendo (ingreso)
        this.egresos.splice(indice,1); //eliminar 1 objeto apartir del indice que le estamos indicando.
    }
}