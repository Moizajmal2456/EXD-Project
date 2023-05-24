import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './Pages/Home';
import { LoginPage } from './Pages/Login';
import { SignInPage } from './Pages/SignIn';
import { ForgotPasswordPage } from './Pages/ForgotPassword';

function App() {
  return (
  <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/signin" element={<SignInPage/>}/>
      <Route path="/forgotpassword" element={<ForgotPasswordPage/>}/>
    </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
