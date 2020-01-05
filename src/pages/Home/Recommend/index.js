import React from "react";
import { Link } from 'react-router-dom'
import "./index.less";

const Recommend = (props) => {
  const { list } = props
  return (
    <div className="recommmend">
      <div className="recommmend-title">
        <img className="title-img" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="icon"/>
        <span>&nbsp;猜你喜欢</span>
      </div>
      {
        list.map((item, idx) => {
          return (
            <Link to={'/detail/' + item.id}
              className="recommmend-content border-bottom"
              key={item.id}
            >
              <div className="content-img">
                <img className="content-img-in" src={item.imgUrl} alt="img"/>
              </div>
              <div className="content-desc">
                <p className="content-desc-title">{item.title}</p>
                <p className="content-desc-desc">{item.desc}</p>
                <div className="content-desc-price">
                  <span className="content-desc-price-span">￥ &nbsp;</span>
                  <span className="content-desc-price-num">{item.price}</span>
                  <span> 起</span>
                </div>
                <span className="content-desc-detail">查看详情</span>
              </div>
            </Link>
          )
        })
      }
    </div>
  );
};

export default Recommend;
