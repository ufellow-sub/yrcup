import styled from 'styled-components';

export const UserBox = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    width: 100%;
    overflow: auto;
    bottom: 50px;
    background: #333;
`;

export const UserInfo = styled.div`
    width: 100%;
    padding: 20px 15px;
    background: #292929;
    zoom: 1;
    &::after {
        content: '';
        display: block;
        visibility: hidden;
        height: 0;
        clear: both;
    }
    .avatar {
        float: left;
        width: 90px;
        height: 90px;
        img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
    }
    .info {
        width: 65%;
        position: relative;
        float: left;
        margin-left: .35rem;
        .title {
            position: absolute;
            top: 45px;
            left: 0;
            width: 100px;
            font-weight: 600;
            font-size: 10px;
            &.cj {
                color: #FFF;
            }
            &.zj {
                color: #9D8275;
            }
            &.gj {
                color: #FFBF00;
            }
            &.zs {
                color: #DBDBEA;
            }
            i {
                display: inline-block;
                vertical-align: middle;
                margin-top: 5px;
            }
            span {
                display: inline-block;
                vertical-align: middle;
                font-size: 13px;
                margin-left: 4px;
                margin-top: 7px;
            }
        }
        p {
            font-weight: 500;
            font-size: 13px;
            color: #B6B6B6;
        }
        .username {
            margin-top: 14px;
        }
        .uid {
            width: 120px;
            position: absolute;
            top: 33px;
            left: 0px;
        }
        .statustwo {
            position: absolute;
            right: 0;
            top: 53px;
            width: 120px;
            color: rgb(152, 124, 108);
            font-size: 12px;
            text-align: right;
            .assessment-text {

            }
        }
        .status {
            position: relative;
            width: 175px;
            height: 20px;
            .status-icon {
                position: absolute;
                top: 0;
                left: 0;
                width: 40px;
                height: 16px;
                border: 1px solid #9D8275;
                border-radius: 10px;
                margin-right: 0;
                .icon {
                    position: absolute;
                    right: 0;
                    bottom: -2.5px;
                    color: #9D8275;
                    transform: rotate(90deg);
                    font-size: 17px;
                }
            }
            .status-text {
                position: absolute;
                left: 55px;
                top: 1px;
                color: #9D8275;
            }
            .assessment-text {
                position: absolute;
                right: 0;
                top: 1px;
                color: #9D8275;
            }
        }
    }
`;

export const UserOption = styled.ul`
    width: 100%;
    padding: 10px;
    zoom: 1;
    &::after {
        content: '';
        clear: both;
        visibility: hidden;
        display: block;
        height: 0;
    }
    li {
        float: left;
        width: 31%;
        height: 75px;
        border: 1px solid rgb(152, 124, 108);
        margin-left: 5px;
        text-align: center;
        border-radius: 10px;
        background: #292929;
        a {
            position: relative;
            display: block;
            width: 100%;
            height: 100%;
            text-decoration: none;
            .icon {
                display: inline-block;
                margin-top: 3px;
                color: rgb(152, 124, 108);
            }
            .title {
                margin-top: 6px;
                font-size: .4rem;
                letter-spacing: 4px;
                font-weight: 500;
                color: #fff;
            }
            .info {
                margin-top: 10px;
                margin-bottom: 6px;
                color: rgb(152, 124, 108);
                letter-spacing: 4px;
                font-weight: 600;
                font-size: 12px;
                &.price {
                    letter-spacing: 1px;
                }
            }
        }
    }
`;

export const UserList = styled.div`
    width: 100%;
    ul {
        li {
            padding: 15px;
            background: #292929;
            margin-bottom: 5px;
            height: 50px;
            a {
                position: relative;
                display: block;
                text-decoration: none;
                .icon {
                    font-size: 20px;
                    vertical-align: middle;
                    color: #696969;
                }
                span {
                    position: absolute;
                    left: 25px;
                    top: 4px;
                    font-size: 15px;
                    letter-spacing: 3px;
                    color: #696969;
                    margin-left: 10px;
                    vertical-align: middle;
                }
                .right {
                    float: right;
                    font-size: 17px;
                    vertical-align: middle;
                    color: #696969;
                }
            }
        }
    }
`;