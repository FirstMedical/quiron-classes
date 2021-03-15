"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errors = exports.entities = void 0;
require("reflect-metadata");
var entities = __importStar(require("./entities"));
exports.entities = entities;
var errors = __importStar(require("./errors"));
exports.errors = errors;
var elementos_1 = require("./components/campos/edicion/elementos");
var edicion_1 = require("./components/campos/edicion");
var class_transformer_1 = require("class-transformer");
var texto = new elementos_1.CampoEntradaTexto('texto', new edicion_1.Dependiente());
var check = new elementos_1.CampoChequeo('chequeo', new edicion_1.Dependiente(), ['1', '2', '3']);
var seccion = new elementos_1.CampoSeccion('seccion', new edicion_1.Dependiente(), [texto, check]);
console.log(seccion);
//const json = classToPlain(seccion);
var json = JSON.parse(JSON.stringify(seccion));
console.log(json);
var reconstructed = class_transformer_1.plainToClass(elementos_1.CampoSeccion, json);
console.log(reconstructed.elementos);
//# sourceMappingURL=index.js.map