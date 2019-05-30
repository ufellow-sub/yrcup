import styled from 'styled-components';
export const Box = styled.div`
    a:visited, a:link, a:hover, a:active{
        text-decoration: none;
        color: #fff;
    }
    padding: 10px;
    .title{
        margin: 5px 10px;
        font-weight: bold;
        letter-spacing:5px;
        font-size: 18px;
        text-align: center;
    }
    .content {
        p {
            font-size: 16px;
            text-align: center;
            img {
                margin-top: 10px;
                width:100%;
            } 
        }
    }
    .getquan{
        width: 100%;
        text-align: center;
        margin-top: 10px;
        .button , .button-gettedcoupon{
            display: inline-block;
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
            text-align: center;   
            text-decoration: none;
            outline: none;
            color: #fff;
            background-color: #121211;
            border: none;
            border-radius: 9px;
            box-shadow: 0 5px #999;
            margin: 0 auto;
          }
          
          .button:hover {background-color: #121211}
          
          .button:active {
            background-color: #3e8e41;
            box-shadow: 0 5px #666;
            transform: translateY(4px);
          }
          .button-gettedcoupon{
            background-color: #3e8e41;
          }
    }
  
`;