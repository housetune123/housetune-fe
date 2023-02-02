import axios from 'axios';
import React, { useMemo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../Context/Authcontext';

import Table from './ProductTable';
import './SellerCenter.scss';

function Myproduct() {
  const { userinfo } = useAuth();

  console.log(userinfo);

  axios.defaults.withCredentials = true;

  const columns = useMemo(
    () => [
      {
        Header: '商品名稱',
        accessor: 'name',
      },
      {
        Header: '商品圖',
        accessor: (data) => (
          <img
            src={`${process.env.REACT_APP_IMAGE_URL}/images/products/used/${data.img}`}
            alt=""
          />
        ),
      },
      {
        Header: '價格',
        accessor: 'price',
      },
      {
        Header: '商品數量',
        accessor: 'amount',
      },
      {
        Header: '商品狀態',
        accessor: 'valid',
        Cell: (props) => {
          return props.value === 1 ? (
            <button className="btn btn-gray-400" disabled>
              已上架
            </button>
          ) : (
            <button className="btn btn-gray-100" disabled>
              已下架
            </button>
          );
        },
      },
      {
        Header: '操作',
        accessor: (value) => (
          <div>
            <Link to={`edit/${value.useP_id}`}>
              <button className="btn btn-primary-300">編輯</button>
            </Link>
            <button
              className="btn btn-primary-300"
              onClick={() =>
                validChange(value.useP_id, value.valid, userinfo.id)
              }
            >
              {value.valid === 1 ? '下架' : '上架'}
            </button>
            <Link to={`/used/products/${value.useP_id}`}>
              <button className="btn btn-primary-300">預覽</button>
            </Link>
            <button
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              className="btn btn-danger text-white"
            >
              刪除
            </button>

            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-body p-5 fs-5">確定刪除</div>
                  <div class="modal-footer">
                    <button
                      class="btn btn-primary-300 text-white"
                      data-bs-dismiss="modal"
                    >
                      取消
                    </button>
                    <button
                      class="btn btn-danger text-white"
                      onClick={() => deleteProduct(value.useP_id, userinfo.id)}
                    >
                      刪除
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ),
      },
    ],
    [userinfo]
  );

  const [data, setData] = useState([]);
  // 抓資料
  useEffect(() => {
    (async () => {
      const result = await axios.post(
        'http://localhost:3001/api/seller/usedproduct',
        {
          id: userinfo.id,
        }
      );
      setData(result.data);
    })();
  }, [userinfo]);

  // 上下架
  async function validChange(id, valid, user_id) {
    if (valid === 1) {
      valid = 0;
    } else {
      valid = 1;
    }
    const result = await axios.put('http://localhost:3001/api/seller/valid', {
      id,
      valid,
      user_id,
    });
    setData(result.data);
  }

  // 刪除
  async function deleteProduct(id, user_id) {
    const result = await axios.post('http://localhost:3001/api/seller/delete', {
      id,
      user_id,
    });
    setData(result.data);
  }

  return (
    <div className="my-product">
      <Table columns={columns} data={data} />
    </div>
  );
}
export default Myproduct;
