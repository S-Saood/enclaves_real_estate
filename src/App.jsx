import React from 'react'
import Explore from './componetns/Explore/Explore'
import Header from './componetns/Header/Header'
import Hero from './componetns/Hero/Hero'
import About from './componetns/About/About'
import Services from './componetns/Services/Services'
import Finance from './componetns/Finance/Finance'
import Clients from './componetns/Clients/Clients'
import Footer from './componetns/Footer/Footer'
import Work from './componetns/Work/Work'

function App() {
  return (
    <div className="main-app">
      
      <Header />
      <Hero />
      <About />
      <Explore/>
      <Services />
      <Finance />
      <Work />
      <Clients />
      <Footer />
        
        
    </div>
  )
}

export default App