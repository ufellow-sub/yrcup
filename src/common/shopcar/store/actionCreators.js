import * as actionTypes from './actionTypes'


export const selectFoodsAction = (arr) => {
    return {
        type: actionTypes.SELECTFOODS,
        arr
    }
}

export const handleDecreaseAction = (NewGoods,NewSelectFoods) => {
    return {
        type: actionTypes.DECREASE,
        NewGoods,
        NewSelectFoods
    }
}

export const handleAddAction = (NewGoods,NewSelectFoods) => {
    return {
        type: actionTypes.ADD,
        NewGoods,
        NewSelectFoods
    }
}

export const handleEmptyAction = (NewGoods,NewSelectFoods) => {
    return {
        type: actionTypes.EMPTY,
        NewGoods,
        NewSelectFoods
    }
}