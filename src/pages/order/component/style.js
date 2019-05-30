import styled from 'styled-components';

export const OrderListContainer = styled.div`
    margin-top: 15px;
    ul {
        li {
            background: #5F5F5F;
            margin-bottom: 10px;
            padding: 10px;
            .content {
                zoom: 1;
                &::after {
                    content: '';
                    clear: both;
                    visibility: hidden;
                    display: block;
                    height: 0;
                }
                .info {
                    float: left;
                    h2 {
                        display: inline-block;
                        font-size: 35px;
                    }
                    .info-text {
                        display: inline-block;
                        vertical-align:top;
                        margin-top: 5px;
                        margin-left: 3px;
                        .zh {
                            font-size: 15px;
                        }
                        .en {
                            font-size: 10px;
                        }
                    }
                    .number {
                        display: inline-block;
                        margin-left: 35px;
                        .count {
                            font-size: 20px;
                            margin-left: 7px;
                        }
                    }
                }
                .price {
                    float: right;
                    font-size: 20px;
                    margin-right: 20px;
                    margin-top: 15px;
                    color: #292929;
                    font-weight: 500;
                }
            }
            .date {
                margin-top: 10px;
                color: #292929;
                font-weight: 600;
            }
        }
    }
`;

export const OrderListBox = styled.div`
    ul {
        padding: 5px;
        .orderItem {
            position: relative;
            margin-bottom: 10px;
            padding: 10px;
            border: 1px solid rgb(152, 124, 108);
            border-radius: 5px;
            font-size: 12px;
            color: rgb(152, 124, 108);
            .border {
                margin: 10px 0;
                height: 1px;
                background: rgb(152, 124, 108);
            }
            .rightDetail {
                position: absolute;
                right: 10px;
                top: 25px;
                i {
                    font-size: 25px;
                }
            }
            .buy-mode {
                span {
                    margin-left: 20px;
                }
            }
            .ordernum {
                margin-top: 8px;
            }
            .ordertime {
                margin-top: 8px;
            }
            .foodlist {
                li {
                    .food-item {
                        font-size: 14px;
                        zoom: 1;
                        &::after {
                            content: '';
                            clear: both;
                            height: 0;
                            display: block;
                            visibility: hidden;
                        }
                        .name {
                            float: left;
                        }
                        .count {
                            float: right;
                        }
                    }
                }
            }
        }
    }

`