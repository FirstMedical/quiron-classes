export declare enum TipoReferencia {
    "PLANTILLA" = "Plantilla",
    "EQUIPO" = "EQUIPO",
    "CLIENTE" = "CLIENTE"
}
export declare class Referencia {
    tipo: TipoReferencia;
    identificador: string;
    constructor(tipo?: TipoReferencia, identificador?: string);
}
//# sourceMappingURL=Referencia.d.ts.map