import * as actionTypes from './actionTypes'
import axios from 'axios';
export const InitSingleDataAction = (goods,single,setmeal) => {
    return {
        type: actionTypes.INITSINGLEDATA,
        goods,
        single,
        setmeal
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


export const selectFoods = (arr) => {
    console.log(arr);
    return {
        type: actionTypes.SELECTFOODS,
        arr
    }
}