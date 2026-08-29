import React from 'react'

import './Finance.css'


function Finance() {

    const projects = [
  {
    id: 1,
    number: "01",
    title: "Enclaves 101",
    description:
      "Building on the success of our flagship development, Enclaves 202 brings thoughtfully planned homes, modern amenities, and a welcoming community together. Designed with contemporary architecture and attention to detail, the project offers comfortable living spaces, quality construction, and an environment where families can truly feel at home.",
  },
  {
    id: 2,
    number: "02",
    title: "Enclaves Serenity",
    description:
      "A thoughtfully designed residential community created for peaceful, comfortable living, combining modern architecture, quality construction, and well-planned spaces. Enclaves Serenity offers a balanced lifestyle with spacious homes, a welcoming atmosphere, and carefully considered surroundings.",
  },
  {
    id: 3,
    number: "03",
    title: "Enclaves Heights",
    description:
      "A modern residential development designed to bring together quality construction, thoughtful planning, and comfortable living. Enclaves Heights offers well-planned spaces and a welcoming environment for families looking to build a secure and fulfilling future.",
  },
];


  


  return (
    <section id="finance" className="finance-section">
        
        <div className="top-box-finance">
          
          <h1>Flexible Home Financing
</h1>
          <p>We've partnered with leading financial institutions to offer flexible financing options, making your dream of owning a home easier and more accessible.</p>
        </div>


        <div className="bottom-box-finance">
          {projects.map((item)=>(
            <div className="col-1-finance" key={item.id}>            
            <div className="content-box-finance">
              <h2>{item.title}</h2>
            <p>{item.description}</p>
            </div>

          </div>
          ))}
          

            </div>
    </section>

  )
}

export default Finance


