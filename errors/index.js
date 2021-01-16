"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
exports.__esModule = true;
exports.ErrorEnum = void 0;
__exportStar(require("./Errores"), exports);
var ErrorEnum;
(function (ErrorEnum) {
    ErrorEnum[ErrorEnum["USUARIO_NO_ENCONTRADO"] = 0] = "USUARIO_NO_ENCONTRADO";
    ErrorEnum[ErrorEnum["CREDENCIALES_INCORRECTAS"] = 1] = "CREDENCIALES_INCORRECTAS";
    ErrorEnum[ErrorEnum["CAMBIO_PASS"] = 2] = "CAMBIO_PASS";
    ErrorEnum[ErrorEnum["FALTA_INFORMACION"] = 3] = "FALTA_INFORMACION";
    ErrorEnum[ErrorEnum["SIN_AUTORIZACION"] = 4] = "SIN_AUTORIZACION";
    ErrorEnum[ErrorEnum["TOKEN_INVALIDO"] = 5] = "TOKEN_INVALIDO";
})(ErrorEnum = exports.ErrorEnum || (exports.ErrorEnum = {}));
