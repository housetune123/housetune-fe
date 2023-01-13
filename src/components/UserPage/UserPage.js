import React from 'react';
import { useState, useEffect } from 'react';
import './userPage.scss';
// 頁籤
import UserDatas from './tag-contents/UserDatas';
import Coupons from './tag-contents/Coupons';
import Orders from './tag-contents/Orders';
import TrackList from './tag-contents/TrackList';

function UserPage(props) {
  const tags = ['個人資訊', '優惠券', '訂單', '追蹤清單'];
  const [selectedTag, setSelectedTag] = useState('個人資訊');

  //   const activeStyle = 'border-bottom-0 bg-orange';

  // 控制點選的頁籤狀態
  function handleChangeTags(e) {
    e.preventDefault();
    let selectName = e.currentTarget.getAttribute('name');
    // let activeStyle = e.currentTarget.getAttribute('className');
    // console.log(activeStyle);
    setSelectedTag(selectName);
  }
  // 根據狀態切換內容
  function changeContent() {
    if (selectedTag === '個人資訊') return <UserDatas />;
    if (selectedTag === '優惠券') return <Coupons />;
    if (selectedTag === '訂單') return <Orders />;
    if (selectedTag === '追蹤清單') return <TrackList />;
  }

  return (
    <>
      <div className="bg-orange pb-4">
        <main className="container">
          <section className="login-status">
            <div className="pt-4 pb-3 d-flex justify-content-between justify-content-sm-start">
              <span className="text-info">你好，王小名</span>
              <a
                className="text-decoration-none border-bottom text-gray-300 ms-3"
                href="#/"
              >
                登出
              </a>
            </div>
          </section>
          <section className="top-message">
            <div className="w-100 border border-primary-100 pt-3 pb-1 px-2 text-info">
              <div className="row px-2">
                <div className="col-12 col-sm-10">
                  <h4 className="fw-bold ">我們在等待你的評價 !</h4>
                  <p>喜歡之前購買的商品嗎 ? 給我們一個好評吧 !</p>
                </div>
                <div className="d-flex align-items-center col-12 col-sm-2">
                  <button className="btn btn-primary-300 w-100 px-4">
                    評價
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className="user-menu border border-top-0 border-primary-100 mt-3">
            {/* 頁籤 */}
            <div className="page-tags">
              <ul className="list-unstyled d-flex">
                {tags.map((val, index) => {
                  return (
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    <a
                      key={index}
                      name={val}
                      className={`change-tag text-decoration-none col-3 text-center text-gray-300 py-3 border border-primary-100 bg-gray-100 ${
                        index === 0 ? 'border-start-0 ' : ''
                      } ${index === 3 ? 'border-end-0' : ''} ${
                        selectedTag === val ? 'border-bottom-0 bg-orange' : ''
                      }`}
                      role="button"
                      onClick={handleChangeTags}
                    >
                      <li>{val}</li>
                    </a>
                  );
                })}
              </ul>
            </div>
            {/* 細節內容 */}
            <div className="container">{changeContent()}</div>
          </section>
        </main>
      </div>
    </>
  );
}

export default UserPage;
