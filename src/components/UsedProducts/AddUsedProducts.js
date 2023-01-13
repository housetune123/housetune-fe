import React from 'react';
import { useEffect, useState } from 'react';
import './AddUsedProducts.scss';

function AddUsedProducts() {
  const [basicValue, setBasicValue] = useState([]);

  const [salesValue, setSalesValue] = useState([]);
  const [otherValue, setOtherValue] = useState([]);
  const [roomCat, setRoomCat] = useState(null);
  const [prodCat, setProdCat] = useState(null);
  const [prodNameLength, setProdNameLength] = useState(0);
  const [descLength, setDescLength] = useState(0);
  const [amount, setAmount] = useState(0);
  const [yaer, setYear] = useState(0);
  return (
    <>
      <div className="add-used-products">
        <header className="text-center bg-white">我是header</header>
        <div className="container">
          <img
            src={`${process.env.REACT_APP_IMAGE_URL}/images/messenger.svg`}
            alt="聊天室符號"
            className="messenger position-fixed"
          />
          <div className="d-flex mt-5">
            <div className="left w-20">
              <div className="w-100 d-flex shadow-sm bg-white flex-column p-3">
                <div>
                  <input
                    type="checkbox"
                    id="basic"
                    name="basic"
                    checked={basicValue.length === 5 ? 'checked' : ''}
                  />
                  <label htmlFor="basic" className="ms-2">
                    基本資訊
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="sales"
                    name="sales"
                    checked={basicValue.length === 3 ? 'checked' : ''}
                  />
                  <label htmlFor="basic" className="ms-2">
                    銷售資訊
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="other"
                    name="other"
                    checked={basicValue.length === 2 ? 'checked' : ''}
                  />
                  <label htmlFor="other" className="ms-2">
                    其他
                  </label>
                </div>
              </div>
            </div>
            <form className='w-70'>
              <div className="right w-100 ms-5">
                <div className="bg-white p-3 shadow">
                  <h5 className="text-gray-400">基本資訊</h5>
                  <div className="row mt-3">
                    <div className="col-1"></div>
                    <div className="col-2 dfaic">
                      <label htmlFor="pic">商品圖片</label>
                    </div>
                    <div className="col-8">
                      <input type="file" className="form-control" />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-1"></div>
                    <div className="col-2 dfaic">
                      <label htmlFor="name">商品名稱</label>
                    </div>
                    <div className="col-8 d-flex name">
                      <input
                        type="text"
                        className="form-control bg-white"
                        placeholder="請輸入商品名稱"
                        maxLength="50"
                        onChange={(e) => {
                          let content = e.target.value;
                          let length = content.split('').length;
                          setProdNameLength(length);
                        }}
                      />
                      <p className="form-control w-10 h-100 dfaic">
                        {prodNameLength}/50
                      </p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-1"></div>
                    <div className="col-2 dfaic">房間分類</div>
                    <div className="col-8">
                      <select
                        className={
                          'form-control bg-white' +
                          (roomCat === null ? ' text-gray-100' : '')
                        }
                        onChange={(e) => {
                          setRoomCat(e.target.value);
                        }}
                      >
                        <option disabled selected>
                          請選擇房間分類
                        </option>
                        <option value="1">客廳</option>
                        <option value="2">廚房</option>
                        <option value="3">臥室</option>
                        <option value="4">浴室</option>
                      </select>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-1"></div>
                    <div className="col-2 dfaic">商品分類</div>
                    <div className="col-8">
                      <select
                        className={
                          'form-control bg-white' +
                          (prodCat === null ? ' text-gray-100' : '')
                        }
                        onChange={(e) => {
                          setProdCat(e.target.value);
                        }}
                      >
                        <option selected disabled>
                          請選擇商品分類
                        </option>
                        <option value="1">沙發</option>
                        <option value="2">椅子</option>
                        <option value="3">桌子</option>
                        <option value="4">儲藏</option>
                        <option value="5">床</option>
                        <option value="6">照明</option>
                        <option value="7">紡織品</option>
                        <option value="8">裝飾</option>
                        <option value="9">廚具</option>
                        <option value="10">浴室用具</option>
                      </select>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-1"></div>
                    <div className="col-2 dfaic">商品描述</div>
                    <div className="col-8">
                      <textarea
                        rows="10"
                        placeholder="請輸入商品描述"
                        maxLength="1000"
                        onChange={(e) => {
                          let content = e.target.value;
                          let length = content.split('').length;
                          setDescLength(length);
                        }}
                      ></textarea>
                      <p className="text-end">{descLength}/1000</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white mt-3 p-3 shadow">
                  <h5 className="text-gray-400">銷售資訊</h5>
                  <div className="row mt-3">
                    <div className="col-1"></div>
                    <div className="col-2 text-end dfaic">原價(NT$)</div>
                    <div className="col-4 name">
                      <input
                        className="form-control bg-white"
                        type="number"
                        placeholder="請輸入原價"
                      />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-1"></div>
                    <div className="col-2 text-end dfaic">售價(NT$)</div>
                    <div className="col-4 name">
                      <input
                        className="form-control bg-white"
                        type="number"
                        placeholder="請輸入售價"
                      />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-1"></div>
                    <div className="col-2 text-end dfaic">商品數量</div>
                    <div className="col-4">
                      <input
                        className="form-control bg-white"
                        type="number"
                        placeholder="0"
                        onMouseUp={(e) => {
                          setAmount(e.target.value);
                        }}
                        onChange={(e) => {
                          setAmount(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-white mt-3 p-3 shadow">
                  <h5 className="text-gray-400">其他</h5>
                  <div className="row mt-3">
                    <div className="col-1"></div>
                    <div className="col-2 text-end dfaic">購入年份(西元)</div>
                    <div className="col-4 name">
                      <input
                        className="form-control bg-white"
                        type="number"
                        placeholder="請輸入年份"
                        onMouseUp={(e) => {
                          setYear(e.target.value);
                        }}
                        onChange={(e) => {
                          setYear(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-1"></div>
                    <div className="col-2 dfaic">是否發布</div>
                    <div className="col-4">
                      <input type="radio" id="Y" name="post" checked />
                      <label htmlFor="Y" className="ms-2">
                        是
                      </label>
                      <input type="radio" id="N" name="post" className="ms-3" />
                      <label htmlFor="N" className="ms-2">
                        否
                      </label>
                    </div>
                  </div>
                </div>
                <div className="mt-5 p-3 d-flex">
                  <div className="w-80"></div>
                  <button type="reset" className="w-10 bg-white cancel-button">
                    取消
                  </button>
                  <button
                    type="submit"
                    className="w-10 ms-4 text-white bg-primary-200"
                  >
                    送出
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <footer className="text-center mt-5 bg-white">我是footer</footer>
      </div>
    </>
  );
}

export default AddUsedProducts;
