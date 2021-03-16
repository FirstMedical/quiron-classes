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
var OrdenTrabajo_1 = __importDefault(require("./OrdenTrabajo"));
var AccionOrdenTrabajo_1 = __importDefault(require("./AccionOrdenTrabajo"));
var Usuario_1 = __importDefault(require("./Usuario"));
var DBEntity_1 = __importDefault(require("./auxiliar/DBEntity"));
var Traza = /** @class */ (function (_super) {
    __extends(Traza, _super);
    function Traza() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** Orden de trabajo a la que pertenece la traza */
        _this.ot = new OrdenTrabajo_1.default();
        /** Accion que se realiza sobre el equipo */
        _this.accion = new AccionOrdenTrabajo_1.default();
        /** Usuario del sistema encargado y responsable de la accion que se realiza */
        _this.encargado = new Usuario_1.default();
        /** Fecha y hora en la que se realizó la accion trazada */
        _this.fecha = 0;
        return _this;
    }
    return Traza;
}(DBEntity_1.default));
exports.default = Traza;
//# sourceMappingURL=Traza.js.map