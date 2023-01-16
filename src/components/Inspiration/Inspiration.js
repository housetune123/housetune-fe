import { useState, useEffect } from 'react';
import axios from 'axios';
import './Inspiration.scss';
import { Link } from 'react-router-dom';

function Inspiration() {
  const [list, setList] = useState([]);
  const [pages, setPages] = useState(0);
  const [totalPage, setTotalPage] = useState([]);
  useEffect(() => {
    async function getList() {
      let response = await axios.get('http://localhost:3002/api/list');
      console.log(response.data);
      setList(response.data);
      setPages(Math.ceil(response.data.length / 9));
    }
    getList();
  }, []);
  // useEffect(() => {
  //   let a = [];
  //   for (let i = 1; i < pages + 1; i++) {
  //     a.push(i);
  //   }
  //   setTotalPage(a);
  // }, [pages]);

  return (
    <>
      <div className="insp">
        <header className="text-center bg-white">我是header</header>
        <div className="position-relative container">
          <div className="main">
            <p className="crumb text-primary-200 mt-4">
              <Link to="/" className="text-decoration-none text-primary-200">
                首頁
              </Link>
              {'>'}佈置靈感
            </p>
            <h3 className="text-center text-info-dark mt-5">空間佈置靈感</h3>
            <div className="row mt-5">
              {list.map((v, i) => {
                return (
                  <div className="col-12 col-md-6 col-lg-4" key={v.insp_id}>
                    <Link to={v.link} className="text-decoration-none">
                      <div className="card mt-5 mx-3">
                        <img
                          src={`${process.env.REACT_APP_IMAGE_URL}/${v.img}`}
                          alt="清單圖"
                          key={v.insp_id}
                          className="list"
                        />
                        <div className="card-body bg-white">
                          <h6 className="card-text text-center bg-white text-info-dark">
                            {v.description}
                          </h6>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <img
            src={`${process.env.REACT_APP_IMAGE_URL}/images/messenger.svg`}
            alt="聊天室符號"
            className="messenger position-fixed"
          />
          {/* <div className="pageButton d-flex justify-content-center mt-4">
            {totalPage.map((v, i) => {
              return (
                <button
                  className="mx-2 bg-primary-300 d-flex align-items-center justify-content-center page"
                  key={i}
                >
                  <a
                    href="#"
                    className="text-decoration-none bg-transparent text-white"
                  >
                    {v}
                  </a>
                </button>
              );
            })}
          </div> */}
        </div>
        <footer className="text-center mt-5 bg-white">我是footer</footer>
      </div>
    </>
  );
}

export default Inspiration;
