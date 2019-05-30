import { combineReducers } from 'redux'
import { reducer as singleReducer } from './../pages/singletwo/store'
import { reducer as setmealReducer } from './../pages/setmealtwo/store'
import { reducer as shopReducer } from './../common/shopcartwo/store'

const reducer = combineReducers({
    singleReducer,
    setmealReducer,
    shopReducer
})

export default reducer;