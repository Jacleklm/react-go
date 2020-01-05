import React from 'react';
import './index.less'

const Footer = () => {
  return (
    <div class="footer">
      <div className="icon-wrapper active">
        <div className="iconfont">&#xe607;</div>
        <p>首页</p>
      </div>
      <div className="icon-wrapper">
        <div className="iconfont">&#xe604;</div>
        <p>购物车</p>
      </div>
      <div className="icon-wrapper">
        <div className="iconfont">&#xe64d;</div>
        <p>发现</p>
      </div>
      <div className="icon-wrapper">
        <div className="iconfont">&#xe699;</div>
        <p>我的</p>
      </div>
    </div>
  );

}

export default Footer;