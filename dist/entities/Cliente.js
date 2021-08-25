"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Sucursal_1 = __importDefault(require("./Sucursal"));
var Equipo_1 = __importDefault(require("./Equipo"));
var Contacto_1 = __importDefault(require("./Contacto"));
var Cliente = /** @class */ (function () {
    function Cliente(_a) {
        var id = _a.id, nombre = _a.nombre, identificacion = _a.identificacion, sucursales = _a.sucursales, sucursalPrincipal = _a.sucursalPrincipal, contactos = _a.contactos, equipos = _a.equipos;
        this.id = id ? id : "";
        this.nombre = nombre ? nombre : "";
        this.identificacion = identificacion ? identificacion : "";
        this.sucursales = sucursales ? sucursales.map(function (element) {
            return new Sucursal_1.default(element);
        }) : [];
        this.sucursalPrincipal = sucursalPrincipal ? new Sucursal_1.default(sucursalPrincipal) : new Sucursal_1.default({});
        this.contactos = contactos ? contactos.map(function (element) {
            return new Contacto_1.default(element);
        }) : [];
        this.equipos = equipos ? equipos.map(function (element) {
            return new Equipo_1.default(element);
        }) : [];
    }
    return Cliente;
}());
exports.default = Cliente;
//# sourceMappingURL=Cliente.js.map