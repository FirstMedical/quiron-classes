import {CampoSeccion} from "../components/campos/edicion/elementos";
import {Type} from "class-transformer";

export default class Plantilla{
    identificador: string = "";
    serial: string = "";
    version: number = 1;
    @Type(()=>CampoSeccion)
    modelo!: CampoSeccion;
    @Type(()=>Plantilla)
    relacionadas: Plantilla[] = [];
}