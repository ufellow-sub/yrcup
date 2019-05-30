import styled from 'styled-components';


export const SettlementBox = styled.div`
    width: 100%;
    min-height: 800px;
    background: rgb(41,41,41);
    overflow: auto;
    margin-bottom: 40px;
    .nothing {
        position: absolute;
        top: 50%;
        margin-top: -40px;
        text-align: center;
        color: #696969;
        font-size: 16px;
        letter-spacing: 2px;
        width: 100%;
        height: 30px;
        line-height: 30px;
    }
    
`;

export const TopTitle = styled.div`
    position: relative;
    width: 100%;
    height: .96rem;
    padding: .21rem;
    background: #292929;
    color: #fff;
    font-size: 14px;
    i {
        font-size: 17px;
        line-height: 24px;
        vertical-align: middle;
    }
    span {
        position: absolute;
        top: 12px;
        margin-left: .26rem;
    }
`;

export const FoodList = styled.ul`
    width: 100%;
    li {
        padding: .21rem;
        margin-bottom: 5px;
        background: rgb(72,72,72);
        zoom: 1;
        &::after {
            content: '';
            clear: both;
            display: block;
            visibility: hidden;
            height: 0;
        }
        .avatar {
            float: left;
            width: 90px;
            height: 90px;
            border-radius: 50%;
            img {
                width: 100%;
                height: 100%;
                border-radius: 50%;
            }
        }
        .good-info {
            float: left;
            margin-left: 19px;
            .title-name {
                margin-top: 1px;
                .title {
                    font-size: 40px;
                    color: #fff;
                }
                .name {
                    float: right;
                    margin-top: .13rem;
                    margin-left: .13rem;
                    color: #fff;
                    .name-zh {
                        font-size: 16px;
                        margin-top: 1px;
                    }
                    .name-en {
                        font-size: 12px;
                        margin-top: 2px;
                        color: rgb(182,182,182);
                    }
                }
            }
            .price {
                font-size: 20px;
                color: rgb(152, 124, 108);
                margin: 0.38rem 0 0 .13rem;
            }
        }
        .operation {
            position: relative;
            width: 100px;
            height: 85px;
            float: right;
            text-align: right;
            .empty {
                position: relative;
                height: 20px;
                margin-top: .16rem;
                color: rgb(41,41,41);
                i {
                    position: absolute;
                    top: -3px;
                    left: 38%;
                    background: transparent;
                    font-size: 22px;
                }
                span {
                    position: absolute;
                    top: 4px;
                    right: 7px;
                    font-size: 14px;
                    font-weight: 600;
                }
            }
            .decreaseadd {
                position: absolute;
                width: 100px;
                left: 0;
                bottom: -6px;
                margin-top: 0;
                min-height: .8rem;
                min-width: 2.4rem;
                .decrease {
                    position: absolute;
                    left: 4px;
                    width: .58rem;
                    height: .58rem;
                    background: rgb(41,41,41);
                    color: #fff;
                    font-size: 14px;
                    font-weight: 700;
                    border-radius: 50%;
                    vertical-align: middle;
                    &::after {
                        position: absolute;
                        top: 9px;
                        left: .13rem;
                        content: '';
                        width: 11px;
                        height: 4px;
                        background: #fff;
                    }
                }
                .add {
                    position: absolute;
                    right: 8px;
                    width: 22px;
                    height: 22px;
                    background: rgb(41,41,41);
                    color: #fff;
                    font-size: 14px;
                    font-weight: 700;
                    border-radius: 50%;
                    vertical-align: middle;
                    &::after {
                        position: absolute;
                        top: .26rem;
                        left: .13rem;
                        content: '';
                        width: 12px;
                        height: 4px;
                        background: #fff;
                    }
                    &::before {
                        content: '';
                        position: absolute;
                        top: 5.5px;
                        left: 8.5px;
                        width: 4px;
                        height: 12px;
                        background: #fff;
                    }
                }
                .count {
                    position: absolute;
                    left: 43px;
                    top: .05rem;
                    font-size: 16px;
                    font-weight: 600;
                }
            }
        }
    }

`;


export const OrderInfo = styled.div`
    width: 100%;
    margin-top: 20px;
    ul {
        li {
            position: relative;
            padding: .13rem .8rem;
            margin: .66rem 0;
            color: #fff;
            zoom: 1;
            font-size: 15px;
            &::after {
                content: '';
                clear: both;
                display: block;
                visibility: hidden;
                height: 0;
            }
            &.coffeebean {
                height: 120px;
                .left {
                    float: left;
                    line-height: 120px;
                }
                .right {
                    float: right;
                    text-align: right;
                    .balance {
                        margin: 10px 0;
                        color: #937C6F;
                        font-size: 14px;
                        input[name='coffeebean'] {
                            display: inline-block;
                            width: 50px;
                            margin-left: 10px;
                            border: 1px solid #937C6F;
                            background: transparent;
                            color: #fff;
                            text-indent: 5px;
                        }
                    }
                    .slide {
                        position: relative;
                        width: 80px;
                        height: 30px;
                        border: 1px solid #937C6F;
                        border-radius: 20px;
                        margin: 5px 0 5px 160px;
                        .bar {
                            position: absolute;
                            top: 7px;
                            left: 8px;
                            width: 60px;
                            height: 15px;
                            background: #e0e0e0;
                            border-radius: 20px;
                            transition: all .3s ease;
                            &.active {
                                background: #937C6F;
                            }
                        }
                        .ball {
                            position: absolute;
                            top: 3px;
                            left: 6px;
                            width: 23px;
                            height: 23px;
                            border-radius: 50%;
                            background: #937C6F;
                            transition: all .3s ease;
                            &.active {
                                left: 48px;
                            }
                        }
                    }
                    .tips {
                        font-size: 12px;
                        color: #937C6F;
                    }
                }
            }
            &.coffeebean2 {
                .top {
                    zoom: 1;
                    &::after {
                        content: '';
                        clear: both;
                        height: 0;
                        visibility: hidden;
                        display: block;
                    }
                    .name {
                        float: left;
                        margin-top: 7px;
                        color: #666
                    }
                    .slide {
                        float: right;
                        position: relative;
                        width: 70px;
                        height: 30px;
                        border: 1px solid rgb(152, 124, 108);
                        border-radius: 20px;
                        .bar {
                            position: absolute;
                            top: 7px;
                            left: 8px;
                            width: 50px;
                            height: 15px;
                            background: rgb(102, 102, 102);
                            border-radius: 20px;
                            transition: all .3s ease;
                            &.active {
                                background: rgb(152, 124, 108);
                            }
                        }
                        .ball {
                            position: absolute;
                            top: 3px;
                            left: 6px;
                            width: 23px;
                            height: 23px;
                            border-radius: 50%;
                            background: rgb(152, 124, 108);
                            transition: all .3s ease;
                            &.active {
                                left: 38px;
                            }
                        }
                    }
                }
                .content {
                    font-size: 14px;
                    color: rgb(152, 124, 108);
                    margin-top: 10px;
                    .balanceOne {
                    }
                    .balanceTwo {
                        margin-top: 10px;
                        input[name='coffeebean'] {
                            display: inline-block;
                            width: 100px;
                            margin-left: 10px;
                            border: 1px solid rgb(152, 124, 108);
                            background: transparent;
                            color: #fff;
                            text-indent: 5px;
                        }
                    }
                    .balanceThree {
                        margin-top: 10px;
                    }
                }
            }
            .name {
                float: left;
                color: #666;
            }
            .info {
                float: right;
                letter-spacing: 3px;
                &.coupon {
                    color: rgb(152, 124, 108);
                    font-weight: 600;
                }
            }
            .tips {
                font-size: 10px;
                position: absolute;
                right: 35px;
                top: 28px;
                color: #696969;
                letter-spacing: 1px;
            }
        }
    }
`;

export const PayBar = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1.2rem;
    background: #292929;
    z-index: 1000;
    span {
        color: rgb(152, 124, 108);
        font-size: 18px;
        line-height: 1.2rem;
        margin-left: 14px;
        font-weight: 600;
    }
    .wxpay {
        float: right;
        height: 80%;
        margin-top: 4.5px;
        border: 1px solid rgb(152, 124, 108);
        background: #292929;
        color: #fff;
        padding: 0 .53rem;
        border-radius: 10px;
        font-size: 14px;
        letter-spacing: 2px;
        margin-right: 19px;
        text-align: center;
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
        height: 2.4rem;
        background-color: #9D8275;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        transition: all .8s ease-in;
        li {
            height: 50%;
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