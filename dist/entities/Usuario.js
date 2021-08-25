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
var Rol_1 = __importDefault(require("./Rol"));
var class_transformer_1 = require("class-transformer");
var Usuario = /** @class */ (function () {
    function Usuario(_a) {
        var id = _a.id, identificacion = _a.identificacion, nombres = _a.nombres, apellidos = _a.apellidos, fecha_nacimiento = _a.fecha_nacimiento, password = _a.password, cambiar_password = _a.cambiar_password, no_informacion = _a.no_informacion, roles = _a.roles, firma = _a.firma;
        this.id = id ? id : "";
        this.identificacion = identificacion ? identificacion : "";
        this.nombres = nombres ? nombres : "";
        this.apellidos = apellidos ? apellidos : "";
        this.fecha_nacimiento = fecha_nacimiento ? fecha_nacimiento : new Date();
        this.password = password ? password : "";
        this.cambiar_password = cambiar_password ? cambiar_password : false;
        this.no_informacion = no_informacion ? no_informacion : false;
        this.roles = roles ? roles : [];
        this.firma = firma ? firma : "";
    }
    __decorate([
        class_transformer_1.Exclude(),
        __metadata("design:type", String)
    ], Usuario.prototype, "password", void 0);
    __decorate([
        class_transformer_1.Type(function () { return Rol_1.default; }),
        __metadata("design:type", Array)
    ], Usuario.prototype, "roles", void 0);
    return Usuario;
}());
exports.default = Usuario;
//# sourceMappingURL=Usuario.js.map