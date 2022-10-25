import { DELETEEXERCISE } from "../Types"

export const deleteExercise=(data)=>
{
    return{
        type:DELETEEXERCISE,
        payload:data
    }
}