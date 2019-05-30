import styled from 'styled-components';

export const TabbarBox = styled.div`
    display: flex;
    flex-direction: row;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 55px;
    background: #343635;
    box-shadow: 0px 1px 10px #292929;
    border-top: 5px solid #343635;
    .tab-item {
        width: 33%;
        text-align: center;
        font-size: 14px;
        color: #B6B6B6;
        text-decoration: none;
        background: #292929;
        letter-spacing: 3px;
        border-radius: 5px;
        &.active {
            background: #505050;
        }
        .box {
            position: relative;
            width: 100%;
            height: 100%;
            border-radius: 0;
            padding: 0 10px;
            line-height: 50px;
            i {
                position: absolute;
                left: 29%;
                top: 3px;
                font-size: 17px;
            }
            .letter {
                position: absolute;
                left: 29%;
                top: 2.5px;
                font-size: 19px;
                line-height: 50px;
            }
            span {
                position: absolute;
                left: 46%;
                top: 2.5px;
                font-size: 15px;
                line-height: 50px;
            }
        }
    }
`;