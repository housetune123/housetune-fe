import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './UsedProductsDetail.scss';
import UsedProductsDetail from './UsedProductsDetail';
import { useState } from 'react';
import { useCart } from '../../utils/useCart';
import { Modal, Button } from 'react-bootstrap';

function UsedProductsList({
  usedProducts,
  liked,
  setLiked,
  getCatUsedProducts,
  getUsedProductsPriceRange,
  getUsedProductsYearRange,
  getSellerRatings,
  // addLike,
}) {
  // 加入購物車彈跳視窗及訊息
  const [show, setShow] = useState(false);
  const [resultMsg, setResultMsg] = useState({});
  const { addItem, items, clearCart } = useCart();
  // console.log('prodDetail', prodDetail);
  const MessageMap = {
    1: '新增成功！',
    2: '該商品已存在購物車！',
    3: '購物車內含有官方商品，是否清空購物車？',
  };

  function addToCart(v) {
    const item = {
      ...v,
      quantity: 1,
    };
    // 購物車為空直接 + 進去
    if (items.length === 0) {
      addItem({
        ...item,
        id: item.useP_id,
        seller_id: item.seller_id,
      });
      setResultMsg(MessageMap[1]);
    } else {
      // 購物車內可以有多位賣家的 id
      // 先確認是否存在 seller_id ， 再確認有沒有這筆商品的 id
      let itemObj = items[0];
      const keys = Object.keys(itemObj);
      if (keys.includes('seller_id') === true) {
        let found = items.find((obj) => {
          return obj.id === item.useP_id;
        });
        if (found === undefined) {
          addItem({
            ...item,
            id: item.useP_id,
            seller_id: item.seller_id,
          });
          setResultMsg(MessageMap[1]);
        } else {
          setResultMsg(MessageMap[2]);
        }
      } else {
        setResultMsg(MessageMap[3]);
      }
    }
    setShow(true);
  }

  return (
    <div className="usedProduts-body row overflow-hidden p-1 m-1 text-info">
      {usedProducts.map((v, i) => {
        return (
          <div className="col-3 p-0 " key={v.useP_id}>
            <div className="card btn-shadow me-3 mb-3">
              <img
                src={`${process.env.REACT_APP_IMAGE_URL}/images/used/${v.img}`}
                className="card-img-top"
                alt={v.product_name}
              />
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h5 className="card-title text-info">NT${v.price}</h5>
                  <i
                    className={
                      liked && liked.includes(v.useP_id)
                        ? 'fa-solid fa-heart text-danger'
                        : 'fa-regular fa-heart text-info pt-1 ps-2'
                    }
                    onClick={() => {
                      if (liked.includes(v.useP_id)) {
                        setLiked(
                          v.liked.filter((v2, i2) => {
                            return v.liked !== v.useP_id;
                          })
                        );
                      } else {
                        setLiked([...v.like, v.useP_id]);
                      }
                    }}
                  ></i>
                </div>
                <h6 className="card-title text-gray-300">{v.product_name}</h6>
                <p className="card-text text-gray-300">賣家：{v.name}</p>
                <div className="d-flex justify-content-around buttons">
                  <Link
                    to={`./${v.useP_id}`} //網址要和Route裡想去的頁面一樣
                    className="btn btn-sm btn-white btn-rect border "
                  >
                    顯示更多
                  </Link>
                  <button
                    className="btn btn-sm btn-primary-300 btn-rect"
                    onClick={() => {
                      addToCart(v);
                    }}
                  >
                    加入購物車
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {/* 彈出視窗 */}
      <Modal
        show={show}
        onHide={() => {
          setShow(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-info fw-bold">提醒</Modal.Title>
        </Modal.Header>
        <Modal.Body
          className="fw-bolder d-flex align-items-center"
          style={{ minHeight: '5rem' }}
        >
          {resultMsg}
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="btn btn-white"
            variant="secondary"
            onClick={() => {
              setShow(false);
            }}
          >
            關閉
          </Button>
          {resultMsg === MessageMap[3] ? (
            <Button
              className="btn btn-primary-300"
              variant="primary"
              onClick={() => {
                setShow(false);
                clearCart();
              }}
            >
              確認
            </Button>
          ) : (
            <Button
              className="clearBtn btn btn-primary-300"
              variant="primary"
              onClick={() => {
                setShow(false);
              }}
            >
              確認
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default UsedProductsList;
