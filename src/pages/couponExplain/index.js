import React from 'react';
import {
    ExplainBox
} from './style';
import TopGoBack from './../../common/topgoback'
import Bottomillustrate from './../../common/bottomillustrate'
const Explain = (props) => {
    document.title = 'U惠券使用说明';
    return (
        <ExplainBox>
            <TopGoBack></TopGoBack>
            <div className="title">U惠券使用说明 :</div>
            <ul className="explain-list">
                <li>
                    <div className="question-title"><i>Q</i>: 什么是U惠券?</div>
                    <p className='answer-text'>
                        <i>A</i>: 
                        <span>U惠券是优瑞咖发放给用户的,在用户购买咖啡时,用于抵扣订单金额,或以优惠券标明的结算价进行结算的电子券.</span>
                    </p>
                </li>
                <li>
                    <div className="question-title"><i>Q</i>: 什么是赠免券?</div>
                    <p className='answer-text'>
                        <i>A</i>: 
                        <span>该券不会产生任何费用上的优惠,用户正常付款. 付款成功后,系统会赠送一张免费券(名为xxx咖啡免费券)给用户.</span>
                    </p>
                </li>
                <li>
                    <div className="question-title"><i>Q</i>: 什么是免费券?</div>
                    <p className='answer-text'>
                        <i>A</i>: 
                        <span>用户在使用免费券时,可免除一杯咖啡的价钱,可免费购买.</span>
                    </p>
                </li>
                <li>
                    <div className="question-title"><i>Q</i>: 什么是优惠券的有效期?</div>
                    <p className='answer-text'>
                        <i>A</i>: 
                        <span>优惠券需要在有效期内使用,超过有效期的优惠券会自动失效,无法使用.</span>
                    </p>
                </li>
                <li>
                    <div className="question-title"><i>Q</i>: 如何获取优惠券</div>
                    <p className='answer-text'>
                        <i>A</i>: 
                        <span>请关注优瑞咖微信公众号,我们会不定期发布各种优惠活动,也会不定期发送各种优惠券.</span>
                    </p>
                </li>
                <li>
                    <div className="question-title"><i>Q</i>: 我的优惠券为何不能使用?</div>
                    <p className='answer-text'>
                        <i>A</i>: 
                        <span>用户的优惠券可能不符合使用条件;另外,如果用户在进行订单支付时网络信号中断或不稳定,也有可能造成优惠券无法使用.</span>
                    </p>
                </li>
            </ul>
            <Bottomillustrate></Bottomillustrate>
        </ExplainBox>
    )
}

export default Explain;