import React, { useState } from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ForgotPage() {
  const { toEmail } = useParams();
  const [templateParams, setTemplateParams] = useState({
    to_name: '',
    link: '<a href="http://localhost:3000/forgot/reset">變更密碼</a>',
    to_email: toEmail || '',
  });

  const sendEmail = (e) => {
    e.preventDefault();
    (async function getName() {
      let res = await axios.get(
        `http://localhost:3001/api/auth/forgot?toEmail=${templateParams.to_email}`
      );
      if (res.data.length > 0) {
        setTemplateParams({ ...templateParams, to_name: res.data[0].name });

        emailjs
          .send(
            'service_f26sn1c',
            'template_xy2ldjj',
            { ...templateParams, to_name: res.data[0].name },
            'uithpNCq2Sb1LkpJu'
          )
          .then(
            function (response) {
              console.log('SUCCESS!', response.status, response.text);
            },
            function (error) {
              console.log('FAILED...', error);
            }
          );
      }
    })();
  };

  return (
    <>
      <main className="pageBG bg-orange py-lg-5 py-4">
        {/* <header className="bg-primary text-center">Header</header> */}
        <div className="pageImg">
          <div className="container">
            <form
              action=""
              method=""
              className="formStyle"
              onSubmit={sendEmail}
            >
              <div className="mb-4">
                <h3 className="title text-center text-info fw-bold">
                  重設您的密碼
                </h3>
              </div>
              <div className="row d-flex justify-content-start justify-content-lg-center">
                <div className="col-12 col-lg-8">
                  <h6 className="text-info-dark text-center">
                    系統將會寄發新的密碼，請至輸入的信箱內查詢
                  </h6>
                </div>
              </div>
              <div className="row d-flex justify-content-center">
                <div className="col-12 col-lg-8">
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Email"
                    value={templateParams.to_email}
                    onChange={(e) => {
                      setTemplateParams({
                        ...templateParams,
                        to_email: e.target.value,
                      });
                    }}
                  ></input>
                  <div className="mt-4 mb-3 d-flex justify-content-center">
                    <button
                      className="btn btn-primary-300 w-100"
                      type="submit"
                      value="Send"
                    >
                      傳送重設密碼說明至以上電郵
                    </button>
                  </div>
                  <div className="text-center">
                    <Link
                      to="/login"
                      className="text-info fw-semibold text-decoration-none text-center pb-1"
                    >
                      會員登錄
                    </Link>
                    <br />
                    <Link
                      to="/register"
                      className="text-decoration-none fw-semibold text-primary-300 text-center"
                    >
                      點我加入會員
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* <footer className="bg-gray-100 text-center">Footer</footer> */}
      </main>
    </>
  );
}

export default ForgotPage;
