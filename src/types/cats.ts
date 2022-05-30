export interface CatState {
    cats: any[];
    error: null | string;
}

export enum CatActionTypes {
    FETCH_CATS_SUCCESS = 'FETCH_CATS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

interface FetchCatsSuccessAction {
    type: CatActionTypes.FETCH_CATS_SUCCESS;
    payload: any[];
}

interface FetchCatsErrorAction {
    type: CatActionTypes.FETCH_USERS_ERROR;
    payload: string;
}

export type CatAction = FetchCatsSuccessAction | FetchCatsErrorAction