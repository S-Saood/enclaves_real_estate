import React from 'react'
import './Footer.css'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';


function Footer() {
  return (
    <div>
          <footer id="footer">
      <div className="fotoer-container">
      <div className="top-footer">
      <div className="footer-1">
        <AccountBalanceIcon fontSize="large"/>
        <p>Trust in Quality. Live in Innovation. Find Your Dream Home in Rampur.</p>
      </div>

      <div className="footer-2">
        <h3>Quick Links</h3>
        <a>About Us</a>
        <a>Service</a>
        <a>Projects</a>
        <a>Contact Us</a>
      </div>

      <div className="footer-3">
        <h3>Contact</h3>
        <a href="https://www.google.com/maps" trarget="_blank"><PlaceIcon />
          Enclave 101, Rampur, UP</a>
        <a href="tel:+917900519312">
          <PhoneIcon />
          +91-835944578</a>
        <a href="mailto:bitex@gmail.com">
          <EmailIcon />
          bitex@gmail.com</a>
      </div>
            

      <div className="footer-4">
        <h3>Follow Us</h3>
        <span className="last-footer">
        
        <a href="https://www.twitter.com/" target="_blank" className="icon">
        <TwitterIcon fontSize="large" />
        </a>

        <a href="https://www.youtube.com/" target="_blank" className="icon">
        <YouTubeIcon fontSize="large"/>
        </a>
        <a href="https://www.instagram.com/" target="_blank" className="icon">
        <InstagramIcon fontSize="large"/>
        </a>
        </span>
      </div>

      
      </div>
            <hr />

      <div className="bottom-footer">
        <p>© 2026 BiteX Enclaves. All Rights Reserved.

</p>

      </div>
      </div>
      
    </footer>
    </div>
  )
}

export default Footer