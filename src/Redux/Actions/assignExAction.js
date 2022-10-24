import { ASSIGNEXERCISE } from "../Types"


export const assignExercise=(data)=>
{
    return{
        type:ASSIGNEXERCISE,
        payload:data
    }
}