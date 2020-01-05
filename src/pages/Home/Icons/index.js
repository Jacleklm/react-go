import React from "react";
import "./index.less";
import { Carousel } from "antd";

const Icons = (props) => {
  const { list } = props
  const loading = false
  // const [ loading, setLoading ] = useState(true)
  // useEffect(() => {
  //   getPages()
  // }, [loading])
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    initialSlide: 0,
    autoplay: true
  };
  const getPages = () => {
    const pages = []
    list.forEach((item, index) => {
      const page = Math.floor(index / 8)
      if (!pages[page]) {
        pages[page] = []
      }
      pages[page].push(item)
    })
    // setLoading(false)
    return pages
  }
  return (
    <>
    {
      loading ? (
        <h2>Loading</h2>
      ) : (
        <div className="container border-bottom">
          <Carousel {...settings}>
          { 
            getPages().map((item, index) => {
              return (
                <div key={index} className="swiper-content">
                  {item.map((it, idx) => {
                    return (
                      <div className="icons-wrapper" key={it.id}>
                        <div className="icon-content">
                          <img
                            className="icon-content-img"
                            src={it.imgUrl}
                            alt="icon"
                          />
                        </div>
                        <p>{it.desc}</p>
                      </div>
                    )
                  })}
                </div>
              )
            })
          }
          </Carousel>
        </div>
      )
    }
    </>
  );
};

export default Icons;
