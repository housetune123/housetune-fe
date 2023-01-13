import React from 'react';

function OrderDetail(props) {
  //   if (props.open === props.index)
  return (
    <>
      {/* 購買商品清單 */}
      <td className="col-2">
        <div className="tdHeight  d-flex flex-column justify-content-center">
          <img
            className="w-100"
            src={`${process.env.REACT_APP_IMAGE_URL}images/products/ordimg1.png`}
            alt="img1"
          />
        </div>
      </td>
      <td className="col-4">
        <div className="tdHeight text-start d-flex flex-column justify-content-center">
          <p className="fw-bold">
            Menu Curiosity Cabinet H168cm珍古系列 橡木收納櫥櫃
          </p>
          <div className="text-gray-200">款式 : 橡木原色(Natural Oak)</div>
        </div>
      </td>
      <td className="col-2">
        <div className="tdHeight text-info d-flex flex-column justify-content-center">
          NT$ 12,000
        </div>
      </td>
      <td className="col-2">
        <div className="tdHeight text-info  d-flex flex-column justify-content-center">
          2
        </div>
      </td>
      <td className="col-2">
        <div className="tdHeight text-info  d-flex flex-column justify-content-center">
          NT$ 24,000
        </div>
      </td>
      {/* 購買商品2 */}
      <td className="col-2">
        <div className="tdHeight  d-flex flex-column justify-content-center">
          <img
            className="w-100"
            src={`${process.env.REACT_APP_IMAGE_URL}/images/products/ordimg1.png`}
            alt="img1"
          />
        </div>
      </td>
      <td className="col-4">
        <div className="tdHeight text-start d-flex flex-column justify-content-center">
          <p className="fw-bold">
            Menu Curiosity Cabinet H168cm珍古系列 橡木收納櫥櫃
          </p>
          <div className="text-gray-200">款式 : 橡木原色(Natural Oak)</div>
        </div>
      </td>
      <td className="col-2">
        <div className="tdHeight text-info d-flex flex-column justify-content-center">
          NT$ 12,000
        </div>
      </td>
      <td className="col-2">
        <div className="tdHeight text-info  d-flex flex-column justify-content-center">
          2
        </div>
      </td>
      <td className="col-2">
        <div className="tdHeight text-info  d-flex flex-column justify-content-center">
          NT$ 24,000
        </div>
      </td>

      <td>
        <hr className="col-12 py-0" />
      </td>

      {/* <hr className="col-12 py-0" /> */}
      {/* 金額 */}
      <td>
        <div className="total-cash">
          <div className="row text-start">
            <div className="col-8"></div>
            <div className="col-4 cash-detail">
              <div>
                小計:<span>NT$48,000</span>
              </div>
              <div>
                優惠券折扣:<span>-NT$2,000</span>
              </div>
              <div>
                運費:<span>NT$1,000</span>
              </div>
              <div>
                合計:<span>NT$47,000</span>
              </div>
            </div>
          </div>
          <hr className="col-12 py-0" />
          {/* <hr className="col-12 py-0" /> */}
          {/* 詳細資訊 */}
          <div className="every-details row">
            <div className="about-order col-6">
              <ul className="list-unstyled text-align">
                <li className="title">
                  <span>訂單資訊</span>
                </li>
                <li className="row">
                  <span className="col-6 text-start">訂單號碼:</span>
                  <span className="col-6 text-start">123123</span>
                </li>
                <li className="row">
                  <span className="col-6 text-start">訂單信箱:</span>
                  <span className="col-6 text-start">123123</span>
                </li>
                <li className="row">
                  <span className="col-6">訂單日期:</span>
                  <span className="col-6">122323</span>
                </li>
                <li className="row">
                  <span className="col-6">訂單狀態:</span>
                  <span className="col-6">123231</span>
                </li>
              </ul>
            </div>
            <div className="about-customer col-6">
              <ul className="list-unstyled text-align">
                <li className="title">
                  <span className="">顧客資訊</span>
                </li>
                <li className="row">
                  <span className="col-6">名稱:</span>
                  <span className="col-6">12323</span>
                </li>
                <li className="row">
                  <span className="col-6">電話號碼:</span>
                  <span className="col-6">122312</span>
                </li>
              </ul>
            </div>
            <div className="about-deliever col-6">
              <ul className="list-unstyled text-align">
                <li className="title">
                  <span>送貨資訊</span>
                </li>
                <li className="row">
                  <span className="col-6">寄送方式:</span>
                  <span className="col-6">123213</span>
                </li>
                <li className="row">
                  <span className="col-6">送貨狀態:</span>
                  <span className="col-6">123123</span>
                </li>
                <li className="row">
                  <span className="col-6">收件人姓名:</span>{' '}
                  <span className="col-6">123123</span>
                </li>
                <li className="row">
                  <span className="col-6">電話號碼:</span>
                  <span className="col-6">123123</span>
                </li>
                <li className="row">
                  <span className="col-6">配送編號:</span>
                  <span className="col-6">123123</span>
                </li>
                <li className="row">
                  <span className="col-6">地址</span>
                  <span className="col-6">123123</span>
                </li>
              </ul>
            </div>
            <div className="about-payments col-6">
              <ul className="list-unstyled text-align">
                <li className="title">
                  <span className="">付款方式</span>
                </li>
                <li className="row">
                  <span className="col-6">付款資訊:</span>
                  <span className="col-6">123123</span>
                </li>
                <li className="row">
                  <span className="col-6">發票號碼:</span>
                  <span className="col-6">1213</span>
                </li>
                <li className="row">
                  <span className="col-6">類型</span>
                  <span className="col-6">12312</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </td>

      <td>
        <hr className="py-0" />
      </td>

      {/* <hr className="py-0" /> */}
    </>
  );
}

export default OrderDetail;
