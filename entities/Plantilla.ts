import {CampoSeccion} from "../components/campos/edicion/elementos";
import {Type} from "class-transformer";
import Cacheable from "./auxiliar/Cacheable";

export default class Plantilla extends Cacheable{
    identificador: string = "";
    serial: string = "";
    version: number = 1;
    @Type(()=>CampoSeccion)
    modelo!: CampoSeccion;
    @Type(()=>Plantilla)
    relacionadas: Plantilla[] = [];
}