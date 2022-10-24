import { ADDFAV } from "../Types"


export const addFav=(data)=>
{
    return{
        type:ADDFAV,
        payload:data
    }
}