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
    sucursalPrincipal: Sucursal | null;
    contactos: Contacto[];
    equipos: Equipo[];
    constructor({ id, nombre, identificacion, sucursales, sucursalPrincipal, contactos, equipos }: ClienteConstructor);
}
//# sourceMappingURL=Cliente.d.ts.map