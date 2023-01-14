import { Link } from 'react-router-dom';

function UsedProducts() {
  return (
    <>
      <div className="bg-orange">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">首頁</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                二手專區
              </li>
            </ol>
          </nav>
          <div className="container">
            <h3 className="mb-5">二手專區/Used Things</h3>
            <div className="d-flex justify-content-between border-0">
              <div className="col-2 d-none d-lg-block ">
                <h5>條件設定</h5>
                <hr className="simple" />
                <div
                  className="accordion accordion-flush "
                  id="accordionPanelsStayOpenExample"
                >
                  <div className="accordion-item ">
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-headingOne"
                    >
                      <button
                        className="accordion-button collapsed bg-orange"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseOne"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseOne"
                      >
                        分類
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingOne"
                    >
                      <div className="accordion-body">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            class="form-check-label"
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
                            class="form-check-label"
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
                            class="form-check-label"
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
                            class="form-check-label"
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
                            class="form-check-label"
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
                            class="form-check-label"
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
                            class="form-check-label"
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
                            class="form-check-label"
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
                            class="form-check-label"
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
                            class="form-check-label"
                            for="flexCheckDefault"
                          >
                            浴室(18)
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-headingTwo"
                    >
                      <button
                        className="accordion-button collapsed bg-orange"
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
                      <div className="accordion-body">
                        <div className="d-flex pb-2">
                          <h6 className="px-1">$</h6>
                          <input
                            style={{ width: 100 }}
                            type="number"
                            name="points"
                            min="0"
                            max="10"
                            value=""
                            placeholder="From"
                          />
                        </div>
                        <div className="d-flex">
                          <h6 className="px-1">$</h6>
                          <input
                            style={{ width: 100 }}
                            type="number"
                            name="points"
                            min="0"
                            max="10"
                            value=""
                            placeholder="To"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-headingThree"
                    >
                      <button
                        className="accordion-button collapsed bg-orange"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseThree"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseThree"
                      >
                        使用期限
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingThree"
                    >
                      <div className="accordion-body">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefault"
                          >
                            1年內(10)
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
                            class="form-check-label"
                            for="flexCheckDefault"
                          >
                            1-3年(3)
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
                            class="form-check-label"
                            for="flexCheckDefault"
                          >
                            3-5年(15)
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
                            class="form-check-label"
                            for="flexCheckDefault"
                          >
                            5-10年(8)
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
                            class="form-check-label"
                            for="flexCheckDefault"
                          >
                            10年以上(11)
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-headingFour"
                    >
                      <button
                        className="accordion-button collapsed bg-orange"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseFour"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseFour"
                      >
                        賣家評價
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingFour"
                    >
                      <div className="accordion-body">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefault"
                          >
                            所有(10)
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
                            class="form-check-label"
                            for="flexCheckDefault"
                          >
                            4分以上(3)
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
                            class="form-check-label"
                            for="flexCheckDefault"
                          >
                            3-4分(15)
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
                            class="form-check-label"
                            for="flexCheckDefault"
                          >
                            2-3分(8)
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
                            class="form-check-label"
                            for="flexCheckDefault"
                          >
                            2分以下(11)
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-9 ">
                <div className="d-flex">
                  <div>
                    <h6 className="px-3">排序依據</h6>
                  </div>
                  <div>
                    <select
                      className="form-select-xl mb-2"
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
                <div className="row overflow-hidden">
                  <div className="card m-lg-1 col-6 col-lg g-2">
                    <img
                      src="https://www.dowana.com.tw/www/upload/ec/product/26844/18048-WA2U_580_580.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title text-info">NT $ 12,000</h5>
                      <h6 className="card-title text-gray">Anderson儲物櫃</h6>
                      <p className="card-text text-danger">預購商品</p>
                      <div className="d-flex justify-content-around">
                        <Link
                          to="/"
                          className="btn btn-sm btn-white btn-rect border "
                        >
                          顯示更多
                        </Link>
                        <Link
                          to="/"
                          className="btn btn-sm btn-primary-300 btn-rect"
                        >
                          加入購物車
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="card m-lg-1 col-6 col-lg g-2">
                    <img
                      src="https://www.dowana.com.tw/www/upload/ec/product/26844/18048-WA2U_580_580.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title text-info">NT $ 12,000</h5>
                      <h6 className="card-title text-gray">Anderson儲物櫃</h6>
                      <p className="card-text text-danger">預購商品</p>
                      <div className="d-flex justify-content-around">
                        <Link
                          to="/"
                          className="btn btn-sm btn-white btn-rect border "
                        >
                          顯示更多
                        </Link>
                        <Link
                          to="/"
                          className="btn btn-sm btn-primary-300 btn-rect"
                        >
                          加入購物車
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="card m-lg-1 col-6 col-lg g-2">
                    <img
                      src="https://www.dowana.com.tw/www/upload/ec/product/26844/18048-WA2U_580_580.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title text-info">NT $ 12,000</h5>
                      <h6 className="card-title text-gray">Anderson儲物櫃</h6>
                      <p className="card-text text-danger">預購商品</p>
                      <div className="d-flex justify-content-around">
                        <Link
                          to="/"
                          className="btn btn-sm btn-white btn-rect border"
                        >
                          顯示更多
                        </Link>
                        <Link
                          to="/"
                          className="btn btn-sm btn-primary-300 btn-rect"
                        >
                          加入購物車
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="card m-lg-1 col-6 col-lg g-2">
                    <img
                      src="https://www.dowana.com.tw/www/upload/ec/product/26844/18048-WA2U_580_580.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title text-info">NT $ 12,000</h5>
                      <h6 className="card-title text-gray">Anderson儲物櫃</h6>
                      <p className="card-text text-danger">預購商品</p>
                      <div className="d-flex justify-content-around">
                        <Link
                          to="/"
                          className="btn btn-sm btn-white btn-rect border"
                        >
                          顯示更多
                        </Link>
                        <Link
                          to="/"
                          className="btn btn-sm btn-primary-300 btn-rect"
                        >
                          加入購物車
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UsedProducts;
