class ErrorPropietario extends Error {
    code: number;
    status: number;

    constructor(message: string) {
        super(message);
        this.code = 0;
        this.status = 500;
    }
}

export class ErrorUsuarioNoEncontrado extends ErrorPropietario {
    constructor() {
        super("Usuario no encontrado en la base de datos");
        this.name = "ErrorUsuarioNoEncontrado";
        this.code = 1;
        this.status = 404;
    }
}

export class ErrorCredencialesIncorrectas extends ErrorPropietario {
    constructor() {
        super("Credenciales invalidas");
        this.name = "ErrorCredencialesIncorrectas";
        this.code = 2;
        this.status = 403;
    }
}

export class ErrorCambiarPass extends ErrorPropietario {
    constructor() {
        super("El servidor ha solicitado cambiar su contraseña");
        this.name = "ErrorCambiarContraseña";
        this.code = 3;
        this.status = 401;
    }
}

export class ErrorFaltaInformacion extends ErrorPropietario {
    constructor() {
        super("El servidor ha solicitado completar informacion faltante en su perfil");
        this.name = "ErrorFaltaInformacion";
        this.code = 4;
        this.status = 401;
    }
}

export class ErrorSinAutorizacion extends ErrorPropietario {
    constructor() {
        super("El usuario no esta autorizado para realizar la accion");
        this.name = "ErrorSinAutorizacion";
        this.code = 5;
        this.status = 403;
    }
}

export class ErrorTokenInvalido extends ErrorPropietario {
    constructor() {
        super("Token invalido enviado");
        this.name = "ErrorTokenInvalido";
        this.code = 6;
        this.status = 403;
    }
}

/**
 * Funcion que toma un error desde el servidor y lo convierte en un Objeto con clase
 * @param {Object} error Error que llega desde el servidor
 */
export function resolverError(error: any) {
    switch (error.code) {
        case 1:
            return new ErrorUsuarioNoEncontrado();
        case 2:
            return new ErrorCredencialesIncorrectas();
        case 3:
            return new ErrorCambiarPass();
        case 4:
            return new ErrorFaltaInformacion();
        case 5:
            return new ErrorSinAutorizacion();
        default:
            return new ErrorPropietario(error);
    }
}