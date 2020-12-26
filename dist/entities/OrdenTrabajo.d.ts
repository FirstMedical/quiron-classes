import Usuario from "./Usuario";
import Equipo from "./Equipo";
import Traza from "./Traza";
import Formulario from "./Formulario";
export declare enum TIPO_OT {
    "SEDE" = 0,
    "RTS" = 1
}
export declare enum ESTADOS_SEDE {
    "CREADA" = 0,
    "EQUIPO_ALMACENADO" = 1,
    "EQUIPO_EN_DIAGNOSTICO" = 2,
    "CONTROL_CALIDAD" = 3,
    "EQUIPO_ESTIBADO" = 4,
    "FINALIZADA" = 5
}
export declare const ESTADOS_SEDE_NOMBRE: string[];
export declare enum ESTADOS_RTS {
    "CREADA" = 0,
    "DIAGNOSTICO" = 1,
    "ESPERANDO_REPUESTOS" = 2,
    "REPARACION" = 3,
    "CONTROL_CALIDAD" = 4,
    "FINALIZADA" = 5
}
export declare const ESTADOS_RTS_NOMBRE: string[];
export default class OrdenTrabajo {
    creador: Usuario;
    equipo: Equipo;
    tipo_servicio: any;
    fecha: number;
    tipo_sede: TIPO_OT;
    estado: ESTADOS_SEDE | ESTADOS_RTS;
    trazas: Traza[];
    formularios: Formulario[];
}
//# sourceMappingURL=OrdenTrabajo.d.ts.map