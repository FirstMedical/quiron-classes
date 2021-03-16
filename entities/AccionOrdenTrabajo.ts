import DBEntity from "./auxiliar/DBEntity";

export default class AccionOrdenTrabajo extends DBEntity{
    /** String de codigo unico de la orden de trabajo */
    uuid: string = "";
    /** Codigo humano asignado a la orden de trabajo */
    codigo: string = "";
    /** Nombre de la accion realizada */
    nombre: string = "";
    /** Descripcion de la accion realizada */
    descripcion: string = "";

    constructor(uuid?: string, codigo?: string, nombre?: string, descripcion?: string) {
        super();
        this.uuid = uuid? uuid : "";
        this.codigo = codigo? codigo : "";
        this.nombre = nombre? nombre : "";
        this.descripcion = descripcion? descripcion : "";
    }
}