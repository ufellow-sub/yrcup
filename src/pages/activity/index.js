import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {ActivityBox} from './style';
import axios from 'axios';
import {getActivityApi, imgUrl} from './../../api/index'
export default class Activity extends Component {    
    state={
        activities:  []
    }
    render(){
             
        return(
            <ActivityBox>
                <ul>
                  { this.state.activities.length>0? this.state.activities.map((item,index)=>{
                       return <li key={index}>
                            <div className="activity-image">
                                <img src={imgUrl+item.images} alt="图片"/>
                            </div> 
                            <div className="title">{item.title}</div>
                            <div className="content">
                                 <p>{item.introduction}</p>
                            </div>
                            <div className="more-detail"> 
                                <Link to={{
                                    pathname:'/activity/detail',
                                    state:{"activity":item}
                                }}>
                                了解详情&nbsp;<i className="iconfont icon-right"></i>                         
                                </Link>
                            </div>
                     </li>
                    }): <div
                    style={{
                        marginTop: '55%',
                        textAlign: 'center',
                        fontSize: '16px',
                        color:'#696969',
                        letterSpacing: '2px'
                    }}
       
                >暂无活动</div>
                } 
                </ul>
            </ActivityBox>
        );
    }
    componentDidMount(){
        document.title = 'U活动';
        document.bgColor = '#000';   
        if(localStorage.getItem('userinfo') === null) {
            this.props.history.push({pathname:'/load',state:{pathname:this.props.location.pathname}})
        }  else {
            let userinfo_id = JSON.parse(localStorage.getItem('userinfo')).id;
            axios.post('https://www.youruika.cn/index/member/ismember',{
            memberid: `u0280${userinfo_id}`
        }).then(res=> {
            if(res.data === 0) {
                this.props.history.push({pathname:'/load',state:{pathname:this.props.location.pathname}})
            }
        }).catch((error)=>{
            console.log(error)
        })
    }
        this.getAcitivity()
    }
    getAcitivity(){
        console.log("getactivity")
        axios.post(getActivityApi).then((res)=>{
            console.log(res.data)
            this.setState({
                activities:res.data
            })
        }).catch((err)=>{
            console.log(err)
        })
    }
        // const wrapper = this.refs.wrapper;
        // const loadMoreActivity = this.loadMoreActivity;
        // const that = this; // 为解决不同context的问题
        // let timeCount;
    
    
        // function callback() {
        //         const top = wrapper.getBoundingClientRect().top;
        //         const windowHeight = window.screen.height;
    
        //         if (top && top < windowHeight) {
        //           // 当 wrapper 已经被滚动到页面可视范围之内触发
        //           loadMoreActivity(that);
        //         }
        // }
    
        // window.addEventListener('scroll', function () {
        //         if (this.state.isLoadingMore) {
        //             return ;
        //         }
    
        //         if (timeCount) {
        //             clearTimeout(timeCount);
        //         }
    
        //         timeCount = setTimeout(callback, 50);
        //     }.bind(this), false);
      
    
    //   loadMoreActivity(that) {
    //     that.setState({
    //         activities: that.state.activities.concat([{img:'',title:'nihao',content:'HHHHHHHH'}])
    //     })
    //   }
   
}