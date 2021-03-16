import DBEntity from "./auxiliar/DBEntity";

export default class Rol extends DBEntity{
    identificador: string = "";
    descripcion: string = "";
    permisos: number = 0;
}