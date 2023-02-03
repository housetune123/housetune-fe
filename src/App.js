import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from './components/Context/Authcontext';
import { CouponContext } from './components/Context/CouponContext';

// 頁面元件
// layout branch
import NotFound from './components/NotFound';
import Information from './components/Checkout/Information';
import Shipping from './components/Checkout/Shipping';
import Payment from './components/Checkout/Payment';
import Thankyou from './components/Checkout/Thankyou';
// inspiration branch
import Inspiration from './components/Inspiration/Inspiration';
import InspDetail1 from './components/Inspiration/Insp_detail1';
import AddUsedProducts from './components/UsedProducts/AddUsedProducts';
import EditUsedProducts from './components/UsedProducts/EditUsedProducts';

// usedproducts
import UsedProducts from './components/UsedProducts/UsedProducts';
import UsedProductsDetail from './components/UsedProducts/UsedProductsDetail';

// home-page branch
import PersonalStore from './components/PersonalStore/PersonalStore';
import Main from './components/Main';
import Products from './components/Products/Products';
import ProductDetail from './components/Products/ProductsDetail';
import UsedProductDetail from './components/Products/UsedProductsDetail';

// seller-center
import SellerCenter from './components/PersonalStore/SellerCenter';
import SellerMain from './components/PersonalStore/SellerMain';
import SalesProduct from './components/PersonalStore/SalesProduct';
import SalesOrder from './components/PersonalStore/SalesOrder';
import AllOrder from './components/PersonalStore/SalesOrderContent/AllOrder';
import UnPaid from './components/PersonalStore/SalesOrderContent/UnPaid';
import ToShip from './components/PersonalStore/SalesOrderContent/ToShip';
import Completed from './components/PersonalStore/SalesOrderContent/Completed';
import Cancelled from './components/PersonalStore/SalesOrderContent/Cancelled';

// user-page branch
import UserPage from './components/UserPage/UserPage';

import Cart from './components/Cart/Cart';

import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ForgotPage from './components/Login/ForgotPage';
import ResetPassword from './components/Login/ResetPassword';

// 排版元件
import Header from './components/HeaderFooter/Header';
import Footer from './components/HeaderFooter/Footer';

// 匯入 CartProvider
import { CartProvider } from './utils/useCart';

//重新整理時要一次資料
function App() {
  const [userinfo, setUserInfo] = useState({
    id: '',
    account: '',
    name: '',
    phone: '',
    email: '',
    address: '',
    bankcode: '',
    bankaccount: '',
    liked: '',
    cart: '',
    validcoupons: '',
    invalidcoupons: '',
    rating: '',
    createdat: '',
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get('http://localhost:3001/api/auth/member').then((res) => {
      setIsLoggedIn(res.data.loggedIn);
      if (res.data.userInfo) {
        setUserInfo(res.data.userInfo);
      }
      // console.log(res.data.userInfo);
    });
  }, []);

  const [couponInfo, setCouponInfo] = useState({});
  const [isUsed, setIsUsed] = useState(false);

  return (
    <CartProvider>
      <AuthContext.Provider
        value={{ userinfo, setUserInfo, isLoggedIn, setIsLoggedIn }}
      >
        <CouponContext.Provider
          value={{ couponInfo, setCouponInfo, isUsed, setIsUsed }}
        >
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:prodId" element={<ProductDetail />} />
              <Route
                path="/products/category/:categoryRoom"
                element={<Products />}
              ></Route>
              <Route
                path="/used/products/detail"
                element={<UsedProductDetail />}
              ></Route>

              <Route exact path="inspiration">
                <Route index={true} element={<Inspiration />} />
                <Route path="detail1" element={<InspDetail1 />} />
              </Route>

              {/* used */}
              <Route path="usedstore" element={<PersonalStore />} />
              <Route path="usedproducts" element={<UsedProducts />} />
              <Route
                path="/used/products/detail"
                element={<UsedProductDetail />}
              ></Route>
              <Route path="usedproduct/add" element={<AddUsedProducts />} />

              {/* user */}
              <Route path="login" element={<Login />} />
              <Route path="forgot" element={<ForgotPage />} />
              <Route path="password/edit" element={<ResetPassword />} />
              <Route path="register" element={<Register />} />
              <Route path="user" element={<UserPage />} />

              {/* ckeckout */}
              <Route path="cart" element={<Cart />} />
              <Route
                path="/cart/checkout/information"
                element={<Information />}
              />
              <Route path="/cart/checkout/shipping" element={<Shipping />} />
              <Route path="/cart/checkout/payment" element={<Payment />} />
              <Route path="/cart/checkout/thankyou" element={<Thankyou />} />

              <Route path="checkout">
                <Route path="information" element={<Information />} />
                <Route path="shipping" element={<Shipping />} />
                <Route path="payment" element={<Payment />} />
              </Route>

              {/* personal-store */}
              <Route path=":userAcct" element={<PersonalStore />} />
              <Route path="seller/product/add" element={<AddUsedProducts />} />
              <Route
                path="seller/product/edit/:useP_id"
                element={<EditUsedProducts />}
              />
              <Route path="seller" element={<SellerCenter />}>
                <Route index element={<SellerMain />} />
                <Route path="product" element={<SalesProduct />} />
                <Route path="order" element={<SalesOrder />}>
                  <Route index element={<AllOrder />} />
                  <Route path="unpaid" element={<UnPaid />} />
                  <Route path="toship" element={<ToShip />} />
                  <Route path="completed" element={<Completed />} />
                  <Route path="cancelled" element={<Cancelled />} />
                </Route>
              </Route>

              {/* notfound */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </CouponContext.Provider>
      </AuthContext.Provider>
    </CartProvider>
  );
}

export default App;
