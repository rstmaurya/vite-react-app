import React from 'react'
import Counter from './CountingEffect'

const Footer = () => {
  return (
    <div>
      <section className="bg-section text-white mt-2">
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-4 mt-5  col-md-6 col-sm-12  p-fontsizee">
            <h2 className='mb-3 text-decoration-underline'>Get In Touch</h2>
            <p>Newbury: +44 (0) 208 328 9814</p>
            <p>Manchester: +44 (0) 161 7300 118</p>
            <p>Support: +44 (0) 208 328 9818</p>
            <p>Out of Hours: +44 (0) 208 328 9808</p>
            <button className='  w-50'>CONTACT US</button>
          </div>
          <div className="col-lg-4 mt-5 col-md-6 col-sm-12">
            <h2 className='mb-3 text-decoration-underline '>Connect</h2>
            <p>Follow us on social media to keep up to date with our latest news and events.</p>
            <p> <span className='bi bi-youtube   fs-1 p-2'></span><span className='bi fs-1 p-2 bi-linkedin  ms-3'></span></p>
          </div>
          <div className="col-lg-4 mt-5 col-md-6 col-sm-12 p-fontsizee">
            <h2 className='mb-3 text-decoration-underline'>Newsletter Sign Up</h2>
            <p>Sign up to our newsletter to keep up to date with our latest news and events.</p>
            <button className='w-50 '>SIGN UP</button>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4 col-sm-12  text-white fs-5">
            <p>© Copyright The NAV | 365 People 2024</p>
            <Counter targetValue={367} duration={7000} /> 
            
       
          </div>
          <div className="col-md-8 col-sm-12 text-white fs-5">
            <p>Cookie Policy | Modern Slavery Act | Website Terms of Use | Privacy Policy | Contact Us</p>
            
          </div>
        </div>
      </div>
      

    </section>
      
    </div>
  )
}

export default Footer
