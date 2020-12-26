import {ESTADOS_RTS, ESTADOS_SEDE} from "./OrdenTrabajo";

export default class Formulario {
    public fecha: number = 0;
    public estado_correspondiente: ESTADOS_RTS | ESTADOS_SEDE = ESTADOS_SEDE.CREADA;
    public documento: any;
}