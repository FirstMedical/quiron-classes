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
var Rol_1 = __importDefault(require("./Rol"));
var class_transformer_1 = require("class-transformer");
var DBEntity_1 = __importDefault(require("./auxiliar/DBEntity"));
var Usuario = /** @class */ (function (_super) {
    __extends(Usuario, _super);
    function Usuario(identificacion, nombres, apellidos, password, cambiar_password, no_informacion, roles, firma, fecha_nacimiento) {
        var _this = _super.call(this) || this;
        _this.identificacion = "";
        _this.nombres = "";
        _this.apellidos = "";
        _this.fecha_nacimiento = new Date();
        _this.password = "";
        _this.cambiar_password = false;
        _this.no_informacion = false;
        _this.roles = [];
        _this.firma = "";
        _this.identificacion = identificacion ? identificacion : "";
        _this.nombres = nombres ? nombres : "";
        _this.apellidos = apellidos ? apellidos : "";
        _this.fecha_nacimiento = fecha_nacimiento ? fecha_nacimiento : new Date();
        _this.password = password ? password : "";
        _this.cambiar_password = cambiar_password ? cambiar_password : false;
        _this.no_informacion = no_informacion ? no_informacion : false;
        _this.roles = roles ? roles : [];
        _this.firma = firma ? firma : "";
        return _this;
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
}(DBEntity_1.default));
exports.default = Usuario;
//# sourceMappingURL=Usuario.js.map