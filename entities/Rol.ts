import DBEntity from "./auxiliar/DBEntity";

export default class Rol extends DBEntity{
    identificador: string = "";
    descripcion: string = "";
    permisos: number = 10000;


    constructor(identificador?: string, descripcion?: string, permisos?: number) {
        super();
        this.identificador = identificador? identificador : "";
        this.descripcion = descripcion? descripcion : "";
        this.permisos = permisos? permisos : 10000;
    }
}