import { AwilixContainer, createContainer, InjectionMode } from "awilix";

//share 1 container for all modules
// let container:AwilixContainer = null;

export function loadContainer():AwilixContainer{

    const container =  createContainer({
        injectionMode: InjectionMode.PROXY,
        strict:true
    });
     
    return container;
}

// export const getContainer = ()=>{
//     return container
// }
