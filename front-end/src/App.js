import React, { useState, useEffect, Navigate, redirect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// COMPONENTS
import Layout from './Components/Layout';
import Login from "./Components/Login";
import Register from "./Components/Register";
import About from "./Components/About";
import Dashboard from "./Components/Dashboard";
import Reviews from "./Components/Reviews";
import Unauthorized from './Components/Unauthorized';
import RequireAuth from './Components/RequireAuth';

// PAGES
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Index from "./Pages/Index";
import Order from "./Pages/Order";
import History from "./Pages/OrderHistory";
import PaymentFinalized from "./Pages/PaymentFinalized";
import Budget from "./Pages/Budget";
import PaymentInfo from "./Pages/PaymentInfo";

// TOASTIFY
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
//toast.configure();

const ROLES = {
  'User': 2,
  'Admin': 1
}

function App() {
  //
  //const API_URL = process.env.REACT_APP_API_URL;


  // const checkAuthenticated = async () => {
  //   try {
  //     const res = await fetch(`${API_URL}/auth/verify`, {
  //       method: "POST",
  //       headers: { jwt_token: localStorage.token }
  //     });

  //     const parseRes = await res.json();
  //     // console.log(parseRes)
  //     parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // };

  // useEffect(() => {
  //   //checkAuthenticated();
  // }, []);

  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  // // const setAuth = boolean => {
  // //   setIsAuthenticated(boolean);
  // // };

  // // console.log('isAuthenticated:', isAuthenticated)

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* PUBLIC ROUTES */}
        <Route path="index" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/error404" element={<Error />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* PROTECTED ROUTES */}
        <Route element={<RequireAuth allowedRoles={[ROLES.User]}  />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        {/* <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/order" element={<Order />} />
        <Route path="/history" element={<History />} />
        <Route path="/pickabudget" element={<Budget />} />
        <Route path="/paymentdone" element={<PaymentFinalized />} />
        <Route path="/testimonials" element={<Reviews />} />
        <Route path="/paymentInfo" element={<PaymentInfo />} /> */}
      </Route>
    </Routes>
  );
}

export default App;