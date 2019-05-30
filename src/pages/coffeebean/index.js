import React , { Fragment } from 'react';
import { CSSTransition } from 'react-transition-group';
import axios from 'axios';
import { buycoffeebean , UpdateUserinfo } from "./../../api/index";
import {
    CoffeeBeanBox,
    Explain,
    CoffeeBeanContainer,
    Detailed,
    SlidePay
} from './style'
import TopGoBack from './../../common/topgoback'

class CoffeeBean extends React.Component {
    constructor(props) {
        super(props);
        document.title = '我的咖啡豆';
        this.state = {
            time: 0,
            number: '',
            PayMethods: false,
            userinfo: ''
        }
    }
    render() {
        // 获取咖啡豆数量
        let integral = JSON.parse(window.localStorage.getItem('userinfo')).integral;
        let money = JSON.parse(window.localStorage.getItem('userinfo')).money;
        // let integral = 1000;
        // let money = 100;
        return (
            <CoffeeBeanBox>
                <TopGoBack></TopGoBack>
                <Explain onClick={this.handleCoffeeBeanExplain.bind(this)}>咖啡豆使用说明</Explain>
                <CoffeeBeanContainer>
                    <div className="balance">
                        <span className='text'>咖啡豆数量</span>
                        <span time={this.state.time} className='price'>{integral} 颗</span>                    
                    </div>
                    <div className="balance">
                        <span className='text diff'>向优瑞咖购买</span>
                        <input value={this.state.number} onChange={this.handleInputNumber.bind(this)} placeholder='0' type="number"/>                   
                    </div>
                    <div className='operation'>
                         <span className='text'>平台售出价：1.00元/100颗</span>
                         <button className='cz' onClick={this.handleCheckPay.bind(this)}><span>买进</span></button>
                    </div>
                    <div className="balance">
                        <span className='text diff'>向优瑞咖出售</span>
                        <input  value='0' placeholder='0' type="number"/>                   
                    </div>
                    <div className='operation'> 
                        <span className='text'>平台买入价：0.60元/100颗</span>
                        <button className='tx' onClick={this.handleExpect.bind(this)}><span>卖出</span></button>
                    </div>
                </CoffeeBeanContainer>
                <div className='tradingBox'>
                    <button className='trading' onClick={this.handleExpect.bind(this)}>进入交易大厅</button>
                </div>
                <Detailed  onClick={this.handleGoCoffeebeanDeal.bind(this)}>
                    <i className='iconfont icon-jiaoyijilu-'></i>
                    <span className=''>咖啡豆交易明细</span>
                    <i className='jtright iconfont icon-portal-icon-zuojiantou-copy'></i>
                </Detailed>

                <SlidePay>
                    <CSSTransition
                        in={this.state.PayMethods}
                        timeout={300}
                        classNames='fade'
                        unmountOnExit
                    >   
                    <Fragment>
                        <ul>
                            <li onClick={this.handleBuy.bind(this)}>余额支付(¥ {Math.abs(Number(money).toFixed(2))})</li>
                        </ul>
                        <div className='mask' onClick={this.handlePayMethods.bind(this)}></div>
                    </Fragment>
                    </CSSTransition>
                </SlidePay>
            </CoffeeBeanBox>
        ) 
    }
    componentDidMount() {
    }
    handleCoffeeBeanExplain() {
        this.props.history.push('/coffeebeanexplain')
    }
    handleGoCoffeebeanDeal() {
        this.props.history.push('/coffeebeandeal')
    }
    // 输入咖啡豆数量
    handleInputNumber(e) {
        let number = e.target.value;
        this.setState({
            number
        })
    }
    
     // 选择支付方式
     handleCheckPay() {
        this.setState({
            PayMethods: true
        })
    }
    handlePayMethods() {
        this.setState({
            PayMethods: false
        })
    }
    // 买入咖啡豆
    handleBuy() {
        let money = JSON.parse(localStorage.getItem('userinfo')).money;
        let id = JSON.parse(localStorage.getItem('userinfo')).id;
        let number = this.state.number;
        if(number === '') {
            alert('咖啡豆数量不能为空');
            return false;
        } else if (number <= 0) {
            alert('咖啡豆数量不能为0');
            return false;
        } else if (money < number * 0.01) {
            alert('余额不足');
            return false;
        } else {
            axios.post(buycoffeebean,{
                id: `u0280${id}`,
                number: number,
            },{
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                }
            }).then(res => {
                if(res.data === 0) {
                    alert('网络错误,请重试!')
                    return false;
                } else if (res.data === 1) {
                    alert('买入成功！')
                    UpdateUserinfo(`u0280${id}`,this.props)
                    let date = new Date();
                    let time = date.getTime();
                    setTimeout(() => {
                        this.setState({
                            PayMethods: false,
                            number: '',
                            time
                        })
                    },250)
                }
            }).catch(err => {
                alert(err);
            })
        }
    }
     // 敬请期待
     handleExpect() {
        alert('敬请期待!')
    }
}

export default CoffeeBean