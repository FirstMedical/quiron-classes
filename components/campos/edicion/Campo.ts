import {TiposElementos} from '../index';
import {Dependiente} from "./Dependiente";
import {Type} from "class-transformer";

export class Campo {
    elemento: TiposElementos;
    etiqueta: string;
    @Type(()=>Dependiente)
    dependiente: Dependiente;

    constructor(elemento?: TiposElementos, etiqueta?: string, dependiente?: Dependiente) {
        this.elemento = elemento ? elemento : TiposElementos.seccion;
        this.etiqueta = etiqueta ? etiqueta : '';
        this.dependiente = dependiente ? dependiente : new Dependiente();
    }
}