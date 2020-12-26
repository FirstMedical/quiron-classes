export declare class ErrorGenerico extends Error {
    code: number;
    constructor(error: any);
}
export declare class ErrorUsuarioNoEncontrado extends Error {
    code: number;
    constructor();
}
export declare class ErrorCredencialesIncorrectas extends Error {
    code: number;
    constructor();
}
export declare class ErrorCambiarContraseña extends Error {
    code: number;
    constructor();
}
export declare class ErrorFaltaInformacion extends Error {
    code: number;
    constructor();
}
export declare class ErrorSinAutorizacion extends Error {
    code: number;
    constructor();
}
/**
 * Funcion que toma un error desde el servidor y lo convierte en un Objeto con clase
 * @param {Object} error Error que llega desde el servidor
 */
export declare function resolverError(error: any): ErrorGenerico | ErrorUsuarioNoEncontrado | ErrorCredencialesIncorrectas | ErrorCambiarContraseña | ErrorFaltaInformacion | ErrorSinAutorizacion;
//# sourceMappingURL=Errores.d.ts.map