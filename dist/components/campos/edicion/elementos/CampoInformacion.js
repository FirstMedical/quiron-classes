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
exports.CampoInformacion = void 0;
var Campo_1 = require("../Campo");
var index_1 = require("../../index");
var CampoInformacion = /** @class */ (function (_super) {
    __extends(CampoInformacion, _super);
    function CampoInformacion(etiqueta, dependiente, informacion) {
        var _this = _super.call(this, index_1.TiposElementos.informacion, etiqueta, dependiente) || this;
        _this.informacion = '';
        _this.informacion = informacion ? informacion : '';
        return _this;
    }
    return CampoInformacion;
}(Campo_1.Campo));
exports.CampoInformacion = CampoInformacion;
//# sourceMappingURL=CampoInformacion.js.map