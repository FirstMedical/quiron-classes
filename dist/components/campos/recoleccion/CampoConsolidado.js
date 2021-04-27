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
exports.CampoConsolidado = void 0;
var edicion_1 = require("../edicion");
var CampoConsolidado = /** @class */ (function (_super) {
    __extends(CampoConsolidado, _super);
    function CampoConsolidado(elemento, etiqueta, dependiente, presentacion, referencia, value) {
        var _this = _super.call(this, elemento, etiqueta, dependiente, presentacion, referencia) || this;
        _this.value = value ? value : undefined;
        return _this;
    }
    return CampoConsolidado;
}(edicion_1.Campo));
exports.CampoConsolidado = CampoConsolidado;
//# sourceMappingURL=CampoConsolidado.js.map