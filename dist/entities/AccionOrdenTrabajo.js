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
var DBEntity_1 = __importDefault(require("./auxiliar/DBEntity"));
var AccionOrdenTrabajo = /** @class */ (function (_super) {
    __extends(AccionOrdenTrabajo, _super);
    function AccionOrdenTrabajo(uuid, codigo, nombre, descripcion) {
        var _this = _super.call(this) || this;
        /** String de codigo unico de la orden de trabajo */
        _this.uuid = "";
        /** Codigo humano asignado a la orden de trabajo */
        _this.codigo = "";
        /** Nombre de la accion realizada */
        _this.nombre = "";
        /** Descripcion de la accion realizada */
        _this.descripcion = "";
        _this.uuid = uuid ? uuid : "";
        _this.codigo = codigo ? codigo : "";
        _this.nombre = nombre ? nombre : "";
        _this.descripcion = descripcion ? descripcion : "";
        return _this;
    }
    return AccionOrdenTrabajo;
}(DBEntity_1.default));
exports.default = AccionOrdenTrabajo;
//# sourceMappingURL=AccionOrdenTrabajo.js.map