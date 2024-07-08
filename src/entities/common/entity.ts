

export abstract class Entity{
    private _dirtyProperties:string[];
    protected readonly _id:string;
    protected props:TemplateStringsArray;

    constructor(){
        
    }
    get id():string{
        return this._id;
    }
}
