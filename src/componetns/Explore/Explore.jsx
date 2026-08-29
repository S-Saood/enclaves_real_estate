import React from 'react'
import img1 from '../../assets/pexels-shootsaga-30557705.jpg'
import img2 from '../../assets/construction.jpg'
import './Explore.css'


function Explore() {
  return (
    <section id="project" className="explore-section">
        
        <div className="top-box-explor">
          <h1>Explore Our Communities</h1>
          <p>Discover thoughtfully designed, RDA-approved communities created for modern living.</p>
        </div>


        <div className="bottom-box-explore">
          <div className="col-1-explore">
            <div className="img-box">
              <img src={img1}/>
            </div>
            
            <div className="content-box">
              <h2>01 — Enclave 202
              </h2>
            <p>Building on the success of our flagship development, Enclave 202 brings thoughtfully planned homes, modern amenities, and a welcoming community together. Designed with contemporary architecture and attention to detail, the project offers comfortable living spaces, quality construction, and an environment where families can truly feel at home.</p>
            </div>

          </div>

          <div className="col-1-explore">
            <div className="img-box">
              <img src={img2}/>
            </div>
            
            <div className="content-box">
              <h2>02 — Enclave Serenity</h2>
            <p>A thoughtfully designed residential community created for peaceful, comfortable living, combining modern architecture, quality construction, and well-planned spaces. Enclave Serenity is designed to offer a balanced lifestyle with spacious homes, a welcoming atmosphere, and carefully considered surroundings—giving families a place to live, grow, and create lasting memories.</p>
            </div>

          </div>
      </div>
    </section>

  )
}

export default Explore


