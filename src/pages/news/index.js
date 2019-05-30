import React, {Component} from 'react';
import {NewsBox} from './style';
import axios from 'axios';
import {getNewsApi} from './../../api/index'
export default class News extends Component{
    constructor(props){
        super(props);
        this.state={
            newslist:[]
        }
    }
        render(){            
            return(
                <NewsBox>
                    <ul className='newsBox'>
                        {this.state.newslist.length > 0 ?

                                this.state.newslist.map((item ,index) => {
                                return( <li key={index} className='newslistbox'>
                                        <ul>
                                            {item.length > 1 ?    //是否是单图文消息
                                                 item.map((news,i) => {
                                                if(i != 0 ){
                                                return <a href={news.url}  key={i} className='newslink'>
                                                  <li>
                                                         <div className = 'title'>{news.title}</div>
                                                            <div className="news-image">
                                                            <img src={news.thumb_url} alt='图片' />
                                                        </div>                                   
                                                    </li>  </a>   
                                                }
                                                else {
                                                   return  <a href={news.url}  key={i} className='newslink'> 
                                                                <li>                                                              
                                                                        <div className ='cover-pic'>
                                                                            <div className='cover-pic-title'><h1>{news.title}</h1></div>
                                                                            <div className='cover-pic-img'><img src={news.thumb_url}/></div>
                                                                    </div>
                                                                </li> 
                                                            </a>  
                                                 }                                  
                                              })
                                              : <a href={item[0].url}  >
                                                    <li className='dan-msg'>
                                                            <div className="dan-image">
                                                                <img src={item[0].thumb_url} alt="图片"/>
                                                            </div> 
                                                            <div className="dan-title">{item[0].title}</div>
                                                            <div className="dan-content">
                                                              <p>{item[0].digest}</p>
                                                            </div>
                                                      </li> 
                                                </a>
                                            }                                               
                                        </ul>
                                    </li>)                              
                               })
                            : <div
                            style={{
                                marginTop: '55%',
                                textAlign: 'center',
                                fontSize: '16px',
                                color:'#696969',
                                letterSpacing: '2px'
                            }}
               
                        >暂无新闻</div>
                        }
                       
                    </ul>
                  
                </NewsBox>                      
            );
        }
        componentDidMount(){
            document.title = 'U新闻';
            document.bgColor = '#000';             
            this.getNewsList();
          
        }
        getNewsList(){
            axios.post(getNewsApi).then((res)=>{
                console.log(res)
                this.setState({
                    newslist:res.data
                })
            }).catch((err)=>{
                console.log(err)
            })
        }
}