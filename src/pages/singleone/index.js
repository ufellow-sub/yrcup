import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store'
import {
    SingleContainer,
    SingleSwiper,
    SingleFoods
} from './style'
import ShopCar from './../../common/shopcar'

class Singleone extends React.Component {
    
    render() {
        const { goods } = this.props;
        console.log(goods);
        return (
            <SingleContainer>
                <SingleSwiper></SingleSwiper>
                <SingleFoods>
                    <ul className='food-list'>
                        {
                            goods.map((food,index) => {
                                if(food.classify === 1) {
                                    return (
                                        <li key={index}>
                                            <div className="food-icon">
                                                <img src="http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750" alt=""/>
                                            </div>
                                            <div className="food-text">
                                                <h3 className='name'>{food.name}</h3>
                                                <p className='title'>{food.title}</p>
                                                <p className='price'>¥ {food.price}</p>
                                            </div>
                                            <div className="food-add" onClick={this.handleAdd.bind(this,food)}>+</div>
                                        </li>
                                    )
                                } else {
                                    return null;
                                }
                            })
                        }
                    </ul>
                </SingleFoods>
                <div className='shopcar'>
                    <ShopCar ></ShopCar>
                </div>
            </SingleContainer>
        )
    }
    // handleAdd (food) {
    //     food.count++
    //     let goods = this.props.goods
    //     let arr = [];
    //     goods.forEach((food,index) => {
    //         if(food.count > 0) {
    //             arr.push(food);
    //             this.props.selectFoods(arr)
    //         }
    //     })
    // }

    handleAdd(food) {
        let goods = this.props.goods
        // let aaa = window.localStorage.getItem('aaa');
        // console.log(aaa);
        let arr = []
        food.count++
        goods.forEach((food,index) => {
            if(food.count > 0) {
                arr.push(food);
                console.log(arr);
                this.props.selectFoods(arr)
            }
        })
    }


    componentDidMount() {
        document.title = '优瑞咖啡-单品'
        if(this.props.goods.length <= 0) {
            this.props.handleInitSingleData()
        }
    }
    
}

const mapStateToProps = (state) => {
    return {
        goods: state.singleReducer.goods,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInitSingleData(){
            dispatch(actionCreators.InitSingleData())
        },
        selectFoods(arr) {
            dispatch(actionCreators.selectFoodsAcrion(arr))

        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Singleone);