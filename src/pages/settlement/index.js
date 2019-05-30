import React , { Fragment } from 'react';
import { CSSTransition } from 'react-transition-group';
import axios from 'axios';
import {SettlementBox, TopTitle, FoodList, OrderInfo, PayBar , SlidePay} from './style'
import Toast from './../../common/toast'
import {pay} from './../../api/index'
import warning from './../../assets/warning.png';
import {
    SingleUrl,
    SetmealUrl
} from './../../api/index'
export default class Settlement extends React.Component {
    constructor(props, context) {
        super(props)
        document.title = 'U 订单'
        this.state = {
            couponText: false,
            ToastShow: false,
            ToastTips: '', // 提示词
            CoffeebeanValue: "", // 输入咖啡豆数量
            CheckCoffeebean: false, // 是否使用咖啡豆
            CheckCoffeebeanShow: false,
            PayMethods: false
        }
    }

    render() {
        const {CheckCoffeebean , CoffeebeanValue , ToastShow , ToastTips , CheckCoffeebeanShow} = this.state;
        // 使用咖啡豆抵扣的钱
        let CoffeebeanPrice = CoffeebeanValue * 0.01;
        let good = JSON.parse(localStorage.getItem('good'));
        let integral = JSON.parse(localStorage.getItem('userinfo')).integral
        let money = JSON.parse(localStorage.getItem('userinfo')).money
        let totalPrice = 0;
        
        let DiscountMoney = 0;
        
        good.forEach((food, index) => {
            if (this.props.location.state === undefined) {
                totalPrice += food.count * food.price;
            } else if (food.Id == this.props.location.state.single_id && this.props.location.state.type === "2") {
                console.log(food)
                totalPrice += food.count * food.price;
                totalPrice = totalPrice - food.price;
                DiscountMoney =  food.price;
                console.log(DiscountMoney);
            } else if (food.Id !== this.props.location.state.single_id) {
                totalPrice += food.count * food.price;
            }
        })
        if(CheckCoffeebeanShow) {
            totalPrice = totalPrice - CoffeebeanPrice;
            DiscountMoney = Number(DiscountMoney) + CoffeebeanPrice;
        } else {
            
        }
        if (good.length === 0) {
            return (
                <SettlementBox>
                    <TopTitle onClick={this
                        .handleGoBack
                        .bind(this)}>
                        <i className="iconfont icon-portal-icon-zuojiantou"></i>
                        <span>回到菜单</span>
                    </TopTitle>
                    <div className="nothing">您还没有选购咖啡!</div>
                </SettlementBox>
            )
        } else {
            return (
                <SettlementBox>
                    <TopTitle onClick={this
                        .handleGoBack
                        .bind(this)}>
                        <i className="iconfont icon-portal-icon-zuojiantou"></i>
                        <span>回到菜单</span>
                    </TopTitle>
                    <FoodList>
                        {good.map((food, index) => {
                            return (
                                <li key={index}>
                                    <div className='avatar'>
                                        <img src={food.type == "1" ? `${SingleUrl}${food.photo}` : `${SetmealUrl}${food.photo}` } alt="coffee"/>
                                    </div>
                                    <div className='good-info'>
                                        <div className="title-name">
                                            <span className='title'>U</span>
                                            <div className='name'>
                                                <div className='name-zh'>{food.name}</div>
                                                <div className='name-en'>{food.english}</div>
                                            </div>
                                        </div>
                                        <p className='price'>¥ {Number(food.count * food.price).toFixed(2)}</p>
                                    </div>
                                    <div className="operation">
                                        <div
                                            className="empty"
                                            onClick={this
                                            .handleEmpty
                                            .bind(this, food, index)}>
                                            <i className='iconfont icon-shenqingzuofei'></i>
                                            <span>清空</span>
                                        </div>
                                        <div className="decreaseadd">
                                            <span
                                                className='decrease'
                                                onClick={this
                                                .handleDecrease
                                                .bind(this, food, index)}></span>
                                            <span className='count'>{food.count}</span>
                                            <span
                                                className='add'
                                                onClick={this
                                                .handleAdd
                                                .bind(this, food, index)}></span>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }

                    </FoodList>

                    <OrderInfo>
                        <ul className='order-info'>
                            <li>
                                <span className='name'>共计:
                                </span>
                                <span className='info'>¥ {(Math.abs(totalPrice)).toFixed(2)}</span>
                            </li>
                            <li>
                                <span className='name'>U惠券:</span>
                                <span
                                    onClick={this
                                    .handleGo
                                    .bind(this)}
                                    className='info coupon'>
                                    {this.state.couponText
                                        ? `${this.props.location.state.title} >`
                                        : '请选择U惠券 >'
                                    }
                                </span>
                                <p classNmae="tips"
                                    style={{
                                        fontSize: '10px',
                                        position: 'absolute',
                                        right: '33px',
                                        top: '28px',
                                        color: '#696969',
                                        letterspacing: '1px'
                                    }}
                                
                                >每次结算仅限使用一张,不可叠加使用</p>
                            </li>

                            <li className='coffeebean2'>
                                <div className="top">
                                    <div className="name">咖啡豆</div>
                                    <div className="slide">
                                        <div className={CheckCoffeebeanShow ? 'bar active' : 'bar'} ></div>
                                        <div className={CheckCoffeebeanShow ? 'ball active' : 'ball'} onClick={this.handleCheckCoffeebean2.bind(this)}></div>
                                    </div>
                                </div>
                                {
                                    this.state.CheckCoffeebeanShow ? <div className="content">
                                    <div className="balanceOne" onClick={this.handleGoCoffeebean.bind(this)}>我的咖啡豆: {integral} 颗</div>
                                    <div className="balanceTwo">要使用的咖啡豆数量:
                                        <input type="number" onChange={this.handleChangeValue.bind(this)} name='coffeebean' placeholder="0" value={this.state.CoffeebeanValue} />
                                    </div>
                                    { integral > 0 ? null : <div className="balanceThree">若账户中咖啡豆余额不足,请前往充值后使用</div> }
                                </div> : null
                                }
                            </li>
                            <li>
                                <span className='name'>优惠金额:
                                </span>
                                <span className='info'>¥ {Number(DiscountMoney).toFixed(2)}</span>
                            </li>  
                            <li>
                                <span className='name'>需支付:
                                </span>
                                <span className='info'>¥ {(Math.abs(totalPrice)).toFixed(2)}</span>
                            </li>
                        </ul>
                    </OrderInfo>
                    <PayBar>
                        <span><span style={{
                            fontWeight: '800',
                            fontsize: '16px'
                        }}>共计支付</span>&nbsp;:&nbsp;¥ {(Math.abs(totalPrice)).toFixed(2)}</span>
                        <button
                            className='wxpay'
                            onClick={this
                            .handleCheckPay
                            .bind(this)}>支付方式</button>
                    </PayBar>
                    
                        <SlidePay>
                            <CSSTransition
                                in={this.state.PayMethods}
                                timeout={300}
                                classNames='fade'
                                unmountOnExit
                            >   
                                <Fragment>
                                    <ul>
                                        <li onClick={this.handleBalancePay.bind(this)}>余额支付(¥ {Number(money).toFixed(2)})</li>
                                        <li onClick={this.handleWxPay.bind(this)}>微信支付</li>
                                    </ul>
                                    <div className='mask' onClick={this.handlePayMethods.bind(this)}></div>
                                </Fragment>
                            </CSSTransition>
                        </SlidePay>
                    {
                        ToastShow ? <Toast  image={warning} tips={ToastTips} ></Toast> : null
                    }
                    
                </SettlementBox>
            )
        }
    }
    // 点击前往咖啡豆页面
    handleGoCoffeebean() {
        this.props.history.push('/coffeebean');
    }
   
    handleCheckCoffeebean2() {
        this.setState({
            CheckCoffeebeanShow: !this.state.CheckCoffeebeanShow
        },() => {
            if(this.state.CheckCoffeebeanShow === false) {
                this.setState({
                    CoffeebeanValue: ''
                })
            }
        })
    }

    handleGoBack() {
        this.props.history.push('/single')
    }
    handleDecrease(food) {
        console.log(food);
        if (this.props.location.state !== undefined) {
            if (food.Id == this.props.location.state.single_id) {
                if(food.count <= 1) {
                    this.setState({couponText: false})
                }
            }
        }
        
        let good = JSON.parse(localStorage.getItem('good'));
        for (let i = 0; i < good.length; i++) {
            good[i].index = i;
            if (good[i].name === food.name) {
                good[i].count = good[i].count - 1;
                if (good[i].count === 0) {
                    good.splice(good[i].index, 1);
                }
                localStorage.good = JSON.stringify(good)
                let date = new Date();
                let time = date.getTime();
                this.setState({time: time})
                break;
            }
        }
    }
    handleAdd(food) {
        let good = JSON.parse(localStorage.getItem('good'));
        for (let i = 0; i < good.length; i++) {
            console.log(good[i]);
            if (good[i].name === food.name) {
                good[i].count = 1 + good[i].count;
                localStorage.good = JSON.stringify(good)
                let date = new Date();
                let time = date.getTime();
                this.setState({time: time})
            }
        }
    }
    handleEmpty(food, index) {
        let good = JSON.parse(localStorage.getItem('good'));
        for (let i = 0; i < good.length; i++) {
            if (good[i].name === food.name) {
                good.splice(index, 1);
                localStorage.good = JSON.stringify(good)
                let date = new Date();
                let time = date.getTime();
                this.setState({time: time})
            }
        }
    }
    // 选择优惠券
    handleGo() {
        this.props.history.push({
            pathname: '/coupon',
            state: {
                pathname: this.props.location.pathname
            }
        })
    }
    //判断咖啡豆，提示消息
    showTips(ToastTips){
        this.setState({ 
            ToastShow: true,
            ToastTips: ToastTips,
            CoffeebeanValue: "",
        },() => {
            setTimeout(() => {
                this.setState({
                    ToastShow: false
                })
            },1000)
        })
    }
    // 输入咖啡豆数量
    handleChangeValue(e) {
        let integral = JSON.parse(localStorage.getItem('userinfo')).integral;
        
        this.setState({
            CoffeebeanValue: e.target.value
        })
        let good = JSON.parse(localStorage.getItem('good'));
        let totalPrice = 0;
        good.forEach((food, index) => {
            if (this.props.location.state === undefined) {
                totalPrice += food.count * food.price;
                
            } else if (food.Id == this.props.location.state.single_id && this.props.location.state.type === "2") {
                totalPrice += food.count * food.price;
                totalPrice = totalPrice - food.price;
               
            } else if (food.Id !== this.props.location.state.single_id) {
                totalPrice += food.count * food.price;
            }
        })
        let CoffeebeanPrice = e.target.value * 0.01;
        
        if(CoffeebeanPrice > totalPrice.toFixed(2)){
            console.log(CoffeebeanPrice === totalPrice.toFixed(2));
            this.showTips('咖啡豆价值大于总价')           
        } else if(totalPrice <= 0){
            this.showTips('总价为0，不能使用咖啡豆')                 
        } else if(e.target.value > integral) {
            this.showTips('输入咖啡豆数量大于账户咖啡豆余额，请重新输入')     
        } else if (e.target.value == 0) {
            this.showTips('请输入正确数字')     
           
        }
    }

    // 使用咖啡豆
    handleCheckCoffeebean() {
        let CheckCoffeebean = this.state.CheckCoffeebean;
        this.setState({
            CheckCoffeebean: !CheckCoffeebean
        })
       
    }

    // 选择支付方式
    handleCheckPay() {
        this.setState({
            PayMethods: true
        })
    }

    // 隐藏选择支付方式框
    handlePayMethods() {
        this.setState({
            PayMethods: false
        })
    }

    // 微信支付请求
    wxpay(id,totalPrice,goods,integral,member_couponid,type) {
        axios.post(pay, {
            memberid: `u0280${id}`,
            totalPrice: totalPrice,
            goods: goods,
            integral: integral,
            member_couponid: member_couponid,
            type: type
        }, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                }
            })
            .then(res => {
                // alert(JSON.stringify(res));
                let that = this;
                window.wx.ready(function() {
                    window.wx.chooseWXPay({
                        timestamp: res.data.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
                        nonceStr: res.data.nonceStr, // 支付签名随机串，不长于 32 位
                        package: res.data.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
                        signType: res.data.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
                        paySign: res.data.paySign, // 支付签名
                        success: function (res) {
                            window.localStorage.setItem('good',JSON.stringify([]));
                            that.props.history.replace('/mycoffee');
                        },
                        error: function (error){
                            // alert(error);
                        },
                        cancel: function (res) {
                            // alert(res);
                        }
                    });
                })
            })
            .catch(err => {
                if(err) {
                    alert('登录失效,重新登录');
                    localStorage.removeItem('userinfo');
                    localStorage.removeItem('_props');
                    localStorage.removeItem('url');
                    this.props.history.replace('/user');
                }
            })
    }

    // 余额支付请求
    pay(id,totalPrice,goods,integral,member_couponid,type) {
        axios.post(pay, {
            memberid: `u0280${id}`,
            totalPrice: totalPrice,
            goods: goods,
            integral: integral,
            member_couponid: member_couponid,
            type: type
        }, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                }
            })
            .then(res => {
                console.log(res);
                // alert('支付中')
                // alert(res.data);
                if(res.data === 1){
                    alert('支付成功')
                    localStorage.setItem('good',JSON.stringify([]));
                    this.props.history.replace('/mycoffee');
                } else if(res.data === -1){
                    alert('支付错误')
                    return false;
                } else if(res.data === -2){
                    alert('余额不足')
                    return false;
                } else if (res.data === -3) {
                    alert('优惠券使用失败')
                    return false;
                }
            })
            .catch(err => {
                if(err) {
                    alert('支付错误')
                }
            })
    }
    //计算商品总价
     calGoodsPrice(){
        let good = JSON.parse(localStorage.getItem('good'));
        let totalPrice = 0;
        good.forEach((food, index) => {
            if (this.props.location.state === undefined) {
                totalPrice += food.count * food.price;
                
            } else if (food.Id == this.props.location.state.single_id && this.props.location.state.type === "2") {
                totalPrice += food.count * food.price;
                totalPrice = totalPrice - food.price;
               
            } else if (food.Id !== this.props.location.state.single_id) {
                totalPrice += food.count * food.price;
            }
        })
        return totalPrice;
    }
    // 余额支付
    handleBalancePay() {
        let id = JSON.parse(localStorage.getItem('userinfo')).id;
        let money = JSON.parse(localStorage.getItem('userinfo')).money;
        const {CheckCoffeebean , CoffeebeanValue } = this.state;
        // 使用咖啡豆抵扣的钱
        let CoffeebeanPrice = CoffeebeanValue * 0.01;
        let good = JSON.parse(localStorage.getItem('good'));
        let totalPrice = this.calGoodsPrice();
        if(CoffeebeanValue) {
            totalPrice = totalPrice - CoffeebeanPrice;
            console.log(totalPrice);
        } 
        if(totalPrice > money) {
            alert('余额不足');
            return false;
        } else if(this.props.location.state === undefined) {
            this.pay(id,totalPrice,good,CoffeebeanValue,'',1);
        } else if (this.props.location.state.pathname === "/single" || this.props.location.state.pathname === "/setmeal") {
            this.pay(id,totalPrice,good,CoffeebeanValue,'',1);
        } else {
            let member_couponId = this.props.location.state.member_couponId;
            this.pay(id,totalPrice,good,CoffeebeanValue,member_couponId,1);
        }
    }

    // 微信支付
    handleWxPay() {
        let id = JSON.parse(localStorage.getItem('userinfo')).id;
        const {CheckCoffeebean , CoffeebeanValue } = this.state;
        // 使用咖啡豆抵扣的钱
        let CoffeebeanPrice = CoffeebeanValue * 0.01;
        let good = JSON.parse(localStorage.getItem('good'));
        let totalPrice = this.calGoodsPrice();       
        if(CoffeebeanValue) {
            totalPrice = totalPrice - CoffeebeanPrice;
        } 
        //券+咖啡豆 > 商品价格
        if(totalPrice <= 0 ){
            alert('请使用余额支付');
            return false;
        } 
        if(this.props.location.state === undefined) {
            this.wxpay(id,totalPrice,good,CoffeebeanValue,'',2);
        } else if (this.props.location.state.pathname === "/single" || this.props.location.state.pathname === "/setmeal") {
            this.wxpay(id,totalPrice,good,CoffeebeanValue,'',2);
        } else {
            let member_couponId = this.props.location.state.member_couponId;
            this.wxpay(id,totalPrice,good,CoffeebeanValue,member_couponId,2);
        }

    }
    componentDidMount() {
        if (this.props.location.state === undefined) {
            return false
        } else if (this.props.location.state.title !== undefined) {
            this.setState({couponText: true})
        }
    }
}