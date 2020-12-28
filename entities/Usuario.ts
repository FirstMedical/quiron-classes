import Rol from "./Rol";
import {Exclude, Type} from "class-transformer";
export default class Usuario{
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
}