import {Campo, Dependiente, Referencia} from "../edicion";
import {TiposElementos} from "../index";

export class CampoConsolidado extends Campo{
    value: any;

    constructor(elemento?: TiposElementos, etiqueta?: string, dependiente?: Dependiente, presentacion?: string, referencia?: Referencia, value?: any) {
        super(elemento, etiqueta, dependiente, presentacion, referencia);
        this.value = value? value : null;
    }
}