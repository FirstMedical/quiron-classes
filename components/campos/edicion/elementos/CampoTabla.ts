import {Campo} from "../Campo";
import {Dependiente} from "../Dependiente";
import {TiposElementos} from "../../index";

export class CampoTabla extends Campo {
    columnas: Campo[];

    constructor(etiqueta?: string, dependiente?: Dependiente, columnas?: []) {
        super(TiposElementos.tabla, etiqueta, dependiente);
        this.columnas = columnas ? columnas : [];
    }
}