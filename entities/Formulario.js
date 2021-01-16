"use strict";
exports.__esModule = true;
var OrdenTrabajo_1 = require("./OrdenTrabajo");
var Formulario = /** @class */ (function () {
    function Formulario() {
        this.fecha = 0;
        this.estado_correspondiente = OrdenTrabajo_1.ESTADOS_SEDE.CREADA;
    }
    return Formulario;
}());
exports["default"] = Formulario;
