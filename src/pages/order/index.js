import React , { Fragment } from 'react';
import axios from 'axios'
import {
    OrderBox,
    ToastBox
} from './style'
import OrderList from './component'

import TopGoBack from './../../common/topgoback'
import {
    order
} from './../../api/index'
import LoadTwo from './../../assets/URECUPGIFBLACK.gif';


class Order extends React.Component {
    constructor(props) {
        super(props);
        document.title = '我的订单';
        this.state = {
            NavArr: [
                {
                    name: 'week',
                    title: '周历史订单'
                },{
                    name: 'month',
                    title: '月历史订单'
                },{
                    name: 'quarter',
                    title: '季度历史订单'
                }
            ],
            order: [],
            itemIndex: 0,
            ToastShow: true,
            weekOrder:[],
            monthOrder:[],
            quarterOrder:[]
        }
    }
    render() {
       
        return (
            <OrderBox>
                <TopGoBack></TopGoBack>
                <Fragment>
                    <div className="title">
                        {
                            this.state.NavArr.map((item,index) => {
                                return (
                                    <div key={index} className={this.state.itemIndex === index ? "item active" : "item"} onClick={this.handleNavItem.bind(this,index,item.name)}>{item.title}</div>
                                )
                            })
                        }
                    </div>
                    { this.state.ToastShow ? <ToastBox>
                            <div className="image">
                                <img src={LoadTwo} alt='load' />
                            </div>
                        </ToastBox> : 
                        <OrderList orderArr={this.state.order} handleGoDetail={this.handleGoDetail.bind(this)}></OrderList> }
                </Fragment>
            </OrderBox>
        )
    }

    // 前往订单详情
    handleGoDetail(item,ordernum) {
        this.props.history.push({pathname: '/orderdetail'})
        window.localStorage.setItem('orderItem',JSON.stringify(item))
    }
    // 选择周 月 季度
    handleNavItem(index,name) {
        this.setState({
            itemIndex: index,
        })
        switch (name) {
            case "week": 
                this.setState({
                    order: this.state.weekOrder
                })
                break;
            case "month": 
                this.setState({
                    order: this.state.monthOrder
                })
                break;
            case "quarter": 
                this.setState({
                    order: this.state.quarterOrder
                })
                break;
            default:
                return;
        }
        
    }
    componentDidMount() {
        window.localStorage.removeItem('orderItem');
        let id = JSON.parse(localStorage.getItem("userinfo")).id;
        axios.post(order,{
            memberid: `u0280${id}`,
        },{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            }
        }).then(res => {
            console.log(res)
            let orderArr = res.data;
            let date = new Date();
            let time = date.getTime();
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let prevMonth = date.getMonth();
            let prevprevMonth = date.getMonth() - 1;
            // 获取当前月份的天数;
            var Monthday = new Date(year, month, 0).getDate();
            var prevMonthday = new Date(year, prevMonth, 0).getDate();
            var prevprevMonthday = new Date(year, prevprevMonth, 0).getDate();
            // 一个季度的天数;
            let quarterDay = Monthday + prevMonthday + prevprevMonthday;
            // console.log(quarterDay);
            let weekArr = [];
            let monthArr = [];
            let quarterArr = [];
            for(let i = 0; i < orderArr.length; i++ ) {
                let second =  time / 1000;
                let TimeDiff = parseInt((second - orderArr[i].time));
                let day = parseInt(TimeDiff / 3600 / 24);
                if(day <= 7) {
                    weekArr.push(orderArr[i])
                    // console.log(weekArr);
                    this.setState({
                        weekOrder: weekArr,
                        order: weekArr
                        
                    })
                } 
                if(day <= month ) {
                    monthArr.push(orderArr[i])
                    console.log(monthArr);
                    this.setState({
                        monthOrder: monthArr
                    })
                }
                if(day <= quarterDay) {
                    quarterArr.push(orderArr[i])
                    // console.log(quarterArr);
                    this.setState({
                        quarterOrder: quarterArr
                    })
                }
            }
        }).catch(err => {
            console.log(err);
        })


        setTimeout(()=>{
            this.setState({
                ToastShow: false
            })
        },2000);
    }
}

export default Order;