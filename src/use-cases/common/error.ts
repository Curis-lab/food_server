export class ApplicationError extends Error{
    public readonly code:string;
    constructor(code:string, message?:string){
        super(message || 'Application Error');
        this.code = code;
    }
}