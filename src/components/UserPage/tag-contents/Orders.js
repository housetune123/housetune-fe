import { useState, useEffect, Fragment } from 'react';
import { Link, animateScroll as scroll, Element } from 'react-scroll';
import OrderDetail from './OrderDetail';
import OrderComment from './OrderComment';

// Or Access Link,Element,etc as follows

function Orders() {
  // 將訂單 map 出來
  const products = [
    {
      Id: '1',
      orderNumber: '20221120000001',
      Date: '2022/11/20',
      Total: '5000',
      Status: '已出貨',
    },
    {
      Id: '2',
      orderNumber: '20221120000002',
      Date: '2022/11/20',
      Total: '6000',
      Status: '未出貨',
    },
  ];

  // 查閱和評價的手風琴
  const [open, setOpen] = useState(-1);
  const [openComment, setOpenComment] = useState(-1);

  useEffect(() => {
    console.log('渲染');
  }, [open]);

  return (
    <>
      {/* <Link to="section1">跳轉到指定區塊</Link> */}
      {/* <Link
        activeClass="active"
        to="textBlock2"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        跳轉到指定區塊
      </Link> */}
      <div className="user-coupons pt-2">
        <div className="coupon-informations pb-1">
          {/* 內容 */}
          <div className="receive-coupons">
            {/* 優惠券列表 */}
            <div className="px-3 pt-4 d-flex">
              <table className="order-table text-gray-300 border-primary-100 w-100">
                {/* 標題 */}
                <thead>
                  <tr className="row text-center ">
                    <th className="col-3">訂單號碼</th>
                    <th className="col-2">訂單日期</th>
                    <th className="col-2">合計</th>
                    <th className="col-2">訂單狀態</th>
                    <th className="col-3"></th>
                  </tr>
                  <tr>
                    <th>
                      <hr />
                    </th>
                  </tr>
                </thead>
                {/* 優惠券詳細內容 */}
                <tbody>
                  {products.map((val, index) => {
                    return (
                      <Fragment key={val.Id}>
                        <tr
                          className="row text-center align-items-center"
                          id={val.Id}
                        >
                          <td className="col-3">{val.orderNumber}</td>
                          <td className="col-2">{val.Date}</td>
                          <td className="col-2">NT${val.Total}</td>
                          <td className="col-2">{val.Status}</td>
                          <td className="col-3 row justify-content-around">
                            <button
                              className={`btn ${
                                val.Id === open
                                  ? 'btn-primary-300'
                                  : 'btn-white bg-orange'
                              }  col-4`}
                              onClick={() => {
                                // if (open === -1) {
                                //   setOpen(val.Id);
                                // }
                                // if (open === val.Id) {
                                //   setOpen(-1);
                                // }

                                if (val.Id === open) {
                                  setOpen(-1);
                                  return (
                                    <Link
                                      to={val.Id}
                                      smooth={true}
                                      duration={0}
                                    ></Link>
                                  );
                                } else {
                                  setOpen(val.Id);
                                }
                              }}
                            >
                              {/* <Link
                                className={`btn ${
                                  val.Id === open
                                    ? 'btn-primary-300'
                                    : 'btn-white bg-orange'
                                }  col-4`}
                                to={val.Id}
                                smooth={true}
                                duration={0}
                              > */}
                              查閱 {val.Id === open ? '-' : '+'}
                              {/* </Link> */}
                            </button>
                            <button
                              className={`btn ${
                                val.Id === openComment
                                  ? 'btn-primary-300'
                                  : 'btn-white bg-orange'
                              }  col-4`}
                              onClick={() => {
                                // if (openComment === -1) {
                                //   setOpenComment(val.Id);
                                // } else {
                                //   setOpenComment(-1);
                                // }
                                if (val.Id === openComment) {
                                  setOpenComment(-1);
                                } else {
                                  setOpenComment(val.Id);
                                }
                              }}
                            >
                              評價 {val.Id === openComment ? '-' : '+'}
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <hr />
                          </td>
                        </tr>
                        <tr
                          // ref={detailRef}
                          className={`open-detail row text-center align-items-center  ${
                            val.Id === open ? 'show' : 'hide'
                          }`}
                          id={val.Id}
                        >
                          <OrderDetail index={val.Id} open={open} />
                        </tr>
                        <tr
                          // ref={commentRef}
                          className={`open-detail row text-center align-items-center`}
                        >
                          <OrderComment
                            index={val.Id}
                            openComment={openComment}
                          />
                        </tr>
                      </Fragment>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* 測試 */}
      <div className="vh100" id="textBlock1">
        測試區域
      </div>
      <div className="vh100" id="textBlock2">
        測試區域
      </div>
    </>
  );
}

export default Orders;
