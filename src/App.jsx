import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import photo from './assets/afrizal.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import './App.css'
import './Other.css'

function App() {
  const [count, setCount] = useState(0)

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
                Hi, I'm Afrizal Fadillah Anwar (@HarshXor)
              </div>
              <div style={{ fontSize: "15px", marginBottom: "20px" }}>
                Cyber Security Offensive & Defensive | Full-Stack Developer
              </div>
              <div style={{ color: "white" }}>
                "As a Cyber Security professional, I have a strong focus on both Offensive and Defensive techniques to protect and secure digital systems. Additionally, I am a Full-Stack Developer, proficient in building secure, dynamic applications from front-end to back-end."
              </div>
              <div style={{ fontSize: "15px", marginBlock: "20px" }}>
              <a href='#certificate' style={{ color: "white" }}>Certificate</a> | <a href='#experience' style={{ color: "white" }}>Experience</a> | <a href='#project' style={{ color: "white" }}>Project</a>
              </div>
              <div style={{ fontSize: "20px", fontWeight: "bold", marginBlock: "10px" }}>
                Contact
              </div>
              <div style={{ display: "flex", gap: "25px", justifyContent: "left" }}>
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

      <div id="certificate" style={{ padding: "20px", marginBottom: "20px", borderRadius: "10px", border: "1px solid aqua", marginInline: "20px" }} className='fade-in'>
        <div style={{ color: "white", fontSize: "20px", fontWeight: "bold", marginBlock: "20px", textAlign: "center" }}>
          Certificate
        </div>
        <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
          <a href="https://labs.cyberwarfare.live/credential/achievement/693bd5a14ae648396170161a" target="_blank" title="CRTA Certificate">
            <img style={{height: "100px", borderRadius: "50%"}} src="https://cyberwarfare.live/wp-content/uploads/2025/11/CRTA.webp" />
          </a>
          <a href="https://labs.cyberwarfare.live/credential/achievement/69363492e094d36ed04eda2f" target="_blank" title="C3SA Certificate">
            <img style={{height: "100px", borderRadius: "50%"}} src="https://cyberwarfare.live/wp-content/uploads/2023/04/C3SA-01-1-1-100x100.png" />
          </a>
          <a href="https://candidate.speedexam.net/certificate.aspx?SSTATE=am4131EniU8ntjp4bO5mXaWg3Sw2CAjK9BYMzT903sPpW8TIBGyNS7AphN/FWJCBDvp6nm/LTjyDD2Y+ANaZ7GAjqUoaQcY4GnlIZjjClaM=" target="_blank" title="CMPen Certificate">
            <img style={{height: "100px", borderRadius: "50%"}} src="https://pentestingexams.com/wp-content/uploads/2023/02/cert-stamp-cmpen-android.png" />
          </a>
          <a href="https://courses.redteamleaders.com/exam-completion/49e358652c67ac75" target="_blank" title="CCEP Certificate">
          <img style={{height: "100px", borderRadius: "50%"}} src="https://images.coursestack.com/b442ad36-44fe-4b6f-99f5-fd6f7ddbb4b4/121aa084-cf7e-4b73-bda3-d38f53f9bff1" />
          </a>
          <a href="https://courses.redteamleaders.com/exam-completion/1fbb9fa2f5639aec" target="_blank" title="CTIGA Certificate">
            <img style={{height: "100px", borderRadius: "50%"}} src="https://images.coursestack.com/92f9ada1-f557-450f-a21f-8ae56c42bb0f/9a2fa7a5-a015-49a7-a6c8-7c9be291af47" />
          </a>
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
              <div className='item-detail'>Jan 2018 to Present</div>
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
              <div className="item-title">R-WAF (Rusher Web Application Firewall)</div>
              <div className="item-company">Link Project: <a style={{ color: "white" }} href='https://github.com/ICWR-TEAM/R-WAF' target='_blank'>https://github.com/ICWR-TEAM/R-WAF</a></div>
              <p>
                <div style={{ marginBottom: "10px" }}>
                  Overview:
                </div>
                <div style={{ marginBottom: "10px" }}>
                  R-WAF is a modular Web Application Firewall powered by Python + Flask + OpenResty/Nginx. It provides comprehensive protection against common web attacks with both request and response filtering capabilities, plus a real-time monitoring dashboard.
                </div>
              </p>
            </div>
          </div>
          
          <div className="item-container">
            <div className="item fade-in">
              <div className="item-title">R-AScan (Rusher Automatic Scanner)</div>
              <div className="item-company">Link Project: <a style={{ color: "white" }} href='https://github.com/ICWR-TEAM/R-AScan' target='_blank'>https://github.com/ICWR-TEAM/R-AScan</a></div>
              <p>
                <div style={{ marginBottom: "10px" }}>
                  Overview:
                </div>
                <div style={{ marginBottom: "10px" }}>
                  R-AScan is a modular, multithreaded vulnerability scanner framework written in Python. It dynamically loads all .py scanner modules in the scanners/ directory and executes them against a target. Each module returns structured output and is saved to a JSON file for analysis.
                </div>
              </p>
            </div>
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

          <div className="item-container">
            <div className="item fade-in">
              <div className="item-title">Penetration Test Web & Mobile Apps PT Agriva</div>
              <div className="item-company">Jul 2024 - Jul 2024</div>
              <p>
                <ul>
                  <li>Penetration Testing Web</li>
                  <li>Mobile Apps</li>
                </ul>
              </p>
            </div>
          </div>

          <div className="item-container">
            <div className="item fade-in">
              <div className="item-title">Pentesting WebApps & Mobile Apps ( PT Teleanjar Indonesia )</div>
              <div className="item-company">Nov 2023 - Dec 2023</div>
              <p>
                <ul>
                  <li>Server API & Database Server Penetration Test</li>
                  <li>Mobile Apps</li>
                </ul>
              </p>
            </div>
          </div>

          <div className="item-container">
            <div className="item fade-in">
              <div className="item-title">Pentesting Apps BUMN</div>
              <div className="item-company">Jan 2023 - Apr 2023</div>
              <p>
                <ul>
                  <li>Web Apps Penetration Test</li>
                </ul>
              </p>
            </div>
          </div>

          <div className="item-container">
            <div className="item fade-in">
              <div className="item-title">Rusher Web Framework - PHP Backend Framework</div>
              <div className="item-company">Link Project: <a style={{ color: "white" }} href='https://github.com/ICWR-TEAM/R-WFW' target='_blank'>https://github.com/ICWR-TEAM/R-WFW</a></div>
              <p>
                <div style={{ marginBottom: "10px" }}>
                  Overview:
                </div>
                <div style={{ marginBottom: "10px" }}>
                  R-WFW (Rusher Web Framework) is a minimal and straightforward backend framework designed to help you build web applications quickly and efficiently. It follows the Model-View-Controller (MVC) architecture, making your codebase clean, organized, and easy to maintain.
                </div>
                <div>
                  Key Features:
                </div>
                <ul>
                  <li>MVC Architecture: Separation of concerns for better organization.</li>
                  <li>Middleware: Easy to define and manage middleware for request processing.</li>
                  <li>Libraries: Includes useful libraries for common tasks, enhancing productivity.</li>
                  <li>Lightweight: Simple to use and extend, without unnecessary bloat.</li>
                </ul>
              </p>
            </div>
          </div>

        </div>
      </div>
      {isVisible && (
        <button
        onClick={scrollToTop}
        className="scroll-to-top fade-in-fast"
      >
        <FontAwesomeIcon icon={faArrowUp} size="1x" style={{ color: "white" }} />
      </button>
      )}
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
