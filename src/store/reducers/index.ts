import { combineReducers }  from "redux";
import { catReducer } from "./catsReducer";
import { favoriteReducer } from "./favoriteReducer";




export const rootReducer = combineReducers({
    takeCat: catReducer,
    favorite: favoriteReducer,
})


export type RootState = ReturnType<typeof rootReducer>