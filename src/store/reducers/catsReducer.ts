import { CatState , CatAction, CatActionTypes } from "../../types/cats";


const initialState: CatState = {
    cats: [],
    error: null
}

export const catReducer = (state = initialState, action: CatAction): CatState => {
    switch (action.type) {
        case CatActionTypes.FETCH_CATS_SUCCESS:
            return {error: null, cats: action.payload }
        case CatActionTypes.FETCH_USERS_ERROR:
            return {error: action.payload, cats: [] }
        default:
            return state
    }
}