import styled from 'styled-components';

export const ActivityBox = styled.div `
       a:visited, a:link, a:hover, a:active{
           text-decoration: none;
           color: #fff;
       }       
       font-size: 14px;
        padding: 5px 10px;
        color: #fff;
        background: #313232;
        position: absolute;
        width: 100%;
        bottom: 0;
        top: 0;
        ul{
            width: 100%;
            margin: 0;
            padding: 0;
            list-style: none;
            li{
               position: relative;
                background: #262626;
                margin: 10px 0;
                padding: 8px;
                border: solid 1px #756459;
                border-radius: 8px;
                height: 30%;
                .activity-image{
                    width: 100%;
                    height: 100px;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .title{
                    margin: 5px 0;
                    font-weight: bold;
                    letter-spacing:5px;
                    font-size: 18px;
                }
                .content{     
                    width: 100%;              
                    p {
                        width: 100%;  
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
                .more-detail{                   
                    width: 100%;
                    text-align:right;
                    margin-top: 10px;
                }
            }         

        }
        .more-activity{
            text-align: center;
            position: absolute;
            bottom: 0;
            left: 45%;
        }
`