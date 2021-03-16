import {ESTADOS_RTS, ESTADOS_SEDE} from "./OrdenTrabajo";
import DBEntity from "./auxiliar/DBEntity";

export default class Formulario extends DBEntity{
    public fecha: number = 0;
    public estado_correspondiente: ESTADOS_RTS | ESTADOS_SEDE = ESTADOS_SEDE.CREADA;
    public documento: any;
}