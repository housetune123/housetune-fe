import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuth } from '../Context/Authcontext';

import './SellerCenter.scss';

function PersonalStore() {
  const { userinfo } = useAuth();
  return (
    <>
      <div className="seller-center bg-primary">
        <header className="fixed-top bg-white d-flex justify-content-between shadow-sm mb-5 p-3 seller-header">
          <div>
            <Link
              to="/seller"
              className="text-decoration-none d-flex align-items-center"
            >
              <img
                src={`${process.env.REACT_APP_IMAGE_URL}/images/logo.png`}
                alt="logo"
                className="logo-image"
              />
              <span className="fs-5 mx-2 fw-bold text-gray-400">賣家中心</span>
            </Link>
          </div>
          <div className="d-flex align-items-center">
            <Link to="/user" className="text-decoration-none">
              <span className="fs-6 mx-2 fw-bold text-gray-400">
                {userinfo.name}
              </span>
            </Link>
          </div>
        </header>

        <main className="d-flex">
          <div className="seller-aside-box"></div>
          <aside className="bg-white pt-5 seller-aside">
            <ul className="list-unstyled pt-5 ms-4">
              <li className="p-1">
                <Link
                  to={'/seller/product'}
                  className="link-primary-300 text-decoration-none text-center"
                  onClick={(e) => {}}
                >
                  <i class="fa-solid fa-bag-shopping p-2 aside-icon" />
                  商品管理
                </Link>
              </li>
              <li className="p-1">
                <Link
                  to={'/seller/order'}
                  className="link-primary-300 text-decoration-none text-center"
                >
                  <i class="fa-solid fa-clipboard-list p-2 aside-icon" />
                  訂單管理
                </Link>
              </li>
            </ul>
          </aside>
          <section className="mt-5 pt-5 p-5 seller-wrapper">
            <Outlet />
          </section>
        </main>
      </div>
    </>
  );
}

export default PersonalStore;
