import styled from 'styled-components';

export const OrderBox = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    width: 100%;
    overflow: auto;
    bottom: 0;
    background: #000;
    .title {
        display: flex;
        flex-direction: row;
        width: 100%;
        padding: 10px;
        background: #000;
        text-align: center;
        .item {
            flex: 1;
            color: #696969;
            font-size: 13px;
            &.active {
                color: rgb(152, 124, 108);
            }
            &:nth-child(2) {
                border-left: 1px solid rgb(152, 124, 108);
                border-right: 1px solid rgb(152, 124, 108);
            }
        }
    }
`;

export const ToastBox = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%,-50%,0);
    width: 4rem;
    height: 2rem;
    border-radius: 10px;
    .image {
        width: 3rem;
        height: 0.4rem;
        margin: 10px auto 5px;
        img {
            width: 100%;
            height: 100%;            
        }
    }
    .text {
        text-align: center;
        color: #fff;
    }
`;