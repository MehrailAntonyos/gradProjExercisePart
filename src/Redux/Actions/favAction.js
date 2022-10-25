import { ADDFAV, DELETEEXERCISE } from "../Types"

export const addFav=(data)=>
{
    return{
        type:ADDFAV,
        payload:data
    }
}

export const deleteExercise=(data)=>
{
    return{
        type:DELETEEXERCISE,
        payload:data
    }
}