import React from "react";
import "./index.less";
import { Carousel } from "antd";

const Swiper = (props) => {
  const { list } = props
  return (
    <div className="swiper">
      <Carousel autoplay>
        {
          list.map((item, index) => {
          return (
            <div key={item.id}>
              <img
                className="swiper-content-img"
                alt="swiper"
                src={item.imgUrl}
              ></img>
            </div>
          )
        })}
      </Carousel>
    </div>
  );
};

export default Swiper;
