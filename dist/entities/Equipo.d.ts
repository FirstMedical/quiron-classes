/// <reference types="node" />
import OrdenTrabajo from "./OrdenTrabajo";
import Cliente from "./Cliente";
import Sucursal from "./Sucursal";
import IndexableEntity from "./auxiliar/IndexableEntity";
export interface EquipoConstructor {
    id?: string;
    serial?: string;
    marca?: string;
    modelo?: string;
    serie?: string;
    codigo?: string;
    garantia?: Buffer;
    propietario?: Cliente;
    sucursal?: Sucursal;
    ots?: OrdenTrabajo[];
    atributos?: Record<string, any>;
}
export default class Equipo extends IndexableEntity {
    id: string;
    serial: string;
    marca: string;
    modelo: string;
    serie: string;
    codigo: string;
    garantia: Buffer;
    propietario: Cliente;
    sucursal: Sucursal;
    ots: OrdenTrabajo[];
    atributos: Record<string, any>;
    constructor({ id, serial, marca, modelo, serie, codigo, ots, garantia, propietario, sucursal, atributos }: EquipoConstructor);
}
//# sourceMappingURL=Equipo.d.ts.map