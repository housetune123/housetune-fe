import React from 'react';
import { Link } from 'react-router-dom';

import './Checkout.scss';
import logo from '../../images/logo.png';

import CartList from './CartList';

function Information(props) {
  return (
    <>
      <main className="row checkout">
        {/* Logo */}
        <div className="p-4 d-block d-lg-none">
          <Link to="/">
            <img src={logo} alt="" className="logo-image" />
          </Link>
        </div>
        {/* 手機板購物清單 */}
        <div className="bg-gray-100 d-flex justify-content-between align-items-center py-3 d-block d-lg-none mobile-list">
          <div className="d-flex align-items-center">
            <i className="fa-solid fa-cart-shopping text-info fs-7 p-2" />
            <span className="fs-7 text-info">顯示訂單摘要</span>
            <i className="fa-solid fa-angle-down fs-8 p-2" />
          </div>
          <span className="fs-6 fw-bold">$10000</span>
        </div>
        <section className="col-12 col-lg-6 bg-white">
          <div className="container">
            <div className="py-4 d-none d-lg-block">
              <Link to="/">
                <img src={logo} alt="" className="logo-image" />
              </Link>
            </div>
            {/* 步驟進度 */}
            <div>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to={'/cart'}>訂購清單</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to={'/information'}>客戶資料</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to={'/shipping'}>運費</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to={'/payment'}>付款</Link>
                  </li>
                </ol>
              </nav>
            </div>
            <div>
              <h5>聯絡資訊</h5>
              <h6>Ming Tony (gsn94561266@gmail.com)</h6>
              <Link to={'/'}>如果不是, 請登出</Link>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  //   checked
                />
                <label className="form-check-label" for="flexCheckChecked">
                  以電子郵件傳送最新消息和優惠活動給我
                </label>
              </div>
            </div>
            {/* 運送地址 */}
            <div>
              <h5>運送地址</h5>
              <form className="row g-3">
                <div className="form-floating">
                  <select
                    className="form-select"
                    id="floatingSelect"
                    aria-label="Floating label select example"
                  >
                    <option value="1" selected>
                      台灣 (Ming Tony)
                    </option>
                    <option value="2">使用新的地址</option>
                  </select>
                  <label for="floatingSelect">已儲存的地址</label>
                </div>
                <div className="form-floating">
                  <select
                    className="form-select"
                    id="floatingSelect"
                    aria-label="Floating label select example"
                  >
                    <option value="1" selected>
                      台灣
                    </option>
                    <option value="2">中國</option>
                  </select>
                  <label for="floatingSelect">國家/地區</label>
                </div>
                <div className="col-md-6 form-floating">
                  <input type="text" className="form-control" />
                  <label for="floatingInputValue">名字</label>
                </div>
                <div className="col-md-6 form-floating">
                  <input type="text" className="form-control" />
                  <label for="floatingInputValue">姓氏</label>
                </div>
                <div className="col-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="公司(選填)"
                  />
                </div>
                <div className="col-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="地址"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="市"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="郵遞區號"
                  />
                </div>
                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="電話"
                  />
                </div>
                <div className="col-12 d-flex fustify-content-between">
                  <span>回到訂購清單</span>
                  <Link to={'/shipping'}>
                    <button className="btn btn-primary">繼續結帳</button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </section>

        <CartList />
      </main>
    </>
  );
}

export default Information;
