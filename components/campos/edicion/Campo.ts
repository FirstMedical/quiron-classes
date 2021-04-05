import {TiposElementos} from '../index';
import {Dependiente} from "./Dependiente";
import {Type} from "class-transformer";

export class Campo {
    uid: String;
    elemento: TiposElementos;
    etiqueta: string;
    @Type(() => Dependiente)
    dependiente: Dependiente;


    constructor(elemento?: TiposElementos, etiqueta?: string, dependiente?: Dependiente, uid?: string) {
        this.uid = uid ? uid : etiqueta? etiqueta : '';
        this.elemento = elemento ? elemento : TiposElementos.seccion;
        this.etiqueta = etiqueta ? etiqueta : '';
        this.dependiente = dependiente ? dependiente : new Dependiente();
    }
}