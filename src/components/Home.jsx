import React, { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import CalculateSI from '../lazy-image/ClaculateSi';
import Stopwatch from '../lazy-image/Stopwatch';

const Home = () => {

  let navigate = useNavigate()

  const [time, setTime] = useState();
  const [cookies, setCookie, removeCookie] = useCookies(['user-id']);


  let timey = new Date();


  function Clock() {
    var now = new Date();
    var hh = now.getHours();
    var mm = now.getMinutes();
    var ss = now.getSeconds();
    var amPm = hh >= 12 ? "PM" : "AM";

    var totalTime = hh + ":" + padZero(mm) + ":" + padZero(ss) +  ":" + amPm
    setTime(totalTime)

  }

  function padZero(num) {
    return (num < 10 ? "0" : "") + num;
  }

  useEffect(() => {
    // debugger;
    if (cookies['user-id'] == null) {
      navigate('/')
    } else {
      setInterval(() => {
        Clock()
      }, 1000);

    }

    return () => clearInterval(Clock());

  }, [])

  function handleLogOut() {
    removeCookie('user-id')
    navigate('/')
  }

  return (
    <>
      <div className='h1 text-center text-primary '>
        Welcome to Vite App..... <span className='text-warning bi bi-person-fill'>[{cookies['user-id']}]</span> <span onClick={handleLogOut} className='btn btn-danger'>LogOut</span>
        
         <p className='mt-4 timers'>{time}</p>
         
          <p >{timey.toDateString()}</p>

      </div> <hr />
      
      <Stopwatch/>

      <hr/>
      <CalculateSI />

      {/* Footer start here........... */}


    </>
  )
}

export default Home
