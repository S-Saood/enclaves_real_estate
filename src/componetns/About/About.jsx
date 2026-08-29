import './About.css'
import aboutImg from '../../assets/Gemini_Generated_Image_c5q7zuc5q7zuc5q7.png'

function About() {
  return (
    <section id="about" className="pickup-section">
          
          
          <div className="left-box-pickup">
            <h1>Building Communities, Not Just Homes</h1>
            <p>For over a decade, BiteX  Enclaves has been creating thoughtfully designed residential communities in Rampur. With a commitment to architectural excellence, quality construction, and resident satisfaction, we have delivered 100+ successful projects and built a reputation for trust, quality, and reliability.</p>
            <hr />

            <div className="string">
            <strong>RDA Approved • UP RERA Registered</strong>
            {/* <strong>UPRERA Registered: UPRERAXYZ122345</strong> */}
            </div>
            <button>LEARN MORE</button>
          </div>


          <div className="right-box-pickup">
            <img src={aboutImg}/>
          </div>


      </section>
  )
}

export default About


