import React from 'react';
import {
    OrderListContainer,
    OrderListBox
} from './style'

const OrderList = (props) => {     
    return (
        <OrderListBox>
            {
            props.orderArr.length === 0 ?
             <div
             style={{
                 marginTop: '55%',
                 textAlign: 'center',
                 fontSize: '16px',
                 color:'#696969',
                 letterSpacing: '2px'
             }}

         >你的账户暂无订单</div>
            :
            <ul>
            {
                props.orderArr.map((item,index) => {
                    return (
                        <li className="orderItem" key={index}>
                            <div className='buy-mode'>购买方式 : <span>公众号购买</span></div> 
                            <div className="ordernum">订单编号 : {item.ordernum}</div>
                            <div className="ordertime">订单时间 : {item.creat_time}</div>
                            <div className="border"></div>
                            <div className='rightDetail' onClick={props.handleGoDetail.bind(this,item,item.ordernum)}>
                                <i className='iconfont icon-portal-icon-zuojiantou-copy'></i>
                            </div>
                            <ul className='foodlist'>
                                {   
                                    item.singlename === undefined ? null :
                                    item.singlename.map((food,index) => {
                                        return (
                                            <li key={index}>
                                                <div className='food-item'>
                                                    <span className='name'>{food}</span>
                                                    <span className='count'>x {item.singlenum[index]}</span>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            <ul className='foodlist'>
                                {   
                                    item.setmealname === undefined ? null :
                                    item.setmealname.map((food,index)=> {
                                        return (
                                            <li key={index}>
                                                <div className='food-item'>
                                                    <span className='name'>{food}</span>
                                                    <span className='count'>x {item.setmealnum[index]}</span>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </li>
                    )
                })
            }
        </ul>
            }
            
        </OrderListBox>
       
    )
}

export default OrderList;