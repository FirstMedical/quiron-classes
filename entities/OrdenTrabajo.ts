import Usuario from "./Usuario";
import Equipo from "./Equipo";
import Traza from "./Traza";
import Formulario from "./Formulario";

export enum TIPO_OT {
    "SEDE",
    "RTS"
};

export enum ESTADOS_SEDE {
    "CREADA",
    "EQUIPO_ALMACENADO",
    "EQUIPO_EN_DIAGNOSTICO",
    "CONTROL_CALIDAD",
    "EQUIPO_ESTIBADO",
    "FINALIZADA"
};

export const ESTADOS_SEDE_NOMBRE: string[] = [
    "CREADA",
    "EQUIPO_ALMACENADO",
    "EQUIPO_EN_DIAGNOSTICO",
    "CONTROL_CALIDAD",
    "EQUIPO_ESTIBADO",
    "FINALIZADA"
];

export enum ESTADOS_RTS {
    "CREADA",
    "DIAGNOSTICO",
    "ESPERANDO_REPUESTOS",
    "REPARACION",
    "CONTROL_CALIDAD",
    "FINALIZADA"
};

export const ESTADOS_RTS_NOMBRE: string[] = [
    "CREADA",
    "DIAGNOSTICO",
    "ESPERANDO_REPUESTOS",
    "REPARACION",
    "CONTROL_CALIDAD",
    "FINALIZADA"
];

export default class OrdenTrabajo {
    creador: Usuario = new Usuario();
    equipo: Equipo = new Equipo();
    tipo_servicio: any;
    public fecha: number = 0;
    public tipo_sede: TIPO_OT = TIPO_OT.SEDE;
    public estado: ESTADOS_SEDE | ESTADOS_RTS = ESTADOS_SEDE.CREADA;
    public trazas: Traza[] = [];
    public formularios: Formulario[] = [];
}