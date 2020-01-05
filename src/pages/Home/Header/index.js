import React from 'react';
import './index.less'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <div className="iconfont icon-back">&#xe624;</div>
      </div>
      <div className="header-input">
        <span className="iconfont icon-choose">&#xe7d2;</span>&nbsp;输入城市/景点/游玩主题
        </div>
      <div className="header-right">
        <Link to="/city">
          北京
          <span className="iconfont icon-choose">&#xe65a;</span>
        </Link>
      </div>
    </div>
  );

}

export default Header;