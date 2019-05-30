import axios from 'axios';
import { resolve } from 'uri-js';
import { reject } from 'rsvp';
const baseUrl = 'https://www.youruika.cn/index';
export const SingleUrl = 'https://www.youruika.cn/uploads/goods/single/'
export const SetmealUrl = 'https://www.youruika.cn/uploads/goods/setmeal/'
export const userinfo = baseUrl + '/member/member_mes'; // 用户信息
export const pay = baseUrl + '/order/index'; // 下单
export const buycoffeebean = baseUrl + '/order/coffeedou'; // 买入咖啡豆
export const coffeebeandealApi = baseUrl + '/member/paydoudetails'//咖啡豆交易明细
export const coupon = baseUrl + '/coupon/index' // 获取优惠券
export const order = baseUrl + '/order/getinfo' // 获取订单
export const orderDetail = baseUrl + '/order/details' // 订单详情
export const mycoffee = baseUrl + '/order/my_coffee'; // 我的咖啡-扫码取咖啡
export const getActivityApi =baseUrl + "/activity/index";  //活动
export const getNewsApi =baseUrl + "/news/index";//新闻
export const getCouponApi = baseUrl + '/activity/clickCoupon';//活动页领取优惠券
export const bannerApi = baseUrl + '/goods/photo' //轮播图
export const transactionApi = baseUrl + '/member/payrecharge'; //提现交易明细
export const imgUrl =  "https://www.youruika.cn/uploads/news/";//活动图片前缀
// 更新用户信息
export const UpdateUserinfo = (id,props) => {
    axios.post(userinfo,{
        memberid: `${id}`
    }).then((res) => {
        console.log(res);
        console.log(props);      
        window.localStorage.setItem('userinfo',JSON.stringify(res.data))
    }).catch(err => {
        console.log(err)
    }) 
}