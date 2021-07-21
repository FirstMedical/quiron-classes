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
var Rol = /** @class */ (function (_super) {
    __extends(Rol, _super);
    function Rol(identificador, descripcion, permisos, usuarios) {
        var _this = _super.call(this) || this;
        _this.identificador = "";
        _this.descripcion = "";
        _this.permisos = {};
        _this.identificador = identificador ? identificador : "";
        _this.descripcion = descripcion ? descripcion : "";
        _this.permisos = permisos ? permisos : {};
        _this.usuarios = usuarios ? usuarios : [];
        return _this;
    }
    return Rol;
}(DBEntity_1.default));
exports.default = Rol;
//# sourceMappingURL=Rol.js.map