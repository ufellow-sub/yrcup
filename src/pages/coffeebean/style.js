import styled from 'styled-components';

export const CoffeeBeanBox = styled.div`
    position: absolute;
    width: 100%;
    min-height: 100%;
    background: #343635;
    color: #fff;
    .tradingBox{
        width: 100%;
        display:flex;
        justify-content: center;
        button{
            border: 1px solid rgb(152, 124, 108);
            letter-spacing: 5px;
            color: #9D8275;
            font-size: 13px;
            font-weight: 600;
            border-radius: 10px;
            background: #292929;
            // padding: 5px 10px;
            width: 155px;
            height: 30px;
            vertical-align:middle;
            text-align: center;
        }
    }
`;

export const Explain = styled.div`
    float: right;
    width: 35%;
    border: 1px solid rgb(152, 124, 108);
    padding: 5px 0;
    text-align: center;
    // margin-top: 32px;
    margin-top: 18px;
    margin-right: 7%;
    color: rgb(152, 124, 108);
    border-radius: 5px;
    letter-spacing: 1px;
    font-weight: 600;
`

export const CoffeeBeanContainer = styled.div`
    float: left;
    width: 80%;
    margin: 20px 0 20px 13%;
    margin-top: 10px;
    .balance {
        padding: 15px 10px;
        border: 1px solid rgb(152, 124, 108);
        border-radius: 5px;
        font-size: 13px;
        font-weight: 600;
        color: rgb(152, 124, 108);
        zoom: 1;
        margin-bottom: 10px;
        &::after {
            content: '';
            clear: both;
            visibility: hidden;
            display: block;
            height: 0;
        }
        .text {
            float: left;
            letter-spacing: 3px;
            margin-top: 3px;
            &.diff {
                line-height: 26px;
            }
        }
        .price {
            float: right;
            font-size: 14px;
            margin-top: 3px;
            letter-spacing: 2px;
        }
        input {
            float: right;
            margin-top: 3px;
            width: 35%;
            padding: 5px;
            vertical-align: middle;
            border: 1px solid rgb(152, 124, 108);
            background: rgb(52, 54, 53);
            color: rgb(152, 124, 108);
            border-radius: 5px;
        }
    }
    .operation {
        margin-bottom: 20px;
        margin-top: -5px;
        zoom: 1;
        &::after {
            content: '';
            clear: both;
            display: block;
            visibility: hidden;
            height: 0;
        }
        .text{
            display: block;
            font-size: 12px;
            color: rgb(152, 124, 108);
        }
        button {
            position: relative;
            float: right;
            height: 26px;
            width: 58px;
            border: none;
            background: transparent;
            border: 1px solid rgb(152, 124, 108);
            padding: 5px 12px;
            letter-spacing: 3px;
            color: #9D8275;
            font-size: 13px;
            border-radius: 5px;
            font-weight: 600;
            span {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                text-align: center;
                line-height: 26px;
            }
        }
        .cz {
            margin-left: 20px;
        }
    }
`;

export const Detailed = styled.div`
    float: left;
    width: 100%;
    // margin-top: 40px;
    margin-top: 20px;
    padding: 10px;
    background: #292929;
    color:#696969;
    i {
        font-size: 20px;
        vertical-align: middle;
    }
    span {
        vertical-align: middle;
        font-size: 14px;
        margin-left: 10px;
        letter-spacing: 3px;
    }
    .jtright {
        float: right;
    }

`;

export const SlidePay = styled.div`
    .fade-enter , .fade-appear { 
        transform: translate3d(0,100%,0);
    }
    .fade-enter-active , .fade-appear-active {
        transform: translate3d(0,0,0);
        transition: all .8s ease-in;
    }
    .fade-enter-done {
        transform: translate3d(0,0,0);
    }
    .fade-exit { 
        transform: translate3d(0,0,0);
    }
    .fade-exit-active {
        transform: translate3d(0,500%,0);
        transition: all .8s ease-in;
    }
    .fade-enter-done {
        transform: translate3d(0,0,0);
    }
    
    ul {
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 1000;
        width: 100%;
        height: 1.2rem;
        background-color: rgb(152, 124, 108);
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        transition: all .8s ease-in;
        li {
            height: 100%;
            line-height: 1.2rem;
            text-align: center;
            font-size: 20px;
            border-bottom: 1px solid #292929;
            color: #fff;
        }
    }
    .mask {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #000;
        opacity: .3;
        z-index: 10;
        overflow: hidden;
    }
`;