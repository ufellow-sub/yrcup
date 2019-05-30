import React, {Component} from 'react';
import {MemberBox} from './style';
import Bottomillustrate from './../../common/bottomillustrate'
import TopGoBack from './../../common/topgoback'
class Member extends Component {
    render(){
        return(
            <MemberBox>
                <TopGoBack></TopGoBack>
                <div className = 'content'>
                   <div className='member_title'>会员等级说明：</div>
                   <div className='desc first'>
                        <p className='list_title'>注册会员：</p>
                        <p>凡注册成功即成为注册会员</p>
                        <p className='fuli list_title'>福利：</p>
                        <p>1.成功注册之时，一次性获得10张“买一赠一券”。</p>
                        <p>2.成功推广注册会员1名，获得系统一次性奖励的咖啡豆100颗。</p>
                   </div>
                   <div className='desc'>
                        <p className='list_title'>VIP会员：</p>
                        <p>凡一次性充值100元或累计现金消费15杯在售任意产品者，升级成为VIP会员。</p>
                        <p className='fuli list_title'>福利：</p>
                        <p>1.成功推广注册会员1名，获得系统一次性奖励的咖啡豆100颗。</p>
                        <p>2.消费每1杯产品均可获得系统发放的U肥料1袋或者U泉水1桶。</p>
                   </div>
                   <div className='desc'>
                        <p className='list_title'>金牌VIP：</p>
                        <p>同时满足VIP条件以及成功推广注册会员5人以上（两条件并列达成不分先后），升级成为金牌VIP。</p>
                        <p className='fuli list_title'>福利：</p>
                        <p>1.成功推广注册会员1名，获得系统一次性奖励的咖啡豆100颗。</p>
                        <p>2.消费每1杯产品均可获得系统发放的U肥料1袋或者U泉水1桶。</p>
                        <p>3.凡是自己成功推广注册的各等级会员消费1杯任意在售产品，推广人均获得系统奖励的咖啡豆10颗，终身领取。</p>
                   </div>
                   <div className='desc'>
                        <p className='list_title'>钻石VIP：</p>
                        <p>金牌VIP个人在每个自然月15日即系统默认的T日24点截止累计消费满10杯任意在售商品，自动升级为钻石VIP，有效期至下个自然月15日止。</p>
                            <p className='fuli list_title'>福利：</p>
                        <p>1. 成功推广注册会员1名，获得系统一次性奖励的咖啡豆100颗。</p>
                        <p>2. 消费每一杯产品均可获得系统发放的U肥料1袋或者U泉水1桶。</p>
                        <p>3. 凡是自己成功推广注册的各等级会员消费1杯任意在售产品，推广人均可获得系统奖励的咖啡豆10颗，终生有效。</p>
                        <p>4. 钻石会员从T+1日起至下一个自然月T日止，每日均有可能获得系统自动奖励的不定量咖啡豆。</p>
                   </div>
               </div>
               <Bottomillustrate></Bottomillustrate>
            </MemberBox>
        );
    }
    componentDidMount(){
        document.bgColor = '#212121';
        document.title = 'U 会员'
    }
}

export default Member;