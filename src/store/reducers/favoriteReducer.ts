import { FavoriteAction, FavoriteActionTypes, FavoriteState } from "../../types/favorite";


const initialState: FavoriteState = {
   cat: [],
}


export const favoriteReducer = (state = initialState, action: FavoriteAction): FavoriteState => {
    switch (action.type) {
        case FavoriteActionTypes.FETCH_FAVORITE:
            return {cat: action.payload}
        case FavoriteActionTypes.FETCH_UNFAVORITE:
            return {cat: action.payload}
        default:
            return state;
    }
}