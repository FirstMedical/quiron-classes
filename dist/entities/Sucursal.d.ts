import DBEntity from "./auxiliar/DBEntity";
import Cliente from "./Cliente";
import Contacto from "./Contacto";
export default class Sucursal extends DBEntity {
    identificacion: string;
    latitud: number;
    longitud: number;
    direccion: string;
    ciudad: string;
    departamento: string;
    cliente: Cliente | null;
    contactos: Contacto[];
    constructor(identificacion?: string, latitud?: number, longitud?: number, direccion?: string, ciudad?: string, departamento?: string, cliente?: Cliente | null, contactos?: Contacto[]);
}
//# sourceMappingURL=Sucursal.d.ts.map