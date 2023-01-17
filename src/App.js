import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
import UsedProductList from './components/UsedProducts/UsedProductList';

// home-page branch
import PersonalStore from './components/Products/PersonalStore';
import Main from './components/Main';
import ProductDetail from './components/Products/ProductsDetail';
import UsedProductDetail from './components/Products/UsedProductsDetail';
// user-page branch
import UserPage from './components/UserPage/UserPage';

import Cart from './components/Cart/Cart';

import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ForgotPage from './components/Login/ForgotPage';

// 排版元件
import Header from './components/HeaderFooter/Header';
import Footer from './components/HeaderFooter/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        {/* user */}
        <Route path="login" element={<Login />} />
        <Route path="forgot" element={<ForgotPage />} />
        <Route path="register" element={<Register />} />
        <Route path="user" element={<UserPage />} />
        {/* procduct */}
        <Route path="/products/:prodId" element={<ProductDetail />} />
        <Route
          path="/used/products/detail"
          element={<UsedProductDetail />}
        ></Route>
        {/* usedproduct */}
        <Route path="usedstore" element={<PersonalStore />} />
        <Route path="usedproduct" element={<UsedProductList />} />
        <Route path="usedproduct/add" element={<AddUsedProducts />} />
        {/* ckeckout */}
        <Route path="cart" element={<Cart />} />
        <Route path="checkout/information" element={<Information />} />
        <Route path="checkout/shipping" element={<Shipping />} />
        <Route path="checkout/payment" element={<Payment />} />
        <Route path="checkout/thankyou" element={<Thankyou />} />
        {/* inspiration */}
        <Route exact path="inspiration">
          <Route index={true} element={<Inspiration />} />
          <Route path="detail1" element={<InspDetail1 />} />
        </Route>
        {/* notfound */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
