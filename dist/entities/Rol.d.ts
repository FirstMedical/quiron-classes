import DBEntity from "./auxiliar/DBEntity";
export default class Rol extends DBEntity {
    identificador: string;
    descripcion: string;
    permisos: number;
    constructor(identificador?: string, descripcion?: string, permisos?: number);
}
//# sourceMappingURL=Rol.d.ts.map