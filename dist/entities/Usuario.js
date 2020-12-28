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
    function Usuario() {
        this.identificacion = "";
        this.nombres = "";
        this.apellidos = "";
        this.password = "";
        this.cambiar_password = false;
        this.no_informacion = false;
        this.roles = [];
        this.firma = "";
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