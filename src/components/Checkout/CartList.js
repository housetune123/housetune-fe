import React, { useState } from 'react';

import './Checkout.scss';

function Checkout() {
  return (
    <>
      {/* 購物清單 */}
      <div className="checkout-list">
        <div className="py-4 border-bottom border-gray-100">
          {/* 第一項商品 */}
          <div className="d-flex align-items-center justify-content-between py-4">
            <div>
              <div className="position-relative">
                <img
                  className="procduct-image"
                  src={`${process.env.REACT_APP_IMAGE_URL}/images/products/ordimg1.png`}
                  alt="/"
                />
                {/* 數量 */}
                <div className="bg-gray-200 amount d-flex align-items-center justify-content-center">
                  <span className="text-white fs-8">1</span>
                </div>
              </div>
            </div>
            <div>
              <p className="fs-7 fw-bold px-3">
                Menu Curiosity Cabinet H168cm珍古系列 橡木收納櫥櫃
              </p>
              <p className="fs-8 text-gray-300 px-3">橡木原色 Natural Oak</p>
            </div>
            <div>
              <span className="fs-7 fw-bold">$10,000.00</span>
            </div>
          </div>

          {/* 第二項商品 */}
          <div className="d-flex align-items-center justify-content-between py-4">
            <div>
              <div className="position-relative">
                <img
                  className="procduct-image"
                  src={`${process.env.REACT_APP_IMAGE_URL}/images/products/ordimg1.png`}
                  alt="/"
                />
                <div className="bg-gray-200 amount d-flex align-items-center justify-content-center">
                  <span className="text-white fs-8">1</span>
                </div>
              </div>
            </div>
            <div>
              <p className="fs-7 fw-bold px-3">
                Menu Curiosity Cabinet H168cm珍古系列 橡木收納櫥櫃
              </p>
              <p className="fs-8 text-gray-300 px-3">橡木原色 Natural Oak</p>
            </div>
            <div>
              <span className="fs-7 fw-bold">$10,000.00</span>
            </div>
          </div>

          {/* 第三項商品 */}
          <div className="d-flex align-items-center justify-content-between py-4">
            <div>
              <div className="position-relative">
                <img
                  className="procduct-image"
                  src={`${process.env.REACT_APP_IMAGE_URL}/images/products/ordimg1.png`}
                  alt="/"
                />
                <div className="bg-gray-200 amount d-flex align-items-center justify-content-center">
                  <span className="text-white fs-8">1</span>
                </div>
              </div>
            </div>
            <div>
              <p className="fs-7 fw-bold px-3">
                Menu Curiosity Cabinet H168cm珍古系列 橡木收納櫥櫃
              </p>
              <p className="fs-8 text-gray-300 px-3">橡木原色 Natural Oak</p>
            </div>
            <div>
              <span className="fs-7 fw-bold">$10,000.00</span>
            </div>
          </div>
        </div>

        {/* 優惠券 */}
        <div className="py-5 border-bottom border-gray-100">
          <form className="row g-3">
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="優惠券"
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary-300">
                我要使用
              </button>
            </div>
          </form>
        </div>

        {/* 計算 */}
        <div className="py-4 border-bottom border-gray-100">
          <div className="d-flex justify-content-between my-2">
            <span className="fs-7">總金額</span>
            <span className="fs-7">$30,000.00</span>
          </div>
          <div className="d-flex justify-content-between my-2">
            <span className="fs-7">優惠券</span>
            <span className="fs-7">- $1,000.00</span>
          </div>
          <div className="d-flex justify-content-between my-2">
            <span className="fs-7">運費</span>
            <span className="fs-7">免費</span>
          </div>
        </div>

        {/* 總計 */}
        <div className="d-flex justify-content-between align-items-center py-5">
          <div>
            <span>總計</span>
          </div>
          <div>
            <abbr className="fs-8 text-gray-200 mx-2">TWD</abbr>
            <strong>$29,000.00</strong>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
