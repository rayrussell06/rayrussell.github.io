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
                I'm <span style={{ color: '#cd8328' }}>Ray Russell</span>
              </h2>
              <h3 className="fs-2 mt-5" style={{ color: '#cd8328' }}>
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
                src="/rayrussellcoding.png"
                alt="Ray Russell coding"
                className="img-fluid "
                style={{ height: 'auto', width: '100%'}}
              />
            </div>
          </div>
{/* End Of Right: Image */}

{/* Grid Section */}
          <div className="row   g-2 mt-3 pt-5 pb-5 text-dark">
            
{/* Quick Intro Card */}
            <div className="col ps-md-6">
            <div className="card h-100 shadow text-light card-hover" style={{ backgroundColor: '#908c5a',  minHeight: '450px' }}>
            <div className="card-body text-start">
  <h3 className="card-title fw-bold" style={{ color: "#cd8328" }}>The Journey So Far</h3>
  <p className="card-text mt-4">
    I'm a self-taught software developer from Long Island, New York with over{' '}
    <strong style={{ color: '#cd8328' }}>2 years</strong> of experience. I'm currently working at{' '}
    <strong>
      <a
        href="https://www.levian.com/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#cd8328', textDecoration: 'underline' }}
      >
        Le Vian
      </a>{' '}
    </strong>, where I build internal applications that support business operations.
  </p>

  <p className="card-text mt-3">
    My programming journey started with curiosity and countless hours of building small apps with{' '}
    <strong style={{ color: '#cd8328' }}>C# and JavaScript</strong>. I quickly expanded into{' '}
    <strong style={{ color: '#cd8328' }}>React, SQL Server, and ASP.NET</strong>, and haven’t looked back since.
  </p>

  <p className="card-text mt-3">
    I thrive in backend-heavy projects but also enjoy crafting clean, responsive UIs.
    Solving business problems with code is what drives me every day.
  </p>

  <p className="card-text mt-3">
  You can read about my professional projects{' '}
  <Link
    to="/resume"
    style={{ color: '#cd8328', textDecoration: 'underline' }}
    
  >
   <strong> here </strong>
  </Link>
  , including my work on a <strong style={{ color: '#cd8328' }}>RFID Inventory Management System</strong>,
  building responsive UI components, and integrating REST APIs powered by SQL Server stored procedures to support real-time data flow across multiple departments.
</p>
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
