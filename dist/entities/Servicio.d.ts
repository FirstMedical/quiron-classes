import Plantilla from "./Plantilla";
export interface ServicioConstructor {
    id?: string;
    plantillas?: Plantilla[];
    atributos?: Record<string, any>;
}
export default class Servicio {
    id?: string;
    plantillas: Plantilla[];
    atributos: Record<string, any>;
    constructor({ id, plantillas, atributos }: ServicioConstructor);
}
//# sourceMappingURL=Servicio.d.ts.map