import Plantilla from "./Plantilla";
import OrdenTrabajo from "./OrdenTrabajo";

export interface FormularioConstructor {
    id?: string;
    plantilla?: Plantilla;
    datos?: Record<string, any>;
    ot?: OrdenTrabajo;
    finalizada?: boolean;
}

export default class Formulario {
    id?: string;
    plantilla: Plantilla | null;
    datos: Record<string, any>;
    ot: OrdenTrabajo | null;
    finalizada: boolean;


    constructor({id, plantilla, datos, ot, finalizada}: FormularioConstructor) {
        this.id = id ? id : "";
        this.plantilla = plantilla ? plantilla : null;
        this.datos = datos ? datos : {};
        this.ot = ot ? ot : null;
        this.finalizada = finalizada ? finalizada : false;
    }
}