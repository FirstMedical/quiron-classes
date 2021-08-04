import { RequestKind } from "./RequestKind";
export interface PermissionBinder {
    resource: string;
    action: string;
    description: string;
}
export declare class Permission {
    module: string;
    kind: RequestKind;
    endpoint: string;
    resource: string;
    action: string;
    description: string;
    constructor(module: string, kind: RequestKind, endpoint: string, permissionBinder: PermissionBinder);
}
//# sourceMappingURL=Permission.d.ts.map