import { DELETEEXERCISE } from "../Types";


export const deleteReducer = (state = { del: [] }, action) => {
    switch (action.type) {

        case DELETEEXERCISE:
            console.log("delete specific exercise - reducer");
            return {
                ...state,
                del: [...state.del, action.payload]
            }
        default: return state;
    }
}