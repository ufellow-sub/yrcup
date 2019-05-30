import * as actionTypes from './actionTypes'
const defaultState = {
    hanzo: '半藏',
    goods: [],
}

export default (state = defaultState , action) => { 
    if(action.type === actionTypes.INITSINGLEDATA) {
        console.log(action);
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
    // if(action.type === actionTypes.ADD) {
    //     const newState = JSON.parse(JSON.stringify(state))
    //     newState.single = action.NewSingleFoods;
    //     newState.selectFoods = action.NewSelectFoods;
    //     return newState;
    // }
    // if(action.type === actionTypes.EMPTY) {
    //     const newState = JSON.parse(JSON.stringify(state))
    //     newState.single = action.NewSingleFoods;
    //     newState.selectFoods = action.NewSelectFoods;
    //     return newState;
    // }
    return state;
}