import React from 'react';
import { NavLink , withRouter } from 'react-router-dom';
import {
    TabbarBox
} from './style'

class Tabbar extends React.Component {
    render() {
    const publicList = [
        '/settlement','/load','/serveice','/coupon','/recharge','/manor','/mycoffee','/order',
        '/expect','/coffeebean','/orderdetail','/coffeemaker','/news','/activity','/activity/detail',
        '/couponexplain','/coffeebeanexplain','/myfriend','/invoice','/setup','/coffeebeandeal','/coffeetree',
        '/water','/fertilizer','/member','/detail','/transaction']
    let pathname = this.props.location.pathname;
    if (publicList.indexOf(pathname)>-1) {
        return null
    } else {
            return (
                <TabbarBox>
                    <NavLink to='/single' activeClassName='active' className='tab-item'>
                        <div className="box">
                            <span className='letter' style={{
                                fontSize:'18px',
                                top: '3px',
                                left: '28%'
                            }}>U</span>
                            <span style={{
                                top: '1.5px',
                                left: '45%',
                            }}>单品</span>
                        </div>
                    </NavLink>
                    <NavLink to='/setmeal' activeClassName='active' className='tab-item' style={{margin: "0 1%"}}>
                        <div className="box">
                            <span className='letter' style={{
                                fontSize:'18px',
                                top: '3px',
                                left: '28%'
                            }}>U</span>
                            <span style={{
                                top: '2px',
                                left: '45%',
                            }}>套餐</span>
                        </div>
                    </NavLink>
                    <NavLink to='/user' activeClassName='active' className='tab-item'>
                        <div className="box">
                            <i className='iconfont icon-ren' style={{
                                left: '26%',
                                top: '1px'
                            }}></i>
                            {/** <span className='letter'>U</span> */}
                            <span style={{
                                top: '1.5px',
                                left: '46%'
                            }}>我的</span>
                        </div>
                    </NavLink>
                </TabbarBox>
            )
        }
    }
}

export default withRouter(Tabbar);