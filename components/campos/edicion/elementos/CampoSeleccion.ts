import {Campo} from "../Campo";
import {Dependiente} from "../Dependiente";
import {TiposElementos} from "../../index";

export class CampoSeleccion extends Campo {
    opciones: string[];

    constructor(etiqueta?: string, dependiente?: Dependiente, opciones?: string[]) {
        super(TiposElementos.seleccion, etiqueta, dependiente);
        this.opciones = opciones ? opciones : [];
    }
}