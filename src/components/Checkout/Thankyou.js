import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/Authcontext';
import axios from 'axios';
import { useCart } from '../../utils/useCart';
import './Checkout.scss';
import 'leaflet/dist/leaflet.css';

import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

function Thankyou(props) {
  const { clearCart } = useCart();
  const navigate = useNavigate();
  const position = [25.045102061647054, 121.52904696173054];
  const { userinfo, isLoggedIn } = useAuth();
  const [completeMsg, setCompleteMsg] = useState('');
  const [orderNumber, setOrderNumber] = useState('');
  const [payment, setPayment] = useState('');

  // 判斷登入狀態
  if (!isLoggedIn) {
    // alert('請從正常管道進入!');
    // navigate('/');
  }
  useEffect(() => {
    clearCart();
    (async () => {
      let res = await axios.get('http://localhost:3001/api/payment/checkorder');
      setOrderNumber(res.data);
    })();
    setCompleteMsg(JSON.parse(localStorage.getItem('myAddress')));

    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('payment')) {
      setPayment('atm');
    }
  }, []);

  // 地址
  const address = `${completeMsg.district + completeMsg.address}`;

  return (
    <>
      <main className="checkout-thankyou">
        <section className="col-auto bg-white py-4">
          <div className="thankyou-wrapper">
            <div className="py-4">
              <Link to="/">
                <img
                  src={`${process.env.REACT_APP_IMAGE_URL}/images/logo.png`}
                  alt=""
                  className="logo-image"
                />
              </Link>
            </div>
            <div className="d-flex align-items-center">
              <i className="fa-regular fa-circle-check fs-1 text-primary-300" />
              <div className="px-3">
                <span className="fs-7">訂單編號：{orderNumber}</span>
                <h5>感謝您，{userinfo.name}！</h5>
              </div>
            </div>

            <div className="border border-gray-100 rounded-3 my-4">
              <div className="map map-index position-relative">
                <MapContainer
                  style={{
                    height: '300px',
                    width: '100wh',
                  }}
                  center={position}
                  zoom={15}
                  scrollWheelZoom={false}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={position}></Marker>
                </MapContainer>
              </div>
              <div className="p-4">
                <h5 className="fs-5 mb-4">您的訂單已確認</h5>
                <div className="fs-6">
                  <h6 className="text-info fw-bold">
                    {payment === 'atm'
                      ? '謝謝您的惠顧，以下是您的匯款資訊，請在三日內匯款完成。'
                      : '謝謝您的惠顧，我們將盡快寄出商品，期待您再度光臨Housetune。'}
                  </h6>
                  {payment === 'atm' ? (
                    <>
                      <p>銀行匯款資訊：</p>
                      <p>銀行：玉山銀行 岡山分行</p>
                      <p>帳號：0956-942-000990</p>
                      <p>戶名：浩斯度股份有限公司</p>
                      <p>
                        您好！此訂單將為您保留 3 天,
                        如三天內未付款，訂單將被取消。
                      </p>
                    </>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            </div>
            <div className="border border-gray-100 rounded-3 my-4">
              <div className="p-4">
                <h5 className="fs-6 mb-4">訂單更新</h5>
                <div className="fs-7 d-flex flex-column">
                  <span>您會透過電子郵件取得運送和配送資訊更新。</span>
                </div>
              </div>
            </div>
            <div className="border border-gray-100 rounded-3 my-4">
              <div className="p-4">
                <h5 className="fs-6">客戶資訊</h5>
                <div className="row">
                  <div className="col-12 col-lg-6">
                    <div className="py-4">
                      <h3 className="fs-7 fw-bold">聯絡資訊</h3>
                      <div className="fs-7">
                        <span>{userinfo.email}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="fs-7 fw-bold">運送地址</h3>
                      <address className="fs-7">
                        {completeMsg.lastName + completeMsg.firstName}
                        <br />
                        {address}
                        <br />
                        {completeMsg.postcode + ',' + completeMsg.city}
                        <br />
                        {completeMsg.country}
                        <br />
                        {completeMsg.phone}
                      </address>
                    </div>
                    <div className="py-2">
                      <h3 className="fs-7 fw-bold fw-bold">運送方式</h3>
                      <div className="fs-7">
                        <span>Free Shipping</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="py-4">
                      <h3 className="fs-7 fw-bold">付款方式</h3>
                      <div className="fs-7">
                        <span>
                          {payment === 'atm'
                            ? 'ATM 轉帳 / 銀行匯款'
                            : '信用卡支付'}
                        </span>
                      </div>
                    </div>
                    <div>
                      <h3 className="fs-7 fw-bold">帳單地址</h3>
                      <address className="fs-7">
                        {completeMsg.lastName + completeMsg.firstName}
                        <br />
                        {address}
                        <br />
                        {completeMsg.postcode + ',' + completeMsg.city}
                        <br />
                        {completeMsg.country}
                        <br />
                        {completeMsg.phone}
                      </address>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 底部按鈕 */}
            <div className="col-12 d-flex justify-content-between align-items-center mb-3">
              <div className="fs-7">
                是否需要幫忙？
                <Link
                  to={'/checkout/information'}
                  className="text-decoration-none link-primary-300"
                >
                  <span>聯絡我們</span>
                </Link>
              </div>
              <a href="/">
                <button className="btn btn-primary-300">回到首頁</button>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Thankyou;
