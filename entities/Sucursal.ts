import Cliente from "./Cliente";
import Contacto from "./Contacto";

export default class Sucursal{
    identificacion: string;
    latitud: number;
    longitud: number;
    direccion: string;
    ciudad: string;
    departamento: string;
    contactos: Contacto[];

    constructor(identificacion?: string, latitud?: number, longitud?: number, direccion?: string, ciudad?: string, departamento?: string, cliente?: Cliente | null, contactos?: Contacto[]) {
        this.identificacion = identificacion? identificacion : "";
        this.latitud = latitud? latitud : 0;
        this.longitud = longitud? longitud : 0;
        this.direccion = direccion? direccion : "";
        this.ciudad = ciudad? ciudad : "";
        this.departamento = departamento? departamento : "";
        this.contactos = contactos? contactos : [];
    }
}
