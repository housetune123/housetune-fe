import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Main/main.scss';
import { useEffect, useState } from 'react';

function ProductsFeatured({ catagory }) {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          className: 'center',
          centerMode: true,
          arrows: false,
          slidesToShow: 2,
          centerPadding: '20px',
        },
      },
    ],
  };
  // console.log(catagory);
  // 相關商品推薦變數
  const [productsObject, setProductsObject] = useState([]);

  useEffect(() => {
    setProductsObject(catagory);
    // console.log(productsObject);
  }, [catagory]);

  return (
    <>
      <section className="main container pt-2 pb-5">
        <p className="text-info-dark text-center">相關商品推薦</p>
        <div>
          <Slider {...settings}>
            {productsObject &&
              productsObject.map((v, i) => {
                const img = v.img.split(',');
                return (
                  <div className="col-2 d-flex justify-content-center" key={i}>
                    <div className="card shadow-sm">
                      <img
                        src={`${process.env.REACT_APP_IMAGE_URL}/images/products/${v.category_name}/${img[0]}`}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body text-left">
                        <h5 className="card-title text-info">NT $ {v.price}</h5>
                        <h6 className="card-title text-gray-300">{v.name}</h6>
                        <p className="card-text text-danger">預購商品</p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </Slider>
        </div>
      </section>
    </>
  );
}

export default ProductsFeatured;