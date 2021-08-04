import {RequestKind} from "./RequestKind";

export interface PermissionBinder {
    resource: string,
    action: string,
    description: string
}

export class Permission {
    module: string;
    kind: RequestKind;
    endpoint: string;
    resource: string;
    action: string;
    description: string;

    constructor(module: string, kind: RequestKind, endpoint: string, permissionBinder: PermissionBinder) {
        this.module = module;
        this.kind = kind;
        this.endpoint = endpoint;
        this.resource = permissionBinder.resource;
        this.action = permissionBinder.action;
        this.description = permissionBinder.description;
    }
}