import DBEntity from "./auxiliar/DBEntity";

export default class Contacto extends DBEntity{
    nombres: string;
    apellidos: string;
    telefonos: string[];
    emails: string[];


    constructor(nombres?: string, apellidos?: string, telefonos?: string[], emails?: string[]) {
        super();
        this.nombres = nombres? nombres : "";
        this.apellidos = apellidos? apellidos : "";
        this.telefonos = telefonos? telefonos : [];
        this.emails = emails? emails : [];
    }
}