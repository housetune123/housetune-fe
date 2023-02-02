import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../SalesOrder.scss';
import { useAuth } from '../../Context/Authcontext';

function AllOrder() {
  const { userinfo } = useAuth();
  axios.defaults.withCredentials = true;

  const [OrderList, setOrderList] = useState([]);
  useEffect(() => {
    async function getOrder() {
      let res = await axios.post('http://localhost:3001/api/seller/order/all', {
        id: userinfo.id,
      });
      setOrderList(res.data);
    }
    getOrder();
  }, [userinfo]);

  function Orderstate(state) {
    if (state === 1) {
      return '尚未付款';
    }
    if (state === 2) {
      return '待出貨';
    }
    if (state === 3) {
      return '已完成';
    }
    if (state === 4) {
      return '不成立';
    }
    if (!state) {
      return <p>找不到訂單</p>;
    }
  }

  const [click, setClick] = useState(false);
  const [select, setSelect] = useState();
  const handleToggle = (e, index) => {
    setClick(!click);
    setSelect(index);
  };
  // useEffect(() => {
  //   console.log('render');
  //   console.log(select);
  // }, [select]);
  return (
    //搜尋欄位
    <div className="container bg-white m-auto">
      <div className="container p-2 ">
        {/* <div className="input-group my-2">
          <button
            class="btn btn-primary-300 dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            訂單編號
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                訂單編號
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                訂單日期
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                買家帳號
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                商品
              </a>
            </li>
          </ul>
          <input
            type="text"
            class="form-control"
            aria-label="Text input with 2 dropdown buttons"
          />
          <button
            class="btn btn-primary-300 "
            type="button"
            aria-expanded="false"
          >
            搜尋
          </button>
        </div> */}
        {/* 訂單清單 */}
        <div className="bg-white border p-2 m-2 ">
          {OrderList.map((item, index) => {
            const prodId = Object.values(JSON.parse(item.product_id));
            {
              console.log(prodId);
            }
            return (
              <div key={item.ordL_id}>
                <p className="m-1">買家帳號：{item.account} </p>
                <hr />
                <div class="row order-list-upper bg-white align-items-center justify-content-around m-auto p-3 my-2">
                  <div class="col-2 ">
                    <p>
                      <strong>價格</strong>
                      NT$
                      {item.price}
                    </p>
                  </div>
                  <div class="col-2 row">
                    <p>{Orderstate(item.state)}</p>
                  </div>
                  <button
                    className="col-2 btn btn-primary-300"
                    onClick={(e) => handleToggle(e, index)}
                  >
                    查看詳情
                  </button>
                  {/* 訂單細節 */}
                  <div
                    className={
                      index === select && click
                        ? 'accordion-menu active mt-2 py-3'
                        : 'accordion-menu mt-2'
                    }
                  >
                    {prodId.map((order, index) => {
                      return (
                        <div key={index}>
                          <div
                            key={index}
                            class="row order-list-upper bg-white align-items-center justify-content-around m-auto p-3 my-2"
                          >
                            <img
                              class="d-block col-2 img-fluid"
                              src={`${process.env.REACT_APP_IMAGE_URL}/images/used/${order.img}`}
                              alt={order.name}
                            />
                            <div class="col-3 row align-items-center d-flex justify-content-between ">
                              <div class=" p-auto ">
                                <p>
                                  <strong>{order.name}</strong>
                                </p>
                                <p>{order.shape}</p>
                              </div>
                            </div>
                            <div class="col-2">
                              <p>
                                <strong>數量</strong>
                                {order.quantity}
                              </p>
                            </div>
                            <div class="col-2 ">
                              <p>
                                <strong>價格</strong>
                                NT$
                                {order.total}
                              </p>
                            </div>
                          </div>
                          <hr />
                        </div>
                      );
                    })}
                  </div>
                </div>
                <hr />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AllOrder;
