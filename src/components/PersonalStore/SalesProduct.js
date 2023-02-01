import axios from 'axios';
import React, { useMemo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../Context/Authcontext';

import Table from './ProductTable';
import './SellerCenter.scss';

function Myproduct() {
  const { userinfo } = useAuth();
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
            <button className="btn">已上架</button>
          ) : (
            <button className="btn" disabled>
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
              type="button"
              className="btn btn-primary-300"
              onClick={() => validChange(value.useP_id, value.valid)}
            >
              下架
            </button>
            <Link to={''}>
              <button className="btn btn-primary-300">預覽</button>
            </Link>
            <button
              className="btn btn-primary-300"
              onClick={() => deleteProduct(value)}
            >
              刪除
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const [data, setData] = useState([]);
  const [productId, setproductId] = useState();
  const [productValid, setProductValid] = useState();

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

  //上下架
  function validChange(id, valid) {
    if (valid === 1) {
      valid = 0;
    } else {
      valid = 1;
    }
    setproductId(id);
    setProductValid(valid);
    console.log(id, valid);
    (async () => {
      const result = await axios.put(
        'http://localhost:3001/api/seller/usedproduct',
        {
          id: productId,
          valid: productValid,
        }
      );
      setData(result.data);
    })();
  }

  // 刪除
  function deleteProduct(row) {}

  return (
    <div className="my-product">
      <Table columns={columns} data={data} />
    </div>
  );
}
export default Myproduct;
