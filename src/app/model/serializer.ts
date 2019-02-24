import { Resource } from './resource';

export abstract class Serializer {
    fromJson(json: any): Resource {return new Resource(); }
    toJson(resource: Resource): any {
        return {}; }
}
