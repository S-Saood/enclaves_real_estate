import React from 'react'
import './Work.css'
import picA from '../../assets/Gemini_Generated_Image_do0d5rdo0d5rdo0d.png'
import picB from '../../assets/Gemini_Generated_Image_xv0o27xv0o27xv0o.png'
import picC from '../../assets/pexels-aj-ahamad-767001191-29149081.jpg'
import picD from '../../assets/pexels-benhur-emmanuel-83498627-16750958.jpg'
import picE from '../../assets/Gemini_Generated_Image_9p5hhy9p5hhy9p5h.png'
import picF from '../../assets/pexels-perqued-17840523.jpg'
import picG from '../../assets/pexels-real-estate-4k-719913841-18651505.jpg'
import picH from '../../assets/pexels-muhammad-abdullah-2002371-12224252.jpg'



import pics from '../../assets/2rem.png'


function Work() {
  return (
    <section id="Work" className="Work-sec">
      <div className="top-Work">
        <h1>A Glimpse of Our Work

</h1>
      </div>
      <div className="bottom-Work">
        
        <div className="bottom-Work-card">
          <img id="work-img" src={picA} />
          </div>
        <div className="bottom-Work-card">
<img id="work-img" src={picB} />        </div>
        <div className="bottom-Work-card">
          <img id="work-img" src={picC} /></div>

        <div className="bottom-Work-card">
          <img id="work-img" src={picD} />
        </div>
        <div className="bottom-Work-card">
          <img id="work-img" src={picE} /></div>
        <div className="bottom-Work-card">
          <img id="work-img" src={picF} /></div>

        <div className="bottom-Work-card">
          <img id="work-img" src={picG} /></div>


        <div className="bottom-Work-card">
          <img id="work-img" src={picH} /></div>
        

        

      </div>


    </section>
  )
}

export default Work

