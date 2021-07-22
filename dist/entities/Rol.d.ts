import DBEntity from "./auxiliar/DBEntity";
import Usuario from "./Usuario";
export default class Rol extends DBEntity {
    identificador: string;
    descripcion: string;
    permisos: Record<string, string>;
    usuarios: Usuario[];
    constructor(identificador?: string, descripcion?: string, permisos?: Record<string, string>, usuarios?: Usuario[]);
}
//# sourceMappingURL=Rol.d.ts.map