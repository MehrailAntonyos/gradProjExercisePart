import { ADDFAV } from "../Types";


export const favReducer = (state = { fav: [] }, action) => {
    switch (action.type) {

        case ADDFAV:
            console.log("add favourite ........................");
            console.log(state);
            return {
                ...state,
                fav: [...state.fav, action.payload]
            }
        default: return state;
    }
}