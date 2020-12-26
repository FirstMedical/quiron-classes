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
exports.resolverError = exports.ErrorTokenInvalido = exports.ErrorSinAutorizacion = exports.ErrorFaltaInformacion = exports.ErrorCambiarPass = exports.ErrorCredencialesIncorrectas = exports.ErrorUsuarioNoEncontrado = void 0;
var ErrorPropietario = /** @class */ (function (_super) {
    __extends(ErrorPropietario, _super);
    function ErrorPropietario(message) {
        var _this = _super.call(this, message) || this;
        _this.code = 0;
        _this.status = 500;
        return _this;
    }
    return ErrorPropietario;
}(Error));
var ErrorUsuarioNoEncontrado = /** @class */ (function (_super) {
    __extends(ErrorUsuarioNoEncontrado, _super);
    function ErrorUsuarioNoEncontrado() {
        var _this = _super.call(this, "Usuario no encontrado en la base de datos") || this;
        _this.name = "ErrorUsuarioNoEncontrado";
        _this.code = 1;
        _this.status = 404;
        return _this;
    }
    return ErrorUsuarioNoEncontrado;
}(ErrorPropietario));
exports.ErrorUsuarioNoEncontrado = ErrorUsuarioNoEncontrado;
var ErrorCredencialesIncorrectas = /** @class */ (function (_super) {
    __extends(ErrorCredencialesIncorrectas, _super);
    function ErrorCredencialesIncorrectas() {
        var _this = _super.call(this, "Credenciales invalidas") || this;
        _this.name = "ErrorCredencialesIncorrectas";
        _this.code = 2;
        _this.status = 403;
        return _this;
    }
    return ErrorCredencialesIncorrectas;
}(ErrorPropietario));
exports.ErrorCredencialesIncorrectas = ErrorCredencialesIncorrectas;
var ErrorCambiarPass = /** @class */ (function (_super) {
    __extends(ErrorCambiarPass, _super);
    function ErrorCambiarPass() {
        var _this = _super.call(this, "El servidor ha solicitado cambiar su contraseña") || this;
        _this.name = "ErrorCambiarContraseña";
        _this.code = 3;
        _this.status = 401;
        return _this;
    }
    return ErrorCambiarPass;
}(ErrorPropietario));
exports.ErrorCambiarPass = ErrorCambiarPass;
var ErrorFaltaInformacion = /** @class */ (function (_super) {
    __extends(ErrorFaltaInformacion, _super);
    function ErrorFaltaInformacion() {
        var _this = _super.call(this, "El servidor ha solicitado completar informacion faltante en su perfil") || this;
        _this.name = "ErrorFaltaInformacion";
        _this.code = 4;
        _this.status = 401;
        return _this;
    }
    return ErrorFaltaInformacion;
}(ErrorPropietario));
exports.ErrorFaltaInformacion = ErrorFaltaInformacion;
var ErrorSinAutorizacion = /** @class */ (function (_super) {
    __extends(ErrorSinAutorizacion, _super);
    function ErrorSinAutorizacion() {
        var _this = _super.call(this, "El usuario no esta autorizado para realizar la accion") || this;
        _this.name = "ErrorSinAutorizacion";
        _this.code = 5;
        _this.status = 403;
        return _this;
    }
    return ErrorSinAutorizacion;
}(ErrorPropietario));
exports.ErrorSinAutorizacion = ErrorSinAutorizacion;
var ErrorTokenInvalido = /** @class */ (function (_super) {
    __extends(ErrorTokenInvalido, _super);
    function ErrorTokenInvalido() {
        var _this = _super.call(this, "Token invalido enviado") || this;
        _this.name = "ErrorTokenInvalido";
        _this.code = 6;
        _this.status = 403;
        return _this;
    }
    return ErrorTokenInvalido;
}(ErrorPropietario));
exports.ErrorTokenInvalido = ErrorTokenInvalido;
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
            return new ErrorCambiarPass();
        case 4:
            return new ErrorFaltaInformacion();
        case 5:
            return new ErrorSinAutorizacion();
        default:
            return new ErrorPropietario(error);
    }
}
exports.resolverError = resolverError;
//# sourceMappingURL=Errores.js.map