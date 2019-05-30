import React ,{Component} from 'react'
import axios from 'axios';
import{transactionApi} from './../../api'
import {TransactionBox ,ToastBox} from './style'
import TopGoBack from './../../common/topgoback'
import LoadTwo from './../../assets/URECUPGIFBLACK.gif'
class Transaction  extends Component{
    state = {
        currentTab : 1,
        transactionlist:[],
        toastShow: true
    }
    render(){
        return(
            <TransactionBox>
                <TopGoBack></TopGoBack>
                <div className='top'>
                    <div>
                        <span onClick={this.tabChange.bind(this,1)} className ={this.state.currentTab === 1?'active':''}>充值明细</span>
                        <span>|</span>
                        <span onClick={this.tabChange.bind(this,2)}  className={this.state.currentTab === 2 ?'active':''}>提现明细</span>
                    </div>
                </div>
               {this.state.toastShow?
                 <ToastBox>
                    <div className="image">
                        <img src={LoadTwo} alt='load' />
                    </div>
                </ToastBox>
               : this.state.currentTab == 1?
                (this.state.transactionlist.length == 0?
                    <div style={{
                        marginTop: '55%',
                        textAlign: 'center',
                        fontSize: '16px',
                        color:'#696969',
                        letterSpacing: '2px'
                    }}
                    >暂无记录</div>
                    :
                 <ul>
                {
                   this.state.transactionlist.map((item,index) => {
                        return <li className='transactionlist' key={index}>
                                    <div className='transaction-id'>
                                        <span>订单编号：</span><span>{item.number}</span>
                                    </div>
                                    <div className='transaction-num'>
                                        <div><span>充值金额：</span><span>{item.price}&nbsp;元</span></div>
                                        <div ><span>充值奖励：</span><span>{item.price*5}&nbsp;<i className='iconfont icon-kafeidou01-copy '></i></span></div>
                                    </div>
                                    <div className='transaction-balance'>
                                        <span>当前余额：</span><span>{item.money_yu}&nbsp;元</span>
                                    </div>
                                    <div className='transaction-time'>
                                        <span>充值时间：</span><span>{item.done_time2}</span>
                                    </div>
                                </li>
                    })
                    }
            </ul>)
            
            :
            <div style={{
                textAlign: "center",
                fontSize: "14px",
                marginTop: "60%",
                color: 'rgb(152, 124, 108)',
                letterSpacing: '2px'
            }}
            >敬请期待</div>
            }

               
                
            </TransactionBox>
        );
    }
    componentDidMount(){
        document.title = '充值 / 提现明细'
        setTimeout(()=>{
            this.setState({
                toastShow: false
            })
        },2000);  
             this.getTransaction();  
    }
    tabChange(tab){
        console.log(tab)
        if(tab == 1){
            this.getTransaction();       
        }
        this.setState({
            currentTab: tab
        })
    }
    //获取交易列表
    getTransaction(){
        // let userinfo_id = 43;
        let userinfo_id = JSON.parse(window.localStorage.getItem("userinfo")).id;
        axios.post(transactionApi,{
            id: `u0280${userinfo_id}`
        },{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            }
        }).then(res => {
                console.log(res)              
                this.setState({
                    transactionlist: res.data
                })
        }).catch(error => {
            console.log(error);
        })
    }
}
export default Transaction ;