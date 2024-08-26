
export interface FoodProps{
    vandorId:string,
    name:string,
    description:string,
    category:string,
    foodType:string,
    readyTime: number,
    price:number,
    rating:number,
    images:[string]
}

export class Food{
    constructor(props: FoodProps){}
}