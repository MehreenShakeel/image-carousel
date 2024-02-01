import React from 'react'
import './Footer.css';
import Logo from "./logo.png";
function Footer() {
  return (
    <div className='footer-section'>
      <div className='Details'>
        <div className='boxFooter'>
            <h2>Navigation</h2>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Service</li>
                <li>Pricing</li>
            </ul>
        </div>
        <div className='boxFooter'>
            <h2>Support</h2>
            <ul>
                <li>Contact</li>
                <li>Support</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
            </ul>
        </div>
        <div className='boxFooter'>
            <h2>Social Media</h2>
            <ul>
                <li>Twitter</li>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Linkedin</li>
            </ul>
        </div>
        <div className='boxFooter'>
            <h2>Contact Info</h2>
            <ul>
                <li>Jl. Danau Tamblingan No.180, Sanur,<br/> Denpasar, Bali 80222</li>
                <li>support@domain.com</li>
                <li>(+62) 887-1106-22814</li>
            </ul>
        </div>
      </div>
      <div className='footer'>
        <div><p>Copyright © 2023 Jegtheme. All rights reserved.</p></div>
        <div><img src={Logo} /></div>
        <div><p>Cloud Solution Template Kit by Jegtheme</p></div>
      </div>
    </div>
  )
}

export default Footer
