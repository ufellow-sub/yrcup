import styled from 'styled-components'

export const SingleContainer = styled.div`
    width: 100%;
    height: 100%;
    .shopcar {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 50px;
    }
`;

export const SingleSwiper = styled.div`
    width: 100%;
    height: 3.2rem;
    background: pink;
`;

export const SingleFoods = styled.div`
    width: 100%;
    padding: 10px;
    background-color: #F8F8F8;
    .food-list {
        li {
            padding: 10px;

            background: #fff;
            margin-top: 10px;
            zoom: 1;
            &::after {
                content: '';
                clear: both;
                display: block;
                visibility: hidden;
                height: 0;
            }
            .food-icon {
                width: 60px;
                height:60px;
                float: left;
                background: red;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .food-text {
                float: left;
                margin-left: 20px;
                .name {
                    font-weight: 600;
                    font-size: 16px;
                    margin-bottom: 5px;
                }
                .title {
                    font-size: 12px;
                    color: #B6B6B6;
                    margin-bottom: 5px;
                }
                .price {
                    font-size: 14px;
                    color: #EEC56D;
                    .old-price {
                        margin-left:  30px;
                        text-decoration: line-through;
                        color: #999;
                    }
                }
            }
            .food-add {
                width: 30px;
                height: 30px;
                background: #FCC841;
                border-radius: 100%;
                text-align: center;
                line-height: 30px;
                font-size: 25px;
                float: right;
                color: #fff;
                margin-top: 30px;
                margin-right: 10px;
            }
        }
    }
`;

