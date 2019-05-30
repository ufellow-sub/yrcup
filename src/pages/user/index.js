import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import {
    coupon
} from './../../api/index'
import {
    UserBox,
    UserInfo,
    UserOption,
    UserList
} from './style'
import {
    UpdateUserinfo
} from './../../api/index'


class User extends React.Component {
    constructor(props) {
        super(props);
        document.title = '个人中心'
        this.state = {
            CouponLength: 0,
            grade: 0
        }
    }
    render() {
        const { CouponLength } = this.state;
        let userinfo = JSON.parse(localStorage.getItem('userinfo'));
        if(userinfo === null) {
            userinfo = {
                head_img: '',
                id: '',
                money: '',
                grade: 0
            }
        } 
        const grade_is = () => {
            if(userinfo.grade === 0) {
                return (
                    <h2 className='title cj'>
                        <i className='iconfont icon-kafeidou01-copy '></i>
                        <span>注册会员</span>
                    </h2>
                )
            } else if (userinfo.grade === 1) {
                return (
                    <h2 className='title zj'>
                        <i className='iconfont icon-kafeidou01-copy'></i>
                        <span>VIP会员</span>
                    </h2>
                )
            } else if (userinfo.grade === 2) {
                return (
                    <h2 className='title gj'>
                        <i className='iconfont icon-kafeidou01-copy'></i>
                        <span>金牌VIP</span>
                    </h2>
                )
            } else if (userinfo.grade === 3) {
                return (
                    <h2 className='title zs'>
                        <i className='iconfont icon-kafeidou01-copy'></i>
                        <span>钻石VIP</span>
                    </h2>
                )
            }
        }
        return (
            <UserBox>
                <UserInfo>
                    <div className="avatar">
                        <img src={userinfo.head_img} alt="avatar"/>
                    </div>
                    <div className="info">
                        <p className='username'>用户名&nbsp;:&nbsp; {userinfo.nickname}</p>
                        <p className='uid'>UID&nbsp;:&nbsp; {`U0280${userinfo.id}`}</p>
                        {grade_is()}
                        <div className='statustwo' onClick={this.handleGoGradeNote.bind(this)}>
                            <span className='assessment-text'>会员等级说明 ></span>
                        </div>
                        <div className='status' style={{display: 'none'}}>
                            <div className="status-icon">
                                <i className='icon iconfont icon-kafeidou01-copy'></i>
                            </div>
                            <span className='status-text'>赚钱中...</span>
                            <span className='assessment-text'>考核标准></span>
                        </div>
                    </div>
                </UserInfo>
                
                <UserOption>
                    <li style={{
                        marginLeft: '7px'
                    }}>
                        <Link to={{pathname:'/coupon',state: {pathname: this.props.location.pathname}}} >
                            <i className='icon iconfont icon-discount' style={{
                                fontSize: '17px'
                            }}></i>
                            <p style={{
                                marginTop: '7px',
                                textAlign: 'center',
                            }} className='title'>我的U惠券</p>
                            <p className='info' style={{
                                textAlign: 'center',
                            }}>{CouponLength}
                                <span style={{
                                    fontSize: '12px'
                                }}>张</span>
                            </p>
                        </Link>
                        
                    </li>
                    <li>
                        <Link to='/recharge'>
                            <i className='icon iconfont icon-chongzhi'></i>
                            <p className='title' style={{
                                marginTop: '8px',
                                marginLeft: '3px'
                            }}>充值/提现</p>
                            <p className='info price' style={{
                                marginTop: '10px',
                            }}>{userinfo.money == null ? "0.00" : userinfo.money}¥</p>
                        </Link>
                    </li>
                    <li>
                        <Link to='/manor'>
                            <i className='icon iconfont icon-nongchang' style={{
                                fontSize: '13px',
                                marginTop: '5px'
                            }}></i>
                            <p className='title' style={{
                                marginTop: '10px',
                                marginLeft: '2px',
                            }}>我的庄园</p>
                            <p className='info'
                                style={{
                                    marginTop: '10px',
                                }}
                            >进入</p>
                        </Link>
                    </li>
                </UserOption>
                
                <UserList>
                    <ul>
                        <li>
                            <Link to='/mycoffee'>
                                <i className='icon iconfont icon-coffee' style={{
                                    position: 'absolute',
                                    top: '2px',
                                    left: '0px',
                                    fontSize: '18px'
                                }}></i>
                                <span>我的咖啡</span>
                                <i className='right iconfont icon-portal-icon-zuojiantou-copy'></i>   
                            </Link>
                        </li>
                        <li>
                            <Link to='/order'>
                                <i className='icon iconfont icon-jiaoyijilu'></i>
                                <span>我的订单</span>
                                <i className='right iconfont icon-portal-icon-zuojiantou-copy'></i>   
                            </Link>
                        </li>
                        <li>
                            <Link to='/myfriend'>
                                <i className='icon iconfont icon-friend1' style={{
                                    position: 'absolute',
                                    top: '2px',
                                    left: '0px',
                                    fontSize: '18px'
                                }}></i>
                                <span>我的咖友</span>
                                <i className='right iconfont icon-portal-icon-zuojiantou-copy'></i>
                            </Link>
                        </li>
                        <li>
                            <Link to='/invoice'>
                                <i className='icon iconfont icon-my-invoice' style={{
                                    fontSize: '16px',
                                    top: '2px',
                                    left: 0,
                                    position: 'absolute'
                                }}></i>
                                <span>索要发票</span>
                                <i className='right iconfont icon-portal-icon-zuojiantou-copy'></i>
                            </Link>
                        </li>
                        <li>
                            <Link to='/setup'>
                                <i className='icon iconfont icon-shezhi' style={{
                                    fontSize: '21px',
                                }}></i>
                                <span>设置</span>
                                <i className='right iconfont icon-portal-icon-zuojiantou-copy'></i> 
                            </Link>
                        </li>
                    </ul>
                </UserList>
            </UserBox>
        )
    }
    // 前往会员等级说明
    handleGoGradeNote() {
        this.props.history.push('/member')
    }
    
    // 获取优惠券数量
    getCouponLength(id) {
        axios.post(coupon,{
            memberid: `u0280${id}`
        },{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            }
        }).then(res => {
            console.log(res)
            let CouponLength = res.data.length;
            this.setState({
                CouponLength
            })

        }).catch(err => {
            console.log(err);
        })
    }
    componentDidMount() {
        if(localStorage.getItem('userinfo') == null ) {
            this.props.history.push({pathname:'/load',state:{pathname:this.props.location.pathname}})
        } else {
            let userinfo_id = JSON.parse(localStorage.getItem('userinfo')).id;
            axios.post('https://www.youruika.cn/index/member/ismember',{
            memberid: `u0280${userinfo_id}`
        }).then(res=> {
            if(res.data === 0) {
                this.props.history.push({pathname:'/load',state:{pathname:this.props.location.pathname}})
            } else {
                UpdateUserinfo(`u0280${userinfo_id}`,this.props);
                this.getCouponLength(userinfo_id);
            }
            }).catch(err => {
                console.log(JSON.stringify(err))
            })
        }
    }
}

export default User;