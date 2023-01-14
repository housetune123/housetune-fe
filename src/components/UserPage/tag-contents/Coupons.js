import React from 'react';

function Coupons(props) {
  return (
    <>
      <div className="user-coupons pt-2">
        <div className="coupon-informations pb-1">
          {/* 小標 */}
          <div className="pb-3">
            <span className="px-3">
              <i className="fa-solid fa-ticket"></i>
              <span className="fw-bold text-info px-3">優惠券</span>
            </span>
          </div>
          {/* 內容 */}
          <div className="receive-coupons">
            {/* 輸入欄 */}
            <div className="row">
              <div className="col-12 col-md-6  d-flex align-items-center justify-content-evenly">
                <input
                  type="text"
                  className="form-control w-75"
                  placeholder="輸入優惠券代碼..."
                />
                <button className="btn btn-primary-300">領取</button>
              </div>
            </div>
            {/* 優惠券列表 */}
            <div className="px-3 pt-4">
              <table className="table table-rwd text-gray-300 text-center w-100">
                {/* 標題 */}
                <thead>
                  <tr className="row text-center tr-only-hide">
                    <th className="col-2">優惠券項目</th>
                    <th className="col-2">折扣</th>
                    <th className="col-2">優惠券類型</th>
                    <th className="col-2">使用門檻</th>
                    <th className="col-2">使用期限</th>
                    <th className="col-2"></th>
                  </tr>
                </thead>
                {/* 優惠券詳細內容 */}
                <tbody>
                  <tr className="row text-center align-items-center">
                    <td className="col-2" data-th="優惠券項目">
                      歡慶開幕禮!
                    </td>
                    <td className="col-2" data-th="折扣">
                      $1000
                    </td>
                    <td className="col-2" data-th="優惠券類型">
                      滿額折扣
                    </td>
                    <td className="col-2" data-th="使用門檻">
                      低消 $12000
                    </td>
                    <td className="col-2" data-th="使用期限">
                      2022/10/31
                    </td>
                    <td
                      className="col-2 d-flex justify-content-center"
                      data-th=""
                    >
                      <button className="col-12 counponHover btn btn-white bg-orange">
                        使用
                      </button>
                    </td>
                  </tr>
                  <tr className="row text-center align-items-center">
                    <td className="col-2" data-th="優惠券項目">
                      歡慶開幕禮!
                    </td>
                    <td className="col-2" data-th="折扣">
                      $1000
                    </td>
                    <td className="col-2" data-th="優惠券類型">
                      滿額折扣
                    </td>
                    <td className="col-2" data-th="使用門檻">
                      低消 $12000
                    </td>
                    <td className="col-2" data-th="使用期限">
                      2022/10/31
                    </td>
                    <td
                      className="col-2 d-flex justify-content-center"
                      data-th=""
                    >
                      <button className="col-12 counponHover btn btn-white bg-orange">
                        使用
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Coupons;
