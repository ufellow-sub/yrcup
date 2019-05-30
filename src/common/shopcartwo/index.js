import React , {Fragment} from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
// import { actionCreators } from './store'
import {
    ShopCarBox,
    Mask
} from './style'

class ShopCar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ShopCarShow: false,
            MaskShow: false
        }
    }
    render() {
        let good = JSON.parse(localStorage.getItem('good'))
        var totalCount = 0;
        var totalPrice = 0;
        if(good === null) {
            return false;
        } else {
            good.forEach((food,index) => {
                totalCount += food.count;
                totalPrice += food.count * food.price;
            })
        }
        good.forEach((food,index) => {
            if(food.count === 0) {
                good.splice(index,1)
                localStorage.setItem('good',JSON.stringify(good))
            }
        })

        return (
            <Fragment>
                <ShopCarBox>
                    {
                        totalCount === 0 ? null : 
                        <div>
                        <div className="content">
                                <div className="logo-wrapper" onClick={this.handleChangeShopCarShow.bind(this)} >
                                    <i className='iconfont icon-shopping-cart1'></i>
                                    {
                                        totalCount === 0 ? null : <div className="num">{totalCount}</div>
                                    }
                                </div>
                                
                                <div className="total-price" onClick={this.handleChangeShopCarShow.bind(this)}>共计&nbsp;:&nbsp; ¥ {totalPrice.toFixed(2)} </div>
                                <div className='go' onClick={this.handlePayment.bind(this)}>
                                    <span>去结算</span>
                                </div>
                            </div>
                            {
                                this.state.ShopCarShow ? <div className="shopcart-list">
                                <div className="list-header">
                                    <div className="title">已选饮品</div>
                                    <div className="empty" onClick={this.handleEmpty.bind(this)}>
                                        <div className="border-box"><i className='iconfont icon-lajitong'></i></div>
                                        <div className='empty-text'>清空</div>
                                    </div>
                                </div>
                                <ul className="list-content">
                                    {
                                        good.map((food,index) => {
                                            if(food.count === 0) {
                                                return null
                                            } else {
                                                return (
                                                    <li className='list-item' key={index}>
                                                        <div className="name">
                                                            <div className="title">U</div>
                                                            <div className="info">
                                                                <div className="namezh">{food.name}</div>
                                                                <div className="nameen">{food.english}</div>
                                                            </div>
                                                        
                                                        </div>
                                                        <div className="cartcontrol">
                                                            <span className="cart-decrease" onClick={this.handleDecrease.bind(this,food,index)}></span>
                                                            <span className="cart-count">{food.count}</span>
                                                            <span className="crat-add" onClick={this.handleAdd.bind(this,food,index)}></span>
                                                        </div>
                                                        <div className='price'>¥ {(food.price * food.count).toFixed(2)}</div>
                                                    </li>
                                                )
                                            }
                                        })
                                    }
                                </ul>
                            </div> : null
                            }
                        </div>
                    }
                </ShopCarBox>
                {
                    this.state.MaskShow ? <Mask></Mask> : null
                }
               
            </Fragment>
            
        )
    }
    handleChangeShopCarShow () {
        this.setState({
            ShopCarShow: !this.state.ShopCarShow,
            MaskShow: !this.state.MaskShow
        })
        
    }

    handleDecrease(food,index) {
        let good = JSON.parse(localStorage.getItem('good'));
        if(good.length === 1 ) {
            if(good[0].count === 1) {
                this.setState({
                    ShopCarShow: false,
                    MaskShow: false
                })
            } 
        }
        for(let i=0;i<good.length;i++) {
            if (good[i].name === food.name) {
                good[i].count = good[i].count - 1;
                localStorage.good= JSON.stringify(good)
                let date = new Date();
                let time = date.getTime();
                this.setState({
                    time: time
                })
                break;
            }
        }
    }

 
    handleAdd(food,index) {
        let good = JSON.parse(localStorage.getItem('good'));
        for(let i=0;i<good.length;i++) {
            if (good[i].name === food.name) {
                good[i].count = 1 + good[i].count;
                localStorage.good= JSON.stringify(good)
                let date = new Date();
                let time = date.getTime();
                this.setState({
                    time: time
                })
                break;
            }
        }
    }

    handleEmpty() {
        localStorage.removeItem('good');
        let date = new Date();
        let time = date.getTime();
        this.setState({
            time: time,
            ShopCarShow: false,
            MaskShow: false
        })
    }

    handlePayment() {
        // this.props.history.push('/settlement',this.props.location.pathname)
        this.props.history.push({
            pathname: '/settlement',
            state: {
                pathname:this.props.location.pathname
            }
        })
    }
}

const mapStateToProps = (state) => {
    return {
        goods: state.singleReducer.goods,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       
        
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ShopCar));