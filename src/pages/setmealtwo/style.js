import styled from 'styled-components'

export const SingleContainer = styled.div`
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

export const SingleSwiper = styled.div`
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

export const SingleFoods = styled.div`
    width: 100%;
    padding: 10px;
    background-color: #333;
    padding-bottom: 50px; 
    .food-list {
        li {
            padding: 10px;
            background: #292929;
            margin: 5px 0;
            border-radius: 10px;
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
                margin-left: 18px;
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
                        float: left;
                        position: absolute;
                        top: -5px;
                        font-size: 55px;
                    }
                    .info {
                        float: left;
                        margin-left: 45px;
                        .name {
                            margin-top: 5px;
                            font-weight: 600;
                            font-size: 14px;
                            color: rgb(152, 124, 108);
                        }
                        .title1 {
                            margin-top: 2px;
                            font-size: 10px;
                            color: #B6B6B6;
                        }
                        .price {
                            font-size: 14px;
                            color: #EEC56D;
                        }
                    }
                }
                .food-price {
                    font-size: 16px;
                    margin-top: 23px;
                    margin-left: 4px;
                    color: #9D8275;
                    .newPrice {
                        font-size: 18px;
                        color: rgb(152, 124, 108);
                    }
                    .oldPrice {
                        font-size: 13px;
                        margin-left: 20px;
                        text-decoration: line-through;
                        color: #B6B6B6;
                    }
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

