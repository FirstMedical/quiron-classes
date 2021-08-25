import Sucursal from "./Sucursal";
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
    sucursales: Sucursal[];
    constructor({ id, identificacion, nombres, apellidos, telefonos, emails, sucursales }: ContactoConstructor);
}
//# sourceMappingURL=Contacto.d.ts.map