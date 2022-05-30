import { CatAction, CatActionTypes } from "../../types/cats";
import { Dispatch } from "redux";
import axios from "axios";

export const fetchCats = () => {
    return async (dispatch: Dispatch<CatAction>) => {
        try {
            const response = await axios.get('https://api.thecatapi.com/v1/images/search/?limit=10', {
                headers: {
                    'x-api-key': 'e2e6a2d1-a2d1-4053-911c-393618c121ad',
                },
            });
            dispatch({ type: CatActionTypes.FETCH_CATS_SUCCESS, payload: response.data })

        } catch (error) {
            dispatch({ type: CatActionTypes.FETCH_USERS_ERROR, payload: 'ошибка' })
        }
    }
}