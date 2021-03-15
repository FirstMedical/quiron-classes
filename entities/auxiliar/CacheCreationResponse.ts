import Cacheable from "./Cacheable";
export class CacheCreationResponse<T extends Cacheable>{
    logID: string = "";
    object!: T;
}