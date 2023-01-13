import React from 'react';
import './Register.scss';
import InputItem from './InputItem';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <>
      <div className="pageBG bg-orange py-lg-5 py-4">
        {/* header */}
        {/* <header className="bg-primary text-center">Header</header> */}

        {/* form */}
        <div className="container">
          <form action="" method="" className="form-control">
            {/* form title */}
            <div className="mt-1 mb-4 py-2">
              <h1 className="text-center text-info fw-bold">加入會員</h1>
            </div>
            {/* form input */}
            {InputItem.map((it, i) => {
              return (
                <div key={i} className="row mt-4 mt-lg-5">
                  <div className="col-4 d-none d-lg-block">
                    <h5 className="text-center text-info fw-bold">
                      {it.tittle}
                    </h5>
                  </div>
                  <div className="col col-lg-7">
                    <input
                      type={it.type}
                      className="form-control"
                      placeholder={it.preset}
                    ></input>
                  </div>
                </div>
              );
            })}

            <div className="row mt-4 mt-lg-5">
              <div className="col-4  d-none d-lg-block">
                <h5 className="text-center text-info fw-bold">聯絡地址</h5>
              </div>
              <div className="col-7 d-flex justify-content-between">
                <div className="d-none d-lg-block w-40">
                  <select className="form-select">
                    <option>新北市</option>
                  </select>
                </div>
                <div className="d-none d-lg-block w-40">
                  <select className="form-select">
                    <option>新北市</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row mt-1">
              <div className="col-4 d-none d-lg-block"></div>
              <div className="col-7 d-none d-lg-block">
                <input
                  type="email"
                  className="form-control"
                  placeholder="請填入地址"
                ></input>
              </div>
            </div>

            {/* button */}
            <div className="d-flex d-lg-block">
              <div className="d-lg-flex justify-content-center mt-lg-5 mb-4">
                <button className="btn btn-primary-300 me-2 me-lg-5 col-2">
                  送出
                </button>
                <button className="btn btn-primary-300 col-2">清除</button>
              </div>
              {/* 登入Link */}
              <div className="d-flex mb-3 justify-content-center align-items-center">
                <div className="mx-1">
                  <h6 className="text-gray-200 m-auto">已經是會員了 ?</h6>
                </div>
                <div className="d-flex align-items-center">
                  <Link
                    to="/login"
                    className="text-decoration-none text-primary-300 d-none d-lg-inline"
                  >
                    點我登入
                  </Link>
                  {/* mobile */}
                  <Link
                    to="/login"
                    className="text-decoration-none text-primary-300 d-lg-none"
                  >
                    登入
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
        {/* footer */}
        {/* <footer className="bg-gray-100 text-center">Footer</footer> */}
      </div>
    </>
  );
}

export default Register;
