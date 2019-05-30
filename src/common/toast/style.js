import styled from 'styled-components';

export const ToastBox = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%,-50%,0);
    width: 4rem;
    height: 2rem;
    background: #333;
    border-radius: 10px;
    .image {
        width: 1rem;
        height: 1rem;
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