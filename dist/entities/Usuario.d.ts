import Rol from "./Rol";
import DBEntity from "./auxiliar/DBEntity";
export default class Usuario extends DBEntity {
    identificacion: string;
    nombres: string;
    apellidos: string;
    password: string;
    cambiar_password: boolean;
    no_informacion: boolean;
    roles: Rol[];
    firma: string;
}
//# sourceMappingURL=Usuario.d.ts.map