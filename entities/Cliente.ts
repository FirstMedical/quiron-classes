import Sucursal from "./Sucursal";
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
    sucursales: Sucursal[];
    sucursalPrincipal: Sucursal;
    contactos: Contacto[];
    equipos: Equipo[];

    constructor({id, nombre, identificacion, sucursales, sucursalPrincipal, contactos, equipos}: ClienteConstructor) {
        this.id = id ? id : "";
        this.nombre = nombre ? nombre : "";
        this.identificacion = identificacion ? identificacion : "";
        this.sucursales = sucursales ? sucursales.map((element: any) => {
            return new Sucursal(element);
        }) : [];
        this.sucursalPrincipal = sucursalPrincipal ? new Sucursal(sucursalPrincipal) : new Sucursal({});
        this.contactos = contactos ? contactos.map((element: any) => {
            return new Contacto(element);
        }) : [];
        this.equipos = equipos ? equipos.map((element: any) => {
            return new Equipo(element);
        }) : [];
    }
}