import axios from 'axios'
import * as actionTypes from './actionTypes'

export const InitSingleDataAction = (goods) => {
    return {
        type: actionTypes.INITSINGLEDATA,
        goods,
       
    }
}

export const InitSingleData = () => {
    return (dispatch) => {
        axios.post('http://result.eolinker.com/HZ8lS4Dc7e56eb039aa82a5ed451c852181de8c9e1d7509?uri=coffee-all').then(res => {
            dispatch(InitSingleDataAction(res.data))
        }).catch(err => {
            console.log(err)
        })
    }
}

export const selectFoodsAcrion = (arr) => {
    return {
        type: actionTypes.SELECTFOODS,
        arr
    }
}
