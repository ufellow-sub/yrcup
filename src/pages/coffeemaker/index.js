import React from 'react';
import {
    CoffeeMakerBox
} from './style'
import TopGoBack from './../../common/topgoback'

const CoffeeMaker = () => {
    document.title = '我的咖啡机'
    return (
        <CoffeeMakerBox>
            <TopGoBack></TopGoBack>
            <div className='text'>敬请期待~</div>
        </CoffeeMakerBox>
    )
}

export default CoffeeMaker;