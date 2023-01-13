import React from 'react';
import { Link } from 'react-router-dom';

function Insp_detail1() {
  return (
    <>
      <div className="insp_1">
        <div className="position-relative container p-4">
          <div className="main">
            <p className="crumb text-primary-200">
              <Link
                to="/inspiration"
                className="text-decoration-none text-primary-200"
              >
                佈置靈感
              </Link>
              {'>'}小小冒險家的航海風臥室
            </p>
            <h3 className="text-center text-info-dark mt-lg-5 mt-3 title">
              小小冒險家的航海風臥室
            </h3>
            <h6 className="mx-3 text-center my-5 title-description">
              集合印花寢具、兇猛鯊魚毛巾和富有教育意義的遊戲，打造屬於小小探險家的舒適空間，成為啟程探索七大洋之前的完美玩樂天地。
            </h6>
            <div className="content">
              <div className="row">
                <div className="col-lg-9 col-12 mx-auto position-relative">
                  <img
                    className="w-100 d-block mx-auto"
                    src={`${process.env.REACT_APP_IMAGE_URL}/images/insp_details/1.jpeg`}
                    alt="大圖"
                  />
                  <div className="insp1_btn1 position-absolute">
                    <div className="hover-button-out d-flex justify-content-center align-items-center">
                      <div className="hover-button-inner"></div>
                    </div>
                  </div>
                  <div className="insp1_btn2 position-absolute">
                    <div className="hover-button-out d-flex justify-content-center align-items-center">
                      <div className="hover-button-inner"></div>
                    </div>
                  </div>
                  <div className="insp1_btn3 position-absolute">
                    <div className="hover-button-out d-flex justify-content-center align-items-center">
                      <div className="hover-button-inner"></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <svg class="position-absolute svg1" width="972" height="547">
                <a href="https://www.google.com">
                  <path
                    d="M224 222 L250 194 L310 186 L370 194 L379 177 L394 197 L542 203 L475 242 L358 267 L257 264 Z"
                    fill="transparent"
                  />
                </a>
              </svg> */}
              <div className="row">
                <div className="col-lg-9 col-12 d-lg-flex mx-auto justify-content-between mt-5">
                  <div className="card maincard">
                    <div className="position-relative">
                      <img
                        src={`${process.env.REACT_APP_IMAGE_URL}/images/insp_details/2.jpeg`}
                        className="card-img-top"
                        alt="小圖1"
                      />
                      <div className="insp1_btn4 position-absolute">
                        <div className="hover-button-out d-flex justify-content-center align-items-center">
                          <div className="hover-button-inner"></div>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title text-info-dark fw-bold">
                        與藍鯨共度美好時光
                      </h5>
                      <p className="subtitle text-gray-300">
                        即使是探險家，也需要在冒險一整天後找個地方好好休息。這張以100%純棉製成的被套佈滿藍鯨圖案，成為最好的探險夥伴。​
                      </p>
                    </div>
                  </div>
                  <div className="card maincard mt-lg-0 mt-3">
                    <div className="position-relative">
                      <img
                        src={`${process.env.REACT_APP_IMAGE_URL}/images/insp_details/3.jpeg`}
                        className="card-img-top"
                        alt="小圖2"
                      />
                      <div className="insp1_btn5 position-absolute">
                        <div className="hover-button-out d-flex justify-content-center align-items-center">
                          <div className="hover-button-inner"></div>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title text-info-dark fw-bold">
                        鯊魚出沒！
                      </h5>
                      <p className="subtitle text-gray-300">
                        配上鯊魚兜帽的毛巾以100%純棉製成，把沐浴和遊戲時間變成真正的冒險。棉質毛巾布柔軟舒適，吸水力強，是前往海灘探險的必備！​​​
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-9 col d-lg-flex mx-auto justify-content-between mt-5">
                  <div className="card maincard">
                    <div className="position-relative">
                      <img
                        src={`${process.env.REACT_APP_IMAGE_URL}/images/insp_details/4.jpeg`}
                        className="card-img-top"
                        alt="小圖3"
                      />
                      <div className="insp1_btn6 position-absolute">
                        <div className="hover-button-out d-flex justify-content-center align-items-center">
                          <div className="hover-button-inner"></div>
                        </div>
                      </div>
                      <div className="insp1_btn7 position-absolute">
                        <div className="hover-button-out d-flex justify-content-center align-items-center">
                          <div className="hover-button-inner"></div>
                        </div>
                      </div>
                    </div>

                    <div className="d-lg-none d-block card-body">
                      <h5 className="card-title text-info-dark fw-bold">
                        環保釣魚課
                      </h5>
                      <p className="subtitle text-gray-300 mt-4">
                        這個遊戲包含兩根釣魚竿和11個不同形狀，孩子要釣起可以回收的廢物，從中學會保持海洋潔淨的重要性！​​​
                      </p>
                    </div>
                  </div>
                  <div
                    className="d-lg-block d-none"
                    style={{ width: 48 + '%' }}
                  >
                    <h5 className="card-title text-info-dark fw-bold">
                      環保釣魚課
                    </h5>
                    <p className="subtitle text-gray-300 mt-4">
                      這個遊戲包含兩根釣魚竿和11個不同形狀，孩子要釣起可以回收的廢物，從中學會保持海洋潔淨的重要性！​​​
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-9 col-12 mx-auto mt-5 text-lg-start text-center">
                  <h5 className="text-info-dark fw-bold">
                    大海是我家--其他點子
                  </h5>
                  <p className="subtitle text-gray-300 mt-4 text-lg-start text-center">
                    從海洋汲取靈感，為幼兒以至青少年塑造奇妙又充滿想像力的空間。​
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-9 col-12 d-lg-flex mx-auto justify-content-start mt-4">
                  <div className="card subcard ">
                    <img
                      src={`${process.env.REACT_APP_IMAGE_URL}/images/02.jpeg`}
                      className="card-img-top"
                      alt="其他主題1"
                    />
                    <div className="card-body bg-gray-300">
                      <h5 className="card-title text-white fw-bold">
                        為小小夢想家而設
                      </h5>
                      <p className="subtitle text-white">
                        以舒適的寢具、可擁抱的柔軟絨毛玩具和夢幻燈具，為孩子創造寫意的空間。
                      </p>
                    </div>
                  </div>
                  <div className="card subcard ms-lg-5 mt-lg-0 mt-5">
                    <img
                      src={`${process.env.REACT_APP_IMAGE_URL}/images/01.jpeg`}
                      className="card-img-top"
                      alt="其他主題2"
                    />
                    <div className="card-body  bg-gray-400">
                      <h5 className="card-title text-white fw-bold">
                        創意樂園
                      </h5>
                      <p className="subtitle text-white">
                        透過填色等創意活動，鼓勵小小藝術家從海洋尋找創作靈感。
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <button className="bg-primary-300 d-block mx-auto mt-5">
                <Link
                  to="/inspiration"
                  className="text-white text-decoration-none"
                >
                  回佈置靈感
                </Link>
              </button>
            </div>
          </div>
          <img
            src={`${process.env.REACT_APP_IMAGE_URL}/images/messenger.svg`}
            alt="聊天室符號"
            className="messenger position-fixed"
          />
        </div>
      </div>
    </>
  );
}

export default Insp_detail1;
