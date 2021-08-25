"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Formulario = /** @class */ (function () {
    function Formulario(_a) {
        var id = _a.id, plantilla = _a.plantilla, datos = _a.datos, ot = _a.ot, finalizada = _a.finalizada;
        this.id = id ? id : "";
        this.plantilla = plantilla ? plantilla : null;
        this.datos = datos ? datos : {};
        this.ot = ot ? ot : null;
        this.finalizada = finalizada ? finalizada : false;
    }
    return Formulario;
}());
exports.default = Formulario;
//# sourceMappingURL=Formulario.js.map