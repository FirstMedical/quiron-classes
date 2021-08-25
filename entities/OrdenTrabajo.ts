import Equipo from "./Equipo";
import Formulario from "./Formulario";
import Cliente from "./Cliente";
import Servicio from "./Servicio";

export interface OrdenTrabajoConstructor {
    id?: string;
    equipo?: Equipo;
    cliente?: Cliente;
    servicio?: Servicio;
    formularios?: Formulario[];
}

export default class OrdenTrabajo {
    id?: string;
    equipo: Equipo | null;
    cliente: Cliente | null;
    servicio: Servicio | null;
    formularios: Formulario[];


    constructor({id, equipo, cliente, servicio, formularios}: OrdenTrabajoConstructor) {
        this.id = id ? id : "";
        this.equipo = equipo ? equipo : null;
        this.cliente = cliente ? cliente : null;
        this.servicio = servicio ? servicio : null;
        this.formularios = formularios ? formularios : [];
    }
}