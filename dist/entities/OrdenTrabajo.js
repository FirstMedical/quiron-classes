"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ESTADOS_RTS_NOMBRE = exports.ESTADOS_RTS = exports.ESTADOS_SEDE_NOMBRE = exports.ESTADOS_SEDE = exports.TIPO_OT = void 0;
var Usuario_1 = __importDefault(require("./Usuario"));
var Equipo_1 = __importDefault(require("./Equipo"));
var DBEntity_1 = __importDefault(require("./auxiliar/DBEntity"));
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
var OrdenTrabajo = /** @class */ (function (_super) {
    __extends(OrdenTrabajo, _super);
    function OrdenTrabajo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.creador = new Usuario_1.default();
        _this.equipo = new Equipo_1.default();
        _this.fecha = 0;
        _this.tipo_sede = TIPO_OT.SEDE;
        _this.estado = ESTADOS_SEDE.CREADA;
        _this.trazas = [];
        _this.formularios = [];
        return _this;
    }
    return OrdenTrabajo;
}(DBEntity_1.default));
exports.default = OrdenTrabajo;
//# sourceMappingURL=OrdenTrabajo.js.map