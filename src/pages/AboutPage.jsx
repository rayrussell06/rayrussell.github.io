import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import rayImage from '/rayrussellbasketball.png';

function AboutPage() {
  return (
    <section className="py-5 text-light d-flex align-items-center" style={{ minHeight: '100vh' }}>
      <div className="container">
        <div className="row align-items-center">

          {/* Left: Text */}
          <div className="col-md-6 text-center text-md-center mb-4 mb-md-0">
              <h1 className="display-4 fw-bold mb-3">
              About Me <span className="wave" role="img" aria-label="wave">👋</span>
              </h1>
              <h2 className="fs-2 fw-semibold mb-2 text-light">
                I'm <span style={{ color: '#cd8328' }}>Ray Russell</span>
              </h2>
              <h3 className="fs-2 mt-5" style={{ color: '#cd8328' }}>
              <Typewriter
                words={['Full Stack Developer', 'React | .NET | SQL', 'Basketball | Kayaking | Gaming']}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
              </h3>
            </div>
          {/* Right: Image */}
          <div className="col pe-md-6">
            <img
              src={rayImage}
              alt="Ray Russell coding"
              className="img-fluid"
              style={{ height: 'auto', width: '100%' }}
            />
          </div>
        </div>

        {/* Description Card */}
        <div className="row g-4 mt-5 pt-5 pb-5 text-dark">
          <div className="col">
            <div className="card h-100 shadow text-light card-hover" style={{ backgroundColor: '#908c5a', minHeight: '450px' }}>
              <div className="card-body">
                <h3 className="card-title fw-bold" style={{ color: "#cd8328" }}>Professional Snapshot</h3>
                <p className="card-text mt-4">
                  I'm a self-taught developer from New York with <strong style={{ color: '#cd8328' }}>2+ years</strong> of experience. I currently build internal tools at <strong style={{ color: '#cd8328' }}>Le Vian</strong> that solve real business challenges.
                </p>
                <p className="card-text mt-3">
                  I specialize in <strong style={{ color: '#cd8328' }}>REST API development</strong> using stored procedures, and love building <strong style={{ color: '#cd8328' }}>clean, reusable UI components</strong>. My favorite project so far has been our <strong style={{ color: '#cd8328' }}>RFID Inventory Management System</strong>.
                </p>
                <p className="card-text mt-3">
                  I enjoy backend-heavy work, but also create intuitive frontend interfaces with <strong style={{ color: '#cd8328' }}>React</strong> and <strong style={{ color: '#cd8328' }}>Bootstrap</strong>. I also work with <strong style={{ color: '#cd8328' }}>GraphQL</strong> using HotChocolate.
                </p>
                <p className="card-text mt-3">
                  Outside of coding, I unwind with <strong style={{ color: '#cd8328' }}>basketball</strong>, <strong style={{ color: '#cd8328' }}>kayaking</strong>, and <strong style={{ color: '#cd8328' }}>gaming</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
