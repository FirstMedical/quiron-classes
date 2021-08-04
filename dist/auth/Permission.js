"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Permission = void 0;
var Permission = /** @class */ (function () {
    function Permission(module, kind, endpoint, permissionBinder) {
        this.module = module;
        this.kind = kind;
        this.endpoint = endpoint;
        this.resource = permissionBinder.resource;
        this.action = permissionBinder.action;
        this.description = permissionBinder.description;
    }
    return Permission;
}());
exports.Permission = Permission;
//# sourceMappingURL=Permission.js.map