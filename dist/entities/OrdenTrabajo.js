"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OrdenTrabajo = /** @class */ (function () {
    function OrdenTrabajo(_a) {
        var id = _a.id, equipo = _a.equipo, cliente = _a.cliente, servicio = _a.servicio, formularios = _a.formularios;
        this.id = id ? id : "";
        this.equipo = equipo ? equipo : null;
        this.cliente = cliente ? cliente : null;
        this.servicio = servicio ? servicio : null;
        this.formularios = formularios ? formularios : [];
    }
    return OrdenTrabajo;
}());
exports.default = OrdenTrabajo;
//# sourceMappingURL=OrdenTrabajo.js.map