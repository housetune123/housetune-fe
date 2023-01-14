import { Link } from 'react-router-dom';
import BreadCrumb from '../Layout/BreadCrumb';
import './Products.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      let res = await axios.get('http://localhost:3001/products');
      // console.log(res);
      setProducts(res.data);
    }
    getProducts();
  }, []);
  return (
    <>
      <main className="bg-orange product">
        <div className="container">
          <BreadCrumb />
          <h3 className="mb-5 text-info-dark">新品推薦/New Arrival</h3>
          <div className="d-flex justify-content-between border-0">
            {/* 條件設定 */}
            <div className="col-2 d-none d-lg-block ">
              <h5 className="text-info">條件設定</h5>
              <hr className="simple" />
              <div className="accordion accordion-flush">
                {/* 供貨情況 */}
                <div className="accordion-item">
                  <h2
                    className="accordion-header"
                    id="panelsStayOpen-headingOne"
                  >
                    <button
                      className="accordion-button bg-orange ps-0"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseOne"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseOne"
                    >
                      供貨情況
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="panelsStayOpen-headingOne"
                  >
                    <div className="accordion-body bg-orange ps-0">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label fs-sml text-info"
                          for="flexCheckDefault"
                        >
                          有庫存(180)
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckChecked"
                        />
                        <label
                          className="form-check-label fs-sml text-info"
                          for="flexCheckChecked"
                        >
                          無庫存(3)
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 價格 */}
                <div className="accordion-item">
                  <h2
                    className="accordion-header"
                    id="panelsStayOpen-headingTwo"
                  >
                    <button
                      className="accordion-button collapsed bg-orange ps-0"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseTwo"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseTwo"
                    >
                      價格
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingTwo"
                  >
                    <div className="accordion-body bg-orange ps-0">
                      <div className="d-flex pb-2 align-items-center">
                        <h6 className="px-1 text-primary-200 mb-0 fs-sml">$</h6>
                        <input
                          type="number"
                          name="points"
                          min="0"
                          max="10"
                          value=""
                          placeholder="From"
                          className="w-100 fs-sml"
                        />
                      </div>
                      <div className="d-flex align-items-center">
                        <h6 className="px-1 text-primary-200 mb-0 fs-sml">$</h6>
                        <input
                          type="number"
                          name="points"
                          min="0"
                          max="10"
                          value=""
                          placeholder="To"
                          className="w-100 fs-sml"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* 分類 */}
                <div className="accordion-item">
                  <h2
                    className="accordion-header"
                    id="panelsStayOpen-headingThree"
                  >
                    <button
                      className="accordion-button collapsed bg-orange ps-0"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseThree"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseThree"
                    >
                      分類
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingThree"
                  >
                    <div className="accordion-body bg-orange ps-0">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          class="form-check-label text-info fs-sml"
                          for="flexCheckDefault"
                        >
                          沙發(10)
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          class="form-check-label text-info fs-sml"
                          for="flexCheckDefault"
                        >
                          椅子(3)
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          class="form-check-label text-info fs-sml"
                          for="flexCheckDefault"
                        >
                          桌子(15)
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          class="form-check-label text-info fs-sml"
                          for="flexCheckDefault"
                        >
                          櫥櫃(8)
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          class="form-check-label text-info fs-sml"
                          for="flexCheckDefault"
                        >
                          床 (11)
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          class="form-check-label text-info fs-sml"
                          for="flexCheckDefault"
                        >
                          燈(2)
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          class="form-check-label text-info fs-sml"
                          for="flexCheckDefault"
                        >
                          紡織(6)
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          class="form-check-label text-info fs-sml"
                          for="flexCheckDefault"
                        >
                          裝飾(12)
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          class="form-check-label text-info fs-sml"
                          for="flexCheckDefault"
                        >
                          廚具(20)
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          class="form-check-label text-info fs-sml"
                          for="flexCheckDefault"
                        >
                          浴室(18)
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 排序、商品列表 */}
            <div className="col-12 col-lg-9 ">
              <div className="d-flex">
                {/* 排序 */}
                <div>
                  <h6 className="px-3 text-info-dark ps-0">排序依據</h6>
                </div>
                <div>
                  <select
                    className="form-select-xl mb-2 text-gray-300 fs-sml"
                    aria-label="Default select example"
                  >
                    <option selected>精選</option>
                    <option value="1">暢銷度</option>
                    <option value="2">依字母順序Ａ到Ｚ</option>
                    <option value="3">依字母順序Ｚ到Ａ</option>
                    <option value="4">價格（從低到高）</option>
                    <option value="5">價格（從高到低）</option>
                    <option value="6">日期（從舊到新）</option>
                    <option value="7">日期（從新到舊）</option>
                  </select>
                </div>
              </div>
              {/* 商品列表 */}
              <div className="row">
                {products.map((v, i) => {
                  const img = v.img.split(',');
                  return (
                    <div
                      className="col-3 d-flex justify-content-center p-md-3 p-2"
                      key={i}
                    >
                      <div className="card border border-0 card-shadow">
                        <img
                          src={`${process.env.REACT_APP_IMAGE_URL}/images/products/${v.category_name}/${img[0]}`}
                          className="card-img-top bg-gray-200"
                          alt="..."
                        />
                        <div className="card-body text-left overflow-hidden">
                          <h5 className="card-title text-info">
                            NT $ {v.price}
                          </h5>
                          <h6 className="card-title text-gray-300">{v.name}</h6>

                          {v.amount === 0 ? (
                            <p className="card-text text-danger">已售完</p>
                          ) : (
                            <p className="card-text text-primary-200">
                              僅剩 {v.amount} 件 !
                            </p>
                          )}
                          <div className="card-btn">
                            <button className="btn btn-primary-300 w-100 fs-sml">
                              加入購物車
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Products;
