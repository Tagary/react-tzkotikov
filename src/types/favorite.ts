export interface FavoriteState {
    cat: any[];
}

export enum FavoriteActionTypes {
    FETCH_FAVORITE = 'FETCH_FAVORITE',
    FETCH_UNFAVORITE = 'FETCH_UNFAVORITE'
}

interface FetchFavoriteAction {
    type: FavoriteActionTypes.FETCH_FAVORITE;
    payload: any[];
}
interface FetchUnfavoriteAction {
    type: FavoriteActionTypes.FETCH_UNFAVORITE;
    payload: any[];
}



export type FavoriteAction =  FetchFavoriteAction | FetchUnfavoriteAction