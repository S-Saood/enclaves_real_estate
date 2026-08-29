import React, {useState} from 'react'
import './Header.css'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MenuIcon from '@mui/icons-material/Menu';
import InstagramIcon from '@mui/icons-material/Instagram';



function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div>
      <header className="header">
        <nav className="nav-bar">
          <div id="#home" className="left-nav home">
            <a href="#home">
            <AccountBalanceIcon fontSize="large" />
            </a>
            <div id="tinko">
            <p id="tinko-1">ENCLAVES</p>
            <p id="tinko-2">REAL ESTATE</p>
            </div>
          </div>
          <div className="middle-nev">
            <a href="#home">Home</a>
            
            <a href="#about">About</a>
            <a href="#service">Service</a>
            <a href="#project">Projects</a>
            <a href="#footer">Contact</a>
          </div>
          <div className="right-nav">
            <a href="tel:+917900519312" target="_blank">
            Enquire now

            </a>
            

          </div>

          <MenuIcon 
          id="menu"
          onClick={()=> setMenuOpen(true)}/>
        </nav>
      </header>


      {/* sidebar */}
        <div className={`sidebar ${menuOpen ? 'sidebar-open' : ''}`}> {/* Close Button */} <button className="close-menu" onClick={() => setMenuOpen(false)} > × </button> {/* Sidebar Links */} <div className="sidebar-links"> <a href="#home" onClick={() => setMenuOpen(false)}> Home </a> <a href="#about" onClick={() => setMenuOpen(false)}> About </a> <a href="#service" onClick={() => setMenuOpen(false)}> Service </a> <a href="#project" onClick={() => setMenuOpen(false)}> Projects </a> <a href="#footer" onClick={() => setMenuOpen(false)}> Contact </a> </div> </div>
      {/* sidebar-end */}
    </div>
  )
}

export default Header