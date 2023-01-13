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
              <div className="col-6 d-flex align-items-center justify-content-evenly">
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
              <table className="table text-gray-300 border-primary-100">
                {/* 標題 */}
                <thead>
                  <tr className="row text-center ">
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
                    <td className="col-2">歡慶開幕禮!</td>
                    <td className="col-2">$1000</td>
                    <td className="col-2">滿額折扣</td>
                    <td className="col-2">低消 $12000</td>
                    <td className="col-2">2022/10/31</td>
                    <td className="col-2">
                      <button className="btn btn-white bg-orange">使用</button>
                    </td>
                  </tr>
                  <tr className="row text-center align-items-center">
                    <td className="col-2">雙11限量折扣!</td>
                    <td className="col-2">$1111</td>
                    <td className="col-2">滿額折扣</td>
                    <td className="col-2">低消 $8000</td>
                    <td className="col-2">2022/11/12</td>
                    <td className="col-2">
                      <button className="btn btn-white bg-orange">使用</button>
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
