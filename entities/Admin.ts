export class Admin{
    constructor(
        public readonly name:string,
        public readonly password:string,
        public readonly address:string,
        public readonly phone:string,
        public readonly salt:string,
        public readonly status:boolean,
        public readonly coverImage:string[],
        public readonly role:string
    ){}
}
