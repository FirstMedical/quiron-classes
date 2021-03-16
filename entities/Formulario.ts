import {ESTADOS_RTS, ESTADOS_SEDE} from "./OrdenTrabajo";
import DBEntity from "./auxiliar/DBEntity";

export default class Formulario extends DBEntity{
    public fecha: number = 0;
    public estado_correspondiente: ESTADOS_RTS | ESTADOS_SEDE = ESTADOS_SEDE.CREADA;
    public documento: any;


    constructor(fecha?: number, estado_correspondiente?: ESTADOS_RTS | ESTADOS_SEDE, documento?: any) {
        super();
        this.fecha = fecha? fecha : 0;
        this.estado_correspondiente = estado_correspondiente? estado_correspondiente : ESTADOS_SEDE.CREADA;
        this.documento = documento;
    }
}