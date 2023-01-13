import React from 'react';

function TrackList() {
  return (
    <>
      <div className="border border-primary-200 px-3 mb-3">
        <table className="table border-primary-100 text-gray-300">
          <thead>
            <tr className="row text-center text-info">
              <th className="col-2">商品</th>
              <th className="col-4">商品資訊</th>
              <th className="col-2">價格</th>
              <th className="col-2">操作</th>
              <th className="col-2">刪除</th>
            </tr>
          </thead>
          <tbody>
            <tr className="row text-center">
              <td className="col-2">
                <div className="tdHeight  d-flex flex-column justify-content-between">
                  <img
                    className="w-100"
                    src={`${process.env.REACT_APP_IMAGE_URL}/products/ordimg1.png`}
                    alt="img1"
                  />
                </div>
              </td>
              <td className="col-4">
                <div className="tdHeight text-start d-flex flex-column justify-content-center">
                  <p className="fw-bold">
                    Menu Curiosity Cabinet H168cm珍古系列 橡木收納櫥櫃
                  </p>
                  <div className="text-gray-200">
                    款式 : 橡木原色(Natural Oak)
                  </div>
                </div>
              </td>
              <td className="col-2">
                <div className="tdHeight text-info d-flex flex-column justify-content-center">
                  NT$ 12,000
                </div>
              </td>
              <td className="col-2">
                <div className="tdHeight text-info  d-flex flex-column justify-content-evenly">
                  <button className="btn btn-primary-300 btn-rect">
                    加入購物車
                  </button>
                  <button className="btn btn-primary-300 btn-rect">
                    立即購買
                  </button>
                </div>
              </td>
              <td className="col-2">
                <div className="tdHeight text-info  d-flex align-items-center justify-content-center">
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a role="button">
                    <i className="fa-solid fa-trash-can"></i>
                  </a>
                </div>
              </td>
            </tr>
            {/* 商品2 */}
            <tr className="row text-center">
              <td className="col-2">
                <div className="tdHeight  d-flex align-items-center justify-content-center">
                  <img
                    className="w-100"
                    src={`${process.env.REACT_APP_IMAGE_URL}/products/ordimg1.png`}
                    alt="img1"
                  />
                </div>
              </td>
              <td className="col-4">
                <div className="tdHeight text-start d-flex flex-column justify-content-center">
                  <p className="fw-bold">
                    Menu Curiosity Cabinet H168cm珍古系列 橡木收納櫥櫃
                  </p>
                  <div className="text-gray-200">
                    款式 : 橡木原色(Natural Oak)
                  </div>
                </div>
              </td>
              <td className="col-2">
                <div className="tdHeight text-info d-flex flex-column justify-content-center">
                  NT$ 12,000
                </div>
              </td>
              <td className="col-2">
                <div className="tdHeight text-info  d-flex flex-column justify-content-evenly">
                  <button className="btn btn-primary-300 btn-rect">
                    加入購物車
                  </button>
                  <button className="btn btn-primary-300 btn-rect">
                    立即購買
                  </button>
                </div>
              </td>
              <td className="col-2">
                <div className="tdHeight text-info  d-flex flex-column justify-content-center">
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a role="button">
                    <i className="fa-solid fa-trash-can"></i>
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TrackList;
