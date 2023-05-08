import React from 'react'
import { Link } from "react-router-dom";
import "../../styles/footer.css";
import company_image from "../../images/company.png"

function Footer() {
  return (
    <>
      <footer className="contact-area">
    
        <div className="center">
          <img src={company_image} alt="logo"/>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum </p>
        <h6>1120 Lorem ipsum dolor sit amet, Berhampur , Odisha.</h6>
        <h6>+91 2345 6789 12<span>|</span>+91 2345 6789 12</h6>
        <div className="link">
          <Link to="/about" className='space'>About</Link>|<Link to="/contact" className='space'>Contact</Link>|
          <Link to="/policy" className='space'>Privacy Policy</Link>         
        </div>
        <h5>Copyright &copy; 2019  All Rights Reserved.</h5>
                
      </footer>
    </>
  )
}

export default Footer