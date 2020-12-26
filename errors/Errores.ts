export class ErrorGenerico extends Error {
    code: number;
    constructor(error:any){
        super(error.message);
        this.name = error.name;
        this.stack = error.stack;
        this.code = 0;
    }
}

export class ErrorUsuarioNoEncontrado extends Error {
    code: number;
    constructor() {
        super("Usuario no encontrado en la base de datos");
        this.name = "ErrorUsuarioNoEncontrado";
        this.code = 1;
    }
}

export class ErrorCredencialesIncorrectas extends Error {
    code: number;
    constructor() {
        super("Credenciales invalidas");
        this.name = "ErrorCredencialesIncorrectas";
        this.code = 2;
    }
}

export class ErrorCambiarContraseña extends Error {
    code: number;
    constructor() {
        super("El servidor ha solicitado cambiar su contraseña");
        this.name = "ErrorCambiarContraseña";
        this.code = 3;
    }
}

export class ErrorFaltaInformacion extends Error {
    code: number;
    constructor() {
        super("El servidor ha solicitado completar informacion faltante en su perfil");
        this.name = "ErrorFaltaInformacion";
        this.code = 4;
    }
}

export class ErrorSinAutorizacion extends Error {
    code: number;
    constructor(){
        super("El usuario no esta autorizado para realizar la accion");
        this.name = "ErrorSinAutorizacion";
        this.code = 5;
    }
}

/**
 * Funcion que toma un error desde el servidor y lo convierte en un Objeto con clase
 * @param {Object} error Error que llega desde el servidor
 */
export function resolverError(error:any) {
    switch (error.code) {
        case 1:
            return new ErrorUsuarioNoEncontrado();
        case 2:
            return new ErrorCredencialesIncorrectas();
        case 3:
            return new ErrorCambiarContraseña();
        case 4:
            return new ErrorFaltaInformacion();
        case 5:
            return new ErrorSinAutorizacion();
        default:
            return new ErrorGenerico(error);
    }
}