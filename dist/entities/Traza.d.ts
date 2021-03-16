import OrdenTrabajo from "./OrdenTrabajo";
import AccionOrdenTrabajo from "./AccionOrdenTrabajo";
import Usuario from "./Usuario";
import DBEntity from "./auxiliar/DBEntity";
export default class Traza extends DBEntity {
    /** Orden de trabajo a la que pertenece la traza */
    ot: OrdenTrabajo;
    /** Accion que se realiza sobre el equipo */
    accion: AccionOrdenTrabajo;
    /** Usuario del sistema encargado y responsable de la accion que se realiza */
    encargado: Usuario;
    /** Fecha y hora en la que se realizó la accion trazada */
    fecha: number;
    constructor(ot?: OrdenTrabajo, accion?: AccionOrdenTrabajo, encargado?: Usuario, fecha?: number);
}
//# sourceMappingURL=Traza.d.ts.map