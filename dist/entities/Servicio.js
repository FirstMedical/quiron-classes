"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Servicio = /** @class */ (function () {
    function Servicio(_a) {
        var id = _a.id, plantillas = _a.plantillas, atributos = _a.atributos;
        this.id = id ? id : "";
        this.plantillas = plantillas ? plantillas : [];
        this.atributos = atributos ? atributos : [];
    }
    return Servicio;
}());
exports.default = Servicio;
//# sourceMappingURL=Servicio.js.map