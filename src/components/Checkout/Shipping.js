import React from 'react';
import { Link } from 'react-router-dom';

function Shipping(props) {
  return (
    <>
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
            checked
          />
          <label className="form-check-label" for="flexCheckChecked">
            以電子郵件傳送最新消息和優惠活動給我
          </label>
        </div>
      </div>
      {/* 運送地址 */}
      <div>
        <h5>配送方式</h5>
        <form className="row g-3">
          <div className="col-12">
            <Link to={'/payment'}>
              <button className="btn btn-primary">繼續付款</button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Shipping;
