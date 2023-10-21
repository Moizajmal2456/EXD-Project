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
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyBkZbGu9gYFaQJzkCJ_IlbD6mqGoizUT4w",
    authDomain: "e-commerce-3bfc4.firebaseapp.com",
    projectId: "e-commerce-3bfc4",
    storageBucket: "e-commerce-3bfc4.appspot.com",
    messagingSenderId: "143704383866",
    appId: "1:143704383866:web:367e7119084e2e2bafb6c3"
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

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
