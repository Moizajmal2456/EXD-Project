import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './Pages/Home';
import { LoginPage } from './Pages/Login';
import { SignUpPage } from './Pages/SignUp';
import { ForgotPasswordPage } from './Pages/ForgotPassword';
import { AboutUsPage } from './Pages/AboutUs';
import { ContactUsPage } from './Pages/ContactUs';
import { DetailPage } from './Pages/DetailPage';
import { PrivateRoute } from './Components/PrivateRoute/PrivateRoute';
import { AddCartPage } from './Pages/AddToCartPage';
import { SelectedProductPages } from './Pages/SelectedProduct';

function App() {
  return (
  <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/signin" element={<SignUpPage/>}/>
      <Route path="/aboutus" element={<AboutUsPage/>}/>
      <Route path="/contactus" element={<ContactUsPage/>}/>
      <Route path="/selectedproduct/:productType" element={<SelectedProductPages/>}/>
      <Route path="/forgotpassword" element={<ForgotPasswordPage/>}/>
      <Route path="/addtocartpage/:id" element={<AddCartPage/>}/>
      <Route path="/detailpage/:id" element={<DetailPage/>}/>
      <Route path="/detailpage/:id" element={<PrivateRoute/>} >
      </Route>
    </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
