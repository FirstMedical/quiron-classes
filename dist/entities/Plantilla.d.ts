import { CampoSeccion } from "../components/campos/edicion/elementos";
import Cacheable from "./auxiliar/Cacheable";
export default class Plantilla extends Cacheable {
    identificador: string;
    serial: string;
    version: number;
    modelo: CampoSeccion;
    relacionadas: Plantilla[];
}
//# sourceMappingURL=Plantilla.d.ts.map