import { Typewriter } from 'react-simple-typewriter';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { SiBootstrap } from 'react-icons/si';

import {
  SiReact,
  SiTailwindcss,
  SiVite,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiChartdotjs
} from 'react-icons/si';

const techIcons = {
  React: <SiReact />,
  Tailwind: <SiTailwindcss />,
  Vite: <SiVite />,
  'Node.js': <SiNodedotjs />,
  MongoDB: <SiMongodb />,
  Express: <SiExpress />,
  'Chart.js': <SiChartdotjs />,
  Bootstrap: <SiBootstrap />,
};

const projects = [
  {
    title: 'Portfolio Website',
    description: 'My personal developer portfolio built with React and Bootstrap.',
    link: 'https://rayrussell.io',
    tech: ['React', 'Bootstrap', 'Vite'],
  },
  {
    title: 'E-commerce Demo',
    description: 'A full-stack demo store with shopping cart and checkout.',
    link: '#',
    tech: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'API Tracker',
    description: 'Tool to test and visualize REST API requests in real time.',
    link: '#',
    tech: ['React', 'Express', 'Chart.js'],
  },
];

export default function HomePage() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const handleNext = () => setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
  const handlePrev = () => setCurrentProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <>
      <section className="py-5 text-light d-flex align-items-center" style={{ minHeight: '100vh' }}>
        <div className="container">
          <div className="row align-items-center">
           
{/* Left: Text */}
            <div className="col-md-6 text-center text-md-center mb-4 mb-md-0">
              <h1 className="display-4 fw-bold mb-3">
                Hello <span className="wave" role="img" aria-label="wave">👋</span>
              </h1>
              <h2 className="fs-2 fw-semibold mb-2 text-light">
                I'm <span style={{ color: '#404725' }}>Ray Russell</span>
              </h2>
              <h3 className="fs-4 mt-4" style={{ color: '#3a5e6a' }}>
                <Typewriter
                  words={['Software Developer', 'ASP.NET', 'C#', 'JavaScript' ,'React','Sql Server','Node.js','GraphQL','REST API']}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </h3>
            </div>
{/*End Of Left: Text */}

{/* Right: Image */}
            <div className="col pe-md-6">
              <img
                src="/rayrussell.github.io/rayrussellcodingimage.png"
                alt="Ray Russell coding"
                className="img-fluid rounded shadow"
                style={{ height: 'auto', width: '100%'}}
              />
            </div>
          </div>
{/* End Of Right: Image */}

{/* Grid Section */}
          <div className="row row-cols-1 row-cols-md-3 g-4 mt-5 pt-5 pb-5 text-dark">
            
{/* Quick Intro Card */}
            <div className="col ps-md-6">
            <div className="card h-100 shadow text-light" style={{ backgroundColor: '#757d55' }}>
                <div className="card-body">
                  <h5 className="card-title fw-bold"style={{color:"#404725"}}>The Journey So Far</h5>
                  <p className="card-text mt-4">
                     I'm a self-taught software developer with over{' '}
                     <strong style={{ color: '#3a5e6a' }}>2 years</strong> of experience. I'm currently working at{' '}
                     <strong>
                       <a
                         href="https://www.levian.com/"
                         target="_blank"
                         rel="noopener noreferrer"
                         style={{ color: '#3a5e6a', textDecoration: 'underline' }}
                       >
                         Le Vian
                       </a>{' '}
                     </strong>, where I build internal applications that support business operations.

                     <br /><br />
                     You can learn more about me{' '}
                     <Link
                       to="/about"
                       style={{
                         color: '#3a5e6a',
                         textDecoration: 'underline',
                         
                       }}
                     >
                       <strong>here.</strong>
                     </Link>
                    </p>
                </div>
              </div>
            </div>
{/*End Of Quick Intro Card */}

{/* Daily Tech Stack Card */}
            <div className="col">
              <div className="card h-100 shadow text-center" style={{ backgroundColor: '#757d55' }}>
                <div className="card-body">
                  <h5 className="card-title fw-bold mb-4 fs-4"style={{color:"#404725"}}>My Daily Tools</h5>
                  <div className="row row-cols-2 g-3 justify-content-center">
                     <div className="col text-center">
                       <i className="devicon-dot-net-plain-wordmark" title=".NET" style={{color:"#3a5e6a", fontSize: '3.5rem'}}></i>
                     </div>
                     <div className="col text-center">
                       <i className="devicon-javascript-plain" title="JavaScript" style={{color:"#3a5e6a", fontSize: '3.5rem'}}></i>
                     </div>
                     <div className="col text-center">
                       <i className="devicon-nodejs-plain" title="Node.js" style={{color:"#3a5e6a", fontSize: '3.5rem'}}></i>
                     </div>
                     <div className="col text-center">
                       <i className="devicon-react-original" title="React" style={{color:"#3a5e6a", fontSize: '3.5rem'}}></i>
                     </div>
                     <div className="col text-center">
                       <i className="devicon-microsoftsqlserver-plain" title="SQL Server" style={{color:"#3a5e6a", fontSize: '3.5rem'}}></i>
                     </div>
                     <div className="col text-center">
                       <i className="devicon-graphql-plain" title="GraphQL" style={{color:"#3a5e6a", fontSize: '3.5rem'}}></i>
                     </div>
                     <div className="col text-center">
                      <i className="devicon-visualstudio-plain" title="Visual Studio" style={{ color: '#3a5e6a', fontSize: '3.5rem' }}></i>
                    </div>
                    <div className="col text-center">
                      <i className="devicon-vscode-plain" title="VS Code" style={{ color: '#3a5e6a', fontSize: '3.5rem' }}></i>
                    </div>
                    </div>
                </div>
              </div>
            </div>
{/*End Of Daily Tech Stack Card */}
            
{/*Personal Projects Carousel Card */}
            <div className="col pe-md-8">
              <div className="card h-100 shadow text-center d-flex flex-column" style={{ backgroundColor: '#757d55' }}>
                <div className="card-body flex-grow-1" >
                  <h5 className="card-title fw-bold fs-4" style={{color:"#404725"}}>What I’ve Built</h5>
                  <ProjectCard {...projects[currentProjectIndex]} techIcons={techIcons} color="#3a5e6a"/>
                </div>
                <div className="card-footer bg-transparent border-0 d-flex justify-content-between" >
                  <button onClick={handlePrev} className="btn btn-outline-secondary btn-sm text-light" style={{ backgroundColor: "#404725"}}>Previous</button>
                  <button onClick={handleNext} className="btn btn-outline-secondary btn-sm text-light" style={{ backgroundColor: "#404725"}}>Next</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
{/*End Of Personal Projects Carousel Card */}    
    </>
  );
}
