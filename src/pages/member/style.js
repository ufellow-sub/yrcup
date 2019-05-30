import styled from 'styled-components';
export const MemberBox = styled.div`
width: 100%;
height: 100%;
line-height: 20px;
color: #696969;
display: flex;
flex-direction: column;
justify-content: space-between;
font-size: 12px;
.content{
   padding: 10px;
    margin-bottom: 50px;
    position: relative;
    font-weight: 500;
     width: 100%;
     .member_title{
         color: #fff;
         font-size: 16px;
         letter-spacing: 2px;
         padding: 10px;
      }
     .desc{
         border-top: 1px solid rgb(152, 124, 108);
         padding: 10px;
         p{
            
         }
         .list_title{
            text-indent:0;
         }
        .fuli{
            color:rgb(152, 124, 108);
        }
     }     
     .first{
        border-style: none;
     }
   
}

`;