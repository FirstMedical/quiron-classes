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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var DBEntity_1 = __importDefault(require("./auxiliar/DBEntity"));
var Cliente_1 = __importDefault(require("./Cliente"));
var class_transformer_1 = require("class-transformer");
var Sucursal = /** @class */ (function (_super) {
    __extends(Sucursal, _super);
    function Sucursal(identificacion, latitud, longitud, direccion, ciudad, departamento, cliente, contactos) {
        var _this = _super.call(this) || this;
        _this.identificacion = identificacion ? identificacion : "";
        _this.latitud = latitud ? latitud : 0;
        _this.longitud = longitud ? longitud : 0;
        _this.direccion = direccion ? direccion : "";
        _this.ciudad = ciudad ? ciudad : "";
        _this.departamento = departamento ? departamento : "";
        _this.cliente = cliente ? cliente : null;
        _this.contactos = contactos ? contactos : [];
        return _this;
    }
    __decorate([
        class_transformer_1.Type(function () { return Cliente_1.default; }),
        __metadata("design:type", Object)
    ], Sucursal.prototype, "cliente", void 0);
    return Sucursal;
}(DBEntity_1.default));
exports.default = Sucursal;
//# sourceMappingURL=Sucursal.js.map