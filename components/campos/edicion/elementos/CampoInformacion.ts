import {Campo} from "../Campo";
import {Dependiente} from "../Dependiente";
import {TiposElementos} from "../../index";

export class CampoInformacion extends Campo {
    public informacion: string = '';

    constructor(etiqueta?: string, dependiente?: Dependiente, informacion?: string) {
        super(TiposElementos.informacion, etiqueta, dependiente);
        this.informacion = informacion ? informacion : '';
    }
}