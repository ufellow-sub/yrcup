import React from 'react';
import TopGoBack from './../topgoback'

class Expect extends React.Component {
    constructor(props) {
        super(props);
        let pathname = this.props.location.pathname;
        if(pathname === '/myfriend') {
            return document.title = '我的咖友';
        } else if (pathname === '/invoice') {
            return document.title = '索要发票';
        } else if (pathname === '/setup') {
            return document.title = '设置';
        } else if (pathname === '/coffeetree') {
            return document.title = '我的咖啡树';
        } else if (pathname === '/water') {
            return document.title = '我的U泉水';
        } else if (pathname === '/fertilizer') {
            return document.title = '我的U肥料';
        } else if (pathname === '/coffeedetail') {
            return document.title = '咖啡豆交易明细';
        } else if (pathname === '/detail') {
            return document.title = '充值 / 提现明细';
        } 
    }
    render() {
        let style = {
            position: 'fixed',
            left: 0,
            top: 0,
            right: 0,
            width: '100%',
            overflow: 'auto',
            bottom: '0',
            background: '#292929',
            color: 'red'
        }
        return (
            <div
                style={style}
            >
                <TopGoBack></TopGoBack>
                <div
                    style={{
                        textAlign: "center",
                        fontSize: "14px",
                        marginTop: "60%",
                        color: 'rgb(152, 124, 108)',
                        letterSpacing: '2px'
                    }}
                >敬请期待~</div>
            </div>
        )
    }
}

export default Expect;