import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UsedProductsList from './UsedProductsList';
// import ReactPaginate from 'react-paginate';
import _ from 'lodash';
import './UsedProductsDetail.scss';

function UsedProducts() {
  const [usedProducts, setUsedProducts] = useState([]);

  useEffect(() => {
    async function getUsedProducts() {
      try {
        let res = await axios.get(`http://localhost:3001/usedproducts/`);
        setUsedProducts(res.data);
        console.log(res);
      } catch (e) {
        console.error(e);
      }
    }
    getUsedProducts();
  }, []);
  // 呈現products
  const [usedProductsDisplay, setUsedProductsDisplay] = useState([]);

  // 分類
  const [cats, setCats] = useState([]);
  //'沙發', '椅子','桌子','櫥櫃',
  const catOptions = [1, 2, 3, 4];
  const catText = ['沙發', '椅子', '桌子', '櫥櫃'];

  // 價格區間
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  //使用期間
  const [years, setYears] = useState([]);
  //'1年內', '1-3op0年','3-5年','5-10年','10年以上'
  const yearOptions = [1, 2, 3, 4, 5];
  const yearText = ['1年內', '1 - 3年', '3 - 5年', '5 - 10年', '10年以上'];

  const [ratings, setRatings] = useState([]);
  //'五星', '四星','三星','兩星','一星'
  const ratinsOptions = [5, 4, 3, 2, 1];

  // //TODO:壞掉的分頁
  // const [itemOffset, setItemOffset] = useState(0);//itemOffeset is the first index of the first item in the current page
  // const itemsPerPage = 4;
  // const endOffset = itemOffset + itemsPerPage;
  // const currentItems = usedProducts.slice(itemOffset, endOffset);
  // const pageCount = Math.ceil(usedProducts.length / itemsPerPage);

  // 分頁用
  // pageNow 目前頁號
  // perPage 每頁多少數量
  // pageTotal 目前有多少頁
  const [pageNow, setPageNow] = useState(1); // 預設為第1頁
  const [perPage, setPerPage] = useState(4); // 預設為每頁有2筆
  const [pageTotal, setPageTotal] = useState(0); // 預設總頁數為0

  // 分類篩選條件categoryArray : array
  const getCatUsedProducts = (usedProductsArray, categoryArray) => {
    return usedProductsArray.filter((v, i) => {
      return categoryArray.includes(v.category_product); //每項產品只有一個分類
    });
  };

  //價格篩選條件
  const getUsedProductsPriceRange = (usedProductsArray, from, to) => {
    // convert to number
    const nFrom = Number(from);
    const nTo = Number(to);
    return usedProductsArray.filter((v, i) => {
      return v.price >= nFrom && v.price <= nTo;
    });
  };
  //年份篩選條件
  const getUsedProductsYearRange = (usedProductsArray, yearRange) => {
    const products = usedProductsArray.map((v, i) => {
      const now = new Date().getFullYear();
      const howOld = now - v.bought_in;
      //先分類
      if (howOld <= 1) {
        return { ...v, yearRangeType: 1 };
      }
      if (howOld > 1 && howOld <= 3) {
        return { ...v, yearRangeType: 2 };
      }
      if (howOld > 3 && howOld <= 5) {
        return { ...v, yearRangeType: 3 };
      }
      if (howOld > 5 && howOld <= 10) {
        return { ...v, yearRangeType: 4 };
      }
      return { ...v, yearRangeType: 5 };
    });
    return products.filter((v, i) => {
      return yearRange.includes(v.yearRangeType); //每項產品只有一個分類
    });
  };

  //TODO:賣家評價篩選
  // const getSellerRatings = (usedProductsArray, ratings) => {
  //   return usedProductsArray.filter((v, i) => {
  //     if (v.rating > 4) {
  //       return v.rating > 4;
  //     }
  //   });
  // };

  //分頁頁碼選取
  // const handlePageClick = (event) => {
  //   const newOffset = (event.selected * itemsPerPage) % usedProducts.length;
  //   setItemOffset(newOffset);
  // };

  useEffect(() => {
    let newUsedProductsArray = [...usedProducts];

    if (cats.length > 0) {
      newUsedProductsArray = getCatUsedProducts(newUsedProductsArray, cats);
    }
    if (from !== '' || to !== '') {
      newUsedProductsArray = getUsedProductsPriceRange(
        newUsedProductsArray,
        from,
        to
      );
    }
    if (years.length !== 0) {
      newUsedProductsArray = getUsedProductsYearRange(
        newUsedProductsArray,
        years
      );
    }
    // console.log(newUsedProductsArray)

    // 拆分頁
    //  _.chunk([1,2,3,4], 2) => [[1,2],[3,4]]
    const pageArray = _.chunk(newUsedProductsArray, perPage);

    if (pageArray.length > 0) {
      setUsedProductsDisplay(pageArray);
      setPageTotal(pageArray.length);
    } else {
      setUsedProductsDisplay([]);
      setPageTotal(0);
    }
  }, [usedProducts, cats, from, to, years, ratings, perPage]);
  return (
    <>
      <div className="bg-orange text-info">
        <div className="container-fluid">
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
          <div className="container-fluid">
            <h3 className="mb-5">二手專區/Used Things</h3>
            <div className="d-flex justify-content-between border-0">
              <div className="col-2 d-none d-lg-block text-info ">
                <h5>條件設定</h5>
                <hr className="simple" />
                <div
                  className="accordion accordion-flush text-info"
                  id="accordionPanelsStayOpenExample"
                >
                  <div className="accordion-item text-info">
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-headingOne"
                    >
                      <button
                        className="accordion-button collapsed bg-orange text-info"
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
                      className="accordion-collapse collapse text-info"
                      aria-labelledby="panelsStayOpen-headingOne"
                    >
                      <div className="accordion-body">
                        {catOptions.map((v, i) => {
                          return (
                            <div class="form-check text-info" key={i}>
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value={v}
                                id="flexCheckDefault"
                                checked={cats.includes(v)}
                                onChange={(e) => {
                                  const value = Number(e.target.value);
                                  if (cats.includes(value)) {
                                    setCats(
                                      cats.filter((v2, i2) => {
                                        return v2 !== value;
                                      })
                                    );
                                  } else {
                                    setCats([...cats, value]);
                                  }
                                }}
                              />

                              <label
                                class="form-check-label"
                                for="flexCheckDefault"
                              >
                                {catText[v - 1]}
                              </label>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item text-info">
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-headingTwo"
                    >
                      <button
                        className="accordion-button collapsed bg-orange text-info"
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
                      className="accordion-collapse collapse text-info"
                      aria-labelledby="panelsStayOpen-headingTwo"
                    >
                      <div className="accordion-body text-info">
                        <div className="d-flex pb-2">
                          <h6 className="px-1">$</h6>
                          <input
                            style={{ width: 100 }}
                            type="number"
                            name="points"
                            min="0"
                            max="10"
                            value={from}
                            placeholder="From"
                            onChange={(e) => {
                              setFrom(e.target.value);
                            }}
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
                            value={to}
                            placeholder="To"
                            onChange={(e) => {
                              setTo(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item text-info">
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-headingThree"
                    >
                      <button
                        className="accordion-button collapsed bg-orange text-info"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseThree"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseThree"
                      >
                        使用年份
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseThree"
                      className="accordion-collapse collapse text-info"
                      aria-labelledby="panelsStayOpen-headingThree"
                    >
                      <div className="accordion-body text-info">
                        {yearOptions.map((v, i) => {
                          return (
                            <div class="form-check" key={i}>
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value={v}
                                id="flexCheckDefault"
                                checked={years.includes(v)}
                                onChange={(e) => {
                                  const value = Number(e.target.value);
                                  if (years.includes(value)) {
                                    setYears(
                                      years.filter((v2, i2) => {
                                        return v2 !== value;
                                      })
                                    );
                                  } else {
                                    setYears([...years, value]);
                                  }
                                }}
                              />
                              <label
                                class="form-check-label"
                                for="flexCheckDefault"
                              >
                                {yearText[v - 1]}
                              </label>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item text-info">
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-headingFour"
                    >
                      <button
                        className="accordion-button collapsed bg-orange text-info"
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
                      className="accordion-collapse collapse text-info"
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
              <div className="col-10 col-lg-10 ">
                <div className="d-flex">
                  <div>
                    <h6 className="px-3">排序依據</h6>
                  </div>
                  <div>
                    <select
                      className="form-select-xl mb-2 text-info"
                      aria-label="Default select example"
                    >
                      <option selected className="text-info">
                        精選
                      </option>
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
                {/* usedProducts 改為usedProductsDisplay */}
                <UsedProductsList
                  usedProducts={
                    //TODO: 不懂為啥要加判斷
                    pageTotal > 0 ? usedProductsDisplay[pageNow - 1] : []
                  }
                  getCatUsedProducts={getCatUsedProducts}
                  getUsedProductsPriceRange={getUsedProductsPriceRange}
                  getUsedProductsYearRange={getUsedProductsYearRange}
                  // getUsedProductsPriceRange={getUsedProductsPriceRange}
                />
                {/* <ReactPaginate
                  breakLabel="..."
                  nextLabel="next >"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={4}
                  pageCount={pageCount}
                  previousLabel="< previous"
                  renderOnZeroPageCount={null}
                /> */}
              </div>
            </div>
            <div class="pagination">
              {Array(pageTotal)
                .fill(1)
                .map((v, i) => {
                  return (
                    <a
                      key={i}
                      href="#/"
                      onClick={() => {
                        setPageNow(i + 1);
                      }}
                    >
                      {i + 1}
                    </a>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UsedProducts;
