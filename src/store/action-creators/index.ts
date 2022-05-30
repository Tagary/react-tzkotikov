import * as CatActionCreators from './takeCats'
import * as FavoriteActionCreators from './favorite'

export default {
    ...CatActionCreators,
    ...FavoriteActionCreators,
}