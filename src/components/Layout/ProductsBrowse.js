import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Main/main.scss';

function ProductsBrowse() {
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
  // 相關商品推薦變數
  const ProductsBrowseObject = [
    { img: ``, text: '' },
    { img: ``, text: '' },
    { img: ``, text: '' },
    { img: ``, text: '' },
    { img: ``, text: '' },
    { img: ``, text: '' },
    { img: ``, text: '' },
    { img: ``, text: '' },
    { img: ``, text: '' },
    { img: ``, text: '' },
  ];
  return (
    <>
      <section className="main container pt-2 pb-md-5 pb-3 px-md-4 bg-gray browse">
        <div className="d-md-flex justify-content-between">
          <p className="text-info-dark p-md-3 mb-2">您最近瀏覽的商品</p>
          <p className="fs-sml text-info p-md-3 browse-text mb-2">
            清除最近瀏覽
          </p>
        </div>
        <div className="mx-2">
          <Slider {...settings}>
            {ProductsBrowseObject.map((v, i) => {
              return (
                <div
                  className="col-2 d-flex justify-content-center p-md-3 p-2"
                  key={i}
                >
                  <div className="card border border-0 card-shadow">
                    <img
                      src="https://www.dowana.com.tw/www/upload/ec/product/26844/18048-WA2U_580_580.jpg"
                      className="card-img-top bg-gray-200"
                      alt="..."
                    />
                    <div className="card-body text-left">
                      <h5 className="card-title text-info">NT $ 12,000</h5>
                      <h6 className="card-title text-gray-300">
                        Anderson儲物櫃
                      </h6>
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

export default ProductsBrowse;
