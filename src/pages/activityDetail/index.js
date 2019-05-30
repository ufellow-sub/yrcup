import React, {Component} from 'react';
import axios from 'axios';
import {Box} from './style'
import {getCouponApi} from './../../api';
import TopGoBack from './../../common/topgoback'
export default class ActivityDetail extends Component{
    state={
        activity:{},
        isGetCoupon: false,
        message:''
    }
    render(){
        console.log(this.state.activity)
        const activity = this.state.activity;
        const msg = this.state.message;
        return(
            <div>
                  <TopGoBack></TopGoBack>
                <Box>                
                        <p className='title'>{activity.title}</p>
                        {/* <div className="activity-image">
                                        <img src={Logo} alt="image"/>
                        </div>  */}
                    <div className='content'>                   
                            <p dangerouslySetInnerHTML={{ __html: activity.content}}  />
                    </div>
                    <div className='getquan'>
                        {activity.is_activity == 1?
                            <button className='button-gettedcoupon'>{msg}</button>
                        :
                        <button className='button' onClick={this.getCoupon.bind(this)}>领取券</button>
                        }
                        
                    </div>
                </Box>
           </div>
        );
    }
    componentDidMount(){
        document.bgColor = '#fff'
        if(this.props.location.state == undefined){
            this.props.history.push('/activity');
            return false;
        }
            this.setState({
                activity: this.props.location.state.activity
            });
    }
    getCoupon(){
        const activity = this.state.activity;
        let member_id = JSON.parse(localStorage.getItem('userinfo')).id;
        if(!this.state.isGetCoupon){
            axios.post(getCouponApi,{
                id: activity.id,
                uid: member_id
            })
            .then((res)=>{
                console.log(res)               
                    if(res.data.code == 0){
                        activity.is_activity = 1;
                        this.setState({
                            activity: activity,
                            message: '已领取'
                        }) 
                    } else if(res.data.code == 1){
                        activity.is_activity = 1;
                        this.setState({
                            activity: activity,
                            message: '已经领取过了'
                        }) 
                      
                    } else{
                        alert('领取失败')
                    }   
            })
            .catch((error)=>{
                console.log(error)
            })
        }
        else{

        }
       
    }
}