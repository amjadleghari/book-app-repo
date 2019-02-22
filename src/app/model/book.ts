import { Resource } from './resource';

export class Book extends Resource {
    constructor(_id?: number, private _title?: string, private _category?: string, private _description?: string) {
        super(_id);
    }

    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }
    get category() {
        return this._category;
    }
    set category(value) {
        this._category = value;
    }

    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }
}
