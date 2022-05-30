import { FavoriteAction, FavoriteActionTypes } from "../../types/favorite";


export function unsetFavorite(cat: any[]) :FavoriteAction {
    return {type: FavoriteActionTypes.FETCH_UNFAVORITE, payload: cat}
}

export function setFavorite(cat: any[]): FavoriteAction {



    return {type: FavoriteActionTypes.FETCH_FAVORITE, payload: cat}
}
