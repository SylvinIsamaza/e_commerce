import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  LoginPage,
  SignUpPage,
  ActivationPage,
  Homepage,
  ProductPage,
  BestSellingPage,
  EventPage,
  FAQPage,
  ProuductDetailsPage,
  Profile,
  ShopCreationPage,
  ShopActivationPage,
  ShopLoginPage,
  ShopHomepage,
} from "./Routes.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { store } from "./redux/store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { server } from "./server";
import {
  loadUserFailure,
  loadUserStart,
  loadUserSuccess,
} from "./redux/reducer/reducer";
import ProtectedRoutes from "./routes//ProtectedRoute";
import {
  loadSellerFailure,
  loadSellerStart,
  loadSellerSuccess,
} from "./redux/reducer/shop";
import ShopProtectedRoute from "./routes/SellerProtectedRoutes";
import { ShopCreateProduct, ShopDashboardPage } from "./routes/ShopRoutes";
import Loader from "./components/layout/Loader";
import { loadSeller } from "./redux/action/shop";
import { loadUser } from "./redux/action/user";

function App() {
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);
  const { isSeller, seller } = useSelector((state) => state.seller);
  //console.log(isAuthenticated);

  useEffect(() => {
    //console.logconsole.log(user)
    try {
      store.dispatch(loadUser());
      store.dispatch(loadSeller());
    } catch (error) {
      store.dispatch(loadUserFailure());
      //console.log(error.response.data);
    }
  }, []);
  //console.log(seller);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage user={user} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signUp" element={<SignUpPage />}></Route>
        <Route
          path="/activation/:activationToken"
          element={<ActivationPage />}
        ></Route>
        <Route
          path="/shop/activation/:activationToken"
          element={<ShopActivationPage />}
        ></Route>
        <Route path="/products" element={<ProductPage />}></Route>
        <Route path="/best-selling" element={<BestSellingPage />}></Route>
        <Route path="/events" element={<EventPage />}></Route>
        <Route path="/faq" element={<FAQPage />}></Route>
        <Route path="/products/:name" element={<ProuductDetailsPage />}></Route>
        <Route
          path="/shop-creation"
          element={<ShopCreationPage isSeller={isSeller} />}
        ></Route>
        <Route
          path="/shop-login"
          element={<ShopLoginPage isSeller={isSeller} />}
        ></Route>
        <Route
          path="/shop/:id"
          element={
            <ShopProtectedRoute>
              <ShopHomepage />
            </ShopProtectedRoute>
          }
        ></Route>
        <Route
          path="/dashboard/:component"
          element={
            <ShopProtectedRoute>
              <ShopDashboardPage />
            </ShopProtectedRoute>
          }
        ></Route>

        <Route
          path="/profile"
          element={
            <ProtectedRoutes isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoutes>
          }
        ></Route>
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        closeOnClick
        draggable
      ></ToastContainer>
    </BrowserRouter>
  );
}

export default App;
