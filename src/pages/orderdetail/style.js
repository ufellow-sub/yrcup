import styled from 'styled-components';

export const OrderDetailBox = styled.div `
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    width: 100%;
    overflow: auto;
    bottom: 0;
    background: #292929;
`;

export const OrderContent = styled.div `
    width: 100%;
    padding: 10px;
    
`;

export const Content = styled.div `
        width: 100%;
        color: #696969;
        border: 1px solid rgb(152, 124, 108);
        border-radius: 5px;
        margin: 10px 0;
        .coffee-title {
            display: flex;
            margin-top: 10px;
            padding: 0 10px;
            span {
                flex: 1;
                text-align: center;
                font-size: 14px;
            }
        }
        .redeem-list {
            .redeem-item {
                display: flex;
                span {
                    flex: 1;
                    text-align: center;
                    font-size: 14px;
                }
            }
        }
        ul {
            padding: 0 10px;
            li {
                font-size: 14px;
                margin: 10px 0;
                padding-bottom: 10px;
                border-bottom: 1px solid rgb(152, 124, 108);
                div {
                    display: inline-block;
                    vertical-align: middle;
                }
                .image {
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    img {
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                    }
                }
                .name {
                    margin-left: 70px;
                }
                .count {
                    margin-left: 70px;
                }
                .price {
                    margin-left: 50px;
                }
            }
        }
        .totalPrice {
            padding: 10px;
            margin-bottom: 5px;
            font-size: 14px;
            zoom: 1;
            &::after {
                content: '';
                clear: both;
                height: 0;
                visibility: hidden;
                display: block;
            }
            .title {
                float: left;
            }
            .price {
                float: right;
            }
        }
`