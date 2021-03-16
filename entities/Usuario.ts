import Rol from "./Rol";
import {Exclude, Type} from "class-transformer";
import DBEntity from "./auxiliar/DBEntity";
export default class Usuario extends DBEntity{
    identificacion: string = "";
    nombres: string = "";
    apellidos: string = "";
    @Exclude()
    password: string = "";
    cambiar_password: boolean = false;
    no_informacion: boolean = false;
    @Type(()=>Rol)
    roles: Rol[] = [];
    firma: string = "";

    constructor(identificacion?: string, nombres?: string, apellidos?: string, password?: string, cambiar_password?: boolean, no_informacion?: boolean, roles?: Rol[], firma?: string) {
        super();
        this.identificacion = identificacion? identificacion : "";
        this.nombres = nombres? nombres : "";
        this.apellidos = apellidos? apellidos : "";
        this.password = password? password : "";
        this.cambiar_password = cambiar_password? cambiar_password : false;
        this.no_informacion = no_informacion? no_informacion : false;
        this.roles = roles? roles : [];
        this.firma = firma? firma : "";
    }
}