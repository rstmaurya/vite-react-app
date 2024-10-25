import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Link, NavLink, Route, Routes, useNavigate } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Login from "./components/Login";
import Invalid from "./components/Invalid";
import { useCookies } from 'react-cookie'
import Logical from "./components/Logical";
import Category from "./components/Category";
import Footer from "./components/Footer";
import Details from "./components/Details";

function App() {


  


  const [cookies, setCookie, removeCookie] = useCookies(['user-id']);
  console.log(cookies['user-id'])

  let navigate = useNavigate()


  function handleLogOut() {
    removeCookie('user-id')
    console.log("Logging out...");
    console.log("Navigating to the home page...");


    navigate('/')
  }
  return (
    <>
     {/* <nav classNameName="bg-secondary position-sticky z-3 top-0 d-flex justify-content-between">

       <div>
       <NavLink
            classNameName={({ isActive }) =>
              isActive ? "btn btn-success fw-bold m-2" : "btn btn-warning fw-bold m-2"
            }
            to="/home"
          ><span classNameName="bi bi-house-exclamation-fill fw-bold me-1  "></span>
            Home
          </NavLink>

          <NavLink
            classNameName={({ isActive }) =>
              isActive ? "btn btn-success fw-bold m-2" : "btn btn-secondary fw-bold m-2"
            }
            to="/logic"
          >
            Logic
          </NavLink>

          <NavLink
            classNameName={({ isActive }) =>
              isActive ? "btn btn-success fw-bold m-2" : "btn btn-secondary fw-bold m-2"
            }
            to="/category"
          >
            Category
          </NavLink>
       </div>
       <div>
       <NavLink
            classNameName={({ isActive }) =>
              isActive ? "btn btn-success m-2" : "btn btn-secondary m-2"
            }
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            classNameName={({ isActive }) =>
              isActive ? "btn btn-success m-2" : "btn btn-secondary m-2"
            }
            to="/contact"
          >
            Contact
          </NavLink>
       </div>
        </nav> */}

        

   <nav className="navbar  navbar-expand-md navbar-light bg-light shadow  z-3  position-sticky top-0">
  
  <div className="container-fluid bg-primary bg-opacity-50  p-2 ">
  <NavLink
            className={({ isActive }) =>
              isActive ? "btn btn-success fw-bold m-2" : "btn btn-warning fw-bold m-2"
            }
            to="/home"
          ><span className="bi bi-house-exclamation-fill fw-bold me-1  "></span>
            Home
          </NavLink>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item me-2">
        <NavLink
            className={({ isActive }) =>
              isActive ? "btn btn-success  m-2  w-100" : "btn btn-light  w-100  m-2"
            }
            to="/logic"
          >
            Logic
          </NavLink>        </li>
        <li className="nav-item me-2">
        <NavLink
            className={({ isActive }) =>
              isActive ? "btn btn-success w-100 m-2" : "btn btn-light  w-100  m-2"
            }
            to="/category"
          >
            Category
          </NavLink>        </li>
        <li className="nav-item me-2 ">
        <NavLink
            className={({ isActive }) =>
              isActive ? "btn  w-100 btn-success m-2" : "btn btn-light w-100 m-2"
            }
            to="/about"
          >
            About
          </NavLink>  </li>
        <li className="nav-item me-2">
        <NavLink
            className={({ isActive }) =>
              isActive ? "btn btn-success m-2  w-100 " : "btn btn-light w-100 m-2"
            }
            to="/contact"
          >
            Contact
          </NavLink> </li>
      </ul>
    </div>
    <button className=" border border-none">{cookies['user-id']?<span onClick={handleLogOut} className='fw-bold btn btn-danger w-100 bi bi-power'>LogOut</span>:<Link to='/' className='fw-bold btn btn-light bi bi-person-fill'>Login</Link>}</button>
  </div>
</nav>

        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="logic" element={<Logical/>} />
          <Route path="category" element={<Category/>} />
          <Route path="details/:ids" element={<Details />} />
          <Route path="invalid" element={<Invalid/>} />
          <Route
            path="*"
            element={
              <h1>
                <code>Not Found!!! please enter right route....</code>
              </h1>
            }
          />
        </Routes>
        <Footer/>
    </>
  );
}

export default App;
