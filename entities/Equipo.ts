import OrdenTrabajo from "./OrdenTrabajo";
import DBEntity from "./auxiliar/DBEntity";

export default class Equipo extends DBEntity{
    serial: string = "";
    marca: string = "";
    ots: OrdenTrabajo[] = [];

    constructor(serial?: string, marca?: string, ots?: OrdenTrabajo[]) {
        super();
        this.serial = serial? serial : "";
        this.marca = marca? marca : "";
        this.ots = ots? ots : [];
    }
}