import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './Hero.css'


function Hero() {


  function handleWhatsapp() {
    window.open("https://wa.me/917900519312?text=Hello%2C%20I%20am%20interested%20in%20your%20properties.",
    "_blank")
  }


  
  return (
    <section id="home" className="hero-section">
        <div className="hero-content">
          <div className="blr-bg">
          <h1>Discover Your Dream Home at Enclaves</h1>
          <p>Where Modern Living Meets Timeless Elegance.</p>
          </div>
          <div id="btn-hero">
          <a href="#Work" id="btn-1" >EXPLORE PROJECTS</a>

          <a href="tel:+917900519312" target="_blank" id="hide-btn">
            Enquire now 
            </a>
      
      </div>
          
        </div>
        <div onClick={handleWhatsapp}
        className="whatsapp">
              <WhatsAppIcon fontSize="large"/>
          </div>
      </section>
    
  )
}

export default Hero