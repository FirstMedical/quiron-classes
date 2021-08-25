"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rol = /** @class */ (function () {
    function Rol(_a) {
        var identificador = _a.identificador, descripcion = _a.descripcion, permisos = _a.permisos, usuarios = _a.usuarios;
        this.identificador = identificador ? identificador : "";
        this.descripcion = descripcion ? descripcion : "";
        this.permisos = permisos ? permisos : {};
        this.usuarios = usuarios ? usuarios : [];
    }
    return Rol;
}());
exports.default = Rol;
//# sourceMappingURL=Rol.js.map