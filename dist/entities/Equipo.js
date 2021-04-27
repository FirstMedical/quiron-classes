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
var OrdenTrabajo_1 = __importDefault(require("./OrdenTrabajo"));
var DBEntity_1 = __importDefault(require("./auxiliar/DBEntity"));
var class_transformer_1 = require("class-transformer");
var Cliente_1 = __importDefault(require("./Cliente"));
var Equipo = /** @class */ (function (_super) {
    __extends(Equipo, _super);
    function Equipo(serial, marca, modelo, serie, codigo, garantia, cliente, ots) {
        var _this = _super.call(this) || this;
        _this.serial = "";
        _this.marca = "";
        _this.modelo = "";
        _this.serie = "";
        _this.codigo = "";
        _this.garantia = null;
        _this.ots = [];
        _this.serial = serial ? serial : "";
        _this.marca = marca ? marca : "";
        _this.modelo = modelo ? modelo : "";
        _this.serie = serie ? serie : "";
        _this.codigo = codigo ? codigo : "";
        _this.garantia = garantia ? garantia : null;
        _this.cliente = cliente ? cliente : new Cliente_1.default();
        _this.ots = ots ? ots : [];
        return _this;
    }
    __decorate([
        class_transformer_1.Type(function () { return OrdenTrabajo_1.default; }),
        __metadata("design:type", Array)
    ], Equipo.prototype, "ots", void 0);
    return Equipo;
}(DBEntity_1.default));
exports.default = Equipo;
//# sourceMappingURL=Equipo.js.map