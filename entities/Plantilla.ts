import {CampoSeccion} from "../components/campos/edicion/elementos";
import {Type} from "class-transformer";
import Cacheable from "./auxiliar/Cacheable";
import {uuid} from "uuidv4";

export default class Plantilla extends Cacheable{
    identificador: string = "";
    serial: string = "";
    version: number = 1;
    @Type(()=>CampoSeccion)
    modelo!: CampoSeccion;
    @Type(()=>Plantilla)
    relacionadas: Plantilla[] = [];

    constructor(identificador?: string, serial?: string, version?: number, modelo?: CampoSeccion, relacionadas?: Plantilla[]) {
        super();
        this.identificador = identificador? identificador : "";
        this.serial = serial? serial : uuid();
        this.version = version? version : 1;
        this.modelo = modelo? modelo : new CampoSeccion("raiz");
        this.relacionadas = relacionadas? relacionadas : [];
    }
}