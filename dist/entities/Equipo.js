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
var OrdenTrabajo_1 = __importDefault(require("./OrdenTrabajo"));
var class_transformer_1 = require("class-transformer");
var Cliente_1 = __importDefault(require("./Cliente"));
var Equipo = /** @class */ (function () {
    function Equipo(_a) {
        var id = _a.id, serial = _a.serial, marca = _a.marca, modelo = _a.modelo, serie = _a.serie, codigo = _a.codigo, ots = _a.ots, garantia = _a.garantia, propietario = _a.propietario, atributos = _a.atributos;
        this.serial = "";
        this.marca = "";
        this.modelo = "";
        this.serie = "";
        this.codigo = "";
        this.garantia = null;
        this.ots = [];
        this.id = id ? id : "";
        this.serial = serial ? serial : "";
        this.marca = marca ? marca : "";
        this.modelo = modelo ? modelo : "";
        this.serie = serie ? serie : "";
        this.codigo = codigo ? codigo : "";
        this.garantia = garantia ? garantia : null;
        this.propietario = propietario ? propietario : new Cliente_1.default({});
        this.ots = ots ? ots : [];
        this.atributos = atributos ? atributos : {};
    }
    __decorate([
        class_transformer_1.Type(function () { return OrdenTrabajo_1.default; }),
        __metadata("design:type", Array)
    ], Equipo.prototype, "ots", void 0);
    return Equipo;
}());
exports.default = Equipo;
//# sourceMappingURL=Equipo.js.map