import React, { useState } from "react";
/* import Particles from "tsparticles"; */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGooglePlusG,
  faFacebookF,
  faLinkedinIn,
  faGithub,
  faQuora,
  faReact,
  faCss3,
  faHtml5,
  faJs,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDownload,
  faChevronCircleDown,
  faCode,
  faSchool,
  faGraduationCap,
  faUniversity,
  faAngleDoubleUp,
  faInfoCircle,
  faPlayCircle,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import ReactCardFlip from "react-card-flip";
import "react-vertical-timeline-component/style.min.css";
import "./App.css";
import fotoperfil from "./images/fotoperfil.jpg"; // gives image path

const resume = require("./resume/Resume_Edgar_Gonzalez_2022.pdf");

/*
let particleconfig = {
  particles: {
    number: {
      value: 40,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "polygon",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
}
*/ function App() {
  const [view1, toggle1] = useState(0);
  const [view2, toggle2] = useState(0);
  const [view3, toggle3] = useState(0);
  const [view4, toggle4] = useState(0);
  const [view5, toggle5] = useState(0);
  const [view6, toggle6] = useState(0);

  return (
    <div className="App">
      {/*-------------Particle based Display-----------------*/}
      <div id="particle-container">
        {/* <Particles className="particles" params={particleconfig} /> */}

        <div className="header">
          <img src={fotoperfil} className="fotoperfil" alt="foto de perfil" />

          <h1>Edgar González</h1>
          <h2>Software Engineer, Tecnológico de Monterrey</h2>
          <h3>Full-Stack Web Developer</h3>
          <div className="icon-container">
            <a
              title="Google"
              className="fa"
              href="mailto:edgargonzalezr@hotmail.com"
              target="new"
            >
              <FontAwesomeIcon icon={faGooglePlusG} />
            </a>
            <a
              title="Linkedin"
              className="fa"
              href="https://www.linkedin.com/in/edgar-gonzalez-46b41996"
              target="new"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
              title="Facebook"
              className="fa"
              href="https://facebook.com/edgar.gonzalezrodriguez.96"
              target="new"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              title="Github"
              className="fa"
              href="https://github.com/EdgarGonzalezR2021"
              target="new"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          <div className="pagelinks">
            <a className="pagenav" href="#aboutMe">
              About Me
            </a>
            <a className="pagenav" href="#timeline">
              Timeline
            </a>
            <a className="pagenav" href="#projects">
              Projects
            </a>
            <a className="pagenav" href={resume} download>
              Resume
              <FontAwesomeIcon icon={faDownload} />
            </a>
          </div>
        </div>
        <a href="#aboutMe" className="down">
          <FontAwesomeIcon icon={faChevronCircleDown} />
        </a>
      </div>
      {/*------------Particle body Ends Here---------------------------*/}

      {/*-------------About Me------------*/}

      <div id="aboutMe" className="about ">
        <h1>About Me</h1>
        <img
          src={require("./images/mern.png")}
          alt="mern-logo"
          width="400px"
          height="200px"
        />
        <p>
          Soy un desarrollador de software Full-Stack MERN Junior para
          aplicaciones web;
        </p>
        <p>
          Me encanta trabajar FrontEnd programando en React - Bootstrap y
          entregar resultados rápidos y ágiles. Estoy estudiando otros ambientes
          de diseño como Material-UI y Tailwind.
        </p>
        <p>
          En BackEnd me gusta utilizar principalmente Express y NodeJS aunque
          también aplico NextJs.
        </p>
        <p>
          En Base de datos prefiero usar MongoDb y Firebase pero tambien trabajo
          bases de datos relacionales MySql y SQL-Server dependiendo del
          proyecto.
        </p>
        <p>Me gusta mucho trabajar Open Source de Github.</p>

        <div className="tech">
          <div className="tools">
            <h2>FrontEnd</h2>
            <div className="tools-icon">
              <FontAwesomeIcon icon={faHtml5} />
              <FontAwesomeIcon icon={faCss3} />
              <FontAwesomeIcon icon={faJs} />
              <img
                src={require("./images/react.png")}
                alt=""
                width="60px"
                height="60px"
              />
            </div>
          </div>

          <div className="web-technologies">
            <h2>BackEnd</h2>
            <div className="web-icons">
              <img src={require("./images/node.jpg")} alt="" width="100px" />
              <img
                src={require("./images/node-express.png")}
                alt=""
                width="100px"
              />
            </div>
          </div>

          <div className="cms">
            <h2>DB</h2>
            <img src={require("./images/mysql.png")} alt="" width="80px" />
            <img src={require("./images/mongodb.png")} alt="" height="80" />
          </div>
        </div>
      </div>

      {/*------------Work Timeline-------- */}

      <div id="timeline" className="timeline">
        <hr />
        <h1>Professional Timeline</h1>
        <p></p>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date=" Jul 2021 - Febrero 2022"
            iconStyle={{ background: "#189AB4", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h1>Full-Stack Junior Developer Certification</h1>
            <h2>UTEL University</h2>
            <p>MERN programming</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2012 - At Present"
            iconStyle={{ background: "#189AB4", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h1>Expertos en Sistemas y Tecnologías sa de cv</h1>
            <h2>Owner</h2>
            <p>Software Development</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2000 - At Present"
            iconStyle={{ background: "#189AB4", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h1>ERP Italia System</h1>
            <h2>Desktop App Development</h2>
            <p>Clarion & C# programming</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2001-2012"
            iconStyle={{ background: "#189AB4", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h1>Computiendas de Mexico sa de cv</h1>
            <h2>Owner</h2>
            <p>Retail Computers and Accesories</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2002-2008"
            iconStyle={{ background: "#189AB4", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h1>Infonet del Bajio sa de cv</h1>
            <h2>Founder & Partner</h2>
            <p>First Internet Service Provider in León, Gto. City</p>
            <p>First WIFI Internet Service Provider in León, Gto. City</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2000-2005"
            iconStyle={{ background: "#189AB4", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h1>Compuexpertos sa de cv</h1>
            <h2>Owner</h2>
            <p>Desktop App Development and Computers Sales</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2000 - 2002"
            iconStyle={{ background: "#189AB4", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h1>Sistemas Expertos sa de cv</h1>
            <h2>Founder and Partner</h2>
            <p>Computer Sales & Services</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="1988 - 2000"
            iconStyle={{ background: "#189AB4", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faUniversity} />}
          >
            <h1>Nike - Oscar Bandini sa de cv-</h1>
            <h2>System Manager</h2>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="1988 - 2000"
            iconStyle={{ background: "#189AB4", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faUniversity} />}
          >
            <h1>Quirelli - Shoemakers -</h1>
            <h2>Systems Manager</h2>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date=" 1987 - 1988"
            iconStyle={{ background: "#189AB4", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faUniversity} />}
          >
            <h1>EMYCO - Shoemakers -</h1>
            <h2>Systems Manager</h2>
            <p>Production manager and Control</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jul 1987"
            iconStyle={{ background: "#189AB4", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h1>Tecnologico de Monterrey</h1>
            <h2>Computer Systems Engineer Degree</h2>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            iconStyle={{ background: "#189AB4", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faAngleDoubleUp} />}
          ></VerticalTimelineElement>
        </VerticalTimeline>
      </div>

      {/*------------Projects---------------*/}
      <div id="projects" className="projects">
        <h1>Projects</h1>
        <div className="project-content">
          <div
            className="project-item"
            onMouseEnter={() => {
              toggle1(1);
            }}
            onMouseLeave={() => {
              toggle1(0);
            }}
          >
            <h1>My Portfolio (this app)</h1>
            <ReactCardFlip isFlipped={view1} flipDirection="horizontal">
              <img
                key="front"
                src={require("./images/portfolio.png")}
                alt="PortfolioApp"
              />
              <div className="reverse" key="back">
                <h1>
                  Web Page about me and MERN programming: Mongodb, Express,
                  React & Node
                </h1>
                <h2>Developed Dec 2021</h2>
                <h3>View demo on Heroku server</h3>
                <p></p>
              </div>
            </ReactCardFlip>

            <div className="options">
              <div onClick={() => toggle1(!view1)}>
                More <FontAwesomeIcon icon={faInfoCircle} />
              </div>
              <div>
                <a
                  href="https://portfolioedgargonzalezr.herokuapp.com/"
                  target="new"
                >
                  Launch <FontAwesomeIcon icon={faPlayCircle} />
                </a>
              </div>
              <div>
                <a
                  href="https://github.com/EdgarGonzalezR2021/PortfolioEdgarGonzalezRodriguez.git"
                  target="new"
                >
                  Source
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </div>

          <div
            className="project-item"
            onMouseEnter={() => {
              toggle2(1);
            }}
            onMouseLeave={() => {
              toggle2(0);
            }}
          >
            <h1>E-Commerce Boots Shop</h1>
            <ReactCardFlip isFlipped={view2} flipDirection="horizontal">
              <img
                key="front"
                src={require("./images/bootsmakers.png")}
                alt="Coherence"
              />
              <div className="reverse" key="back">
                <h1>ECommerce Website Boot Shop</h1>
                <h1>
                  Developed with React - Bootstrap - Express - Mongodb - Node
                </h1>
                <h3>Deployed as Demo on heroku</h3>
                <h3>Hint user: admin@demo.com pass: demo</h3>
              </div>
            </ReactCardFlip>

            <div className="options">
              <div onClick={() => toggle2(!view2)}>
                More <FontAwesomeIcon icon={faInfoCircle} />
              </div>
              <div>
                <a href="https://bootmakersshop.herokuapp.com" target="new">
                  Launch <FontAwesomeIcon icon={faPlayCircle} />
                </a>
              </div>
              <div>
                <a
                  href="https://github.com/EdgarGonzalezR2021/BootMakersShop"
                  target="new"
                >
                  Source
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </div>

          <div
            className="project-item"
            onMouseEnter={() => {
              toggle3(1);
            }}
            onMouseLeave={() => {
              toggle3(0);
            }}
          >
            <h1>Restaurant App</h1>
            <ReactCardFlip isFlipped={view3} flipDirection="horizontal">
              <img
                key="front"
                src={require("./images/restaurantlabellaivrea.png")}
                alt="BellaIvrea"
              />
              <div className="reverse" key="back">
              <h1>
                  A restaurant website with reservation
                </h1>
                <h1>
                  Built with React and CSS3 Styling; reservation Book with Firebase 
                </h1>
                <h2>Login and reservation Book with Firebase</h2>
                <h3>Demo On heroku</h3>
                <p>**** In Development Stage ****</p>
              </div>
            </ReactCardFlip>

            <div className="options">
              <div onClick={() => toggle3(!view3)}>
                More <FontAwesomeIcon icon={faInfoCircle} />
              </div>
              <div>
                <a href="https://labellaivrearestaurant.netlify.app">
                  Launch <FontAwesomeIcon icon={faPlayCircle} />
                </a>
              </div>
              <div>
                <a href="https://github.com/EdgarGonzalezR2021">
                  Source
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </div>

          <div
            className="project-item"
            onMouseEnter={() => {
              toggle4(1);
            }}
            onMouseLeave={() => {
              toggle4(0);
            }}
          >
            <h1>Cryptocurrencies DashBoard App</h1>
            <ReactCardFlip isFlipped={view4} flipDirection="horizontal">
              <img
                key="front"
                src={require("./images/dashboardcripto.png")}
                alt="T & P"
              />
              <div className="reverse" key="back">
                <h1>
                  Web page showing the DASHBOARD of the main cryptocurrencies.
                  Team work with github.
                </h1>
                <h2>Developed for API study</h2>
                <h3>Deployed as Demo On netlify pages</h3>
              </div>
            </ReactCardFlip>

            <div className="options">
              <div onClick={() => toggle4(!view4)}>
                More <FontAwesomeIcon icon={faInfoCircle} />
              </div>
              <div>
                <a
                  href="https://kourtzn.github.io/TEAM_B_PROYECTO_3_DASHBOARD_APP/"
                  target="new"
                >
                  Launch <FontAwesomeIcon icon={faPlayCircle} />
                </a>
              </div>
              <div>
                <a
                  href="https://github.com/KourtZN/TEAM_B_PROYECTO_3_DASHBOARD_APP"
                  target="new"
                >
                  Source
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </div>

          <div
            className="project-item"
            onMouseEnter={() => {
              toggle5(1);
            }}
            onMouseLeave={() => {
              toggle5(0);
            }}
          >
            <h1>Gourmet Pizza App</h1>
            <ReactCardFlip isFlipped={view5} flipDirection="horizontal">
              <img
                key="front"
                src={require("./images/pizzaweb.png")}
                alt="pizzaweb"
              />
              <div className="reverse" key="back">
                <h1>
                  Simple web page for Pizza through TO DO LIST, with control of
                  delivered and pending
                </h1>
                <h2>HTML5 y CSS3</h2>
              </div>
            </ReactCardFlip>

            <div className="options">
              <div onClick={() => toggle5(!view5)}>
                More <FontAwesomeIcon icon={faInfoCircle} />
              </div>
              <div>
                <a href="https://pizzagourmet.netlify.app/" target="new">
                  Launch <FontAwesomeIcon icon={faPlayCircle} />
                </a>
              </div>
              <div>
                <a
                  href="https://github.com/EdgarGonzalezR2021/Proyecto2ToDoListPizzeria"
                  target="new"
                >
                  Source
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </div>

          <div
            className="project-item"
            onMouseEnter={() => {
              toggle6(1);
            }}
            onMouseLeave={() => {
              toggle6(0);
            }}
          >
            <h1>ERP ITALIA</h1>
            <ReactCardFlip isFlipped={view6} flipDirection="horizontal">
              <img
                key="front"
                src={require("./images/webexpertos.png")}
                alt="ERP App"
              />
              <div className="reverse" key="back">
                <h1>
                  Landing Web Page for ERP System (Enterprise Resource System),
                  an app for footwear industries.
                </h1>
                <h3>The first App in HTML that I developed as UTEL Learner</h3>
                <p>Deployed as Demo On netlify pages</p>
              </div>
            </ReactCardFlip>

            <div className="options">
              <div onClick={() => toggle6(!view6)}>
                More <FontAwesomeIcon icon={faInfoCircle} />
              </div>
              <div>
                <a href="https://landingexpertos.netlify.app/" target="new">
                  Launch <FontAwesomeIcon icon={faPlayCircle} />
                </a>
              </div>
              <div>
                <a
                  href="https://github.com/EdgarGonzalezR2021/webexpertos"
                  target="new"
                >
                  Source
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*------------Footer---------------*/}
      <div className="footer">
        <div>
          <h2>Contact</h2>
        </div>
        <div className="icon-container">
          <a
            title="Google"
            className="fa"
            href="edgargonzalezr@hotmail.com"
            target="new"
          >
            <FontAwesomeIcon icon={faGooglePlusG} />
          </a>
          <a
            title="Linkedin"
            className="fa"
            href="https://www.linkedin.com/in/edgar-gonzalez-46b41996"
            target="new"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a
            title="Facebook"
            className="fa"
            href="https://facebook.com/edgar.gonzalezrodriguez.96"
            target="new"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            title="Github"
            className="fa"
            href="https://github.com/EdgarGonzalezR2021"
            target="new"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default App;
