import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import photo from './assets/afrizal.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const year = new Date().getFullYear();

  return (
    <>
      <div className='row' style={{ marginBottom: "20px" }}>
        <div className='col fade-in' style={{ textAlign: "center" }}>
          <img style={{ height: "300px", borderRadius: "50%" }} src={photo} />
        </div>
        <div className='col fade-in'>
          <div style={{ fontSize: "25px", fontWeight: "bold", marginBottom: "20px" }}>
            Hi, I'm Afrizal Fadillah Anwar
          </div>
          <div style={{ fontSize: "15px", marginBottom: "20px" }}>
            Cyber Security Offensive & Defensive | Full-Stack Developer
          </div>
          <div>
            "As a Cyber Security professional, I have a strong focus on both Offensive and Defensive techniques to protect and secure digital systems. Additionally, I am a Full-Stack Developer, proficient in building secure, dynamic applications from front-end to back-end."
          </div>
          <div style={{ fontSize: "20px", fontWeight: "bold", marginBlock: "20px" }}>
              Certificate
            </div>
            <div>
              <img style={{height: "100px", borderRadius: "50%"}} src="https://cyberwarfare.live/wp-content/uploads/2023/04/C3SA-01-1-1-100x100.png" />
              <img style={{height: "100px", borderRadius: "50%"}} src="https://secops.group/wp-content/uploads/2023/06/Certified-mobile-pentester-CMPen.png" />
            </div>
        </div>
      </div>
      <div className='fade-in' style={{ marginInline: "20px", marginBottom: "20px"}}>
        <div style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "20px", textAlign: "center" }}>
          Experience
        </div>
        <div className="item-container">
          <div className="item fade-in">
            <div className="item-title">Penetration Tester</div>
            <div className="item-company">VENTURO | Professional Programmer | Full-time</div>
            <div className='item-detail'>May 2024 to Present</div>
            <div className='item-detail'>Malang, East Java, Indonesia | On-site</div>
            <p>
              <ul>
                <li>Conducting penetration testing on web and mobile apps </li>
                <li>Creating penetration test reports </li>
                <li>Performing security analysis </li>
                <li>Security research </li>
                <li>Incident response </li>
                <li>Monitoring SIEM Wazuh & Elastic Stack</li>
              </ul>
            </p>
          </div>
          <div className="item fade-in">
            <div className="item-title">Fullstack Web Developer</div>
            <div className="item-company">Freelance</div>
            <div className='item-detail'>Jan 20018 to Present</div>
            <div className='item-detail'>Malang, East Java, Indonesia</div>
            <p>
            <ul>
                <li>Develop monolith or microservice web applications </li>
                <li>Build web backends using PHP MVC </li>
                <li>Design and manage databases with MySQL</li>
                <li>Create front-end using HTML, CSS, and JavaScript</li>
              </ul>
            </p>
          </div>
          <div className="item fade-in">
            <div className="item-title">Support Maintenance | Web Programmer Full Stack</div>
            <div className="item-company">PT. Assist Software Indonesia Pratama</div>
            <div className='item-detail'>Full-time</div>
            <div className='item-detail'>Malang, East Java, Indonesia</div>
            <p>
              <ul>
                <li>Responsible for maintenance and development of full-stack web applications (PHP MVC, HTML, CSS, JS) </li>
                <li>Communicate with clients</li>
              </ul>
            </p>
          </div>
          <div className="item fade-in">
            <div className="item-title">Programmer Project Lead</div>
            <div className="item-company">Forex Basecamp</div>
            <div className='item-detail'>Part-time</div>
            <div className='item-detail'>Malang, East Java, Indonesia</div>
            <p>
              <ul>
                <li>Responsible for managing team tasks </li>
                <li>Full-stack web development (PHP MVC, MySQL, HTML, CSS, JS) </li>
                <li>Develop automation software with Python, Java, Node.js (JavaScript) </li>
                <li>Integrate web applications with automation software</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      {/*
      <div className='footer'>
        Copyright &copy;{year} - Afrizal F.A
      </div>
      */}
    </>
  )
}

export default App
