import DBEntity from "./auxiliar/DBEntity";
import Usuario from "./Usuario";
import {Permission} from "../auth";

export default class Rol extends DBEntity {
    identificador: string = "";
    descripcion: string = "";
    permisos: Record<string, Permission> = {};
    usuarios: Usuario[];


    constructor(identificador?: string, descripcion?: string, permisos?: Record<string, Permission>, usuarios?: Usuario[]) {
        super();
        this.identificador = identificador ? identificador : "";
        this.descripcion = descripcion ? descripcion : "";
        this.permisos = permisos ? permisos : {};
        this.usuarios = usuarios ? usuarios : [];
    }
}