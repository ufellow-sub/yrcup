import styled from 'styled-components';

export const ManorBox = styled.div`
    position: absolute;
    width: 100%;
    min-height: 100%;
    background: #343635;
    color: #fff;
    .other {
        position: absolute;
        left: 0;
        width: 100%;
        bottom: 0;
        .box {
            display: inline-block;
            width: 49%;
            height: 75px;
            background: #292929;
            .title {
                display: block;
                text-align: center;
                margin: 11% auto 0;
                padding: 10px;
                border: 1px solid rgb(152, 124, 108);
                width: 115px;
                height: 15px;
                /* transform: translateY(-100%); */
                border-radius: 10px;
                a {
                    color: rgb(152, 124, 108);
                    line-height: 15px;
                    letter-spacing: 2px;
                    text-decoration: none;
                }
            }
        }
    }
`;
export const CoffeeBox = styled.div`
    position: absolute;
    top: 42.5px;
    width: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    .box {
        width: 100%;
        height: 27%;
        background: #292929;
        overflow: hidden;
        .title {
            display: block;
            text-align: center;
            margin: 14% auto 0;
            padding: 10px;
            border: 1px solid rgb(152, 124, 108);
            width: 70px;
            height: 15px;
            /* transform: translateY(-100%); */
            border-radius: 10px;
            a {
                color: rgb(152, 124, 108);
                line-height: 15px;
            }
        }
    }
`;
