import React ,{Component} from 'react';
import {CoffeebeanDealBox, ToastBox} from './style'
import {coffeebeandealApi} from './../../api'
import axios from 'axios';
import TopGoBack from './../../common/topgoback';
import LoadTwo from './../../assets/URECUPGIFBLACK.gif'
class CoffeeBeanDeal extends Component {
    state = {
        coffeebeandealinglist:[],
        toastShow: false
    }
    render(){
        return (
        <CoffeebeanDealBox>
            <TopGoBack></TopGoBack>
            {this.state.toastShow?
                 <ToastBox>
                    <div className="image">
                        <img src={LoadTwo} alt='load' />
                    </div>
                </ToastBox>:
            <ul>
                {this.state.coffeebeandealinglist.length > 0 ? 
                    this.state.coffeebeandealinglist.map((item, index) => {
                           
                              return   <li className='dealing' key={index}>
                              <div className='dealtype'>
                                    {item.type === 5?<span>消费：</span>:null}
                                    {item.type === 4?<span>赠送：</span>:null}
                                    {item.type === 3?<span>赠送：</span>:null}
                                    {item.type === 2?<span>买进：</span>:null}
                                    {item.type === 1?<span>赠送：</span>:null}
                                    <span> {item.num<0?(item.num*-1):(item.num)}&nbsp;<i className='iconfont icon-kafeidou01-copy '></i> </span> 
                                </div>
                                <div className='coffeebeanbalance'>
                                    <span>余额：</span>
                                    <span>{item.dou} &nbsp;<i className='iconfont icon-kafeidou01-copy '></i> </span>
                                </div>
                                <div className='dealtime'>
                                <span> 时间：</span><span>{item.time2}</span>
                                </div>
                         </li>
                    })
                     
                    : <div
                    style={{
                        marginTop: '55%',
                        textAlign: 'center',
                        fontSize: '16px',
                        color:'#696969',
                        letterSpacing: '2px'
                    }}
       
                >暂无咖啡豆交易记录</div>
                }
               
            </ul>
            }
         </CoffeebeanDealBox>
        );
    }
    componentDidMount(){
        document.title = '咖啡豆交易明细'
        setTimeout(()=>{
            this.setState({
                toastShow: false
            })
        },2000);  
        this.getCoffeebeanDealing();
    }
    getCoffeebeanDealing(){
        // let userinfo_id = 43;
        let userinfo_id = JSON.parse(window.localStorage.getItem("userinfo")).id;
        axios.post(coffeebeandealApi,{
            id: `u0280${userinfo_id}`
        },{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            }
        }).then(res => {
                console.log(res.data)              
                this.setState({
                    coffeebeandealinglist: res.data
                })
        }).catch(error => {
            console.log(error);
        })
    }
}
export default CoffeeBeanDeal;