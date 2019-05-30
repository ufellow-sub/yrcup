import React from 'react';
import axios from 'axios';
import {OrderDetailBox, OrderContent, Content} from './style'
import {orderDetail} from './../../api/index'
import TopGoBack from './../../common/topgoback'
import {
    SingleUrl,
    SetmealUrl
} from './../../api/index'

class OrderDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redeemList: []
        }
        document.title = '咖啡订单';
    }
    render() {
        const { redeemList } = this.state;
        let orderItem = JSON.parse(localStorage.getItem('orderItem'));
        console.log(orderItem)
        return (
            <OrderDetailBox>
                <TopGoBack></TopGoBack>
                <OrderContent>
                    <Content>
                        <ul>
                            <li>
                                <span>订单编号 : {orderItem.ordernum}</span>
                            </li>
                            <li>
                                <span>下单时间 : {orderItem.creat_time}</span>
                            </li>
                        </ul>
                    </Content>
                    <Content>
                        <ul>
                            {   
                                orderItem.singlename !== undefined ?
                                orderItem.singlename.map((item,index) => {
                                    return (
                                        <li key={index}>
                                            <div className="image">
                                                <img
                                                    src={`${SingleUrl}${orderItem.singlephoto[index]}`}
                                                    alt=""/>
                                            </div>
                                            <div className="name">{item}</div>
                                            <div className="count">x {orderItem.singlenum[index]}</div>
                                        </li>        
                                    )
                                }) : null
                            }
                        </ul>
                        <ul>
                            {
                                orderItem.setmealname !== undefined ?
                                orderItem.setmealname.map((item,index) => {
                                    return (
                                        <li key={index}>
                                            <div className="image">
                                                <img
                                                    src={`${SetmealUrl}${orderItem.setmealphoto[index]}`}
                                                    alt=""/>
                                            </div>
                                            <div className="name">{item}</div>
                                            <div className="count">x {orderItem.setmealnum[index]}</div>
                                        </li>        
                                    )
                                }) : null
                            }
                        </ul>
                        <div className="totalPrice">
                            <span className='title'>商品总额</span>
                            <span className='price'>¥ {orderItem.price}</span>
                        </div>
                    </Content>
                    <Content>
                        <div className="coffee-title">
                            <span>咖啡</span>
                            <span>兑换码</span>
                            <span>状态</span>
                        </div>
                        <ul className='redeem-list'>
                            {
                                redeemList.map((item,index) => {
                                    return (
                                        <li key={index} className='redeem-item'>
                                            <span>{item.goodname} X 1</span>
                                            <span>{item.exchangenum}</span>
                                            <span>{item.is_del == 0 ? '未领取' : '已领取'}</span>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </Content>
                </OrderContent>

            </OrderDetailBox>
        )
    }
    componentDidMount() {
      
        let ordernum = JSON.parse(localStorage.getItem("orderItem")).ordernum;
        axios.post(orderDetail, {
            ordernum: ordernum
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            }
        }).then(res => {
            console.log(res)
            this.setState({
                redeemList: res.data
            })
        }).catch(err => {
            console.log(err);
        })
    }
}

export default OrderDetail;