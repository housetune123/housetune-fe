import React from 'react';
import { Link } from 'react-router-dom';
import './UsedProductsDetail.scss';

function UsedProductsList({
  usedProducts,
  getCatUsedProducts,
  getUsedProductsPriceRange,
  getUsedProductsYearRange,
}) {
  return (
    <div className="row overflow-hidden p-1 m-1 text-info">
      {usedProducts.map((v, i) => {
        return (
          <div className="col-3 p-0 ">
            <div className="card btn-shadow me-3 mb-3" key={v.useP_id}>
              <img
                src={`${process.env.REACT_APP_IMAGE_URL}/images/used/${v.img}`}
                className="card-img-top"
                alt={v.name}
              />
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h5 className="card-title text-info">NT${v.price}</h5>
                  <i class="fa-regular fa-heart text-info pt-1 ps-2"></i>
                </div>
                <h6 className="card-title text-gray-300">{v.product_name}</h6>
                <p className="card-text text-gray-300">
                  賣家：{v.name}
                  {v.seller_id}
                </p>
                <div className="d-flex justify-content-around buttons">
                  <Link
                    to="/"
                    className="btn btn-sm btn-white btn-rect border "
                  >
                    顯示更多
                  </Link>
                  <Link to="/" className="btn btn-sm btn-primary-300 btn-rect">
                    加入購物車
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default UsedProductsList;
