import React from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
      <div className="pageBG bg-orange py-lg-5 py-4">
        {/* <header className="bg-primary text-center">Header</header> */}

        <div className="pageImg">
          <div className="container">
            <form action="" method="" className="formStyle">
              <div className="mb-4">
                <h1 className="title text-center text-info fw-bold">
                  會員登入
                </h1>
              </div>
              <div className="row d-flex justify-content-center">
                <div className="col-12 col-lg-8">
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Email"
                  ></input>
                </div>
                <div className="col-12 col-lg-8">
                  <input
                    className="form-control"
                    type="password"
                    placeholder="密碼"
                  ></input>
                </div>
                {/* desktop */}
                <div className="col-8">
                  <div className="d-none d-lg-block">
                    <div className="d-flex justify-content-between mt-3 mb-5">
                      <div>
                        <button className="btn btn-primary-300">登入</button>
                      </div>
                      <div className="">
                        <h6 className="text-gray-200 fw-bold">
                          還沒有加入Housetune ?
                        </h6>
                        <Link
                          to="/forgot"
                          className="text-decoration-none text-info fw-bold"
                        >
                          忘記您的 帳號 / 密碼嗎 ?
                        </Link>
                      </div>

                      <div className="/register">
                        <Link
                          to="/register"
                          className="mx-1 text-decoration-none  text-primary-300 fw-bold"
                        >
                          點我加入會員
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* mobile */}
              <div className="d-lg-none">
                <div className="d-flex">
                  <button className="btn btn-primary-300">登入</button>
                  <div className="mx-3">
                    <h6 className="text-gray-200">還沒有加入Housetune ?</h6>
                    <Link
                      to="/register"
                      className="text-decoration-none text-primary-300"
                    >
                      點我加入會員
                    </Link>
                  </div>
                </div>
                <div className="mt-3 mb-5">
                  <Link
                    to="/forgot"
                    className="text-decoration-none text-primary-300"
                  >
                    忘記您的 帳號 / 密碼嗎 ?
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* <footer className="bg-gray-100 text-center">Footer</footer> */}
      </div>
    </>
  );
}

export default Login;
