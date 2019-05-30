import styled from 'styled-components';

export const MyCoffeeBox = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    width: 100%;
    overflow: auto;
    bottom: 0;
    background: #292929;
    color: #fff;
`;

export const TopGoBack = styled.div`
    position: relative;
    width: 100%;
    height: .96rem;
    padding: .21rem;
    background: #292929;
    color: #fff;
    font-size: 14px;
    i {
        font-size: 20px;
        vertical-align: middle;
    }
    span {
        margin-left: .26rem;
    }
`;

export const CoffeeList = styled.div`
    margin-bottom: 50px;
    .coffee-list {
        padding: 10px;
        .coffee-item {
            margin: 10px 0;
            padding: 10px;
            border: 1px solid rgb(152, 124, 108);
            border-radius: 5px;
            zoom:1;
            &::after {
                content: '';
                clear: both;
                visibility: hidden;
                display: block;
                height: 0;
            }
            .avatar {
                float: left;
                width: 60px;
                height: 60px;
                border-radius: 50%;
                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                }
            }
            .content {
                width: 75%;
                float: left;
                color: rgb(152, 124, 108);
                margin-left: 10px;
                .title {
                    width: 100%;
                    font-size: 16px;
                    zoom:1;
                    &::after {
                        content: '';
                        clear: both;
                        visibility: hidden;
                        display: block;
                        height: 0;
                    }
                    .name {
                        float: left;
                    }
                    .count {
                        float: right;
                    }
                }
                .redeem {
                    position: relative;
                    margin-top: 10px;
                    zoom:1;
                    &::after {
                        content: '';
                        clear: both;
                        visibility: hidden;
                        display: block;
                        height: 0;
                    }
                    .redeem-text {
                        float: left;
                    }
                    .redeem-ul {
                        float: left;
                        margin-left: 10px;
                        height: 15px;
                        overflow: hidden;
                        &.ative {
                            height: auto;
                        }
                    }
                    .more {
                        position: absolute;
                        top: -6px;
                        right: 0;
                        float: left;
                        margin-left: 50px;
                        font-size: 25px;
                        &.active {
                            transform: rotate(180deg);
                        }
                    }
                }
            }
        }
    }
`;

export const TakeCoffeeList = styled.div`
    position: absolute;
    top: 10%;
    left: 5%;
    z-index: 10000;
    width: 90%;
    height: 500px;
    background: red;
    overflow: auto;
    .tips {
        padding: 10px 0;
        text-align: center;
        font-size: 16px;
    }
    ul {
        padding: 10px;
        li {
            padding: 10px;
            margin: 10px 0;
            background: pink;
            font-size: 14px;
            zoom: 1;
            &::after {
                content: '';
                clear: both;
                visibility: hidden;
                height: 0;
                display: block;
            }
            .name {
                float: left;
            }
            .num {
                float: right;
            }
        }
    }
    .sure {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: 0 auto;
        background: transparent;
        color: #000;
        .sure-box {
            width: 80%;
            background: yellowgreen;
            margin: 0 auto;
            margin-top: 50%;
            .btn {
                padding-bottom: 15px;
                padding-top: 10px;
                zoom: 1;
                &::after {
                    content: '';
                    visibility: hidden;
                    display: block;
                    height: 0;
                    clear: both;
                }
                .cancelbtn {
                    float: left;
                    margin-left: 20px;
                }
                .surebtn {
                    float: right;
                    margin-right: 20px;
                }
                button {
                    border: none;
                    padding: 8px 15px;
                    
                }
            }
        }
    }


`;

export const TakeCoffee = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background: #B9B9C8;
    padding: 10px;
    button {
        margin-left: 50%;
        transform: translateX(-50%);
        padding: 8px 10px;
        border: none;
        border-radius: 10px;
        background: #9D8275;
        color: #fff;
        
    }
`;