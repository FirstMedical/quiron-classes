import Sucursal from "./Sucursal";
import {Type} from "class-transformer";

export interface ContactoConstructor {
    id?: string;
    identificacion?: string;
    nombres?: string;
    apellidos?: string;
    telefonos?: string[];
    emails?: string[];
    sucursales?: Sucursal[];
}

export default class Contacto {
    id?: string;
    identificacion: string;
    nombres: string;
    apellidos: string;
    telefonos: string[];
    emails: string[];
    @Type(() => Sucursal)
    sucursales: Sucursal[];

    constructor({id, identificacion, nombres, apellidos, telefonos, emails, sucursales}: ContactoConstructor) {
        this.id = id ? id : "";
        this.identificacion = identificacion ? identificacion : "";
        this.nombres = nombres ? nombres : "";
        this.apellidos = apellidos ? apellidos : "";
        this.telefonos = telefonos ? telefonos : [];
        this.emails = emails ? emails : [];
        this.sucursales = sucursales ? sucursales : [];
    }
}