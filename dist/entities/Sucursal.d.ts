import DBEntity from "./auxiliar/DBEntity";
import Cliente from "./Cliente";
import Contacto from "./Contacto";
export interface Ubicacion {
    latitud: number;
    longitud: number;
    direccion: string;
    ciudad: string;
    departamento: string;
}
export default class Sucursal extends DBEntity {
    identificacion: string;
    ubicacion: Ubicacion;
    cliente: Cliente | null;
    contactos: Contacto[];
    constructor(identificacion?: string, ubicacion?: Ubicacion, cliente?: Cliente, contactos?: Contacto[]);
}
//# sourceMappingURL=Sucursal.d.ts.map