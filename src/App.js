import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './Pages/Home';
import { LoginPage } from './Pages/Login';
import { SignUpPage } from './Pages/SignUp';
import { ForgotPasswordPage } from './Pages/ForgotPassword';
import { AboutUsPage } from './Pages/AboutUs';
import { ContactUsPage } from './Pages/ContactUs';
import { ShoesPage } from './Pages/ShoesPage';
import { PentsPage } from './Pages/PentsPage';
import { BagsPage } from './Pages/BagsPage';
import { ShirtsPage } from './Pages/ShirtsPage';
import { DetailPage } from './Pages/DetailPage';
import { PrivateRoute } from './Components/PrivateRoute/PrivateRoute';

function App() {
  return (
  <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/signin" element={<SignUpPage/>}/>
      <Route path="/forgotpassword" element={<ForgotPasswordPage/>}/>
      <Route path="/aboutus" element={<AboutUsPage/>}/>
      <Route path="/contactus" element={<ContactUsPage/>}/>
      <Route path="/shirtspage" element={<ShirtsPage/>}/>
      <Route path="/pentspage" element={<PentsPage/>}/>
      <Route path="/bagspage" element={<BagsPage/>}/>
      <Route path="/shoespage" element={<ShoesPage/>}/>
      <Route path="/detailpage/:id" element={<PrivateRoute/>} >
      <Route path="/detailpage/:id" element={<DetailPage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
