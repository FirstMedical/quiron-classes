"use strict";
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
var Contacto_1 = __importDefault(require("./Contacto"));
var class_transformer_1 = require("class-transformer");
var Sucursal = /** @class */ (function () {
    function Sucursal(_a) {
        var id = _a.id, identificacion = _a.identificacion, latitud = _a.latitud, longitud = _a.longitud, direccion = _a.direccion, ciudad = _a.ciudad, departamento = _a.departamento, contactos = _a.contactos;
        this.id = id ? id : "";
        this.identificacion = identificacion ? identificacion : "";
        this.latitud = latitud ? latitud : 0;
        this.longitud = longitud ? longitud : 0;
        this.direccion = direccion ? direccion : "";
        this.ciudad = ciudad ? ciudad : "";
        this.departamento = departamento ? departamento : "";
        this.contactos = contactos ? contactos : [];
    }
    __decorate([
        class_transformer_1.Type(function () { return Contacto_1.default; }),
        __metadata("design:type", Array)
    ], Sucursal.prototype, "contactos", void 0);
    return Sucursal;
}());
exports.default = Sucursal;
//# sourceMappingURL=Sucursal.js.map