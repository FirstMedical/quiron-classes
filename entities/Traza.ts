import OrdenTrabajo from "./OrdenTrabajo";
import AccionOrdenTrabajo from "./AccionOrdenTrabajo";
import Usuario from "./Usuario";
import DBEntity from "./auxiliar/DBEntity";

export default class Traza extends DBEntity{
    /** Orden de trabajo a la que pertenece la traza */
    public ot: OrdenTrabajo = new OrdenTrabajo();
    /** Accion que se realiza sobre el equipo */
    public accion: AccionOrdenTrabajo = new AccionOrdenTrabajo();
    /** Usuario del sistema encargado y responsable de la accion que se realiza */
    public encargado: Usuario = new Usuario();
    /** Fecha y hora en la que se realizó la accion trazada */
    public fecha: number = 0;

    constructor(ot?: OrdenTrabajo, accion?: AccionOrdenTrabajo, encargado?: Usuario, fecha?: number) {
        super();
        this.ot = ot? ot : new OrdenTrabajo();
        this.accion = accion? accion : new AccionOrdenTrabajo();
        this.encargado = encargado? encargado : new Usuario();
        this.fecha = fecha? fecha : 0;
    }
}