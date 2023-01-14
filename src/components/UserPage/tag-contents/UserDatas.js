import React from 'react';

function UserDatas(props) {
  return (
    <>
      <div className="user-details pt-2">
        <div className="user-informations pb-1">
          <div className="member-class pb-3">
            <span className="px-3">
              <i className="fa-solid fa-image-portrait"></i>
              <span className="fw-bold text-info px-3">xiaoming123</span>
            </span>
            <button className="btn btn-primary-300 rounded rounded-5 px-4">
              一般會員
            </button>
          </div>
          <div className="details">
            <div className="update-title px-3">
              <i className="fa-solid fa-pen"></i>
              <span className="fw-bold text-info px-2">編輯會員資料</span>
            </div>
            <div className="row update-inputs px-3 pb-3">
              {/* 更改資料表 */}
              <div className="row">
                {/* 姓名 */}
                <div className="col-12 col-md-6  align-items-center pt-5">
                  <div className="row align-items-center">
                    <label
                      className="col-12 col-sm-4 text-info fw-bold "
                      htmlFor="userName"
                    >
                      姓名
                    </label>
                    <div className="col-12 col-sm-8">
                      <input
                        className="w-100 form-control "
                        type="text"
                        id="userName"
                        placeholder="王小名"
                      />
                    </div>
                  </div>
                </div>
                {/* Email */}
                <div className="col-12 col-md-6  align-items-center pt-5">
                  <div className="row align-items-center">
                    <label
                      htmlFor="userEmail"
                      className="col-12 col-sm-4 text-info fw-bold"
                    >
                      Email
                    </label>
                    <div className="col-12 col-sm-8">
                      <input
                        className="w-100 form-control"
                        id="userEmail"
                        type="email"
                        placeholder="xiaoming123@test.com"
                      />
                    </div>
                  </div>
                </div>
                {/* 電話 */}
                <div className="col-12 col-md-6 align-items-center pt-5">
                  <div className="row align-items-center">
                    <label
                      htmlFor="userPhone"
                      className="col-12 col-sm-4 text-info fw-bold"
                    >
                      連絡電話
                    </label>
                    <div className="col-12 col-sm-8">
                      <input
                        id="userPhone"
                        type="text"
                        className="w-100 form-control"
                        placeholder="0912345678"
                      />
                    </div>
                  </div>
                </div>

                {/* 地址 */}
                <div className="col-12 col-md-6 align-items-center pt-5">
                  <div className="row align-items-center">
                    <div className="col-12 col-sm-4 text-info fw-bold">
                      地址
                    </div>
                    <div className="col-12 col-sm-8">
                      <a
                        href="#/"
                        className="text-decoration-none fw-bold text-primary-200"
                      >
                        新增地址
                      </a>
                    </div>
                  </div>
                </div>

                {/* 密碼 */}
                <div className="col-12 col-md-6 align-items-center pt-5">
                  <div className="row align-items-center">
                    <label className="col-12 col-sm-4 text-info fw-bold">
                      密碼
                    </label>
                    <div className="col-12 col-sm-8">
                      <a
                        href="#/"
                        className="text-decoration-none fw-bold text-primary-200"
                      >
                        設定新的密碼
                      </a>
                      {/* 點設定新按鈕出現 input 預設是 hide(d-none) */}
                      <input
                        className="input-hide form-control"
                        type="password"
                      />
                    </div>
                  </div>
                </div>
                {/* 帳戶綁定 */}
                <div className="col-12 col-md-6 align-items-center pt-5">
                  <div className="row align-items-center">
                    <div className="col-12 col-sm-4 text-info fw-bold">
                      帳戶綁定
                    </div>
                    <div className="col-12 col-sm-8">
                      <a
                        href="#/"
                        className="text-decoration-none fw-bold text-primary-200"
                      >
                        新增綁定
                      </a>
                    </div>
                  </div>
                </div>
                {/* 訂閱 checkbox */}
                <div className="col-12 col-md-6 align-items-center pt-5">
                  <div className="row">
                    <div className="col-12 col-sm-4 text-info fw-bold">
                      訂閱通知
                    </div>
                    <div className="col-12 col-sm-8">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="Check-Email"
                        />
                        <label
                          className="form-check-label text-info fw-bold"
                          htmlFor="Check-Email"
                        >
                          訂閱電子郵報
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="Check-SMS"
                        />
                        <label
                          className="form-check-label text-info fw-bold"
                          htmlFor="Check-SMS"
                        >
                          訂閱SMS
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <div className="sava-btn pe-3 py-3">
              <button className="counponHover btn btn-white border me-2 bg-orange px-4">
                取消
              </button>
              <button className="btn btn-primary-300 px-3">儲存變更</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDatas;
