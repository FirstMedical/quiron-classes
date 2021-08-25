"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var OrdenTrabajo_1 = __importDefault(require("./OrdenTrabajo"));
var Cliente_1 = __importDefault(require("./Cliente"));
var Equipo = /** @class */ (function () {
    function Equipo(_a) {
        var id = _a.id, serial = _a.serial, marca = _a.marca, modelo = _a.modelo, serie = _a.serie, codigo = _a.codigo, ots = _a.ots, garantia = _a.garantia, propietario = _a.propietario, atributos = _a.atributos;
        this.serial = "";
        this.marca = "";
        this.modelo = "";
        this.serie = "";
        this.codigo = "";
        this.id = id ? id : "";
        this.serial = serial ? serial : "";
        this.marca = marca ? marca : "";
        this.modelo = modelo ? modelo : "";
        this.serie = serie ? serie : "";
        this.codigo = codigo ? codigo : "";
        this.garantia = garantia ? garantia : new Buffer("");
        this.propietario = propietario ? new Cliente_1.default(propietario) : new Cliente_1.default({});
        this.ots = ots ? ots : [];
        this.ots = ots ? ots.map(function (element) {
            return new OrdenTrabajo_1.default(element);
        }) : [];
        this.atributos = atributos ? atributos : {};
    }
    return Equipo;
}());
exports.default = Equipo;
//# sourceMappingURL=Equipo.js.map