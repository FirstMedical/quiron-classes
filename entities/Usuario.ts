import Rol from "./Rol";

export default interface Usuario{
    identificacion: string,
    nombres: string,
    apellidos: string,
    password: string,
    cambiar_password: boolean,
    no_informacion: boolean,
    roles: Rol[],
    firma: string
}