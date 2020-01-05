import React from "react";
import "./index.less";
import { Carousel } from "antd";

const hotSwiper = (props) => {
  const { list } = props
  return (
    <div className="hotswiper">
      <div className="hotswiper-title">
        <img className="title-img" src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" alt="hot" />
        <span>本周热门榜单</span>
      </div>
      <div className="swiper">
        <Carousel autoplay>
          
          { 
            list.map((item, idx) => {
              return (
                <div className="swiper-content" key={item.id}>
                  <img className="swiper-content-img" src={item.imgUrl} alt="hot"/>
                  <div className="swiper-content-title">{item.title}</div>
                  <span className="swiper-content-price">￥{item.price}</span><span>&nbsp;起</span>
                </div>
              )
            })
          }
        </Carousel>
      </div>
    </div>
  );
};

export default hotSwiper;
