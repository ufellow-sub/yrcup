import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store'
import {
    ShopCarBox
} from './style'

class ShopCar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ShopCarShow: false
        }
    }
    render() {
        const { selectFoods , goods } = this.props;

        var totalCount = 0;
        var totalPrice = 0;
        selectFoods.forEach((food,index) => {
            totalCount += food.count;
            totalPrice += food.count * food.price;
        })
        return (
            <ShopCarBox>
                   {
                    totalCount === 0 ? null : 
                    <div>
                    <div className="content">
                            <div className="logo-wrapper">
                                <i className='iconfont icon-gouwuche'></i>
                                {
                                    totalCount === 0 ? null : <div className="num">{totalCount}</div>
                                }
                            </div>
                            
                            <div className="total-price" onClick={this.handleChangeShopCarShow.bind(this)}>共 ¥ {totalPrice} 元</div>
                            <div className='go'>去结算</div>
                        </div>
                        {
                            this.state.ShopCarShow ? <div className="shopcart-list">
                            <div className="list-header">
                                <div className="title">购物车</div>
                                <div className="empty" onClick={this.handleEmpty.bind(this,selectFoods)}>清空</div>
                            </div>
                            <ul className="list-content">
                                {
                                    selectFoods.map((food,index) => {
                                        return (
                                            <li className='list-item' key={index}>
                                                <div className="name">{food.name}</div>
                                                <div className="cartcontrol">
                                                    <span className="cart-decrease" onClick={this.handleDecrease.bind(this,food,index)}>-</span>
                                                    <span className="cart-count">{food.count}</span>
                                                    <span className="crat-add" onClick={this.handleAdd.bind(this,food,index)}>+</span>
                                                </div>
                                                <div className='price'>¥ {food.price * food.count}</div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div> : null
                        }
                    </div>
                   }
            </ShopCarBox>
        )
    }
    handleChangeShopCarShow () {
        this.setState({
            ShopCarShow: !this.state.ShopCarShow
        })
    }

    handleDecrease(food,index) {
        let { goods , selectFoods } = this.props;
        goods.forEach(item => {
            if(item.name === food.name) {
                if(item.count > 0) {
                    item.count--;
                    food.count--;
                }
            }
        });
        if(food.count === 0) {
            selectFoods.splice(index,1);
            if(selectFoods.length === 0) {
                this.setState({
                    ShopCarShow: false
                })
            }
        }
        let NewSelectFoods = JSON.parse(JSON.stringify(selectFoods))
        let NewGoods = JSON.parse(JSON.stringify(goods))
        this.props.handleDecrease(NewGoods,NewSelectFoods)
    }

 
    handleAdd(food,index) {
        let { goods , selectFoods } = this.props;
        goods.forEach((item,index) => {
            if(item.name === food.name) {
                item.count++;
                food.count++;
            }
        })
        let NewSelectFoods = JSON.parse(JSON.stringify(selectFoods))
        let NewGoods = JSON.parse(JSON.stringify(goods))
        this.props.handleAdd(NewGoods,NewSelectFoods)
    }

    handleEmpty() {
        let { goods , selectFoods } = this.props;
        goods.forEach(food => {
            food.count = 0;
        })
        this.setState({
            ShopCarShow: false
        })
        selectFoods = [];
        let NewGoods = JSON.parse(JSON.stringify(goods))
        let NewSelectFoods = JSON.parse(JSON.stringify(selectFoods))
        this.props.handleEmpty(NewGoods,NewSelectFoods)

    }
}

const mapStateToProps = (state) => {
    return {
        goods: state.singleReducer.goods,
        selectFoods: state.singleReducer.selectFoods,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectFoodsFunc(arr) {
            dispatch(actionCreators.selectFoodsAction(arr))
        },
        handleDecrease(NewGoods,NewSelectFoods) {
            dispatch(actionCreators.handleDecreaseAction(NewGoods,NewSelectFoods))
        },
        handleAdd(NewGoods,NewSelectFoods) {
            dispatch(actionCreators.handleAddAction(NewGoods,NewSelectFoods))
        },
        handleEmpty(NewGoods,NewSelectFoods) {
            dispatch(actionCreators.handleEmptyAction(NewGoods,NewSelectFoods))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShopCar);