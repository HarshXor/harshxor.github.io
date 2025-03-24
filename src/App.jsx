import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import photo from './assets/afrizal.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import './App.css'
import './Other.css'

function App() {
  const [count, setCount] = useState(0)
  const year = new Date().getFullYear();

  return (
    <>
      <div className='profile'>
        <div className='profile-overlay'>
          <div className='row' style={{ marginBottom: "20px" }}>
            <div className='col fade-in' style={{ textAlign: "center" }}>
                <img style={{ height: "300px", borderRadius: "50%", border: "1px solid white" }} src={photo} />
            </div>
            <div className='col fade-in'>
              <div style={{ color: "white", fontSize: "25px", fontWeight: "bold", marginBottom: "20px" }}>
                Hi, I'm Afrizal Fadillah Anwar
              </div>
              <div style={{ fontSize: "15px", marginBottom: "20px" }}>
                Cyber Security Offensive & Defensive | Full-Stack Developer
              </div>
              <div style={{ color: "white" }}>
                "As a Cyber Security professional, I have a strong focus on both Offensive and Defensive techniques to protect and secure digital systems. Additionally, I am a Full-Stack Developer, proficient in building secure, dynamic applications from front-end to back-end."
              </div>
              <div style={{ fontSize: "20px", fontWeight: "bold", marginBlock: "20px" }}>
                Contact
              </div>
              <div style={{ marginTop: "20px", display: "flex", gap: "25px", justifyContent: "left" }}>
                <a href="mailto:afrizal@incrustwerush.org" title="Email" target='_blank'>
                  <FontAwesomeIcon icon={faEnvelope} size="5x" style={{ color: "white" }} />
                </a>
                <a href="https://github.com/afrzlfa" title="GitHub" target='_blank'>
                  <FontAwesomeIcon icon={faGithub} size="5x" style={{ color: "white" }} />
                </a>
                <a href="https://www.linkedin.com/in/afrzlfa/" title="LinkedIn" target='_blank'>
                  <FontAwesomeIcon icon={faLinkedin} size="5x" style={{ color: "white" }} />
                </a>
              </div>
              {/*}
              <div style={{ fontSize: "20px", fontWeight: "bold", marginBlock: "20px" }}>
                Certificate
              </div>
              <div>
                <img style={{height: "100px", borderRadius: "50%"}} src="https://cyberwarfare.live/wp-content/uploads/2023/04/C3SA-01-1-1-100x100.png" />
                <img style={{height: "100px", borderRadius: "50%"}} src="https://secops.group/wp-content/uploads/2023/06/Certified-mobile-pentester-CMPen.png" />
              </div>
              */}
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: "20px", marginBottom: "20px", borderRadius: "10px", border: "1px solid aqua", marginInline: "20px" }} className='fade-in'>
        <div style={{ color: "white", fontSize: "20px", fontWeight: "bold", marginBlock: "20px", textAlign: "center" }}>
          Certificate
        </div>
        <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
          <img style={{height: "100px", borderRadius: "50%"}} src="https://cyberwarfare.live/wp-content/uploads/2023/04/C3SA-01-1-1-100x100.png" />
          <img style={{height: "100px", borderRadius: "50%"}} src="https://secops.group/wp-content/uploads/2023/06/Certified-mobile-pentester-CMPen.png" />
        </div>
      </div>

      <div className='row' style={{ marginBottom: "20px" }}>
        <div className='col fade-in'>
          <div id="experience" style={{ color: "white", fontSize: "20px", fontWeight: "bold", marginBottom: "20px", textAlign: "center" }}>
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
        <div className='col fade-in'>
          <div id="project" style={{ color: "white", fontSize: "20px", fontWeight: "bold", marginBottom: "20px", textAlign: "center" }}>
            Project
          </div>
          <div className="item-container">
            <div className="item fade-in">
              <div className="item-title">Pentesting WebApps & Mobile Apps ( PT Teleanjar Indonesia )</div>
              <div className="item-company">Nov 2024 - Dec 2024</div>
              <p>
                <ul>
                  <li>Mobile Pentest (Android)</li>
                  <li>API Pentest</li>
                  <li>Web Pentest</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*
            <div style={{ marginTop: "20px", display: "flex", gap: "25px", justifyContent: "center" }}>
        <a href="https://wa.me/6281234567890" title="WhatsApp">
          <FontAwesomeIcon icon={faPhone} size="3x" style={{ color: "white" }} />
        </a>
        <a href="mailto:your.email@example.com" title="Email">
          <FontAwesomeIcon icon={faEnvelope} size="3x" style={{ color: "white" }} />
        </a>
        <a href="https://github.com/yourgithub" title="GitHub">
          <FontAwesomeIcon icon={faGithub} size="3x" style={{ color: "white" }} />
        </a>
        <a href="https://linkedin.com/in/yourlinkedin" title="LinkedIn">
          <FontAwesomeIcon icon={faLinkedin} size="3x" style={{ color: "white" }} />
        </a>
      </div>
      <div className='footer'>
        Copyright &copy;{year} - Afrizal F.A
      </div>
      */}
    </>
  )
}

export default App
