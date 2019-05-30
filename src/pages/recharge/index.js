import React , { Fragment } from 'react';
import { CSSTransition } from 'react-transition-group';
import axios from 'axios';
import {
    RechargeBox,
    Explain,
    RechargeContainer,
    Detailed,
    SlidePay
} from './style'
import TopGoBack from './../../common/topgoback'
import { pay } from './../../api/index'



class Recharge extends React.Component {
    constructor(props,context) {
        super(props,context);
        document.title = '充值 / 提现';
        this.state = {
            price: "",
            PayMethods: false
        }
    }
    render() {
        let userinfo = JSON.parse(localStorage.getItem('userinfo'));
            // let userinfo = {
            //     money: 100,

            // }
        return (
            <RechargeBox>
                <TopGoBack></TopGoBack>
                <Explain>充值/提现使用说明</Explain>
                <RechargeContainer>
                    <div className="balance">
                        <span className='text'>账户余额</span>
                        <span className='price'>¥ {userinfo.money}</span>                    
                    </div>
                    <div className="balance">
                        <span className='text'>可提现余额</span>
                        <span className='price'>￥ 0</span>                    
                    </div>
                    
                    {/* <div className='operation'>
                        <button className='cz' onClick={this.handleCheckPay.bind(this)}>充值</button>
                        <button className='tx' onClick={this.handleExpect.bind(this)}>提现</button>
                    </div> */}
                </RechargeContainer>
                <div className='line'></div>
                <div className='operationBox'>
                    <div className="rechargeamount">
                            <span className='text diff'>充值金额</span>
                            <input value={this.state.price} onChange={this.handleInputPrice.bind(this)} placeholder='0' type="number"/>                   
                    </div>
                    <div className='operation'>
                        <button className='cz' onClick={this.handleCheckPay.bind(this)}>充值</button>
                    </div>
                </div>
                <div className='operationBox'>
                    <div className="rechargeamount">
                            <span className='text diff'>提现金额</span>
                            <input value='0' placeholder='0' type="number"/>                   
                    </div>
                    <div className='operation'>
                    <button className='tx' onClick={this.handleExpect.bind(this)}>提现</button>
                    </div>
                </div>
                <Detailed onClick={this.handleGoTransaction.bind(this)}>
                    <i className='iconfont icon-jiaoyijilu-'></i>
                    <span className=''>充值/提现明细</span>
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
                            <li onClick={this.handleRechargePrice.bind(this)}>微信支付</li>
                        </ul>
                        <div className='mask' onClick={this.handlePayMethods.bind(this)}></div>
                    </Fragment>
                    </CSSTransition>
                </SlidePay>
            </RechargeBox>
        )
    }
    // 
    handleGoExpect() {
        this.props.history.push('/detail')
    }
    handleGoTransaction(){
        this.props.history.push('/transaction')
    }

    // 输入金额
    handleInputPrice(e) {
        let price = e.target.value;
        this.setState({
            price
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

    // 充值金额
    handleRechargePrice() {
        let price = this.state.price;
        let id = JSON.parse(localStorage.getItem('userinfo')).id
        if(price === '') {
            alert('充值金额不能为空')
            return false;
        } else if(price < 10) {
            alert('充值金额不能低于10元钱')
            return false;
        } else {
            axios.post(pay,{
                memberid: `u0280${id}`,
                totalPrice: price,
                goods: [],
                integral: "",
                member_couponid: "",
                type: 3
            },{
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                }
            }).then(res => {
                console.log(res);
                let that = this;
                window.wx.ready(function() {
                    window.wx.chooseWXPay({
                        timestamp: res.data.timeStamp, 
                        nonceStr: res.data.nonceStr, 
                        package: res.data.package, 
                        signType: res.data.signType,
                        paySign: res.data.paySign, 
                        success: function (res) {
                            console.log(res);
                            that.props.history.replace('/user');
                        },
                        error: function (error){
                            console.log(error);
                        },
                        cancel: function (res) {
                            console.log(res);
                        }
                    })
                })
            }).catch(err => {
                if(err) {
                    alert('登录失效,重新登录');
                    localStorage.removeItem('userinfo');
                    localStorage.removeItem('_props');
                    localStorage.removeItem('url');
                    this.props.history.replace('/user');
                }
            })
        }
    }
    // 敬请期待
    handleExpect() {
        alert('敬请期待!')
    }
}

export default Recharge;