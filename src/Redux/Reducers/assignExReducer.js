import { ASSIGNEXERCISE } from "../Types";


export const assignExReducer = (state = { assignEx: [] }, action) => {
    switch (action.type) {

        case ASSIGNEXERCISE:
            console.log("Exercise Assigned");
            return {
                ...state,
                assignEx: [...state.assignEx, action.payload]
            }
        default: return state;
    }
}