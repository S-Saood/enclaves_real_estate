import React from 'react'

import './Clients.css'


function Clients() {

  const testimonials = [
  {
    id: 1,
    quote:
      "The team at Mukhiya Enclaves made our dream of owning a beautiful home a reality. Their commitment to quality and customer service is truly exceptional. We couldn't be happier with our new home in Enclave 101.",
    name: "The Khan Family",
    role: "Residents, Enclave 101",
  },
  {
    id: 2,
    quote:
      "The interior design team perfectly captured our style and created a space that is both beautiful and functional. Their attention to detail and creativity exceeded our expectations. We highly recommend their services.",
    name: "A. and S. Ali",
    role: "Interior Design Clients",
  },
  {
    id: 3,
    quote:
      "From the initial inquiry to the final handover, the entire process was seamless and professional. The community is well-maintained, and the amenities are fantastic. We are proud to be a part of Enclave 202.",
    name: "Dr. and Mrs. Sharma",
    role: "Residents, Enclave 202",
  },
];


  return (
    <section id="clients" className="clients-section">
        
        <div className="top-box-clients">
          <h1>From Our Valued Clients</h1>
          <p>We've partnered with leading financial institutions to make your dream home a reality.</p>
        </div>


        <div className="bottom-box-clients">
          {testimonials.map((item)=>(
            <div className="col-1-clients">            
            <div className="content-box-clients">
            <p>{item.quote}</p>
            <h2>{item.name}</h2>
            <h3>{item.role}</h3>

            </div>

          </div>
          ))}
          

          {/* <div className="col-2-clients">

            <div className="content-box-clients">
              
            <p>"The interior design team perfectly captured our style and created a space that is both beautiful and functional. Their attention to detail and creativity exceeded our expectations. We highly recommend their services."</p>
            <h2>- A. and S. Ali</h2>
            <h3>Interior Design Clients</h3>
            </div>

          </div>

          <div className="col-2-clients">

            <div className="content-box-clients">
            <p>"From the initial inquiry to the final handover, the entire process was seamless and professional. The community is well-maintained, and the amenities are fantastic. We are proud to be a part of Enclave 202."</p>
            <h2>- Dr. and Mrs. Sharma</h2>
            <h3>Residents, Enclave 202</h3>
            </div>

          </div> */}
      </div>
    </section>

  )
}

export default Clients


