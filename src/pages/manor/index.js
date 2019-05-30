import React from 'react';
import { Link } from 'react-router-dom';
import {
    ManorBox,
    CoffeeBox,
    CoffeeMaker
} from './style'
import TopGoBack from './../../common/topgoback'

class Manor extends React.Component {
    constructor(props) {
        super(props);
        document.title = '我的庄园';
    }
    render() {
        const fertilizer = JSON.parse(window.localStorage.getItem('userinfo')).fertilizer;
        const water = JSON.parse(window.localStorage.getItem('userinfo')).water;
        return (
            <ManorBox>
                <TopGoBack></TopGoBack>
                <CoffeeBox>   
                    <div className='box'>
                        <span className='title'><Link to='/coffeemaker'>我的咖啡机</Link></span>
                    </div>
                    <div className='box' style={{
                        margin: '2% 0'
                    }}>
                        <span className='title'><Link to='/coffeebean'>我的咖啡豆</Link></span>
                    </div>
                    <div className='box'>
                        <span className='title'><Link to='/coffeetree'>我的咖啡树</Link></span>
                    </div>
                </CoffeeBox>
                <div className='other'>
                    <div className='box'><span className='title'><a>U泉水：{water}&nbsp;桶</a></span></div>
                    <div className='box' style={{
                        marginLeft: '2%'
                    }}><span className='title'><a>U肥料：{fertilizer}&nbsp;袋</a></span></div>
                </div>
                    
            </ManorBox>
        )
    }
   
}

export default Manor