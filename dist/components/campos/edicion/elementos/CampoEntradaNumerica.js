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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampoEntradaNumerica = void 0;
var Campo_1 = require("../Campo");
var index_1 = require("../../index");
var CampoEntradaNumerica = /** @class */ (function (_super) {
    __extends(CampoEntradaNumerica, _super);
    function CampoEntradaNumerica(etiqueta, dependiente) {
        return _super.call(this, index_1.TiposElementos['entrada-numerica'], etiqueta, dependiente) || this;
    }
    return CampoEntradaNumerica;
}(Campo_1.Campo));
exports.CampoEntradaNumerica = CampoEntradaNumerica;
//# sourceMappingURL=CampoEntradaNumerica.js.map