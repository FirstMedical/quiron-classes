import DBEntity from "./auxiliar/DBEntity";
import Usuario from "./Usuario";

export default class Rol extends DBEntity {
    identificador: string = "";
    descripcion: string = "";
    permisos: Record<string, string> = {};
    usuarios: Usuario[];


    constructor(identificador?: string, descripcion?: string, permisos?: Record<string, string>, usuarios?: Usuario[]) {
        super();
        this.identificador = identificador ? identificador : "";
        this.descripcion = descripcion ? descripcion : "";
        this.permisos = permisos ? permisos : {};
        this.usuarios = usuarios ? usuarios : [];
    }
}