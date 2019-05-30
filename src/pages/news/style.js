import styled from 'styled-components';
export const NewsBox = styled.div`
font-size: 14px;
 /* padding: 10px; */
 color: #fff;
 a:visited, a:link, a:hover, a:active{
    text-decoration: none;
    color: #fff;
}
 ul{
    list-style: none;
 }
 .newsBox{
     margin: 0;
     padding: 0;
     background: #0a0a0a;
     position: absolute;
     width: 100%;
     top: 0;
     bottom: 0;
     .newslistbox{
            border: solid 1px #9e8676;
            border-radius: 8px;
            margin: 10px 5px;
         .newslink{
            li{   
                border-bottom: solid 1px;   
                padding: 10px;   
                margin: 0 10px;   
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                .cover-pic{
                    position: relative; 
                     display: inline-block;
                    width: 100%;
                    .cover-pic-title{
                        padding: 10px;
                        position: absolute; 
                        bottom: 0; 
                        color: #fff; 
                    }
                    .cover-pic-img{
                        width: 100%;
                        img{
                            width: 100%;
                        }
                    }
                   
                }
                .news-image{
                    width: 75px;
                    max-height: 75px;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .title{
                   padding: 10px 0;
                   letter-spacing:5px;
                   font-size: 16px;
                   overflow:hidden; 
                   text-overflow:ellipsis;                    
                   display:-webkit-box;                     
                   -webkit-box-orient:vertical;                    
                   -webkit-line-clamp:2;                 
                    display:-webkit-box;                    
                   -webkit-box-orient:vertical;                   
                   -webkit-line-clamp:2; 
                }                    
         }
        
      
        }
        .dan-msg{
            padding: 10px;
            .dan-image{
                width: 100%;
                img{
                    width:100%
                }
            }            
            .dan-title{
                margin: 5px 0;
                font-weight: bold;
                letter-spacing:5px;
                font-size: 18px;
            }
            .dan-content{
               color: #a7a7a7;
               overflow:hidden; 
               text-overflow:ellipsis;                    
               display:-webkit-box;                     
               -webkit-box-orient:vertical;                    
               -webkit-line-clamp:2;                 
                display:-webkit-box;                    
               -webkit-box-orient:vertical;                   
               -webkit-line-clamp:2; 
               line-height: 20px;
            }
        }
       
     }   
     .newslistbox ul a:last-child li, .newslistbox ul a:first-child li {
         border-style: none;
     }

 }

 
`;