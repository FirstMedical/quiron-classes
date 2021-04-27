export declare enum TipoReferencia {
    "PLANTILLA" = "Plantilla",
    "EQUIPO" = "EQUIPO",
    "CLIENTE" = "CLIENTE"
}
export declare class Referencia {
    activated: boolean;
    tipo: TipoReferencia;
    identificador: string;
    constructor(activated?: boolean, tipo?: TipoReferencia, identificador?: string);
}
//# sourceMappingURL=Referencia.d.ts.map