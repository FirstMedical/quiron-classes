export enum TipoReferencia{
    "PLANTILLA" = "Plantilla",
    "EQUIPO" = "EQUIPO",
    "CLIENTE" = "CLIENTE"
}

export class Referencia{
    tipo: TipoReferencia;
    identificador: string;

    constructor(tipo?: TipoReferencia, identificador?: string) {
        this.tipo = tipo? tipo : TipoReferencia.PLANTILLA;
        this.identificador = identificador? identificador : "raiz";
    }
}