import styled from 'styled-components';

export const ExplainBox = styled.div`
    position: absolute;
    width: 100%;
    min-height: 100%;
    background: #343635;
    color: #fff;
    .title {
        padding: 10px;
        font-size: 16px;
        letter-spacing: 2px;
        margin-top: 10px;
    }
    .explain-list {
        padding: 10px;
        margin-top: 20px;
        color: #B9B9C8;
        li {
            border-bottom: 2px solid #9D8275;
            padding: 15px 0;
            color: rgb(105, 105, 105);
            .question-title {
                letter-spacing: 2px;
                i {
                    color: #9D8275;
                    font-weight: 600;
                    font-style: normal;
                }
            }
            .answer-text {
                margin-top: 10px;
                i {
                    color: #9D8275;
                    font-weight: 600;
                    font-style: normal;
                }
                span {
                    margin-left: 7px;
                    line-height: 18px;
                }
            }
        }
    }


`;