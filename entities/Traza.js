"use strict";
exports.__esModule = true;
var OrdenTrabajo_1 = require("./OrdenTrabajo");
var AccionOrdenTrabajo_1 = require("./AccionOrdenTrabajo");
var Usuario_1 = require("./Usuario");
var Traza = /** @class */ (function () {
    function Traza() {
        /** Orden de trabajo a la que pertenece la traza */
        this.ot = new OrdenTrabajo_1["default"]();
        /** Accion que se realiza sobre el equipo */
        this.accion = new AccionOrdenTrabajo_1["default"]();
        /** Usuario del sistema encargado y responsable de la accion que se realiza */
        this.encargado = new Usuario_1["default"]();
        /** Fecha y hora en la que se realizó la accion trazada */
        this.fecha = 0;
    }
    return Traza;
}());
exports["default"] = Traza;
