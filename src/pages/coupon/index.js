import React from 'react';
import {
    CouponBox,
    CouponTitle,
    CouponList,
    NoUse,
    Unsuited
} from './style'
import axios from 'axios';
import {
    coupon
} from './../../api/index'
import TopGoBack from './../../common/topgoback'
class Coupon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            MoreShow: false,
            List: []
        }
        document.title = '我的U惠券';
        if(this.props.location.state === '/settlement') {
            document.title = '可使用的优惠券';
        }
    }
    
    render() {
        const { List } = this.state;
        console.log(this.props);
        console.log(List);
        return (
            <CouponBox>
                <TopGoBack></TopGoBack>
                {
                    this.props.location.state === undefined || this.props.location.state.pathname === "/user" ? <CouponTitle onClick={this.handleGoExplain.bind(this)}>使用规则</CouponTitle> : null
                }
                {
                    List.length === 0 ? <Unsuited>没有适合的优惠券~</Unsuited> :
                    <CouponList>
                    <ul >
                        {   
                            this.state.List.map((item,index) => {
                                return (
                                    <li key={index} 
                                    >
                                        <div className="title">
                                            <span className='title-name'>{item.title}</span>
                                            <span className='title-price'>{/**¥ */} </span>
                                        </div>
                                        <div className="content">
                                            <h2>包含:</h2>
                                            <div className={item.MoreShow ? 'content-text' : 'content-text ellipsis'}>
                                               {item.instructions}
                                            </div>
                                            <p className='more' onClick={this.handleShowMore.bind(this,item,List)}>
                                                <i className={item.MoreShow ? 'iconfont icon-arrLeft-fill rotate' : 'iconfont icon-arrLeft-fill'}></i>
                                            </p>
                                        </div>
                                        <div className="introduce">{item.introduce}</div>
                                        <div className="other">
                                            {/** 
                                                <span className='datetwo'>每次仅限使用一张U惠券</span>
                                            */}
                                            <span className='date'>有效期至: {item.endtime}</span>
                                            {
                                                this.props.location.state === undefined || this.props.location.state.pathname === '/user' ?  <span className='number'>X 1 张</span> : <span className='number' onClick={this.handleChoice.bind(this,item.single_id,item.type,item.title,item.member_couponId)}>X 1 张</span> 
                                            }
                                        </div>
                                    </li>
                                )
                            })    
                        }
                    </ul>
                </CouponList>
                }
                { this.props.location.state === '/settlement' ? <NoUse onClick={this.handleNoUse.bind(this)}>本次不使用券</NoUse> : null }
            </CouponBox>
        )  
    }
    handleShowMore(item,List) {
        item.MoreShow = !item.MoreShow;
        this.setState({
            List
        })
    }
    handleGoExplain() {
        this.props.history.push('/couponexplain')
    }

    // 使用优惠券
    handleChoice(single_id,type,title,member_couponId) {
        this.props.history.push({
            pathname: '/settlement',
            state: {
                single_id: single_id,
                type: type,
                title: title,
                member_couponId: member_couponId
            }
        });
    }
    // 不使用优惠券
    handleNoUse() {
        this.props.history.push({
            pathname: '/settlement',
            state: {
                single_id: '',
                type: '',
                title: undefined,
                member_couponId: ''
            }
        });
    }

    componentDidMount() {
        let id = JSON.parse(localStorage.getItem('userinfo')).id;
        axios.post(coupon,{
            memberid: `u0280${id}`
        },{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            }
        }).then(res => {
            console.log(res)
            this.setState({
                List: res.data
            },() => {
                console.log(this.props)
                if(this.props.location.state === undefined) {
                    this.setState({
                        List: res.data
                    })
                } else if (this.props.location.state.pathname === '/settlement') {
                    const good = JSON.parse(localStorage.getItem('good'));
                    const { List } = this.state;
                    let Arr = []
                    if(good) {
                        good.forEach((food) => {
                            console.log(food);
                            List.forEach(item => {
                                if(item.single_id == food.Id && food.type == "1")  {
                                    Arr.push(item);
                                    this.setState({
                                        List: Arr
                                    })
                                } else {
                                    this.setState({
                                        List: Arr
                                    })
                                }
                            })
                        })
                    } else {
                        return ;
                    }
                }
                
            })
        }).catch(err => {
            console.log(err)
        })
    }
    componentDidUpdate(prevState) {

        
    }
}

export default Coupon;