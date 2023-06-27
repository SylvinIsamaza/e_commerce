import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LoginPage, SignUpPage, ActivationPage, Homepage, ProductPage, BestSellingPage,EventPage,FAQPage,ProuductDetailsPage,Profile ,ShopCreationPage,ShopActivationPage,ShopLoginPage,ShopHomepage} from './Routes.js';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { store } from './redux/store';
import { Provider, useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { server } from './server';
import { loadUserFailure, loadUserStart, loadUserSuccess } from './redux/reducer/reducer';
import ProtectedRoutes from './ProtectedRoute';
import { loadSellerFailure, loadSellerStart, loadSellerSuccess } from './redux/reducer/shop';
import ShopProtectedRoute from './SellerProtectedRoutes';



function App() {
  const {user,loading ,isAuthenticated} = useSelector((state) => state.user)
  const {isSeller,ISL}=useSelector((state)=>state.seller)
  console.log(isAuthenticated)
   
  useEffect(() => {
    // console.log(user)
    try {
      store.dispatch(loadUserStart())
      store.dispatch(loadSellerStart())
      axios.get(`${server}/api/v2/user/get_user`, { withCredentials: true }).then((data) => {

        console.log(data)
        store.dispatch(loadUserSuccess(data.data.user))

      }).catch((error) => {
        store.dispatch(loadUserFailure())
        toast.error(error)
      })
      axios.get(`${server}/api/v2/shop/get_seller`, { withCredentials: true }).then((data) => {

        console.log(data)
        store.dispatch(loadSellerSuccess(data.data.seller))

      }).catch((error) => {
        store.dispatch(loadSellerFailure())
        toast.error(error)
      })
    } catch (error) {
      store.dispatch(loadUserFailure())
      console.log(error.response.data)
    }

  }, [])
  return (
    
    <BrowserRouter>
    
      <Routes >
        <Route path='/' element={<Homepage user={user}/>} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signUp' element={<SignUpPage />}></Route>
        <Route path='/activation/:activationToken' element={<ActivationPage />}></Route>
        <Route path='/shop/activation/:activationToken' element={<ShopActivationPage />}></Route>
        <Route path='/products' element={<ProductPage />}></Route>
        <Route path='/best-selling' element={<BestSellingPage />}></Route>
        <Route path='/events' element={<EventPage/>}></Route>
        <Route path='/faq' element={<FAQPage/>}></Route>
        <Route path='/products/:name' element={<ProuductDetailsPage/>}></Route>
        <Route path='/shop-creation' element={<ShopCreationPage isSeller={isSeller}/>}></Route>
        <Route path='/shop-login' element={<ShopLoginPage isSeller={isSeller}/>}></Route>
        <Route path='/shop-homepage' element={
        <ShopProtectedRoute isSeller={isSeller}>
          <ShopHomepage/>
        </ShopProtectedRoute>
        }></Route>
        <Route path='/profile' element={
          <ProtectedRoutes isAuthenticated={isAuthenticated}>
             <Profile/>
          </ProtectedRoutes>
       
        }></Route>
      </Routes>
      <ToastContainer
        position='top-center'
        autoClose={1000}
        hideProgressBar={false}
        closeOnClick
        draggable

      ></ToastContainer>
    </BrowserRouter>

  );
}

export default App;
