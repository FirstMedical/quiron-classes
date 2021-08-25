import OrdenTrabajo from "./OrdenTrabajo";
import Cliente from "./Cliente";
import Sucursal from "./Sucursal";

export interface EquipoConstructor {
    id?: string;
    serial?: string;
    marca?: string;
    modelo?: string;
    serie?: string;
    codigo?: string;
    garantia?: Buffer;
    propietario?: Cliente;
    sucursal?: Sucursal;
    ots?: OrdenTrabajo[];
    atributos?: Record<string, any>;
}

export default class Equipo {
    id: string;
    serial: string = "";
    marca: string = "";
    modelo: string = "";
    serie: string = "";
    codigo: string = "";
    garantia: Buffer;
    propietario: Cliente;
    sucursal: Sucursal;
    ots: OrdenTrabajo[];
    atributos: Record<string, any>;

    constructor({
                    id,
                    serial,
                    marca,
                    modelo,
                    serie,
                    codigo,
                    ots,
                    garantia,
                    propietario,
                    sucursal,
                    atributos
                }: EquipoConstructor) {
        this.id = id ? id : "";
        this.serial = serial ? serial : "";
        this.marca = marca ? marca : "";
        this.modelo = modelo ? modelo : "";
        this.serie = serie ? serie : "";
        this.codigo = codigo ? codigo : "";
        this.garantia = garantia ? garantia : new Buffer("");
        this.propietario = propietario ? new Cliente(propietario) : new Cliente({});
        this.sucursal = sucursal ? new Sucursal(sucursal) : new Sucursal({});
        this.ots = ots ? ots.map((element: any) => {
            return new OrdenTrabajo(element);
        }) : [];
        this.atributos = atributos ? atributos : {};
    }
}