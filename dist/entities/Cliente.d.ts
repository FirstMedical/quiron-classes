import DBEntity from "./auxiliar/DBEntity";
import Sucursal from "./Sucursal";
import Equipo from "./Equipo";
export interface Contacto {
    nombres: string;
    apellidos: string;
    telefonos: string[];
    emails: string[];
}
export default class Cliente extends DBEntity {
    nombre: string;
    identificacion: string;
    sucursalPrincipal: Sucursal;
    sucursales: Sucursal[];
    equipos: Equipo[];
    constructor(nombre?: string, identificacion?: string, sucursalPrincipal?: Sucursal, sucursales?: Sucursal[], equipos?: Equipo[]);
}
//# sourceMappingURL=Cliente.d.ts.map