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
var Sucursal_1 = __importDefault(require("./Sucursal"));
var class_transformer_1 = require("class-transformer");
var Equipo_1 = __importDefault(require("./Equipo"));
var Contacto_1 = __importDefault(require("./Contacto"));
var Cliente = /** @class */ (function (_super) {
    __extends(Cliente, _super);
    function Cliente(nombre, identificacion, sucursalPrincipal, sucursales, equipos, contactos) {
        var _this = _super.call(this) || this;
        _this.nombre = nombre ? nombre : "";
        _this.identificacion = identificacion ? identificacion : "";
        _this.sucursalPrincipal = sucursalPrincipal ? sucursalPrincipal : new Sucursal_1.default();
        _this.sucursales = sucursales ? sucursales : [];
        _this.equipos = equipos ? equipos : [];
        _this.contactos = contactos ? contactos : [];
        return _this;
    }
    __decorate([
        class_transformer_1.Type(function () { return Sucursal_1.default; }),
        __metadata("design:type", Sucursal_1.default)
    ], Cliente.prototype, "sucursalPrincipal", void 0);
    __decorate([
        class_transformer_1.Type(function () { return Sucursal_1.default; }),
        __metadata("design:type", Array)
    ], Cliente.prototype, "sucursales", void 0);
    __decorate([
        class_transformer_1.Type(function () { return Equipo_1.default; }),
        __metadata("design:type", Array)
    ], Cliente.prototype, "equipos", void 0);
    __decorate([
        class_transformer_1.Type(function () { return Contacto_1.default; }),
        __metadata("design:type", Array)
    ], Cliente.prototype, "contactos", void 0);
    return Cliente;
}(DBEntity_1.default));
exports.default = Cliente;
//# sourceMappingURL=Cliente.js.map