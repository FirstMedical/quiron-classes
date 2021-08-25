import {CampoSeccion} from "../components/campos/edicion";
import {Type} from "class-transformer";
import Cacheable from "./auxiliar/Cacheable";
import {v4} from "uuid";

export interface PlantillaConstructor {
    serial: string;
    version: number;
    identificador: string;
    modelo: CampoSeccion;
    relacionadas: Plantilla[];
}

export default class Plantilla extends Cacheable {
    serial: string;
    version: number;
    identificador: string;
    @Type(() => CampoSeccion)
    modelo: CampoSeccion;
    @Type(() => Plantilla)
    relacionadas: Plantilla[];

    constructor({serial, version, identificador, modelo, relacionadas}: PlantillaConstructor) {
        super();
        this.serial = serial ? serial : v4();
        this.version = version ? version : 1;
        this.identificador = identificador ? identificador : "";
        this.modelo = modelo ? modelo : new CampoSeccion("raiz");
        this.relacionadas = relacionadas ? relacionadas : [];
    }
}