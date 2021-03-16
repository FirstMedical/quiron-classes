import { ESTADOS_RTS, ESTADOS_SEDE } from "./OrdenTrabajo";
import DBEntity from "./auxiliar/DBEntity";
export default class Formulario extends DBEntity {
    fecha: number;
    estado_correspondiente: ESTADOS_RTS | ESTADOS_SEDE;
    documento: any;
    constructor(fecha?: number, estado_correspondiente?: ESTADOS_RTS | ESTADOS_SEDE, documento?: any);
}
//# sourceMappingURL=Formulario.d.ts.map