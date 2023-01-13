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
        <i class="fa-brands fa-facebook-messenger text-primary-300 chatroom fs-3"></i>
        <p>您的訂購清單</p>
        {cartProducts.map((product, index) => {
          return (
            <div
              key={product.id}
              class="row order-list-upper bg-white align-items-center justify-content-around m-auto p-3 my-2"
            >
              <img
                class="d-block col-sm-2 col-4 img-fluid"
                //TODO:
                src="../../imgs/dark_cabinet.png"
                alt=""
              />
              <div class=" col-sm-10 col-8  row align-items-center d-flex justify-content-between ">
                <div class="col-sm-4 col-12 p-auto ">
                  <p>
                    <strong>
                      {product.name}
                      {/* Menu Curiosity Cabinet H168cm 珍古系列 橡木 收納 櫥櫃 */}
                    </strong>
                  </p>
                  <p>
                    <strong> 款式 </strong>
                    {/* 橡木原色(Natural Oak) */}
                    {product.style}
                  </p>
                  <p>
                    <strong>價格</strong>
                    NT$
                    {/* 12,000 */}
                    {product.price}
                  </p>
                </div>
                <div class="col-sm-3 col-12">
                  <input
                    //TODO: input number onchange 只能抓到輸入的數字 按箭頭抓不到
                    type="number"
                    placeholder="數量"
                    class="amount-input p-1"
                    min="1"
                  />
                </div>
                <div class="col-sm-3 row col-12 ">
                  <p class=" col-sm-9 col-12 my-2 ">
                    NT$
                    {/* TODO:  product.price ＊數量 */}
                    {product.price}
                  </p>
                  <i class="fa-duotone fa-circle-xmark col-sm-3 col-12 fa-solid fa-circle-xmark m-auto text-primary-200"></i>
                </div>
              </div>
            </div>
          );
        })}
        <div class="row justify-content-center order-list-lower mt-4 m-auto ">
          <div class="col  d-none d-sm-inline-block ">
            <div class="d-flex justify-content-between ">
              <input type="text" placeholder="折扣碼" class="p-2 " />
              <button class="primary-300 btn bg-primary-300 text-white">
                套用
              </button>
            </div>
            <hr class="" />
            <div class="div-price mt-4 d-flex flex-column justify-content-between">
              <div class="d-flex justify-content-between mt=3 py-5">
                <strong class="">總金額</strong>
                <span class="">{/* TODO: 把所有金額加總 */}</span>
              </div>
              <div class=" d-flex justify-content-between mt-5 pt-5">
                <strong class="">運費</strong>
                <span class=" ">自動計算運費</span>
              </div>
            </div>
          </div>
          <div class="col m-auto pt-2">
            <p>如需填寫統編、公司抬頭，或其它需求，可備註於此欄中</p>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              class="p-2"
              placeholder="特殊需求備註："
            ></textarea>
          </div>
          <div class="">
            <hr />
            <div class="d-flex justify-content-between ">
              <strong class="">總金額</strong>
              <p class="">NT$ 36,000 </p>
            </div>
          </div>
          <p class="m-auto text-center btn btn-light bg-primary-300 text-white mb-2 ">
            繼續購物
          </p>
          {/* 1可以用外面包div div下d-flex justify-content-center 2或是可以直接在p下 text-aligh-center*/}
        </div>
      </div>
    </div>
  );
}
export default Cart;
