import React from 'react';
import { connect } from 'react-redux';
import {SingleContainer, SingleSwiper, SingleFoods} from './style'
import { actionCreators } from './store'
import ShopCar from './../../common/shopcartwo'
import {
    SetmealUrl
} from './../../api/index'
import axios from 'axios'
import {bannerApi , UpdateUserinfo} from './../../api/index'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'

class SetMealOne extends React.Component {
    constructor(props) {
        super(props)
        document.title = 'U 套餐';
        this.state = {
            arr: [],
            time: 0,
            setmealSwiper:[]
        }
    }
    render() {
        const { goods  } = this.props;
        const { setmealSwiper } = this.state;
        return (
            <SingleContainer>
                <div className="container">
                    <SingleSwiper>
                        <div className="swiper-container" style={{width: '100%',height: '150px'}}>
                            <div className="swiper-wrapper" style={{    position: 'absolute',top: '0',fontSize: '0px'}}>
                                {setmealSwiper.map((item,index)=>(
                                    <div style={{
                                        color: '#fff'
                                    }} key={index} className="swiper-slide" style={{fontSize: '0px'}}>
                                        <a href={item.url} style={{width: '100%',height: '100%'}}>
                                            <img style={{width: '100%',height: '100%'}} src={`https://www.youruika.cn/uploads/photo/`+item.photo} alt=""/>
                                        </a>
                                    </div>
                                ))}
                            </div>
                            <div className='swiper-pagination'></div>
                        </div>
                    </SingleSwiper>
                    <SingleFoods>
                        <ul className='food-list'>
                            {
                                goods.map((food,index) => {
                                if(food.type === "2") {
                                    return (
                                        <li key={food.Id}>
                                            <div className="food-icon">
                                                <img
                                                    src={`${SetmealUrl}${food.setmeal_photo}`}
                                                    alt=""/>
                                            </div>
                                            <div className="food-text">
                                                    <div className='food-info'>
                                                        <div className='title'>U</div>
                                                        <div className='info'>
                                                            <h3 className='name'>{food.setmeal_name}</h3>
                                                            <p className='title1'>{food.setmeal_english}</p>
                                                            <p className='title1'>{food.setmeal_count} x {food.set_num} , {food.setmeal_count2} x {food.set_num}</p>
                                                        </div>
                                                    </div>
                                                    <div className="food-price">
                                                        <span className="newPrice">¥ {Number(food.setmeal_price).toFixed(2)}</span>
                                                        <span className="oldPrice">¥ {Number(food.setmeal_original).toFixed(2)}</span>
                                                    </div>
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
                </div>
                <div className='shopcar'>
                    <ShopCar time={this.state.time}></ShopCar>
                </div>
            </SingleContainer>
        )
    }
    handleAdd(food,index) {
        console.log(food)
        var contact = new Object();//单个商品的对象，暂时介质
        var goodobj = new Object();//商品对象
        var memberfilter = new Array();//商品信息
        memberfilter[0] = "Id";
        memberfilter[1] = "count";
        memberfilter[2] = "pid";
        memberfilter[3] = "count";
        memberfilter[4] = "english";
        memberfilter[5] = "name";
        memberfilter[6] = "photo";
        memberfilter[7] = "price";
        memberfilter[8] = "type";
        if(typeof (localStorage.good) == "undefined") {
            contact.Id = food.Id;
            contact.count = 1;
            contact.pid = food.pid;
            contact.english = food.setmeal_english;
            contact.name = food.setmeal_name;
            contact.photo = food.setmeal_photo;
            contact.price = food.setmeal_price;
            contact.type = food.type;
            var good = new Array();
            var jsonText = JSON.stringify(contact, memberfilter);
            good[0] = JSON.parse(jsonText);
            console.log(jsonText)
            localStorage.good = JSON.stringify(good, memberfilter);
        } else {
            goodobj = JSON.parse(localStorage.good);
            let con = 0;
            for(let i=0;i<goodobj.length;i++) {
                if(goodobj[i].name === food.setmeal_name) {
                    goodobj[i].count = 1 + goodobj[i].count;
                    localStorage.good= JSON.stringify(goodobj, memberfilter);
                    con++;
                    break;
                }
            }
            if(con === 0) {
                contact.Id = food.Id;
                contact.count = 1;
                contact.pid = food.pid;
                contact.english = food.setmeal_english;
                contact.name = food.setmeal_name;
                contact.photo = food.setmeal_photo;
                contact.price = food.setmeal_price;
                contact.type = food.type;
                var jsonText = JSON.stringify(contact, memberfilter);
                var goolen = goodobj.length;
                goodobj[goolen] = JSON.parse(jsonText);
                localStorage.good= JSON.stringify(goodobj, memberfilter);
            }
        }
        let date = new Date();
        let time = date.getTime();
        this.setState({
            time: time
        })

    }

    componentDidMount() {
        if(localStorage.getItem('userinfo') == null) {
            this.props.history.push({pathname:'/load',state:{pathname:this.props.location.pathname}})
        }  else {
            let userinfo_id = JSON.parse(localStorage.getItem('userinfo')).id;
            axios.post('https://www.youruika.cn/index/member/ismember',{
            memberid: `u0280${userinfo_id}`
            }).then(res=> {
                if(res.data === 0) {
                    this.props.history.push({pathname:'/load',state:{pathname:this.props.location.pathname}})
                } else {
                    UpdateUserinfo(`u0280${userinfo_id}`,this.props);
                }
            }).catch((error)=>{
                console.log(error)
            })
        }
        if(this.props.goods.length <= 0) {
            this.props.handleInitSingleData()
        }
        axios.post(bannerApi).then((res)=>{
            console.log(res);
            this.setState({
                setmealSwiper: res.data.setmeal_photo
            },() => {
                new Swiper('.swiper-container', {
                    loop: true,     //循环
                    autoplay:{      //自动播放，注意：直接给autoplay:true的话，在点击之后不能再自动播放了
                        delay: 2500,
                        disableOnInteraction: false,    //户操作swiper之后，是否禁止autoplay。默认为true：停止。
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,    // 允许点击跳转
                    },
                });
            })

        }).catch((error)=>{
            console.log(error)
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
        handleInitSingleData() {
            dispatch(actionCreators.InitSingleData2())
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SetMealOne);