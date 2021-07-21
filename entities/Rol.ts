import DBEntity from "./auxiliar/DBEntity";
import Usuario from "./Usuario";

export default class Rol extends DBEntity {
    identificador: string = "";
    descripcion: string = "";
    permisos: number = 10000;
    usuarios: Usuario[];


    constructor(identificador?: string, descripcion?: string, permisos?: number, usuarios?: Usuario[]) {
        super();
        this.identificador = identificador ? identificador : "";
        this.descripcion = descripcion ? descripcion : "";
        this.permisos = permisos ? permisos : 10000;
        this.usuarios = usuarios ? usuarios : [];
    }
}