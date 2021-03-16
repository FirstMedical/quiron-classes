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
var DBEntity_1 = __importDefault(require("./auxiliar/DBEntity"));
var Equipo = /** @class */ (function (_super) {
    __extends(Equipo, _super);
    function Equipo(serial, marca, ots) {
        var _this = _super.call(this) || this;
        _this.serial = "";
        _this.marca = "";
        _this.ots = [];
        _this.serial = serial ? serial : "";
        _this.marca = marca ? marca : "";
        _this.ots = ots ? ots : [];
        return _this;
    }
    return Equipo;
}(DBEntity_1.default));
exports.default = Equipo;
//# sourceMappingURL=Equipo.js.map