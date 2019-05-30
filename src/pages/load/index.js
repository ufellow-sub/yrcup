import React from 'react';
import { withRouter } from 'react-router-dom'
import axios from 'axios';
import {
    userinfo
} from './../../api/index'
import {
    GetRequ,
    UrlSearch
} from './../../utils/index'
import LoadGif from './../../assets/URECUPGIFBLACK.gif'
class Load extends React.Component {
    
    render() {
        return (
            <div style={{
                position: 'absolute',
                width: '100%',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                background: '#000'
            }}>
                <img 
                    style={{
                        position: 'absolute',
                        width: '3rem',
                        height: '0.4rem',
                        top: '50%',
                        marginTop: '-0.2rem',
                        transform: 'translateY(-50%)',
                        left: '50%',
                        marginLeft: '-1.5rem'
                    }}
                 src={LoadGif} alt="load"/>
            </div>
        )
    }
    getAuthor(){
        const url = localStorage.getItem("url")    
        if(url){
            const getcode = GetRequ(window.location.search);
            const _props = JSON.parse(localStorage.getItem('_props'));
            let code = getcode.code;
            let TgHref = localStorage.getItem('TgHref');
            if(TgHref) {
                var TgHrefSearh = new UrlSearch(JSON.parse(TgHref));
                var openid = TgHrefSearh.openid;
            } else {
                var openid = undefined;
            }
            axios.get(`https://www.youruika.cn/index/accesstoken/accesstoken?code=${code}&name=${openid}`).then(res => {
                console.log(res.data);
                window.localStorage.setItem('userinfo',JSON.stringify(res.data.data))
                window.localStorage.removeItem('url')
                setTimeout(() => {
                    if(_props.location.state === undefined) {
                        this.props.history.replace('/single')
                    } else if(_props.location.state.pathname === '/single') {
                        this.props.history.replace('/single')
                    } else if (_props.location.state.pathname === '/setmeal') {
                        this.props.history.replace('/setmeal')
                    } else if (_props.location.state.pathname === '/user') {
                        this.props.history.replace('/user')
                    }else if (_props.location.state.pathname === '/activity') {
                        this.props.history.replace('/activity')
                    }
                },1000)    
            }).catch(err => {
                if(err) {
                    alert('登录失效,重新登录');
                    localStorage.removeItem('userinfo');
                    localStorage.removeItem('_props');
                    localStorage.removeItem('url');
                    this.props.history.replace('/user');
                }
            })
        } else {
            window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxea312fb8dd46a9f8&redirect_uri=https://www.youruika.cn/static/coffeepay&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect'
            localStorage.setItem('_props',JSON.stringify(this.props))
            localStorage.setItem("url",window.location.href);
        }
    }
    componentDidMount() {
        this.getAuthor();
    }
}

export default withRouter(Load);