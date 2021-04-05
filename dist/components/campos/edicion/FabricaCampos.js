"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FabricaCampos = void 0;
var elementos_1 = require("./elementos");
var CampoTabla_1 = require("./elementos/CampoTabla");
var CampoTablaCompuesta_1 = require("./elementos/CampoTablaCompuesta");
var CampoParametro_1 = require("./elementos/CampoParametro");
var CampoFecha_1 = require("./elementos/CampoFecha");
var CampoFirma_1 = require("./elementos/CampoFirma");
var CampoImagen_1 = require("./elementos/CampoImagen");
var FabricaCampos = /** @class */ (function () {
    function FabricaCampos() {
    }
    FabricaCampos.fabricarCampoGenerico = function (elemento) {
        // @ts-ignore
        return new this.camposCreables[elemento.toString()]();
    };
    FabricaCampos.fabricarCampoConEtiqueta = function (elemento, etiqueta) {
        // @ts-ignore
        return new this.camposCreables[elemento.toString()](etiqueta);
    };
    FabricaCampos.fabricarCampoGenericoString = function (elemento) {
        // @ts-ignore
        return new this.camposCreables[elemento.toString()]();
    };
    FabricaCampos.camposCreables = {
        'entrada-texto': elementos_1.CampoEntradaTexto,
        'entrada-numerica': elementos_1.CampoEntradaNumerica,
        seccion: elementos_1.CampoSeccion,
        chequeo: elementos_1.CampoChequeo,
        seleccion: elementos_1.CampoSeleccion,
        tabla: CampoTabla_1.CampoTabla,
        'tabla-compuesta': CampoTablaCompuesta_1.CampoTablaCompuesta,
        parametro: CampoParametro_1.CampoParametro,
        fecha: CampoFecha_1.CampoFecha,
        firma: CampoFirma_1.CampoFirma,
        imagen: CampoImagen_1.CampoImagen
    };
    return FabricaCampos;
}());
exports.FabricaCampos = FabricaCampos;
//# sourceMappingURL=FabricaCampos.js.map