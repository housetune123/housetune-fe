import { Link, Outlet, useLocation } from 'react-router-dom';
import './SalesOrder.scss';

function SalesOrder() {
  const location = useLocation();
  const tabButtons = [
    { title: '全部', path: '/seller/order' },
    { title: '尚未付款', path: '/seller/order/unpaid' },
    { title: '待出貨', path: '/seller/order/toship' },
    { title: '已完成', path: '/seller/order/completed' },
    { title: '不成立', path: '/seller/order/cancelled' },
  ];

  return (
    <>
      <div className="container bg-primary m-auto sales-order-tabs">
        <ul className={'d-flex justify-content-center nav row mt-2'}>
          {tabButtons.map((v, i) => {
            return (
              <li
                key={i}
                className={
                  v.path !== location.pathname
                    ? 'col nav-item border-top border-bottom border-start border-primary-300 p-0 bg-gray'
                    : 'col nav-item border-top border-start border-primary-300 p-0 bg-white'
                }
              >
                <Link
                  to={v.path}
                  className="nav-link text-info text-center mx-0"
                >
                  {v.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <main className="sales-order-content">
        <Outlet />
      </main>
    </>
  );
}

export default SalesOrder;
