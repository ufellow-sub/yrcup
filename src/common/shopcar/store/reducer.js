import * as actionTypes from './actionTypes'

const defaultState = {
}
export default (state = defaultState , action) => { 
    if(action.type === actionTypes.SELECTFOODS) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.selectFoods = action.arr;
        return newState;
    }
    return state;
}