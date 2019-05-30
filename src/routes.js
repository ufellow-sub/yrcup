import React , { Fragment } from 'react';
import { Provider } from 'react-redux';
import axios from 'axios';
import store from './store'
import {HashRouter as Routers, Redirect, Route, Switch} from 'react-router-dom';
import App from './App'
import Load from './pages/load'
import Serveice from './pages/service'
import Singleone from './pages/singletwo'
import SetMealOne from './pages/setmealtwo'
import Settlement from './pages/settlement'
import Coupon from './pages/coupon'
import Recharge from './pages/recharge'
import Manor from './pages/manor'
import CoffeeBean from './pages/coffeebean'
import CoffeeBeanDeal from './pages/coffeebeandeal'
import CoffeeMaker from './pages/coffeemaker'
import MyCoffee from './pages/mycoffee'
import Order from './pages/order'
import OrderDetail from './pages/orderdetail'
import CouponExplain from './pages/couponExplain'
import CoffeeBeanExplain from './pages/coffeebeanexplain'
import User from './pages/user'
import Transaction from './pages/transaction'
import Expect from './common/expect'
import Tabbar from './common/tabbar'
import Activity from './pages/activity'
import ActivityDetail from './pages/activityDetail'
import News from './pages/news'   
import Member from './pages/member'
class Routes extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <Routers>
                        <App>
                            <Switch>
                                <Route exact path='/single' component={Singleone}></Route>
                                <Route exact path='/setmeal' component={SetMealOne}></Route>
                                <Route exact path='/settlement' component={Settlement}></Route>
                                <Route exact path='/user' component={User}></Route>
                                {/* 交易明细 */}
                                <Route exact path='/transaction' component={Transaction}></Route>
                                <Route exact path='/coupon' component={Coupon}></Route>
                                <Route exact path='/recharge' component={Recharge}></Route>
                                <Route exact path='/manor' component={Manor}></Route>
                                <Route exact path='/coffeebean' component={CoffeeBean}></Route>
                                <Route exact path='/coffeemaker' component={CoffeeMaker}></Route>
                                <Route exact path='/mycoffee' component={MyCoffee}></Route>
                                <Route exact path='/order' component={Order}></Route>
                                <Route exact path='/orderdetail' component={OrderDetail}></Route>
                                <Route exact path='/couponexplain' component={CouponExplain}></Route>
                                <Route exact path='/coffeebeanexplain' component={CoffeeBeanExplain}></Route>
                                <Route exact path='/serveice' component={Serveice}></Route>
                                <Route exact path='/load' component={Load}></Route>
                                <Route exact path='/activity' component={Activity}></Route>
                                <Route exact path='/activity/detail' component={ActivityDetail}></Route>
                                <Route exact path='/news' component={News}></Route>
                                <Route exact path='/member' component={Member}></Route>
                                { /** 咖啡明细 */ }
                                 <Route exact path='/detail' component={Expect}></Route>
                                { /** 咖啡交易明细 */ }
                                <Route exact path='/coffeebeandeal' component={CoffeeBeanDeal}></Route>
                                { /** 我的咖啡树 */ }
                                <Route exact path='/coffeetree' component={Expect}></Route>
                                { /** 我的U泉水 */ }
                                <Route exact path='/water' component={Expect}></Route>
                                { /** 我的U肥料 */ }
                                <Route exact path='/fertilizer' component={Expect}></Route>
                                { /** 我的咖友 */ }
                                <Route exact path='/myfriend' component={Expect}></Route>
                                { /** 索要发票 */ }
                                <Route exact path='/invoice' component={Expect}></Route>
                                { /** 发票 */ }
                                <Route exact path='/setup' component={Expect}></Route>

                                <Redirect exact path="/" to={{ pathname: '/load' }}/>
                            </Switch>
                            <Tabbar></Tabbar>
                        </App>
                    </Routers>
                </Fragment>
            </Provider>
        )
    }
    componentDidMount() {
        let href = window.location.href;
        let url2 = encodeURIComponent(href.split('#')[0]);
        axios.get(`https://www.youruika.cn/index/access/access?url=${url2}`).then(res => {
            console.log(res)
            window.wx.config({
                debug: false,    
                appId: res.data.appId,
                timestamp: res.data.timestamp,
                nonceStr: res.data.nonceStr,
                signature: res.data.signature,
                jsApiList: [
                    'checkJsApi',
                    'scanQRCode',
                    'chooseWXPay',
                    'getLocation'
                ]
            })
        }).catch(err => {
            console.log(err);
        })
    }
}

export default Routes;