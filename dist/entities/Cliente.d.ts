import DBEntity from "./auxiliar/DBEntity";
import Sucursal from "./Sucursal";
import Equipo from "./Equipo";
import Contacto from "./Contacto";
export default class Cliente extends DBEntity {
    nombre: string;
    identificacion: string;
    sucursalPrincipal: Sucursal | null;
    sucursales: Sucursal[];
    equipos: Equipo[];
    contactos: Contacto[];
    constructor(nombre?: string, identificacion?: string, sucursalPrincipal?: Sucursal, sucursales?: Sucursal[], equipos?: Equipo[], contactos?: Contacto[]);
}
//# sourceMappingURL=Cliente.d.ts.map