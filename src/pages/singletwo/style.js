import styled from 'styled-components'

export const SingleContainer = styled.div `
    position: relative;
    width: 100%;
    height: 100%;
    .container {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        width: 100%;
        overflow: auto;
        bottom: 50px;
        background: #292929;
    }
    .shopcar {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 55px;
        z-index: 1000;
    }
`;

export const SingleSwiper = styled.div `
    position: relative;
    width: 100%;
    height: 150px;
    .swiper-pagination .swiper-pagination-bullet {
        opacity: 1;
        width: 4px;
        height: 4px;
    }
    .swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active {
        background: #696969;
    }
`;

export const SingleFoods = styled.div `
    width: 100%;
    padding: 10px;
    background-color: #333;
    padding-bottom: 50px; 
    .food-list {
        li {
            border-radius: 10px;
            padding: 10px 10px;
            background: #292929;
            margin-top: 5px;
            zoom: 1;
            &::after {
                content: '';
                clear: both;
                display: block;
                visibility: hidden;
                height: 0;
            }
            .food-icon {
                width: 90px;
                height: 90px;
                float: left;
                border-radius: 50%;
                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                }
            }
            .food-text {
                float: left;
                margin-left: 20px;
                color: #fff;
                .food-info {
                    position: relative;
                    zoom: 1;
                    &::after {
                        content: '';
                        visibility: hidden;
                        display: block;
                        height: 0;
                        clear: both;
                    }
                    .title {
                        vertical-align: top;
                        position: absolute;
                        top: -6px;
                        float: left;
                        font-size: 40px;
                    }
                    .info {
                        margin-left: 35px;
                        text-align: left;

                        .name {
                            margin-top: 7px;
                            font-weight: 600;
                            font-size: 16px;
                            font-family: 'Hiragino';
                            text-align: left;

                        }
                        .title1 {
                            margin-top: 2px;
                            font-size: 12px;
                            color: #B6B6B6;
                            text-align: left;
                        }
                        .price {
                            font-size: 14px;
                            color: #EEC56D;
                        }
                    }
                }
                .food-price {
                    font-size: 18px;
                    margin-left: 2px;
                    margin-top: 30px;
                    color: rgb(152, 124, 108);
                }
            }
            .food-add {
                line-height: 30px;
                font-size: 45px;
                float: right;
                font-weight: 700;
                color: #fff;
                margin-top: 30px;
                margin-right: 10px;
            }
        }
    }
`;
