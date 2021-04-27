import OrdenTrabajo from "./OrdenTrabajo";
import DBEntity from "./auxiliar/DBEntity";
import {Type} from "class-transformer";
import Cliente from "./Cliente";

export default class Equipo extends DBEntity{
    serial: string = "";
    marca: string = "";
    modelo: string = "";
    serie: string = "";
    codigo: string = "";
    garantia: File | null = null;
    cliente: Cliente;
    @Type(()=>OrdenTrabajo)
    ots: OrdenTrabajo[] = [];

    constructor(serial?: string, marca?: string, modelo?: string, serie?: string, codigo?: string, garantia?: File | null, cliente?:Cliente, ots?: OrdenTrabajo[]) {
        super();
        this.serial = serial? serial : "";
        this.marca = marca? marca : "";
        this.modelo = modelo? modelo : "";
        this.serie = serie? serie : "";
        this.codigo = codigo? codigo : "";
        this.garantia = garantia? garantia : null;
        this.cliente = cliente? cliente : new Cliente();
        this.ots = ots? ots : [];
    }
}