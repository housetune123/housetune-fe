// import { Link } from 'react-router-dom';
import './Cart.scss';
import { useState, useEffect } from 'react';
// import axios from 'axios';

function Cart() {
  const [cartProducts, setCartProducts] = useState([]);
  //////////////
  // useEffect(() => {
  //   async function getCartProducts() {
  //     let response = await axios.get('http://localhost:3001/api/cart');
  //     setCartProducts(response.data);
  //   }
  //   getCartProducts();
  // }, []);

  return (
    <div className="bg-orange py-5 cart">
      <div class="container bg-primary card py-5">
        <h4 className="px-2 fw-bold text-info">您的購物車清單</h4>
        {/* {cartProducts.map((product, index) => {
          return ( */}
        <div
          // key={product.id}
          class="row order-list-upper bg-white align-items-center justify-content-around m-auto p-3 my-2"
        >
          {/* 商品圖 */}
          <img
            class="d-block col-sm-2 col-4 img-fluid"
            //TODO:
            src={`${process.env.REACT_APP_IMAGE_URL}/images/products/ordimg1.png`}
            alt=""
          />
          <div class=" col-sm-10 col-8  row align-items-center d-flex justify-content-between ">
            <div class="col-sm-4 col-12 p-auto ">
              {/* 品名 */}
              <p>
                <strong>
                  {/* {product.name} */}
                  Menu Curiosity Cabinet H168cm 珍古系列 橡木 收納 櫥櫃
                </strong>
              </p>
              {/* 款式 */}
              <p>
                <strong> 款式 </strong>
                橡木原色(Natural Oak)
                {/* {product.style} */}
              </p>
              {/* 價格 */}
              <p>
                <strong>價格</strong>
                NT$ 12,000
                {/* {product.price} */}
              </p>
            </div>
            {/* 數量 */}
            <div class="form-floating col-sm-3 col-12 py-2">
              <input
                //TODO: input number onchange 只能抓到輸入的數字 按箭頭抓不到
                type="number"
                placeholder="數量"
                class="form-control amount-input py-3"
                min="1"
              />
              <label className="floatingInput">數量</label>
            </div>
            <div class="col-sm-3 row col-12 ">
              <p class=" col-sm-9 col-12 my-2 ">
                NT$ 12,000
                {/* {product.price} */}
              </p>
              <i class="fa-duotone fa-circle-xmark col-sm-3 col-12 fa-solid fa-circle-xmark m-auto text-primary-200"></i>
            </div>
          </div>
        </div>
        {/* ); */}
        {/* })} */}
        <div class="row justify-content-center order-list-lower mt-4 px-2">
          <div class="col-12 order-2 order-sm-1 col-sm-6 d-inline-block ">
            {/* coupon */}
            <div class="d-flex justify-content-between w-100">
              <input
                type="text"
                placeholder="折扣碼"
                class="w-75 form-control"
              />
              <button class="w-25 primary-300 btn bg-primary-300 text-white">
                套用
              </button>
            </div>
            <hr />
            {/* 金額明細 */}
            <div class="div-price mt-4 d-flex flex-column justify-content-end">
              <div className="d-flex justify-content-between">
                <strong class="">總金額</strong>
                <span>12,000</span>
              </div>
              <div className="d-flex justify-content-between">
                <strong>折扣碼折抵</strong>
                <span>-1,000</span>
              </div>
              <div class=" d-flex justify-content-between">
                <strong class="">運費</strong>
                <span class=" ">300</span>
              </div>
            </div>
          </div>
          <div class="col-12 order-1 order-sm-2 col-sm-6 ">
            <p className="text-gray-300 py-2">
              如需填寫統編、公司抬頭，或其它需求，可備註於此欄中
            </p>
            <textarea
              name=""
              cols="30"
              rows="12"
              class="p-2 form-control"
              placeholder="特殊需求備註："
            ></textarea>
          </div>
          <div class="order-3">
            <hr />
            <div class="d-flex justify-content-between ">
              <strong class="">總金額</strong>
              <p class="">NT$ 36,000 </p>
            </div>
            <button class="w-100 m-auto text-center btn btn-light bg-primary-300 text-white mb-2 ">
              結帳
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cart;
