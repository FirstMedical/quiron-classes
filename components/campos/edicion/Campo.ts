import {TiposElementos} from '../index';
import {Dependiente} from "./Dependiente";
import {Type} from "class-transformer";

export class Campo {
    elemento: TiposElementos;
    etiqueta: string;
    @Type(() => Dependiente)
    dependiente: Dependiente;
    presentacion: string;


    constructor(elemento?: TiposElementos, etiqueta?: string, dependiente?: Dependiente, presentacion?: string) {
        this.presentacion = presentacion ? presentacion : etiqueta? etiqueta : '';
        this.elemento = elemento ? elemento : TiposElementos.seccion;
        this.etiqueta = etiqueta ? etiqueta : '';
        this.dependiente = dependiente ? dependiente : new Dependiente();
    }
}