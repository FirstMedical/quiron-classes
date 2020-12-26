import OrdenTrabajo from "./OrdenTrabajo";
import AccionOrdenTrabajo from "./AccionOrdenTrabajo";
import Usuario from "./Usuario";

export default class Traza {
    /** Orden de trabajo a la que pertenece la traza */
    public ot: OrdenTrabajo = new OrdenTrabajo();
    /** Accion que se realiza sobre el equipo */
    public accion: AccionOrdenTrabajo = new AccionOrdenTrabajo();
    /** Usuario del sistema encargado y responsable de la accion que se realiza */
    public encargado: Usuario = new Usuario();
    /** Fecha y hora en la que se realizó la accion trazada */
    public fecha: number = 0;
}