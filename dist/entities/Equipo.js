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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var OrdenTrabajo_1 = __importDefault(require("./OrdenTrabajo"));
var Cliente_1 = __importDefault(require("./Cliente"));
var Sucursal_1 = __importDefault(require("./Sucursal"));
var IndexableEntity_1 = __importDefault(require("./auxiliar/IndexableEntity"));
var Equipo = /** @class */ (function (_super) {
    __extends(Equipo, _super);
    function Equipo(_a) {
        var id = _a.id, serial = _a.serial, marca = _a.marca, modelo = _a.modelo, serie = _a.serie, codigo = _a.codigo, ots = _a.ots, garantia = _a.garantia, propietario = _a.propietario, sucursal = _a.sucursal, atributos = _a.atributos;
        var _this = _super.call(this, ["serial", "marca", "serie", "codigo"]) || this;
        _this.serial = "";
        _this.marca = "";
        _this.modelo = "";
        _this.serie = "";
        _this.codigo = "";
        _this.id = id ? id : "";
        _this.serial = serial ? serial : "";
        _this.marca = marca ? marca : "";
        _this.modelo = modelo ? modelo : "";
        _this.serie = serie ? serie : "";
        _this.codigo = codigo ? codigo : "";
        _this.garantia = garantia ? garantia : new Buffer("");
        _this.propietario = propietario ? new Cliente_1.default(propietario) : new Cliente_1.default({});
        _this.sucursal = sucursal ? new Sucursal_1.default(sucursal) : new Sucursal_1.default({});
        _this.ots = ots ? ots.map(function (element) {
            return new OrdenTrabajo_1.default(element);
        }) : [];
        _this.atributos = atributos ? atributos : {};
        return _this;
    }
    return Equipo;
}(IndexableEntity_1.default));
exports.default = Equipo;
//# sourceMappingURL=Equipo.js.map