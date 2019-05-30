import styled from 'styled-components';

export const ShopCarBox = styled.div`
    width: 100%;
    .content {
        position: relative;
        width: 100%;
        box-shadow: 0px 1px 10px #DBDBEA;
        background: #fff;
        zoom: 1;
        z-index: 99;
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
            left: 20px;
            top: -30px;
            width: 60px;
            height: 60px;
            background: #fff;
            border-radius: 50%;
            box-shadow: 0px 1px 10px #DBDBEA;
            text-align: center;
            i {
                font-size: 25px;
                line-height: 60px;
                color: #FCC841;
            }
            .num {
                position: absolute;
                top: -5px;
                right: 0;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background: red;
                color: #fff;
                text-align: center;
                line-height: 20px;
            }
        }
        .total-price {
            float: left;
            margin-left: 35%;
            line-height: 50px;
            font-size: 16px;
            color: #FCC841;
        }
        .go {
            float: right;
            background: #FCC841;
            color: #fff;
            margin-top: 5px;
            margin-right: 10px;
            height: 40px;
            width: 80px;
            font-size: 16px;
            border-radius: 5px;
            text-align: center;
            line-height: 40px;
        }
    }
    .shopcart-list {
        position: absolute;
        bottom: 50px;
        left: 0;
        width: 100%;
        background-color: #fff;
        .list-header {
            height: 40px;
            line-height: 40px;
            padding: 0 18px;
            background-color: #f3f5f7;
            border-bottom: 1px solid rgba(7,17,27,.1);
            font-size: 14px;
            .title {
                float: left;
            }
            .empty {
                float: right;
                height: 15px;
            }
        }
        .list-content {
            margin-bottom: 38px;
            background-color: #fff;
          
            .list-item {
                padding: 10px;
                font-size: 15px;
                zoom: 1;
                padding-bottom: 5px;
                margin-bottom: 10px;
                line-height: 25px;
                border-bottom: 1px solid #DFDFDF;
                &::after {
                    content: '';
                    visibility: hidden;
                    display: block;
                    height: 0;
                    clear: both;
                }
                .name {
                    float: left;

                }
                .price {
                    float: right;
                    margin-right: 20px;
                }
                .cartcontrol {
                    float: right;
                    margin-right: 20px;
                    .cart-decrease {
                        display: inline-block;
                        width: 20px;
                        height: 20px;
                        border: 1px solid #DFDFDF;
                        border-radius: 50%;
                        text-align: center;
                        font-size: 18px;
                        line-height: 20px;
                        color: #DFDFDF;
                    }
                    .cart-count {
                        margin: 0 10px;
                    }
                    .crat-add {
                        display: inline-block;
                        width: 22px;
                        height: 22px;
                        background: #FCC841;
                        border-radius: 50%;
                        text-align: center;
                        font-size: 18px;
                        line-height: 20px;
                        color: #fff;
                    }
                }
            }
        }
    }
`;