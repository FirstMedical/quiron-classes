import DBEntity from "./auxiliar/DBEntity";
export default class Contacto extends DBEntity {
    nombres: string;
    apellidos: string;
    telefonos: string[];
    emails: string[];
    constructor(nombres?: string, apellidos?: string, telefonos?: string[], emails?: string[]);
}
//# sourceMappingURL=Contacto.d.ts.map