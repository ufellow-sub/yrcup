import React from 'react';
import axios from 'axios'
import {
    MyCoffeeBox,
    CoffeeList,
    TakeCoffee,
    TakeCoffeeList,
    TopGoBack
} from './style'
import {
    SingleUrl
} from './../../api/index'
import {
    mycoffee 
} from './../../api/index'
class MyCoffee extends React.Component {
    constructor(props) {
        super(props);
        document.title = '我的咖啡';
        this.state = {
            coffeeList: [],
            show: false,
            sureshow: false
        }
    }
    render() {
        const {coffeeList , show , sureshow} = this.state;
        console.log(coffeeList)
        return(
            <MyCoffeeBox>
                <TopGoBack>
                    <i className='iconfont icon-portal-icon-zuojiantou' onClick={this.handleGoBack.bind(this)}></i>
                    <span onClick={this.handleGoBack.bind(this)}>返回</span>
                </TopGoBack>

               <CoffeeList>
                    {
                        coffeeList.length === 0 ? 
                        <div
                            style={{
                                position: 'absolute',
                                fontSize: '16px',
                                top: '50%',
                                marginTop: '-9px',
                                textAlign: 'center',
                                width: '100%',
                                letterSpacing: '2px',
                                color: '#696969'
                            }}

                        >你的账户暂无咖啡</div>
                        :
                        <ul className='coffee-list'>
                        {
                            coffeeList.map((item,index) => {
                                return (
                                    <li key={index} className='coffee-item'>
                                        <div className="avatar">
                                            <img src={`${SingleUrl}${item.single_photo}`} alt=""/>
                                        </div>
                                        <div className="content">
                                            <div className="title">
                                                <span className='name'>{item.goodname}</span>
                                                <span className='count'>X {item.number}</span>
                                            </div>
                                            <div className="redeem">
                                                <span className='redeem-text'>兑换码:</span>
                                                <ul className={item.more ? 'redeem-ul ative' : 'redeem-ul'} >
                                                    {   
                                                        item.exchangenum.map((num) => {
                                                            return (
                                                                <li key={num.take_id}>{num.exchangenum}</li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                                <div className={item.more ? 'iconfont icon-arrLeft-fill more active' : 'iconfont icon-arrLeft-fill more'} onClick={this.handleMore.bind(this,item,coffeeList)}></div>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    }
               </CoffeeList>
               {
                   show ? <TakeCoffeeList>
                   <div className='tips'>选择你要的取的咖啡</div>
                   <ul>
                       {
                           coffeeList.map((item,index) => {
                               return (
                                   <li key={index} onClick={this.handleClickSure.bind(this,index)}>
                                       <span className='name'>咖啡名称 : {item.goodname}</span>
                                       <span className='num'>咖啡数量: {item.number}</span>
                                   </li>
                               )
                           })
                       }
                   </ul>
                   {
                        sureshow ?  <div className='sure'>
                                        <div className="sure-box">
                                            <div className="tips">确认咖啡种类</div>
                                            <div className='btn'>
                                                <button className='cancelbtn' onClick={this.handleCancel.bind(this)}>取消</button>
                                                <button className='surebtn' onClick={this.handleTakeCoff.bind(this)}>确定</button>
                                            </div>
                                        </div>
                                </div> : null
                   }
                   
          </TakeCoffeeList> : null
               }
                {/* <div onClick={this.handlesys.bind(this)}>扫码</div> */}
               {/* <TakeCoffee>
                    <button onClick={this.handleShow.bind(this)}>扫码去咖啡</button>
               </TakeCoffee> */}
               
               
            </MyCoffeeBox>
        )
    }
    // 回到用户页面
    handleGoBack() {
        this.props.history.push({
            pathname: '/user'
        })
    }
    
    //handlesys
    handlesys() {
        window.wx.ready(function(){
            window.wx.scanQRCode({
                needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
                scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
                success: function (res) {
                    console.log(res)
                    var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
                    console.log(result)
                }
            });
        });
    }

    handleMore(item,coffeeList) {
        console.log(coffeeList);
        item.more = !item.more;
        this.setState({
            coffeeList
        })
    }
    // 显示确定
    handleClickSure(index) {
        this.setState({
            sureshow: true
        })
    }

    // 取消
    handleCancel() {
        this.setState({
            sureshow: false
        })
    }
    // 去咖啡
    handleTakeCoff() {
        alert('取咖啡')
        this.setState({
            show: false,
            sureshow: false
        })
    }

    handleShow() {
        let {coffeeList , show} = this.state;
        if(coffeeList.length === 0) {
            return 
        } else {
            this.setState({
                show: !show
            })
        }
       
    }
    componentDidMount() {
        let userinfo_id = JSON.parse(window.localStorage.getItem("userinfo")).id;
        axios.post(mycoffee,{
            memberid: `u0280${userinfo_id}`
        },{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            }
        }).then(res => {
            let data = res.data;
            for(let i=0;i<data.length;i++) {
                data[i].more = false;
            }
            console.log(data);
            this.setState({
                coffeeList: data
            })
        }).catch(err => {
            console.log(err);
        })
    }
}

export default MyCoffee;