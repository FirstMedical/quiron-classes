import OrdenTrabajo from "./OrdenTrabajo";
import {Type} from "class-transformer";
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
    serial: string = "";
    marca: string = "";
    modelo: string = "";
    serie: string = "";
    codigo: string = "";
    garantia: Buffer | null = null;
    propietario: Cliente;
    @Type(() => OrdenTrabajo)
    ots: OrdenTrabajo[] = [];
    atributos: Record<string, any>;

    constructor({id, serial, marca, modelo, serie, codigo, ots, garantia, propietario, atributos}: EquipoConstructor) {
        this.id = id ? id : "";
        this.serial = serial ? serial : "";
        this.marca = marca ? marca : "";
        this.modelo = modelo ? modelo : "";
        this.serie = serie ? serie : "";
        this.codigo = codigo ? codigo : "";
        this.garantia = garantia ? garantia : null;
        this.propietario = propietario ? propietario : new Cliente({});
        this.ots = ots ? ots : [];
        this.atributos = atributos ? atributos : {};
    }
}