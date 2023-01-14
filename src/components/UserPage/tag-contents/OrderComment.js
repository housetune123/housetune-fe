import React from 'react';
import { Fragment } from 'react';

function OrderComment(props) {
  // if (props.openComment === props.index)
  return (
    <Fragment>
      <td className="col-sm-3 col-12 justify-content-center">
        <div className="tdHeight  d-flex flex-column  justify-content-center">
          <img
            className="w-100"
            src={`${process.env.REACT_APP_IMAGE_URL}/images/products/ordimg1.png`}
            alt="img1"
          />
        </div>
      </td>
      <td className="col-12 col-sm-9">
        <div className="tdHeight text-start d-flex flex-column">
          <p className="fw-bold">
            Menu Curiosity Cabinet H168cm珍古系列 橡木收納櫥櫃
          </p>
          <div className="text-gray-200">款式 : 橡木原色(Natural Oak)</div>
          {/* 評價 */}
          <div className="stars">
            <span>評價 : </span>
            <span className="ratings">
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </span>
          </div>
          {/* 留言 */}
          <div className="comment-area">
            <label className="form-label">留言</label>
            <textarea className="form-control" rows="2"></textarea>
          </div>
        </div>
      </td>
      {/* 發布按鈕 */}
      <td className="col-12 ">
        <div className="save-comment d-sm-flex justify-content-sm-end px-3">
          <button className="btn btn-primary-300 px-3 col-12">發布</button>
        </div>
      </td>
      {/* 購買商品2 */}
      <td className="col-sm-3 col-12 justify-content-center">
        <div className="tdHeight  d-flex flex-column  justify-content-center">
          <img
            className="w-100"
            src={`${process.env.REACT_APP_IMAGE_URL}/images/products/ordimg1.png`}
            alt="img1"
          />
        </div>
      </td>

      <td className="col-9">
        <div className="tdHeight text-start d-flex flex-column">
          <p className="fw-bold">
            Menu Curiosity Cabinet H168cm珍古系列 橡木收納櫥櫃
          </p>
          <div className="text-gray-200">款式 : 橡木原色(Natural Oak)</div>
          {/* 評價 */}
          <div className="stars">
            <span>評價 : </span>
            <span className="ratings">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </span>
          </div>
          {/* 留言 */}
          <div className="comment-area">
            {/* <label className="form-label">留言</label>
            <textarea className="form-control" rows="2"></textarea> */}
            <p>超讚的拉 ! 大家都必須要擁有 ! </p>
          </div>
        </div>
      </td>
      <td>
        <hr className="py-0" />
      </td>
    </Fragment>
  );
}

export default OrderComment;
