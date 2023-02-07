import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { useAuth } from '../Context/Authcontext';
import { useChat } from '../Context/Chatcontext';
import axios from 'axios';
import moment from 'moment';
import ReactStars from 'react-stars';
import ReactPaginate from 'react-paginate';
import BreadCrumb from '../Layout/BreadCrumb';
import './PersonalStore.scss';

function PersonalStore({ socket }) {
  const { userinfo, isLoggedIn } = useAuth();
  const { userAcct } = useParams();
  let navigate = useNavigate();

  // 儲存 select 狀態
  const [shape, setShape] = useState('');
  const [amount, setAmount] = useState('');
  // 抓取點擊購物車的資料
  const [cart, setCart] = useState([]);

  // 抓商品、評價、分類
  const [products, setProducts] = useState([]);
  const [rating, setRating] = useState([]);
  const [category, setCategory] = useState([]);
  useEffect(() => {
    try {
      async function getProducts() {
        let res = await axios.get(
          `http://localhost:3001/api/seller/${userAcct}`
        );
        setProducts(res.data.data);
        setRating(res.data.rating);
        setCategory(res.data.category);
      }
      getProducts();
    } catch (e) {
      console.error(e);
    }
  }, [userAcct]);

  const {
    chat,
    setChat,
    reciever,
    setReciever,
    recieverId,
    setRecieverId,
    message,
    setMessage,
    begin,
    setBegin,
    messageList,
    setMessageList,
    room,
    setRoom,
    otherReciever,
    setOtherReciever,
    switchZone,
    setSwitchZone,
    newMessage,
    setNewMessage,
  } = useChat();
  axios.defaults.withCredentials = true;
  async function handleMessage() {
    setChat(true);
    setBegin(true);
    if (userinfo.name !== '官方客服') {
      socket.emit('join_room', room);
      socket.emit('join_room', userinfo.account);
    } else {
      socket.emit('join_room', room);
    }
    console.log(userAcct);
    setReciever(userAcct);
    let response = await axios.post('http://localhost:3001/api/chat/switch', {
      otherReciever: userAcct,
    });
    if (response.data.length === 0) {
      alert('無此用戶');
    } else if (response.data[0].account === userinfo.account) {
      alert('寄件者與收件者為同一用戶');
    } else if (response.data[0].name === reciever) {
      alert('已在與此用戶通訊中');
    } else {
      setMessageList([]);
      setReciever(response.data[0].name);
      setRecieverId(response.data[0].user_id);
      setBegin(!begin);
      setRoom(userAcct);
      socket.emit('join_room', response.data[0].account);
    }
  }

  // 收藏
  const [userId, setUserId] = useState(0);
  const [like, setLike] = useState([]);
  // 取得收藏資料
  useEffect(() => {
    try {
      async function getLiked() {
        let res = await axios.get('http://localhost:3001/api/products/liked');
        if (res.data[0].liked) {
          setLike(JSON.parse(res.data[0].liked));
        }
      }
      getLiked();
    } catch (e) {
      console.error(e);
    }
  }, []);
  // 加入收藏
  useEffect(() => {
    if (isLoggedIn) {
      setUserId(userinfo.id);
      try {
        async function liked() {
          let likeJson = JSON.stringify(like);
          await axios.put('http://localhost:3001/api/products', {
            likeJson,
            userId,
          });
        }
        liked();
      } catch (e) {
        console.error(e);
      }
    }
  }, [isLoggedIn, userinfo.id, userId, like]);

  // 分類篩選
  const [productsFilter, setProductsFilter] = useState([]);
  const [checkedState, setCheckedState] = useState();
  useEffect(() => {
    setProductsFilter(products);
    setCheckedState(new Array(category.length).fill(false));
  }, [products, category]);
  const categoryTranslate = {
    Sofa: '沙發',
    Chair: '椅子',
    Table: '桌子',
    Storage: '儲櫃',
    Bed: '床',
    Lighting: '燈',
    Textile: '紡織',
    Decor: '裝飾',
    Kitchenware: '廚具',
    Bathroomset: '浴室',
  };
  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);

    const newFilter = updatedCheckedState.reduce(
      (sum, currentState, index) =>
        currentState
          ? [
              ...sum,
              ...products.filter((v) => {
                return v.category_product === index + 1;
              }),
            ]
          : sum,
      []
    );
    setProductsFilter(newFilter);

    if (newFilter.length === 0) {
      setProductsFilter(products);
    }
  };

  // 評價篩選
  const [ratingFilter, setRatingFilter] = useState([]);
  useEffect(() => {
    setRatingFilter(rating);
  }, [rating]);
  const ratingOnClick = (count) => {
    const newFilter = rating.filter((v) => {
      return v.stars === count;
    });
    setRatingFilter(newFilter);
    if (count === 0) {
      setRatingFilter(rating);
    }
    RatingScroll.current.scrollIntoView();
  };

  // 平均星星數
  const averageStar =
    Math.round(
      (rating.reduce((acc, pilot) => acc + pilot.stars, 0) / rating.length) * 10
    ) / 10;

  // 商品分頁
  const [ProductOffset, setProductOffset] = useState(0);
  const ProductPerPage = 8;
  const ProductEndOffset = ProductOffset + ProductPerPage;
  const ProductCurrentItems = productsFilter.slice(
    ProductOffset,
    ProductEndOffset
  );
  const ProductPageCount = Math.ceil(productsFilter.length / ProductPerPage);
  const ProductPageClick = (event) => {
    const newOffset = (event.selected * ProductPerPage) % productsFilter.length;
    setProductOffset(newOffset);
    window.scrollTo(0, 0);
  };
  // 評價分頁
  const RatingScroll = useRef();
  const [RatingOffset, setRatingOffset] = useState(0);
  const RatingPerPage = 4;
  const RatingEndOffset = RatingOffset + RatingPerPage;
  const RatingCurrentItems = ratingFilter.slice(RatingOffset, RatingEndOffset);
  const RatingPageCount = Math.ceil(ratingFilter.length / RatingPerPage);
  const RatingPageClick = (event) => {
    const newOffset = (event.selected * RatingPerPage) % ratingFilter.length;
    setRatingOffset(newOffset);
    RatingScroll.current.scrollIntoView();
  };

  return (
    <>
      <main className="bg-orange personal-store">
        <div className="container">
          <BreadCrumb />
          <div className="d-flex justify-content-between border-0">
            {/* 左側條件設定 */}
            <div className="col-2 d-none d-lg-block ">
              <h3 className="mb-5 text-info-dark">
                <p>
                  <span className="fw-bold">{userAcct}</span> 的賣場
                </p>
                <button
                  className={isLoggedIn ? 'btn btn-primary-300 my-2' : 'd-none'}
                  onClick={handleMessage}
                >
                  <i class="fa-solid fa-comment-dots me-2" />
                  聊聊
                </button>
              </h3>
              <h5 className="text-info">分類</h5>
              <hr className="simple" />

              {/* 分類 */}
              {category.map((v, i) => {
                return (
                  <div key={v.id} className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={v.id}
                      checked={checkedState[i]}
                      onChange={() => handleOnChange(i)}
                    />
                    <label className="form-check-label text-info fs-sml">
                      {categoryTranslate[v.name]}(
                      {
                        products.filter((i) => {
                          return i.category_product === v.id;
                        }).length
                      }
                      )
                    </label>
                  </div>
                );
              })}
            </div>

            {/* 右側排序、商品列表 */}
            <div className="col-12 col-lg-9">
              <h3 className="text-info-dark d-block d-md-none my-3">
                <span className="fw-bold">{userAcct}</span> 的賣場
                <button
                  className={isLoggedIn ? 'btn btn-primary-300 mx-4' : 'd-none'}
                  onClick={handleMessage}
                >
                  <i class="fa-solid fa-comment-dots me-2" />
                  聊聊
                </button>
              </h3>
              <div className="bg-white p-4 shadow-sm">
                <p className="text-info-dark pt-2">
                  商品:
                  <span className="m-2 text-primary-200 fw-bold">
                    {products.length}
                  </span>
                </p>
                <p className="text-info-dark">
                  評價:
                  <span
                    className="m-2 text-primary-200 fw-bold"
                    role="button"
                    onClick={() => {
                      RatingScroll.current.scrollIntoView();
                    }}
                  >
                    {isNaN(averageStar) ? 0 : averageStar} ({rating.length}
                    個評價)
                  </span>
                </p>
              </div>
              <div className="d-flex mt-3">
                {/* 條件設定 */}
                <div className="d-flex align-items-center d-md-none">
                  <div className="pe-3">
                    <button
                      className="text-info-dark ps-0 col border-0 bg-orange"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalFilter"
                    >
                      <span className="d-md-none d-inline">
                        <i className="fa-solid fa-filter" />
                      </span>
                      <span className="m-2">分類</span>
                    </button>
                  </div>
                </div>
              </div>
              {/* 商品列表 */}
              <div className="row">
                {ProductCurrentItems.map((v, i) => {
                  const img = v.img.split(',');
                  return (
                    <>
                      <div
                        className="col-6 col-md-3 d-flex justify-content-center p-md-3 p-2"
                        key={i}
                      >
                        <div className="card border border-0 card-shadow position-relative">
                          <img
                            role="button"
                            src={`${process.env.REACT_APP_IMAGE_URL}/images/used/${img[0]}`}
                            className="card-img-top bg-gray-200"
                            alt={v.name}
                            onClick={() => {
                              navigate(`/usedproducts/${v.useP_id}`);
                            }}
                          />
                          <div className="card-body text-left">
                            <div className="d-flex justify-content-between">
                              <h5 className="card-title text-info">
                                NT $ {v.price}
                              </h5>
                              <p>
                                {/* 沒有登入的愛心 */}
                                {!isLoggedIn && (
                                  <Link to={'/login'}>
                                    <i
                                      style={{ cursor: 'pointer' }}
                                      className="fa-regular fa-heart text-info"
                                    ></i>
                                  </Link>
                                )}
                                {/* 登入後的愛心 */}
                                {isLoggedIn && like.includes(v.useP_id) && (
                                  <i
                                    className="fa-solid fa-heart text-danger"
                                    onClick={() => {
                                      const newLike = like.filter((v2) => {
                                        return v2 !== v.useP_id;
                                      });
                                      setLike(newLike);
                                    }}
                                    style={{ cursor: 'pointer' }}
                                  ></i>
                                )}
                                {isLoggedIn && !like.includes(v.useP_id) && (
                                  <i
                                    onClick={() => {
                                      const newLike = [...like, v.useP_id];
                                      setLike(newLike);
                                    }}
                                    style={{ cursor: 'pointer' }}
                                    className="fa-regular fa-heart text-info"
                                  ></i>
                                )}
                              </p>
                            </div>
                            <h6 className="card-title text-gray-300">
                              {v.name}
                            </h6>

                            {v.amount === 0 ? (
                              <p className="card-text text-danger">已售完</p>
                            ) : (
                              <p className="card-text text-primary-200">
                                僅剩 {v.amount} 件 !
                              </p>
                            )}
                            <button className="btn btn-primary-300 fs-sml w-100 d-block d-md-none">
                              加入購物車
                            </button>
                          </div>
                          <div className="card-body pt-0 card-btn card-shadow bg-white d-none d-md-block">
                            <button
                              className="btn btn-primary-300 fs-sml w-100"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                              onClick={() => {
                                setCart(v);
                              }}
                            >
                              加入購物車
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
                <ReactPaginate
                  breakLabel="..."
                  nextLabel=">"
                  onPageChange={ProductPageClick}
                  pageRangeDisplayed={5}
                  pageCount={ProductPageCount}
                  previousLabel="<"
                  renderOnZeroPageCount={null}
                  containerClassName="pagination"
                  pageLinkClassName="page-num"
                  previousLinkClassName="page-btn"
                  nextLinkClassName="page-btn"
                  activeLinkClassName="active"
                />
              </div>
              {/* 賣場評價 */}
              <section
                className="container pb-md-5 pb-3 px-0 my-5"
                ref={RatingScroll}
              >
                <div className="bg-gray p-md-5 p-3">
                  <h5 className="text-info-dark mb-4">賣場評價</h5>
                  <div className="bg-white p-3 d-lg-flex align-items-center justify-content-between">
                    <div className="m-3">
                      <p className="h3 text-info-dark">
                        <span className="fw-bold">
                          {isNaN(averageStar) ? 0 : averageStar}
                        </span>
                        /<span className="fs-5">5</span>
                      </p>

                      {/* 星星 */}
                      <ReactStars
                        count={5}
                        size={24}
                        color1={'#ced4da'}
                        color2={'#da5260'}
                        char={<i className="fa-solid fa-star" />}
                        value={averageStar}
                        edit={false}
                      />
                    </div>
                    <div className="m-3">
                      <button
                        className="btn btn-outline-primary-300 m-2"
                        onClick={() => ratingOnClick(0)}
                      >
                        全部
                      </button>
                      <button
                        className="btn btn-outline-primary-300 m-2"
                        onClick={() => ratingOnClick(5)}
                      >
                        5 星 ({rating.filter((v) => v.stars === 5).length})
                      </button>
                      <button
                        className="btn btn-outline-primary-300 m-2"
                        onClick={() => ratingOnClick(4)}
                      >
                        4 星 ({rating.filter((v) => v.stars === 4).length})
                      </button>
                      <button
                        className="btn btn-outline-primary-300 m-2"
                        onClick={() => ratingOnClick(3)}
                      >
                        3 星 ({rating.filter((v) => v.stars === 3).length})
                      </button>
                      <button
                        className="btn btn-outline-primary-300 m-2"
                        onClick={() => ratingOnClick(2)}
                      >
                        2 星 ({rating.filter((v) => v.stars === 2).length})
                      </button>

                      <button
                        className="btn btn-outline-primary-300 m-2"
                        onClick={() => ratingOnClick(1)}
                      >
                        1 星 ({rating.filter((v) => v.stars === 1).length})
                      </button>
                    </div>
                  </div>

                  {RatingCurrentItems.map((v, i) => {
                    const img = v.img.split(',');
                    return (
                      <div
                        key={i}
                        className="pt-3 border-bottom border-1 border-gray-200"
                      >
                        <div className="d-md-flex justify-content-between">
                          <p className="mb-2">Ariel Shao</p>
                          <div className="text-gray-200 mb-2 d-flex align-items-start">
                            <p className="me-3">
                              {moment(`${v.posted_at}`, 'YYYYMMDD').fromNow()}
                            </p>
                            <ReactStars
                              count={5}
                              size={20}
                              color1={'#ced4da'}
                              color2={'#da5260'}
                              char={<i className="fa-solid fa-star" />}
                              value={v.stars}
                              edit={false}
                            />
                          </div>
                        </div>
                        <div className="d-md-flex align-items-center justify-content-between">
                          <div className="col-3 col-md-2">
                            <img
                              src={`${process.env.REACT_APP_IMAGE_URL}/images/products/used/${img[0]}`}
                              alt=""
                              className="object-cover pb-3 pe-4"
                            />
                          </div>
                          <p className="col-md-6 text-gray-400 fw-bold">
                            {v.name}
                          </p>
                          <p className="col-md-3 text-gray-400 fs-7">
                            {v.comment}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                  <ReactPaginate
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={RatingPageClick}
                    pageRangeDisplayed={5}
                    pageCount={RatingPageCount}
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                    containerClassName="pagination"
                    pageLinkClassName="page-num"
                    previousLinkClassName="page-btn"
                    nextLinkClassName="page-btn"
                    activeLinkClassName="active"
                  />
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* modal Filter 彈跳視窗 */}
        <div
          className="modal fade"
          id="exampleModalFilter"
          tabIndex="-1"
          aria-labelledby="exampleModalFilter"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content rounded-0 border-none">
              <div className="modal-header">
                <h1 className="modal-title fs-5 text-info px-2">分類</h1>
                <button
                  type="button"
                  className="btn-close fs-sml"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body p-4">
                {/* 分類 */}
                {category.map((v, i) => {
                  return (
                    <div key={v.id} className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value={v.id}
                        checked={checkedState[i]}
                        onChange={() => handleOnChange(i)}
                      />
                      <label className="form-check-label text-info fs-sml">
                        {categoryTranslate[v.name]}(
                        {
                          products.filter((i) => {
                            return i.category_product === v.id;
                          }).length
                        }
                        )
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {/* modal Cart 彈跳視窗 */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content rounded-0 border-0">
              <div className="modal-header border-0">
                <h1
                  className="modal-title fs-5 text-gray-300"
                  id="staticBackdropLabel"
                >
                  {cart.name}
                </h1>
                <button
                  type="button"
                  className="btn-close fs-sml"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body border-0 pt-0">
                <h5 className="card-title text-info pb-3">NT $ {cart.price}</h5>
                {/* 選擇款式 */}
                {cart.amount > 0 ? (
                  <div className="form-floating">
                    <select
                      className="form-select text-gray-400"
                      id="floatingSelect"
                      value={shape}
                      onChange={(e) => {
                        setShape(e.target.value);
                      }}
                    >
                      <option className="text-gray-400" value="" disabled>
                        請選擇款式
                      </option>
                      <option value="藍色 Blue" className="text-gray-400">
                        藍色 Blue
                      </option>
                      <option value="深灰色 Gray" className="text-gray-400">
                        深灰色 Gray
                      </option>
                      <option value="綠色 Green" className="text-gray-400">
                        綠色 Green
                      </option>
                      <option value="白色 White" className="text-gray-400">
                        白色 White
                      </option>
                    </select>
                    <label htmlFor="floatingSelect" className="label-fs">
                      款式
                    </label>
                  </div>
                ) : (
                  /* 售完 */
                  <div className="text-info-dark">商品已售完</div>
                )}
                {/* 數量、加入購物車 */}
                {cart.amount > 0 && (
                  <div className="row pt-2">
                    <div className="col-5">
                      <div className="form-floating">
                        <select
                          className="form-select text-gray-400"
                          id="floatingSelect"
                          value={amount}
                          onChange={(e) => {
                            setAmount(e.target.value);
                          }}
                        >
                          <option value="" disabled>
                            請選擇數量
                          </option>
                          {Number(1, cart.amount >= 10 ? 9 : cart.amount).map(
                            (v2, i) => {
                              return (
                                <option
                                  key={v2}
                                  value={v2}
                                  className="text-gray-400"
                                >
                                  {v2}
                                </option>
                              );
                            }
                          )}
                          {cart.amount >= 10 && (
                            <option value="10" className="text-gray-400">
                              10 +
                            </option>
                          )}
                        </select>
                        <label htmlFor="floatingSelect" className="label-fs">
                          數量
                        </label>
                      </div>
                    </div>
                    <div className="col-7">
                      <button className="btn btn-cart bg-gray border border-2 border-primary-200 text-primary-300 btn-cart w-100 h-100">
                        加入購物車
                      </button>
                    </div>
                  </div>
                )}
                {/* 庫存狀態 */}
                <div className="py-2">
                  <p className="fs-6 text-gray-400 fs-sml mb-0">
                    庫存狀態 :
                    <span className="text-danger">
                      {cart.amount === 0
                        ? '已售完'
                        : `僅剩 ${cart.amount} 件 !`}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default PersonalStore;
