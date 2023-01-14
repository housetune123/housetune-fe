import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <div className="d-flex justify-content-center bg-orange">
        <div>
          <h2 className="text-center text-info-dark">很抱歉</h2>
          <p className="text-center text-info">您要搜尋的頁面已下架</p>
          <Link
            to="/"
            className="d-flex justify-content-center text-decoration-none text-primary-300"
          >
            回首頁
          </Link>
        </div>
      </div>
    </>
  );
}

export default NotFound;
