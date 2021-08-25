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
var Sucursal_1 = __importDefault(require("./Sucursal"));
var class_transformer_1 = require("class-transformer");
var Equipo_1 = __importDefault(require("./Equipo"));
var Contacto_1 = __importDefault(require("./Contacto"));
var Cliente = /** @class */ (function () {
    function Cliente(_a) {
        var id = _a.id, nombre = _a.nombre, identificacion = _a.identificacion, sucursales = _a.sucursales, sucursalPrincipal = _a.sucursalPrincipal, contactos = _a.contactos, equipos = _a.equipos;
        this.id = id ? id : "";
        this.nombre = nombre ? nombre : "";
        this.identificacion = identificacion ? identificacion : "";
        this.sucursales = sucursales ? sucursales : [];
        this.sucursalPrincipal = sucursalPrincipal ? sucursalPrincipal : null;
        this.contactos = contactos ? contactos : [];
        this.equipos = equipos ? equipos : [];
    }
    __decorate([
        class_transformer_1.Type(function () { return Sucursal_1.default; }),
        __metadata("design:type", Array)
    ], Cliente.prototype, "sucursales", void 0);
    __decorate([
        class_transformer_1.Type(function () { return Sucursal_1.default; }),
        __metadata("design:type", Object)
    ], Cliente.prototype, "sucursalPrincipal", void 0);
    __decorate([
        class_transformer_1.Type(function () { return Contacto_1.default; }),
        __metadata("design:type", Array)
    ], Cliente.prototype, "contactos", void 0);
    __decorate([
        class_transformer_1.Type(function () { return Equipo_1.default; }),
        __metadata("design:type", Array)
    ], Cliente.prototype, "equipos", void 0);
    return Cliente;
}());
exports.default = Cliente;
//# sourceMappingURL=Cliente.js.map