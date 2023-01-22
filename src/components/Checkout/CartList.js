import { async } from 'q';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useCart } from '../../utils/useCart';
import './Checkout.scss';

function Checkout() {
  const {
    cart,
    items,
    addItem,
    removeItem,
    updateItem,
    clearCart,
    isInCart,
    plusOne,
    minusOne,
  } = useCart();

  // 設定是否使用優惠券
  const [useCoupon, setUseCoupon] = useState(false);
  // 優惠券名稱
  const [coupon, setCoupon] = useState('HAPPYYEIN');
  // 優惠券細節
  const [couponDetail, setCouponDetail] = useState({});

  function handleUseCoupon() {
    setUseCoupon(false);
    setCouponDetail({});
    async function getCoupon() {
      // couponName = coupon;
      let res = await axios.get(`http://localhost:3001/api/usecoupon/coupons`, {
        params: { couponName: coupon },
      });
      // console.log(res.data);
      let result = res.data[0];
      console.log(result);
      setCouponDetail({ ...result });
      setUseCoupon(true);
    }
    getCoupon();
  }

  return (
    <>
      {/* 購物清單 */}
      <div className="checkout-list">
        <div className="py-4 border-bottom border-gray-100">
          {/* 購物車商品 */}
          {items.map((val, i) => {
            const img = val.img.split(',');
            return (
              <div
                key={val.id}
                className="d-flex align-items-center justify-content-between py-4"
              >
                <div>
                  <div className="position-relative">
                    <img
                      className="procduct-image"
                      src={`${process.env.REACT_APP_IMAGE_URL}/images/products/${val.categoryR_name}/${img[0]}`}
                      alt="/"
                    />
                    <div className="bg-gray-200 amount d-flex align-items-center justify-content-center">
                      <span className="text-white fs-8">{val.quantity}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="fs-7 fw-bold px-3">{val.name}</p>
                  <p className="fs-8 text-gray-300 px-3">{val.shape}</p>
                </div>
                <div>
                  <span className="fs-7 fw-bold">{val.itemTotal}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 優惠券 */}
        <div className="py-5 border-bottom border-gray-100">
          <div className="row g-3">
            <div className="col-auto">
              <input
                type="text"
                value={coupon}
                className="form-control"
                placeholder="優惠券"
                onChange={(e) => {
                  setCoupon(e.target.value);
                }}
              />
            </div>
            <div className="col-auto">
              <button
                className="btn btn-primary-300"
                onClick={() => {
                  handleUseCoupon();
                }}
              >
                我要使用
              </button>
            </div>
          </div>
        </div>

        {/* 計算 */}
        <div className="py-4 border-bottom border-gray-100">
          <div className="d-flex justify-content-between my-2">
            <span className="fs-7">總金額</span>
            <span className="fs-7">${cart.cartTotal}</span>
          </div>
          <div className="d-flex justify-content-between my-2">
            <span className="fs-7">優惠券</span>
            <span className="fs-7">- ${couponDetail.discount}</span>
          </div>
          <div className="d-flex justify-content-between my-2">
            <span className="fs-7">運費</span>
            <span className="fs-7">$300</span>
          </div>
        </div>

        {/* 總計 */}
        <div className="d-flex justify-content-between align-items-center py-5">
          <div>
            <span>總計</span>
          </div>
          <div>
            <abbr className="fs-8 text-gray-200 mx-2">TWD</abbr>
            <strong>${cart.cartTotal - couponDetail.discount + 300}</strong>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
