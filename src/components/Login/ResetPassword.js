import { Link } from 'react-router-dom';

function ResetPassword() {
  return (
    <>
      {/* <div className="d-flex justify-content-center">
        <a className="btn btn-primary-300 w-50" href="#/">
          變更密碼
        </a>
      </div> */}
      <main className="pageBG bg-orange py-lg-5 py-4">
        <div className="pageImg">
          <div className="container">
            <form action="" method="" className="formStyle">
              <div className="mb-4">
                <h3 className="title text-center text-info fw-bold">
                  設定新的密碼
                </h3>
              </div>
              <div className="row d-flex justify-content-center">
                <div className="col-12 col-lg-8">
                  <input
                    className="form-control"
                    type="password"
                    placeholder="新密碼 (至少8個字元)"
                  ></input>
                  <input
                    className="form-control"
                    type="password"
                    placeholder="確認新密碼"
                  ></input>
                  <div className="mt-4 mb-5 d-flex justify-content-center">
                    <button
                      className="btn btn-primary-300 me-2 w-100"
                      type="submit"
                      value="Send"
                    >
                      更改密碼
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default ResetPassword;
