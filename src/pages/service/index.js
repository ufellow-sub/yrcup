import React from 'react';
import logo from './../../assets/logo.png'
import {
    ServeiceBox
} from './style'

const Serveice = () => {
    document.title = '在线客服'
    return (
        <ServeiceBox>
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="phone">官方客服电话: 400-666-999</div>
        </ServeiceBox>
    )
}

export default Serveice;