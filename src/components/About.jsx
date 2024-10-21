import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Home from './Home'
import Contact from './Contact'
import Footer from './Footer'

const About = () => {
const[user,setUser]=useState([])
const[name,setName]=useState('')
const[userName,setUserName]=useState('Rahul')

let time= new Date()

useEffect(()=>{

  axios.get('https://jsonplaceholder.typicode.com/users').then(res=>{
    setUser(res.data)
  })
  setUserName('Sunny...')


  console.log('hi')
},[])




  return (
   <>
    <div className='container mt-2'>
      <div className="row">
        <div className="col-lg-3 borderClass  col-md-6 col-sm-12">
          <p className='bg-info text-danger h4 p-1'>Api Data..from json placeholder</p>
          {
            user.map(user=><li key={user.id}>{user.name}</li>)
          }

        </div>
        <div className="col-lg-3 borderClass col-md-6 col-sm-12">
          <h1>Enter Name</h1>
          <input className='form-control ' type="text" placeholder='enter name' onChange={(e)=>setName(e.target.value)} /><br/>
          <p>Name:{name}</p>
          <p className='text-danger'>Hello!! {userName}</p>
        </div>
        <div className="col-lg-3 borderClass col-md-6 col-sm-12">
          <h2>Time Zone</h2>
          Date:{time.toString()}
        </div>
        <div className="col-lg-3 borderClass d-lg-none  col-md-6 col-sm-12 ">
          <Home/>
        </div>
        
      </div>
      <div className="row">
        <div className="col">
          <Contact />
        </div>
      </div>

      {/* About Us Content is here */}

      <div className="row mt-5">
        <div className="col-md-5 col-sm-12 ">
          <div className='text-center mt-5'>
            <img width='100%' height='410' src="https://www.the365people.com/hubfs/Website%20Assets/Website%20Images/Circle%20images%20600x600/Collaboration%202023%20600x600.png" alt="" />
          </div>
        </div>
        <div className="col-md-7 col-sm-12  p-fontsize">
          <h2 style={{fontSize:'72px',color:'red',fontWeight:'600',textAlign:'center'}}>About Us</h2>
          <p >As a leading Microsoft Dynamics 365 Business Central Partner, we love empowering our customers with the knowledge and technology to transform their business. We have been doing that ever since the days of Navision version 1.0!</p>
          <p>Our experts turn up to work every day to deliver high quality services, which drives job satisfaction and in turn successful projects. We do this across many countries and a wide range of industries. </p>
          <p>We are proud to be one of the most highly regarded Microsoft Dynamics 365 Business Central and Dynamics NAV partners in the UK and Ireland.</p>
          <p className='text-end'> <button>READ MORE ABOUT US</button></p>
        </div>
      </div>
    </div>
    <p className='text-center'><Footer/></p>
   </>
  )
}

export default About
