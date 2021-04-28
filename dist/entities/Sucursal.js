"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sucursal = /** @class */ (function () {
    function Sucursal(identificacion, latitud, longitud, direccion, ciudad, departamento, contactos) {
        this.identificacion = identificacion ? identificacion : "";
        this.latitud = latitud ? latitud : 0;
        this.longitud = longitud ? longitud : 0;
        this.direccion = direccion ? direccion : "";
        this.ciudad = ciudad ? ciudad : "";
        this.departamento = departamento ? departamento : "";
        this.contactos = contactos ? contactos : [];
    }
    return Sucursal;
}());
exports.default = Sucursal;
//# sourceMappingURL=Sucursal.js.map