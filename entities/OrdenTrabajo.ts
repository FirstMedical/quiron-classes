import Usuario from "./Usuario";
import Equipo from "./Equipo";
import Traza from "./Traza";
import Formulario from "./Formulario";
import DBEntity from "./auxiliar/DBEntity";

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

export default class OrdenTrabajo extends DBEntity{
    creador: Usuario = new Usuario();
    equipo: Equipo = new Equipo();
    tipo_servicio: any;
    public fecha: number = 0;
    public tipo_sede: TIPO_OT = TIPO_OT.SEDE;
    public estado: ESTADOS_SEDE | ESTADOS_RTS = ESTADOS_SEDE.CREADA;
    public trazas: Traza[] = [];
    public formularios: Formulario[] = [];


    constructor(creador?: Usuario, equipo?: Equipo, tipo_servicio?: any, fecha?: number, tipo_sede?: TIPO_OT, estado?: ESTADOS_SEDE | ESTADOS_RTS, trazas?: Traza[], formularios?: Formulario[]) {
        super();
        this.creador = creador? creador : new Usuario();
        this.equipo = equipo? equipo : new Equipo();
        this.tipo_servicio = tipo_servicio;
        this.fecha = fecha? fecha : 0;
        this.tipo_sede = tipo_sede? tipo_sede : TIPO_OT.SEDE;
        this.estado = estado ? estado : ESTADOS_SEDE.CREADA;
        this.trazas = trazas? trazas : [];
        this.formularios = formularios? formularios : [];
    }
}