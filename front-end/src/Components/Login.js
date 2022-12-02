import React, { useRef, useState, useEffect } from "react";
import useAuth from '../hooks/useAuth';
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/SmakLogos/Transparent_Logo2_04.png";

import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const API_URL = process.env.REACT_APP_API_URL;

const Login = () => {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/dashboard";

  const userRef = useRef();
  useEffect(() => {
    //userRef.current.focus();
  }, [])

  const [inputs, setInputs] = useState({
    username: "",
    password: ""
  });

  const { username, password } = inputs;

  const onChange = e =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API_URL}/auth/login`,
        
        JSON.stringify({ username, password }),
        {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: false
        }
      );
      //console.log(JSON.stringify(response?.data));

      //const jwtToken = JSON.stringify(response?.data.jwtToken);
      const jwtToken = response?.data.jwtToken;
      //
      const firstName = response?.data?.firstName;
      const lastName  = response?.data?.lastName;
      const userName  = response?.data?.userName;
      const userRole  = response?.data?.userRole;
      
      // Setting the auth state
      setAuth({ jwtToken, firstName, lastName, userName, userRole });
      setInputs('');
      // Setting the success notification
      toast.success("Login Successfully!", 
        {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1000,
        },
      );

      // After validate credentials, proceed to redirect to Dashboard
      setTimeout(() => {
        navigate(from, { replace: true });
      }, 1050);

    } catch (err) {
      console.error(err);
      // Setting up the error notification
      toast.error(err.response.data, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
      }); 
    }
  };

  return (
    <div className="flex-row">
      <ToastContainer />
      <div className="grid grid-cols-2 grid-flow-row auto-rows-max">
        <div className="w-3/4 flex flex-col items-center justify-center px-6 py-[20] mx-auto md:h-full lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight text-center tracking-tight text-gray-900 md:text-2xl dark:text-white">
                      Sign in
                  </h1>
                  <form className="space-y-4 md:space-y-6" >
                    <div>
                      <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                      <input 
                        type="text" 
                        name="username" 
                        id="username" 
                        className="mt-1 p-2 block w-full rounded-md border-gray-300 border-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                        placeholder=""
                        ref={userRef}
                        value={username}
                        onChange={e => onChange(e)}
                        required
                      /> 
                    </div>
                    <div>
                      <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input 
                      type="password" 
                      name="password" 
                      id="password" 
                      className="mt-1 p-2 block w-full rounded-md border-gray-300 border-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                      placeholder=""
                      value={password}
                      onChange={e => onChange(e)}
                      required
                      />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                            </div>
                            <div className="ml-3 text-sm">
                              <label for="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                            </div>
                        </div>
                        <a href="#" className="text-sm font-medium text-gray-600 hover:underline dark:text-primary-500">Forgot password?</a>
                    </div>
                    <button 
                      type="button" 
                      className="w-full text-white bg-smaksalmon hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-3xl text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      onChange={onSubmitForm}
                    >
                      Sign in
                    </button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Don’t have an account yet? 
                        <Link
                          to="/signup"
                          className="mx-2 text-smaksalmon font-semibold"
                        >
                          Sign up!
                        </Link>
                    </p>
                  </form>
              </div>
          </div>
        </div>

        <div className="p-8">
          <div className="h-full p-20 bg-[url('https://images.unsplash.com/photo-1652862730784-bb2a6e862514?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80')] bg-opacity-75 ">
            <div className="h-full p-[28px] bg-white bg-opacity-75 rounded-md text-center">
              <div className="flex-row">
                <h1 className="p-4 text-xl font-extrabold leading-tight tracking-tight bg-gray-600 text-white rounded-md md:text-4xl dark:text-white uppercase">
                  Not sure what to eat today?
                </h1> 
              </div>  
              <div className="flex-row items-center" >
                <a href="#" className="mb-6 text-2xl">
                  <img className="w-60 h-60 mx-auto " src={logo} alt="SMAK logo"/>    
                </a>
                <h2 className=" my-4 font-bold leading-tight tracking-tight text-smaksalmon text-6xl dark:text-white">
                <b className="font-extrabold ">SMAK</b> is here to help!
                </h2>
              </div>  
            </div>  
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;