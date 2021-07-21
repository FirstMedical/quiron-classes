import DBEntity from "./auxiliar/DBEntity";
import Usuario from "./Usuario";
export default class Rol extends DBEntity {
    identificador: string;
    descripcion: string;
    permisos: number;
    usuarios: Usuario[];
    constructor(identificador?: string, descripcion?: string, permisos?: number, usuarios?: Usuario[]);
}
//# sourceMappingURL=Rol.d.ts.map