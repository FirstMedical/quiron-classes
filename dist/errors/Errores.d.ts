declare class ErrorPropietario extends Error {
    code: number;
    status: number;
    constructor(message: string);
}
export declare class ErrorUsuarioNoEncontrado extends ErrorPropietario {
    constructor();
}
export declare class ErrorCredencialesIncorrectas extends ErrorPropietario {
    constructor();
}
export declare class ErrorCambiarPass extends ErrorPropietario {
    constructor();
}
export declare class ErrorFaltaInformacion extends ErrorPropietario {
    constructor();
}
export declare class ErrorSinAutorizacion extends ErrorPropietario {
    constructor();
}
export declare class ErrorTokenInvalido extends ErrorPropietario {
    constructor();
}
/**
 * Funcion que toma un error desde el servidor y lo convierte en un Objeto con clase
 * @param {Object} error Error que llega desde el servidor
 */
export declare function resolverError(error: any): ErrorPropietario;
export {};
//# sourceMappingURL=Errores.d.ts.map