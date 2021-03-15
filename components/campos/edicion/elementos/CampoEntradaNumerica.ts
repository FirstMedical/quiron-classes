import {Campo} from "../Campo";
import {Dependiente} from "../Dependiente";
import {TiposElementos} from "../../index";

export class CampoEntradaNumerica extends Campo {
    constructor(etiqueta?: string, dependiente?: Dependiente) {
        super(TiposElementos['entrada-numerica'], etiqueta, dependiente);
    }
}