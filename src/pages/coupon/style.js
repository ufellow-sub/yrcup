import styled from 'styled-components';

export const CouponBox = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    width: 100%;
    overflow: auto;
    bottom: 0;
    background: #292929;
`;

export const CouponTitle = styled.div`
    width: 25%;
    text-align: center;
    padding: 7px 5px;
    margin: 10px auto 0;
    border: 1px solid rgb(152, 124, 108);
    color: rgb(152, 124, 108);
    font-size: 13px;
    letter-spacing: 2px;
    border-radius: 5px;
`;

export const CouponList = styled.div`
    width: 100%;
    padding: 10px;
    ul {
        padding-bottom: 50px;
        li {
            margin-bottom: 10px;
            padding: 10px;
            border: 1px solid rgb(152, 124, 108);
            border-radius: 5px;
            color: #696969;
            .title {
                font-size: 14px;
                zoom: 1;
                &::after {
                    content: '';
                    clear: both;
                    height: 0;
                    display: block;
                    visibility: hidden;
                }
                .title-name {
                    float: left;
                    letter-spacing: 2px;
                }
                .title-price {
                    float: right;
                    font-size: 17px;
                    font-weight: 600;
                    letter-spacing: 2px;
                    color: #9D8275;
                }
            }
            .content {
                width: 75%;
                .content-text {
                    width: 95%;
                    line-height: 18px;
                    white-space: pre-wrap;
                    &.ellipsis {
                        white-space: pre-wrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 3; 
                        -webkit-box-orient: vertical;
                    } 
                }
                .more {
                    text-align: right;
                    color: rgb(152, 124, 108);
                    i {
                        display: inline-block;
                        font-size: 20px;
                        color: rgb(152, 124, 108);
                        &.rotate {
                            transform: rotate(180deg);
                        }
                    }
                }
            } 
            .introduce {
                width: 60%;
            }
            .other {
                position: relative;
                margin-top: 10px;
                zoom: 0;
                &::after {
                    content: '';
                    visibility: hidden;
                    display: block;
                    height: 0;
                    clear: both;
                }
                .date {
                    position: absolute;
                    bottom: 0;
                }
                .datetwo {
                    position: absolute;
                    bottom: 15px;
                }
                .number {
                    float: right;
                    padding: 5px 10px;
                    border: 1px solid rgb(152, 124, 108);
                    border-radius: 10px;
                    color: rgb(152, 124, 108);
                }
            }
        }
    }
`;

export const NoUse = styled.div`
    position: fixed;
    left: 0;
    bottom: 50px;
    width: 100%;
    text-align: center;
    padding: 10px;
    letter-spacing: 2px;
    font-size: 13px;
    background: pink;
`;

export const Unsuited = styled.div`
    margin-top: 60%;
    color: #696969;
    font-size: 16px;
    text-align: center;
    letter-spacing: 2px;
`;