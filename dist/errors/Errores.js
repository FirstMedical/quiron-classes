"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolverError = exports.ErrorSinAutorizacion = exports.ErrorFaltaInformacion = exports.ErrorCambiarContraseña = exports.ErrorCredencialesIncorrectas = exports.ErrorUsuarioNoEncontrado = exports.ErrorGenerico = void 0;
var ErrorGenerico = /** @class */ (function (_super) {
    __extends(ErrorGenerico, _super);
    function ErrorGenerico(error) {
        var _this = _super.call(this, error.message) || this;
        _this.name = error.name;
        _this.stack = error.stack;
        _this.code = 0;
        return _this;
    }
    return ErrorGenerico;
}(Error));
exports.ErrorGenerico = ErrorGenerico;
var ErrorUsuarioNoEncontrado = /** @class */ (function (_super) {
    __extends(ErrorUsuarioNoEncontrado, _super);
    function ErrorUsuarioNoEncontrado() {
        var _this = _super.call(this, "Usuario no encontrado en la base de datos") || this;
        _this.name = "ErrorUsuarioNoEncontrado";
        _this.code = 1;
        return _this;
    }
    return ErrorUsuarioNoEncontrado;
}(Error));
exports.ErrorUsuarioNoEncontrado = ErrorUsuarioNoEncontrado;
var ErrorCredencialesIncorrectas = /** @class */ (function (_super) {
    __extends(ErrorCredencialesIncorrectas, _super);
    function ErrorCredencialesIncorrectas() {
        var _this = _super.call(this, "Credenciales invalidas") || this;
        _this.name = "ErrorCredencialesIncorrectas";
        _this.code = 2;
        return _this;
    }
    return ErrorCredencialesIncorrectas;
}(Error));
exports.ErrorCredencialesIncorrectas = ErrorCredencialesIncorrectas;
var ErrorCambiarContraseña = /** @class */ (function (_super) {
    __extends(ErrorCambiarContraseña, _super);
    function ErrorCambiarContraseña() {
        var _this = _super.call(this, "El servidor ha solicitado cambiar su contraseña") || this;
        _this.name = "ErrorCambiarContraseña";
        _this.code = 3;
        return _this;
    }
    return ErrorCambiarContraseña;
}(Error));
exports.ErrorCambiarContraseña = ErrorCambiarContraseña;
var ErrorFaltaInformacion = /** @class */ (function (_super) {
    __extends(ErrorFaltaInformacion, _super);
    function ErrorFaltaInformacion() {
        var _this = _super.call(this, "El servidor ha solicitado completar informacion faltante en su perfil") || this;
        _this.name = "ErrorFaltaInformacion";
        _this.code = 4;
        return _this;
    }
    return ErrorFaltaInformacion;
}(Error));
exports.ErrorFaltaInformacion = ErrorFaltaInformacion;
var ErrorSinAutorizacion = /** @class */ (function (_super) {
    __extends(ErrorSinAutorizacion, _super);
    function ErrorSinAutorizacion() {
        var _this = _super.call(this, "El usuario no esta autorizado para realizar la accion") || this;
        _this.name = "ErrorSinAutorizacion";
        _this.code = 5;
        return _this;
    }
    return ErrorSinAutorizacion;
}(Error));
exports.ErrorSinAutorizacion = ErrorSinAutorizacion;
/**
 * Funcion que toma un error desde el servidor y lo convierte en un Objeto con clase
 * @param {Object} error Error que llega desde el servidor
 */
function resolverError(error) {
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
exports.resolverError = resolverError;
//# sourceMappingURL=Errores.js.map