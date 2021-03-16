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
var OrdenTrabajo_1 = require("./OrdenTrabajo");
var DBEntity_1 = __importDefault(require("./auxiliar/DBEntity"));
var Formulario = /** @class */ (function (_super) {
    __extends(Formulario, _super);
    function Formulario(fecha, estado_correspondiente, documento) {
        var _this = _super.call(this) || this;
        _this.fecha = 0;
        _this.estado_correspondiente = OrdenTrabajo_1.ESTADOS_SEDE.CREADA;
        _this.fecha = fecha ? fecha : 0;
        _this.estado_correspondiente = estado_correspondiente ? estado_correspondiente : OrdenTrabajo_1.ESTADOS_SEDE.CREADA;
        _this.documento = documento;
        return _this;
    }
    return Formulario;
}(DBEntity_1.default));
exports.default = Formulario;
//# sourceMappingURL=Formulario.js.map