import OrdenTrabajo from "./OrdenTrabajo";
import DBEntity from "./auxiliar/DBEntity";
import Cliente from "./Cliente";
export default class Equipo extends DBEntity {
    serial: string;
    marca: string;
    modelo: string;
    serie: string;
    codigo: string;
    garantia: File | null;
    cliente: Cliente;
    ots: OrdenTrabajo[];
    constructor(serial?: string, marca?: string, modelo?: string, serie?: string, codigo?: string, garantia?: File | null, cliente?: Cliente, ots?: OrdenTrabajo[]);
}
//# sourceMappingURL=Equipo.d.ts.map