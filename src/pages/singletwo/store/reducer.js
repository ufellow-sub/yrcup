import * as actionTypes from './actionTypes'
const defaultState = {
    goods: [],
    

}

export default (state = defaultState , action) => { 
    if(action.type === actionTypes.INITSINGLEDATA) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.goods = action.goods;
        return newState;
    }
    if(action.type === actionTypes.SELECTFOODS) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.selectFoods = action.arr;
        return newState;
    }
    if(action.type === actionTypes.DECREASE) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.single = action.NewSingleFoods;
        newState.selectFoods = action.NewSelectFoods;
        return newState;
    }
    return state;
}