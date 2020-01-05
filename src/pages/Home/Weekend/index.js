import React from 'react';
import './index.less'
import { Link } from 'react-router-dom';


const Weekend = (props) => {
  const { list } = props
  return (
    <div className="weekend">
      <div className="weekend-title">
        <span>周末去哪儿</span>
      </div>
      {
        list.map((item, idx) => {
          return (
            <Link
              to={'/detail/'+item.id}
              className="weekend-content border-bottom"
              key={item.id}
            >
              <div className="content-img">
                <img className="content-img-in" src={item.imgUrl} alt="img"/>
              </div>
              <div className="content-desc">
                <p className="content-desc-title">{item.title}</p>
                <p className="content-desc-desc">{item.desc}</p>
              </div>
            </Link>
          )
        })
      }
      <div className="blank"></div>
    </div>
  );
}

export default Weekend;