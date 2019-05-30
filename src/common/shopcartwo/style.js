import styled from 'styled-components';

export const ShopCarBox = styled.div`
    width: 100%;
    .content {
        position: relative;
        width: 100%;
        background: #292929;
        zoom: 1;
        z-index: 102;
        &::after {
            content: '';
            clear: both;
            display: block;
            visibility: hidden;
            clear: both;
            height: 0;
        }
        .logo-wrapper {
            position: absolute;
            left: 5px;
            top: -5px;
            width: 60px;
            height: 60px;
            background: rgb(152, 124, 108);
            border-radius: 50%;
            box-shadow: 0px 1px 10px #9D8275;
            border: 1px solid #fff;
            text-align: center;
            i {
                position: absolute;
                left: 14px;
                font-size: 25px;
                line-height: 60px;
                color: #292929;
            }
            .num {
                position: absolute;
                top: -5px;
                right: 0;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background: rgb(152, 124, 108);
                border: 1px solid #fff;
                color: #fff;
                text-align: center;
                line-height: 20px;
            }
        }
        .total-price {
            position: absolute;
            top: 1px;
            float: left;
            margin-left: 21%;
            font-size: 16px;
            font-weight: 800;
            line-height: 50px;
            color: rgb(152, 124, 108);
        }
        .go {
            position: relative;
            float: right;
            background: rgb(152, 124, 108);
            color: #292929;
            font-weight: 600;
            width: 100px;
            height: 40px;
            font-size: 16px;
            border-radius: 5px;
            text-align: center;
            line-height: 40px;
            margin: 5px 5px 5px 0;
            letter-spacing: 5px;
            border: 1px solid #fff;
            font-weight: 800;
            span {
                position: absolute;
                left: 21%;
            }
        }
    }
    .shopcart-list {
        position: absolute;
        bottom: 50px;
        left: 0;
        width: 100%;
        background-color: #484848;
        opacity: .98;
        z-index: 101;
        .list-header {
            position: relative;
            height: 40px;
            line-height: 40px;
            padding: 0px 5px 0 18px;
            background-color: #484848;
            border-bottom: 1px solid rgba(7,17,27,.1);
            font-size: 14px;
            color: #000;
            font-weight: 600;
            opacity: .98;
            .title {
                float: left;
                position: absolute;
                top: 2px;
                letter-spacing: 2px;
                margin-left: 2px;
                font-size: 18px;
                color: rgb(41, 41, 41);
                font-weight: 800;
            }
            .empty {
                position: relative;
                float: right;
                width: 70px;
                height: 100%;
                color: rgb(41, 41, 41);
                .border-box {
                    position: absolute;
                    width: .8rem;
                    height: .8rem;
                    margin-top: 3px;
                    margin-left: 10px;
                    background: transparent;
                    border: none;
                    padding: .13rem;
                    /* border: 1px solid #fff; */
                    i {
                        position: absolute;
                        top: -3px;
                        font-size: 20px;
                        color: #292929;
                    }
                }
                .empty-text {
                    position: absolute;
                    right: 2px;
                    top: 3px;
                    font-weight: 800;
                }
            }
        }
        .list-content {
            margin-bottom: 38px;
            color: #fff;
            background-color: #484848;
            opacity: .98;
            max-height: 4.5rem;
            overflow-y: auto;
            .list-item {
                padding: 5px;
                font-size: 15px;
                zoom: 1;
                padding-top:0px;
                padding-bottom: 5px;
                margin: 10px 0;
                border-bottom: 1px solid #393939;
                &::after {
                    content: '';
                    visibility: hidden;
                    display: block;
                    height: 0;
                    clear: both;
                }
                .name {
                    float: left;
                    margin-left: 15px;
                    .title {
                        float: left;
                        font-size: 36px;
                    }
                    .info {
                        float: right;
                        margin-left: 5px;
                        .namezh {
                            font-size: 16px;
                            margin-top: 5px;
                        }
                        .nameen {
                            font-size: 10px;
                            margin-top: 1px;
                        }
                    }
                }
                .price {
                    float: right;
                    margin-right: 15px;
                    margin-top: 16px;
                    font-size: 18px;
                    color: rgb(152, 124, 108);
                    font-weight: 600;
                }
                .cartcontrol {
                    float: right;
                    margin-top: 14px;
                    .cart-decrease {
                        position: relative;
                        display: inline-block;
                        width: 22px;
                        height: 22px;
                        background: #292929;
                        border-radius: 50%;
                        text-align: center;
                        font-size: 18px;
                        line-height: 20px;
                        color: #DFDFDF;
                        vertical-align: middle;

                        &::before {
                            position: absolute;
                            top: 9px;
                            left: 6px;
                            content: '';
                            width: 10px;
                            height: 4px;
                            background: #fff;
                        }
                    }
                    .cart-count {
                        margin: 0 15px;
                        vertical-align: middle;
                    }
                    .crat-add {
                        position: relative;
                        display: inline-block;
                        width: 22px;
                        height: 22px;
                        background: #292929;
                        border-radius: 50%;
                        text-align: center;
                        font-size: 18px;
                        line-height: 20px;
                        color: #fff;
                        vertical-align: middle;
                        &::before {
                            position: absolute;
                            top: 9px;
                            left: 5px;
                            content: '';
                            width: 12px;
                            height: 4px;
                            background: #fff;
                        }
                        &::after {
                            position: absolute;
                            top: 5px;
                            left: 9px;
                            content: '';
                            width: 4px;
                            height: 12px;
                            background: #fff;
                        }
                    }
                }
            }
        }
    }
    
`;

export const Mask = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #000;
    opacity: .3;
    z-index: 100;
`