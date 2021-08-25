/// <reference types="node" />
import OrdenTrabajo from "./OrdenTrabajo";
import Cliente from "./Cliente";
export interface EquipoConstructor {
    id?: string;
    serial?: string;
    marca?: string;
    modelo?: string;
    serie?: string;
    codigo?: string;
    garantia?: Buffer;
    propietario?: Cliente;
    ots?: OrdenTrabajo[];
    atributos?: Record<string, any>;
}
export default class Equipo {
    id: string;
    serial: string;
    marca: string;
    modelo: string;
    serie: string;
    codigo: string;
    garantia: Buffer;
    propietario: Cliente;
    ots: OrdenTrabajo[];
    atributos: Record<string, any>;
    constructor({ id, serial, marca, modelo, serie, codigo, ots, garantia, propietario, atributos }: EquipoConstructor);
}
//# sourceMappingURL=Equipo.d.ts.map