import React from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';

function ForgotPage() {
  return (
    <>
      <main className="pageBG bg-orange py-lg-5 py-4">
        {/* <header className="bg-primary text-center">Header</header> */}

        <div className="pageImg">
          <div className="container">
            <form action="" method="" className="formStyle">
              <div className="mb-4">
                <h1 className="title text-center text-info fw-bold">
                  會員登入
                </h1>
              </div>
              <div className="row d-flex justify-content-start justify-content-lg-center">
                <div className="col-12 col-lg-8">
                  <h5 className="text-info-dark fw-bold mb-3">重設您的密碼</h5>
                  <h6 className="text-info-dark">
                    系統將會寄發新的密碼，請至輸入的信箱內查詢
                  </h6>
                </div>
              </div>
              <div className="row d-flex justify-content-center">
                <div className="col-12 col-lg-8">
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Email"
                  ></input>
                  <div className="mt-4 mb-5">
                    <button className="btn btn-primary-300 me-2">送出</button>
                    <Link
                      to="/login"
                      className="text-primary-300 text-decoration-none"
                    >
                      <button className="btn btn-white">取消</button>
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* <footer className="bg-gray-100 text-center">Footer</footer> */}
      </main>
    </>
  );
}

export default ForgotPage;
