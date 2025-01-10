import React, { Fragment } from "react";


import { Routes, Route } from "react-router-dom";
import { UserLogin } from "./components/forms/user/userLogin";
import { UserRegister } from "./components/forms/user/userSignup";
import { WelcomePage } from "./components/pages/welcome";
import { PhoneVerification } from "./components/forms/user/phoneVerification";
import EmailVerification from "./components/forms/user/emailVerification";
import { PasswordChange } from "./components/forms/user/changePassword";
import Category from "./components/pages/category";
import About from "./components/pages/about";
import { Toaster } from "react-hot-toast";
import ChatComponent from "./components/pages/user/chat";
import ScrollToTop from "./ScrollToTop";
 

export const App: React.FC = React.memo(() => {

  return (
    <Fragment>
      <Toaster position="top-center" />
      <ScrollToTop/>
      <Routes>
      <Route path='/' element={<WelcomePage/>} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/user/phoneVerification" element={<PhoneVerification />} />
        <Route path="/user/emailVerification" element={<EmailVerification />} />
        <Route path="/user/register" element={<UserRegister />} />
        <Route path="/user/changePassword" element={<PasswordChange />} />
        <Route path="/user/Category" element={<Category />} />
        <Route path="/about" element={<About />} />
        <Route path="/chat" element={<ChatComponent/>} />
      

      </Routes>
    </Fragment>
  );
});



