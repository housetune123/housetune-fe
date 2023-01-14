import React from 'react';

function TrackList() {
  return (
    <>
      <div className="border border-primary-200 px-3 mb-3">
        <table className="table table-rwd border-primary-100 text-gray-300 border-none">
          <thead className="border-bottom border-primary-100">
            <tr className="text-center text-info">
              <th>收藏商品</th>
            </tr>
          </thead>
          <tbody>
            <tr className="row text-center position-relative">
              {/* RWD 刪除 */}
              <td className="position-absolute rwd-deleteBtn d-md-none d-block">
                <button
                  className="btn"
                  onClick={() => {
                    console.log('delete');
                  }}
                >
                  X
                </button>
              </td>
              <td className="col-sm-3 col-12 justify-content-center">
                <div className="tdHeight  d-flex flex-column  justify-content-center">
                  <img
                    className="w-100"
                    src={`${process.env.REACT_APP_IMAGE_URL}/images/products/ordimg1.png`}
                    alt="img1"
                  />
                </div>
              </td>
              <td className="col-12 col-sm-3">
                <div className="tdHeight h-100 text-start d-flex align-items-center">
                  <div>
                    <p className="fw-bold">
                      Menu Curiosity Cabinet H168cm珍古系列 橡木收納櫥櫃
                    </p>
                    <div className="text-gray-200">
                      款式 : 橡木原色(Natural Oak)
                    </div>
                  </div>
                </div>
              </td>
              <td className="col-12 col-sm-2">
                <div className="h-100 w-100 d-md-flex text-start justify-content-center align-items-center ">
                  <div className="text-gray-200">NT12,000</div>
                </div>
              </td>
              <td className="col-12 col-sm-2">
                <div className="h-100 w-100 text-start d-flex flex-column text-center justify-content-evenly">
                  <button className="btn btn-primary-300 btn-rect ">
                    加入購物車
                  </button>
                </div>
              </td>
              <td className="col-12 col-sm-2">
                <div className="h-100 text-start d-none d-md-flex align-items-center justify-content-center">
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a role="button">
                    <i className="fa-solid fa-trash-can"></i>
                  </a>
                </div>
              </td>
            </tr>
            {/* 商品2 */}
            <tr className="row text-center">
              <td className="col-sm-3 col-12 justify-content-center">
                <div className="tdHeight  d-flex flex-column  justify-content-center">
                  <img
                    className="w-100"
                    src={`${process.env.REACT_APP_IMAGE_URL}/images/products/ordimg1.png`}
                    alt="img1"
                  />
                </div>
              </td>
              <td className="col-12 col-sm-3">
                <div className="tdHeight h-100 text-start d-flex align-items-center">
                  <div>
                    <p className="fw-bold">
                      Menu Curiosity Cabinet H168cm珍古系列 橡木收納櫥櫃
                    </p>
                    <div className="text-gray-200">
                      款式 : 橡木原色(Natural Oak)
                    </div>
                  </div>
                </div>
              </td>
              <td className="col-12 col-sm-2">
                <div className="h-100 w-100 d-md-flex text-start justify-content-center align-items-center ">
                  <div className="text-gray-200">NT12,000</div>
                </div>
              </td>
              <td className="col-12 col-sm-2">
                <div className="h-100 w-100 text-start d-flex flex-column text-center justify-content-evenly">
                  <button className="btn btn-primary-300 btn-rect ">
                    加入購物車
                  </button>
                </div>
              </td>
              <td className="col-12 col-sm-2">
                <div className="h-100 text-start d-none d-md-flex align-items-center justify-content-center">
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
