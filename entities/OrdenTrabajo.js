"use strict";
exports.__esModule = true;
exports.ESTADOS_RTS_NOMBRE = exports.ESTADOS_RTS = exports.ESTADOS_SEDE_NOMBRE = exports.ESTADOS_SEDE = exports.TIPO_OT = void 0;
var Usuario_1 = require("./Usuario");
var Equipo_1 = require("./Equipo");
var TIPO_OT;
(function (TIPO_OT) {
    TIPO_OT[TIPO_OT["SEDE"] = 0] = "SEDE";
    TIPO_OT[TIPO_OT["RTS"] = 1] = "RTS";
})(TIPO_OT = exports.TIPO_OT || (exports.TIPO_OT = {}));
;
var ESTADOS_SEDE;
(function (ESTADOS_SEDE) {
    ESTADOS_SEDE[ESTADOS_SEDE["CREADA"] = 0] = "CREADA";
    ESTADOS_SEDE[ESTADOS_SEDE["EQUIPO_ALMACENADO"] = 1] = "EQUIPO_ALMACENADO";
    ESTADOS_SEDE[ESTADOS_SEDE["EQUIPO_EN_DIAGNOSTICO"] = 2] = "EQUIPO_EN_DIAGNOSTICO";
    ESTADOS_SEDE[ESTADOS_SEDE["CONTROL_CALIDAD"] = 3] = "CONTROL_CALIDAD";
    ESTADOS_SEDE[ESTADOS_SEDE["EQUIPO_ESTIBADO"] = 4] = "EQUIPO_ESTIBADO";
    ESTADOS_SEDE[ESTADOS_SEDE["FINALIZADA"] = 5] = "FINALIZADA";
})(ESTADOS_SEDE = exports.ESTADOS_SEDE || (exports.ESTADOS_SEDE = {}));
;
exports.ESTADOS_SEDE_NOMBRE = [
    "CREADA",
    "EQUIPO_ALMACENADO",
    "EQUIPO_EN_DIAGNOSTICO",
    "CONTROL_CALIDAD",
    "EQUIPO_ESTIBADO",
    "FINALIZADA"
];
var ESTADOS_RTS;
(function (ESTADOS_RTS) {
    ESTADOS_RTS[ESTADOS_RTS["CREADA"] = 0] = "CREADA";
    ESTADOS_RTS[ESTADOS_RTS["DIAGNOSTICO"] = 1] = "DIAGNOSTICO";
    ESTADOS_RTS[ESTADOS_RTS["ESPERANDO_REPUESTOS"] = 2] = "ESPERANDO_REPUESTOS";
    ESTADOS_RTS[ESTADOS_RTS["REPARACION"] = 3] = "REPARACION";
    ESTADOS_RTS[ESTADOS_RTS["CONTROL_CALIDAD"] = 4] = "CONTROL_CALIDAD";
    ESTADOS_RTS[ESTADOS_RTS["FINALIZADA"] = 5] = "FINALIZADA";
})(ESTADOS_RTS = exports.ESTADOS_RTS || (exports.ESTADOS_RTS = {}));
;
exports.ESTADOS_RTS_NOMBRE = [
    "CREADA",
    "DIAGNOSTICO",
    "ESPERANDO_REPUESTOS",
    "REPARACION",
    "CONTROL_CALIDAD",
    "FINALIZADA"
];
var OrdenTrabajo = /** @class */ (function () {
    function OrdenTrabajo() {
        this.creador = new Usuario_1["default"]();
        this.equipo = new Equipo_1["default"]();
        this.fecha = 0;
        this.tipo_sede = TIPO_OT.SEDE;
        this.estado = ESTADOS_SEDE.CREADA;
        this.trazas = [];
        this.formularios = [];
    }
    return OrdenTrabajo;
}());
exports["default"] = OrdenTrabajo;
