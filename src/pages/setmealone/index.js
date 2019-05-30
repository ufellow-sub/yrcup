import React from 'react';
import { connect } from 'react-redux';
import {SingleContainer, SingleSwiper, SingleFoods} from './style'
import { actionCreators } from './store'
import ShopCar from './../../common/shopcar'

class SetMealOne extends React.Component {
    render() {
        const { goods } = this.props;
        return (
            <SingleContainer>
                <SingleSwiper></SingleSwiper>
                <SingleFoods>
                    <ul className='food-list'>
                        {
                            goods.map((food,index) => {
                               if(food.classify === 2) {
                                return (
                                    <li key={index}>
                                        <div className="food-icon">
                                            <img
                                                src="http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
                                                alt=""/>
                                        </div>
                                        <div className="food-text">
                                            <h3 className='name'>{food.name}</h3>
                                            <p className='title'>{food.info}</p>
                                            <p className='title'>{food.infoEnglish}</p>
                                            <p className='price'>
                                                <span className='new-price'>¥ {food.price}</span>
                                                <span className='old-price'>¥ {food.oldpirce}</span>
                                            </p>
                                        </div>
                                        <div className="food-add" onClick={this.handleAdd.bind(this,food)}>+</div>
                                    </li>
                                   )
                               } else {
                                   return null
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
    uniq(arr){
        var res =[];
　　    var json = {};
　　    for(var i=0;i<arr.length;i++){
    　　　　if(!json[arr[i]]){
    　　　　　　res.push(arr[i]);
    　　　　　　json[arr[i]] = 1;
    　　　　}
　　    }
　　    return res;
    }

    handleAdd(food) {
        food.count++
        let goods = this.props.goods
        let arr = [];
        goods.forEach((food,index) => {
            if(food.count > 0) {
                arr.push(food);
                this.props.selectFoods(arr)
            }
        })
    }

    componentDidMount() {
        if(this.props.goods.length <= 0) {
            this.props.handleInitSingleData()
        }
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
        handleInitSingleData() {
            dispatch(actionCreators.InitSingleData())
        },
        selectFoods(arr) {
            dispatch(actionCreators.selectFoods(arr))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SetMealOne);