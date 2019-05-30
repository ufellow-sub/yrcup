import React from 'react';
import {
    ToastBox
} from './style'
import load from './../../assets/ajax-loader.gif';

const Toast = (props) => {
    return (
        <ToastBox>
            <div className="image">
                <img src={props.image} alt={props.tips} />
            </div>
            <div className="text">{props.tips}</div>
        </ToastBox>
    )
}

export default Toast;