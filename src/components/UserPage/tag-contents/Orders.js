import { useState, useEffect, Fragment } from 'react';
import OrderDetail from './OrderDetail';
import OrderComment from './OrderComment';

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
    {
      Id: '3',
      orderNumber: '2022112000000e',
      Date: '2022/11/21',
      Total: '8000',
      Status: '未出貨',
    },
  ];

  // 查閱和評價的手風琴
  const [open, setOpen] = useState(-1);
  const [openComment, setOpenComment] = useState(-1);

  useEffect(() => {
    console.log('render');
    console.log(open);
  }, [open]);

  return (
    <>
      <div className="user-coupons pt-2">
        <div className="coupon-informations pb-1">
          {/* 內容 */}
          <div className="receive-coupons">
            {/* 優惠券列表 */}
            <div className="px-3 pt-4 d-flex">
              <table className="order-table table table-rwd text-gray-300 text-center w-100">
                {/* 標題 */}
                <thead>
                  <tr className="row text-center border-bottom border-primary-100 pb-3 tr-only-hide">
                    <th className="col-3">訂單號碼</th>
                    <th className="col-2">訂單日期</th>
                    <th className="col-2">合計</th>
                    <th className="col-2">訂單狀態</th>
                    <th className="col-3"></th>
                  </tr>
                </thead>
                {/* 優惠券詳細內容 */}
                <tbody>
                  {products.map((val, index) => {
                    return (
                      <Fragment key={val.Id}>
                        <tr
                          className={`row text-center align-items-center  ${
                            index === 0 ? '' : 'border-top'
                          }`}
                          id={val.Id}
                        >
                          <td className="col-3" data-th="訂單號碼">
                            {val.orderNumber}
                          </td>
                          <td className="col-2" data-th="訂單日期">
                            {val.Date}
                          </td>
                          <td className="col-2" data-th="合計">
                            NT${val.Total}
                          </td>
                          <td className="col-2" data-th="訂單狀態">
                            {val.Status}
                          </td>
                          <td
                            className="col-3 row justify-content-around"
                            data-th=""
                          >
                            <button
                              className={`btn ${
                                val.Id === open
                                  ? 'btn-primary-300'
                                  : 'btn-white bg-orange'
                              }  col-5`}
                              onClick={(e) => {
                                // 錯誤邏輯
                                // if (open === -1) {
                                //   setOpen(val.Id);
                                // }
                                // if (open === val.Id) {
                                //   setOpen(-1);
                                // }
                                e.preventDefault();
                                // 若點擊的 id 值等於狀態 則讓狀態關閉
                                // 否則關閉
                                if (val.Id === open) {
                                  setOpen(-1);
                                } else {
                                  setOpen(val.Id);
                                }
                              }}
                            >
                              查閱 {val.Id === open ? '-' : '+'}
                            </button>
                            <button
                              className={`btn ${
                                val.Id === openComment
                                  ? 'btn-primary-300'
                                  : 'btn-white bg-orange'
                              }  col-5`}
                              onClick={() => {
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
                        <tr
                          className={`open-detail row text-center align-items-center ${
                            val.Id === open ? 'show' : 'hide'
                          }`}
                          id={val.Id}
                        >
                          <OrderDetail index={val.Id} open={open} />
                        </tr>
                        <tr
                          className={`open-detail row text-center align-items-center ${
                            val.Id === openComment ? 'show' : 'hide'
                          }`}
                          id={val.Id}
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
    </>
  );
}

export default Orders;
