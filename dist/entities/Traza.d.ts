import OrdenTrabajo from "./OrdenTrabajo";
import AccionOrdenTrabajo from "./AccionOrdenTrabajo";
import Usuario from "./Usuario";
export default class Traza {
    /** Orden de trabajo a la que pertenece la traza */
    ot: OrdenTrabajo;
    /** Accion que se realiza sobre el equipo */
    accion: AccionOrdenTrabajo;
    /** Usuario del sistema encargado y responsable de la accion que se realiza */
    encargado: Usuario;
    /** Fecha y hora en la que se realizó la accion trazada */
    fecha: number;
}
//# sourceMappingURL=Traza.d.ts.map