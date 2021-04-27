import DBEntity from "./auxiliar/DBEntity";
import Sucursal from "./Sucursal";
import {Type} from "class-transformer";
import Equipo from "./Equipo";

export interface Contacto{
    nombres: string,
    apellidos: string,
    telefonos: string[],
    emails: string[]
}

export default class Cliente extends DBEntity{
    nombre: string;
    identificacion: string;
    @Type(()=>Sucursal)
    sucursalPrincipal: Sucursal;
    @Type(()=>Sucursal)
    sucursales: Sucursal[];
    @Type(()=>Equipo)
    equipos: Equipo[];

    constructor(nombre?: string, identificacion?: string, sucursalPrincipal?: Sucursal, sucursales?: Sucursal[], equipos?: Equipo[]) {
        super();
        this.nombre = nombre? nombre : "";
        this.identificacion = identificacion? identificacion : "";
        this.sucursalPrincipal = sucursalPrincipal? sucursalPrincipal : new Sucursal();
        this.sucursales = sucursales? sucursales : [];
        this.equipos = equipos? equipos : [];
    }
}