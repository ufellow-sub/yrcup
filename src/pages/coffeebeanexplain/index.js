import React from 'react';
import {
    ExplainBox
} from './style';
import TopGoBack from './../../common/topgoback'
import Bottomillustrate from './../../common/bottomillustrate'
const Explain = (props) => {
    document.title = '咖啡豆使用说明';
    return (
        <ExplainBox>
            <TopGoBack></TopGoBack>
            <div className="title">咖啡豆使用说明 :</div>
            <ul className="explain-list">
                <li>
                    <div className="question-title"><i>Q</i>: 什么是咖啡豆?</div>
                    <p className='answer-text'>
                        <i>A</i>: 
                        <span>咖啡豆是优瑞咖推出的虚拟代币,100个咖啡豆=1元人民币.</span>
                    </p>
                </li>
                <li>
                    <div className="question-title"><i>Q</i>: 怎么使用咖啡豆?</div>
                    <p className='answer-text'>
                        <i>A</i>: 
                        <span>咖啡豆可以在购买咖啡单品,套餐时抵扣现金使用.</span>
                    </p>
                </li>
                <li>
                    <div className="question-title"><i>Q</i>: 咖啡豆可以充值吗?</div>
                    <p className='answer-text'>
                        <i>A</i>: 
                        <span>咖啡豆可以充值,1元钱可以充值100咖啡豆.</span>
                    </p>
                </li>
            </ul>
            <Bottomillustrate></Bottomillustrate>
        </ExplainBox>
    )
}

export default Explain;