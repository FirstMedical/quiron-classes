import DBEntity from "./auxiliar/DBEntity";
import Cliente from "./Cliente";
import {Type} from "class-transformer";
import Contacto from "./Contacto";

export interface Ubicacion{
    latitud: number,
    longitud: number,
    direccion: string,
    ciudad: string,
    departamento: string
}

export default class Sucursal extends DBEntity{
    identificacion: string;
    ubicacion: Ubicacion;
    @Type(()=>Cliente)
    cliente: Cliente;
    contactos: Contacto[];

    constructor(identificacion?: string, ubicacion?: Ubicacion, cliente?: Cliente, contactos?: Contacto[]) {
        super();
        this.identificacion = identificacion ? identificacion : "";
        this.ubicacion = ubicacion? ubicacion : {
            ciudad: "Bogota",
            departamento: "Cundinamarca",
            direccion: "",
            latitud: 4.6097100,
            longitud: -74.0817500
        };
        this.cliente = cliente? cliente : new Cliente();
        this.contactos = contactos? contactos : [];
    }
}
