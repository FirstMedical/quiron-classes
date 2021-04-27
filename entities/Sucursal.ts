import DBEntity from "./auxiliar/DBEntity";
import Cliente from "./Cliente";
import {Type} from "class-transformer";
import Contacto from "./Contacto";

export default class Sucursal extends DBEntity{
    identificacion: string;
    latitud: number;
    longitud: number;
    direccion: string;
    ciudad: string;
    departamento: string;
    @Type(()=>Cliente)
    cliente: Cliente | null;
    contactos: Contacto[];


    constructor(identificacion?: string, latitud?: number, longitud?: number, direccion?: string, ciudad?: string, departamento?: string, cliente?: Cliente | null, contactos?: Contacto[]) {
        super();
        this.identificacion = identificacion? identificacion : "";
        this.latitud = latitud? latitud : 0;
        this.longitud = longitud? longitud : 0;
        this.direccion = direccion? direccion : "";
        this.ciudad = ciudad? ciudad : "";
        this.departamento = departamento? departamento : "";
        this.cliente = cliente? cliente : null;
        this.contactos = contactos? contactos : [];
    }
}
