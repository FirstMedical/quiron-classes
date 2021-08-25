import Sucursal from "./Sucursal";
import {Type} from "class-transformer";
import Equipo from "./Equipo";
import Contacto from "./Contacto";

export interface ClienteConstructor {
    id?: string;
    nombre?: string;
    identificacion?: string;
    sucursales?: Sucursal[];
    sucursalPrincipal?: Sucursal;
    contactos?: Contacto[];
    equipos?: Equipo[];
}

export default class Cliente {
    id?: string;
    nombre: string;
    identificacion: string;
    @Type(() => Sucursal)
    sucursales: Sucursal[];
    @Type(() => Sucursal)
    sucursalPrincipal: Sucursal | null;
    @Type(() => Contacto)
    contactos: Contacto[];
    @Type(() => Equipo)
    equipos: Equipo[];

    constructor({id, nombre, identificacion, sucursales, sucursalPrincipal, contactos, equipos}: ClienteConstructor) {
        this.id = id ? id : "";
        this.nombre = nombre ? nombre : "";
        this.identificacion = identificacion ? identificacion : "";
        this.sucursales = sucursales ? sucursales : [];
        this.sucursalPrincipal = sucursalPrincipal ? sucursalPrincipal : null;
        this.contactos = contactos ? contactos : [];
        this.equipos = equipos ? equipos : [];
    }
}