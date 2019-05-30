import styled from 'styled-components';
export const TransactionBox = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    width: 100%;
    overflow: auto;
    bottom: 0;
    // background: rgb(41, 41, 41);
    background: #000;
    color: #fff;
    .top{
        margin: 10px 0; 
        width: 100%;
        display: flex;
        flex-direnction: row;
        justify-content: center;
        color: rgb(105, 105, 105);
        font-size: 13px;
        span{
            margin: 0 5px;
        }
        .active{
            color: rgb(152, 124, 108);
        }
    }
    ul{
        padding: 5px;
        .transactionlist{
            position: relative;
            margin-bottom: 10px;
            font-size: 12px;
            color: rgb(152, 124, 108);
            padding: 10px;
            border-width: 1px;
            border-style: solid;
            border-color: rgb(152, 124, 108);
            border-image: initial;
            border-radius: 5px;
            height: 100px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .transaction-num{
                max-width: 80%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }
            i{
                font-size: 13px;
            }
        }
    }
`;


export const ToastBox = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%,-50%,0);
    width: 4rem;
    height: 2rem;
    border-radius: 10px;
    .image {
        width: 3rem;
        height: 0.4rem;
        margin: 10px auto 5px;
        img {
            width: 100%;
            height: 100%;            
        }
    }
    .text {
        text-align: center;
        color: #fff;
    }
`;