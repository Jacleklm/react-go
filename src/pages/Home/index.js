import React, { useState, useEffect } from 'react';
import Header from './Header/index';
// import Hotswiper from './Hotswiper/index';
import Footer from './Footer/index';
import Icons from './Icons/index';
import Recommend from './Recommend/index';
import Swiper from './Swiper/index';
import Weekend from './Weekend/index';
import axios from '../../api/axios.js'
import api from '../../api/index'

const Home = () => {
  // const [city, setCity] = useState('');
  const [swiperList, setSwiperList] = useState([]);
  const [iconList, setIconList] = useState([]);
  const [recommendList, setRecommendList] = useState([]);
  const [weekendList, setWeekendList] = useState([]);
  // const [hotswiperList, setHotswiperList] = useState([]);

  useEffect(() => {
    getHomeInfo()
  }, [])

  const getHomeInfo = () => {
    axios(api.getHomeInfo)
    .then(res => res.data.data)
    .then(res => {
      // console.log(res.iconList)
      setSwiperList(res.swiperList)
      setIconList(res.iconList)
      // setHotswiperList(res.hotswiperList)
      setRecommendList(res.recommendList)
      setWeekendList(res.weekendList)
    })
    .catch(e => console.log(e))
  }
  return (
    <div>
      <Header></Header>
      <Swiper 
        list={swiperList}
        // loading={loading}
      ></Swiper>
      <Icons list={iconList}></Icons>
      {/* <Hotswiper list={hotswiperList}></Hotswiper> */}
      <Recommend list={recommendList}></Recommend>
      <Weekend list={weekendList}></Weekend>
      <Footer></Footer>
    </div>
  );
}

export default Home;