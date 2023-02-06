import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import './AddUsedProducts.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../Context/Authcontext';

function EditUsedProducts() {
  const navigate = useNavigate();
  const { userinfo, setUserInfo, isLoggedIn, setIsLoggedIn } = useAuth();
  axios.defaults.withCredentials = true;

  // Infomation
  const [roomCat, setRoomCat] = useState(null);
  const [prodCat, setProdCat] = useState(null);
  const [prodNameLength, setProdNameLength] = useState(0);
  const [descLength, setDescLength] = useState(0);

  const { useP_id } = useParams();
  console.log(useP_id);
  const [originValue, setOriginValue] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let response = await axios.get(
        `http://localhost:3001/usedproduct/edit/${useP_id}`
      );
      console.log(response.data);
      setOriginValue(response.data[0]);
    }
    fetchData();
  }, []);

  // edit
  const [inputValue, setInputValue] = useState({
    img: '',
    name: '',
    categoryRoom: '',
    categoryProduct: '',
    description: '這裡是編輯頁',
    originalPrice: '',
    price: '',
    amount: '',
    boughtIn: '',
    valid: '',
  });

  function handleChange(e) {
    setOriginValue({ ...originValue, [e.target.name]: e.target.value });
  }

  // FileUpload
  function handUpload(e) {
    setInputValue({ ...inputValue, img: e.target.files[0] });
  }
  // ResetBtn
  function resetForm() {
    setInputValue({
      ...inputValue,
      img: '',
      name: '',
      categoryRoom: '',
      categoryProduct: '',
      description: '這裡是編輯頁面',
      originalPrice: '',
      price: '',
      amount: '',
      boughtIn: '',
      valid: '',
    });
  }
  // SubmitBtn
  async function handleSubmit(e) {
    console.log(inputValue);
    e.preventDefault();
    let formData = new FormData();
    formData.append('id', userinfo.id);
    formData.append('img', inputValue.img);
    formData.append('name', inputValue.name);
    formData.append('categoryRoom', inputValue.categoryRoom);
    formData.append('categoryProduct', inputValue.categoryProduct);
    formData.append('description', inputValue.description);
    formData.append('originalPrice', inputValue.originalPrice);
    formData.append('price', inputValue.price);
    formData.append('amount', inputValue.amount);
    formData.append('boughtIn', inputValue.boughtIn);
    formData.append('valid', inputValue.valid);
    let response = await axios.post(
      'http://localhost:3001/usedproduct/add',
      formData
    );
    console.log(response.data);
    // 導到二手商品清單
    navigate('/seller/product');
  }
  return (
    <>
      <div className="add-used-products py-1">
        <div className="container">
          <div className="d-flex mt-lg-5">
            {/* side bar */}
            <div className="sidebar d-none d-lg-block left w-20">
              <div className="sidebar_list w-100 bg-white p-3">
                <div>
                  <input
                    type="checkbox"
                    id="basic"
                    name="basic"
                    checked={
                      inputValue.name &&
                      inputValue.categoryRoom &&
                      inputValue.categoryProduct &&
                      inputValue.description
                    }
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
                    checked={
                      inputValue.originalPrice &&
                      inputValue.price &&
                      inputValue.amount
                    }
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
                    checked={inputValue.boughtIn}
                  />
                  <label htmlFor="other" className="ms-2">
                    其他
                  </label>
                </div>
              </div>
            </div>
            {/* form */}
            <form
              action=""
              method=""
              className="formStyle d-lg-block"
              onSubmit={handleSubmit}
            >
              <div className="w-100">
                {/* basicinfo */}
                <div className="infoStyle p-2">
                  <h4 className="d-none d-lg-block text-gray-400 fw-bold m-4">
                    基本資訊
                  </h4>
                  {/* TODO: 上傳多張圖片 "multiple" 僅供多選,但傳到資料庫有問題 */}
                  <div className="mobileStyle row mt-lg-5 align-items-center">
                    <div className="col-lg-1"></div>
                    <div className="d-none d-lg-inline col-lg-2 mb-3 dfaic">
                      <label htmlFor="pic">商品圖片</label>
                    </div>
                    <div className="col col-lg-8">
                      <label className="custom-mobile-upload text-primary-300 d-lg-none">
                        + 新增圖片
                        <input
                          type="file"
                          multiple="multiple"
                          className="form-control"
                          onChange={handUpload}
                        />
                      </label>
                      {/* TODO: 判斷圖片張數 */}
                      <div className="padStyle">
                        <label className="d-none d-lg-block custom-file-upload text-primary-300">
                          <i className="fa-regular fa-image"></i>
                          <h6 className="padText">新增圖片</h6>
                          <div className="padText">(0/5)</div>
                          <input
                            type="file"
                            multiple="multiple"
                            className="form-control"
                            onChange={handUpload}
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="mobileStyle row mt-3 mt-lg-5">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-2 mb-3 dfaic">
                      <label htmlFor="name">商品名稱</label>
                    </div>
                    <div className="col col-lg-8 d-flex name">
                      <input
                        type="text"
                        required
                        className="form-control bg-white"
                        placeholder="請輸入商品名稱"
                        maxLength="50"
                        name="name"
                        value={originValue.name ? originValue.name : ''}
                        onChange={(e) => {
                          let content = e.target.value;
                          let length = content.split('').length;
                          setProdNameLength(length);
                          handleChange(e);
                        }}
                      />
                      <div className="textLength form-control dfaic">
                        {prodNameLength}/50
                      </div>
                    </div>
                  </div>
                  <div className="row mt-3 mt-lg-5">
                    <div className="col-lg-1"></div>
                    <div className="d-none d-lg-inline col-lg-2 mb-3 dfaic">
                      房間分類
                    </div>
                    <div className="d-none d-lg-inline  col col-lg-8">
                      <select
                        name="category_room"
                        required
                        className={
                          'form-control bg-white' +
                          (roomCat === null ? ' text-gray-100' : '')
                        }
                        value={
                          originValue.category_room
                            ? originValue.category_room
                            : ''
                        }
                        onChange={(e) => {
                          setRoomCat(e.target.value);
                          handleChange(e);
                        }}
                      >
                        <option value="" disabled>
                          請選擇房間分類
                        </option>
                        <option value="1">客廳</option>
                        <option value="2">廚房</option>
                        <option value="3">臥室</option>
                        <option value="4">浴室</option>
                      </select>
                    </div>
                  </div>
                  <div className="row mt-3 mt-lg-5">
                    <div className="d-none d-lg-inline col-lg-1"></div>
                    <div className="d-none d-lg-inline col-lg-2 mb-3 dfaic">
                      商品分類
                    </div>
                    <div className="d-none d-lg-inline col col-lg-8">
                      <select
                        name="category_product"
                        className={
                          'form-control bg-white' +
                          (prodCat === null ? ' text-gray-100' : '')
                        }
                        value={
                          originValue.category_product
                            ? originValue.category_product
                            : ''
                        }
                        onChange={(e) => {
                          setProdCat(e.target.value);
                          handleChange(e);
                        }}
                      >
                        <option value="" disabled>
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
                  <div className="mobileStyle row mt-3 mt-lg-5">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-2 mb-3 dfaic">商品描述</div>
                    <div className="col-lg-8">
                      <textarea
                        rows="6"
                        placeholder="請輸入商品描述"
                        required
                        minLength={10}
                        name="description"
                        value={
                          originValue.description ? originValue.description : ''
                        }
                        onChange={(e) => {
                          let content = e.target.value;
                          let length = content.split('').length;
                          setDescLength(length);
                          handleChange(e);
                        }}
                      ></textarea>
                      <p className="text-end">{descLength}/1000</p>
                    </div>
                  </div>
                </div>
                {/* salesinfo */}
                <div className="infoStyle d-none d-lg-block bg-white mt-5 p-3 ">
                  <h4 className="d-none d-lg-block text-gray-400 fw-bold m-4">
                    銷售資訊
                  </h4>
                  <div className="row mt-lg-5">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-2 mb-3 dfaic">原價(NT$)</div>
                    <div className="col-lg-4 name">
                      <input
                        className="form-control bg-white"
                        type="number"
                        name="original_price"
                        required
                        value={
                          originValue.original_price
                            ? originValue.original_price
                            : ''
                        }
                        min={1}
                        placeholder="請輸入原價"
                        onKeyUp={(e) => {
                          e.target.value = e.target.value.replace(/[^\d]/g, '');
                        }}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="row mt-3 mt-lg-5">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-2 mb-3 dfaic">售價(NT$)</div>
                    <div className="col-lg-4 name">
                      <input
                        className="form-control bg-white"
                        type="number"
                        name="price"
                        required
                        value={originValue.price ? originValue.price : ''}
                        min={0}
                        placeholder="請輸入售價"
                        onKeyUp={(e) => {
                          e.target.value = e.target.value.replace(/[^\d]/g, '');
                        }}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="row mt-3 mt-lg-5 mb-4">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-2 mb-3 dfaic">商品數量</div>
                    <div className="col-lg-4">
                      <input
                        className="form-control bg-white"
                        type="number"
                        name="amount"
                        required
                        value={originValue.amount ? originValue.amount : ''}
                        min={0}
                        placeholder="0"
                        onMouseUp={(e) => {}}
                        onKeyUp={(e) => {
                          e.target.value = e.target.value.replace(/[^\d]/g, '');
                        }}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                {/* other */}
                <div className="infoStyle d-none d-lg-block bg-white mt-5 p-3">
                  <h4 className="d-none d-lg-block text-gray-400 fw-bold m-4">
                    其他
                  </h4>
                  <div className="row mt-lg-5">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-2 mb-3 dfaic">購入年份(西元)</div>
                    <div className="col-lg-4 name">
                      <input
                        className="form-control bg-white"
                        required
                        type="number"
                        name="bought_in"
                        value={
                          originValue.bought_in ? originValue.bought_in : ''
                        }
                        placeholder="1911"
                        min={1911}
                        max={2023}
                        onMouseUp={(e) => {
                          handleChange(e);
                        }}
                        onKeyUp={(e) => {
                          e.target.value = e.target.value.replace(/[^\d]/g, '');
                        }}
                        onChange={(e) => {
                          if (e.target.value.length <= 4) {
                            handleChange(e);
                          }
                        }}
                      />
                    </div>
                  </div>
                  {/* TODO:撈資料 */}
                  <div className="row mt-3 mt-lg-4 mb-4">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-2 mb-3 dfaic">是否發布</div>
                    <div className="col-lg-4">
                      <input
                        type="radio"
                        id="Y"
                        name="post"
                        checked={inputValue.valid === 1}
                        value={1}
                        onChange={(e) => {
                          setInputValue({
                            ...inputValue,
                            valid: (e.target.value = 1),
                          });
                        }}
                      />
                      <label htmlFor="Y" className="ms-2">
                        是
                      </label>
                      <input
                        type="radio"
                        id="N"
                        name="post"
                        className="ms-3"
                        checked={inputValue.valid === 0}
                        value={0}
                        onChange={(e) => {
                          setInputValue({
                            ...inputValue,
                            valid: (e.target.value = 0),
                          });
                        }}
                      />
                      <label htmlFor="N" className="ms-2">
                        否
                      </label>
                    </div>
                  </div>
                </div>
                {/* mobile productinfo */}
                <div className="bg-white d-lg-none w-100">
                  <ul className="mobile_info list-unstyled">
                    <div className="row mt-1">
                      <li className="col-7">
                        <i className="fa-solid fa-list-ul"> 房間分類</i>
                      </li>
                      <select
                        name="category_room"
                        required
                        className={
                          'bg-white col-5' +
                          (roomCat === null ? ' text-gray-100' : '')
                        }
                        value={
                          originValue.category_room
                            ? originValue.category_room
                            : ''
                        }
                        onChange={(e) => {
                          setRoomCat(e.target.value);
                          handleChange(e);
                        }}
                      >
                        <option value="" disabled>
                          請選擇分類
                        </option>
                        <option value="1">客廳</option>
                        <option value="2">廚房</option>
                        <option value="3">臥室</option>
                        <option value="4">浴室</option>
                      </select>
                    </div>

                    <div className="row mt-3 mb-3">
                      <li className="col-7">
                        <i className="fa-solid fa-list-ul"> 商品分類</i>
                      </li>
                      <select
                        name="categoryProduct"
                        required
                        className={
                          'bg-white col-5' +
                          (prodCat === null ? ' text-gray-100' : '')
                        }
                        value={inputValue.categoryProduct}
                        onChange={(e) => {
                          setProdCat(e.target.value);
                          handleChange(e);
                        }}
                      >
                        <option value="" disabled>
                          請選擇分類
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
                    <div className="row mt-3 mb-3">
                      <li className="col-7">
                        <i className="fa-solid fa-magnifying-glass-dollar">
                          {' '}
                          原價
                        </i>
                      </li>
                      <input
                        className="bg-white col-5 text-end"
                        type="number"
                        required
                        value={inputValue.originalPrice}
                        min={0}
                        placeholder="設定"
                        onKeyUp={(e) => {
                          e.target.value = e.target.value.replace(/[^\d]/g, '');
                        }}
                        onChange={(e) => {
                          setInputValue({
                            ...inputValue,
                            originalPrice: e.target.value,
                          });
                        }}
                      />
                    </div>
                    <div className="row mt-3 mb-3">
                      <li className="col-7">
                        <i className="fa-solid fa-comment-dollar"> 售價</i>
                      </li>
                      <input
                        className="bg-white col-5 text-end"
                        type="number"
                        required
                        value={inputValue.price}
                        min={0}
                        placeholder="設定"
                        onKeyUp={(e) => {
                          e.target.value = e.target.value.replace(/[^\d]/g, '');
                        }}
                        onChange={(e) => {
                          setInputValue({
                            ...inputValue,
                            price: e.target.value,
                          });
                        }}
                      />
                    </div>

                    <div className="row mt-3 mb-3">
                      <li className="col-7">
                        <i className="fa-solid fa-box"> 商品數量</i>
                      </li>
                      <input
                        className="bg-white col-5 text-end"
                        type="number"
                        required
                        value={inputValue.amount}
                        min={0}
                        placeholder="0"
                        onMouseUp={(e) => {}}
                        onKeyUp={(e) => {
                          e.target.value = e.target.value.replace(/[^\d]/g, '');
                        }}
                        onChange={(e) => {
                          setInputValue({
                            ...inputValue,
                            amount: e.target.value,
                          });
                        }}
                      />
                    </div>
                    <div className="row mt-3">
                      <li className="col-7">
                        <i className="fa-solid fa-calendar-days"> 購入年份</i>
                      </li>
                      <input
                        className="g-white col-5 text-end"
                        required
                        type="number"
                        value={inputValue.boughtIn}
                        placeholder="1911"
                        min={1911}
                        max={2023}
                        onMouseUp={(e) => {}}
                        onKeyUp={(e) => {
                          e.target.value = e.target.value.replace(/[^\d]/g, '');
                        }}
                        onChange={(e) => {
                          if (e.target.value.length <= 4) {
                            setInputValue({
                              ...inputValue,
                              boughtIn: e.target.value,
                            });
                          }
                        }}
                      />
                    </div>

                    {/* TODO: toggle 切換 value 1 or 0 */}
                    {/* <li className="row">
                      <div className="col">
                        <i class="fa-solid fa-upload">是否發布</i>
                      </div>
                      <div className="col">
                        <input
                          type="radio"
                          id="Y"
                          name="post"
                          checked={inputValue.valid === 1}
                          value={1}
                          onChange={(e) => {
                            setInputValue({
                              ...inputValue,
                              valid: (e.target.value = 1),
                            });
                          }}
                        />
                        <label htmlFor="Y" className="ms-2">
                          是
                        </label>
                      </div>

                      <div className="col">
                        <input
                          type="radio"
                          id="N"
                          name="post"
                          className="ms-3"
                          checked={inputValue.valid === 0}
                          value={0}
                          onChange={(e) => {
                            setInputValue({
                              ...inputValue,
                              valid: (e.target.value = 0),
                            });
                          }}
                        />
                        <label htmlFor="N" className="ms-2">
                          否
                        </label>
                      </div>
                    </li> */}
                  </ul>
                </div>
                <div className="mt-lg-5 p-3 d-flex justify-content-center mb-lg-5">
                  <div className="d-none d-lg-block w-80"></div>
                  <div className="row">
                    <div className="col-6">
                      <button
                        type="reset"
                        className="bg-white"
                        onClick={resetForm}
                      >
                        取消
                      </button>
                    </div>
                    <div className="col-6">
                      <button
                        type="submit"
                        className="text-white bg-primary-200"
                        // onClick={handleSubmit}
                      >
                        修改
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditUsedProducts;
