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
Object.defineProperty(exports, "__esModule", { value: true });
var elementos_1 = require("../components/campos/edicion/elementos");
var class_transformer_1 = require("class-transformer");
var Plantilla = /** @class */ (function () {
    function Plantilla() {
        this.identificador = "";
        this.serial = "";
        this.version = 1;
        this.relacionadas = [];
    }
    __decorate([
        class_transformer_1.Type(function () { return elementos_1.CampoSeccion; }),
        __metadata("design:type", elementos_1.CampoSeccion)
    ], Plantilla.prototype, "modelo", void 0);
    __decorate([
        class_transformer_1.Type(function () { return Plantilla; }),
        __metadata("design:type", Array)
    ], Plantilla.prototype, "relacionadas", void 0);
    return Plantilla;
}());
exports.default = Plantilla;
//# sourceMappingURL=Plantilla.js.map