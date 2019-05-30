import * as actionTypes from './actionTypes'
const defaultState = {
    setmealFoods: []
}

export default (state = defaultState, action) => {
    if(action.type === actionTypes.INITSETMEALDATA) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.setmealFoods = action.data;
        return newState;
    }
    return state;
}