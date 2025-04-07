import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaHome, FaUserAlt, FaLaptopCode, FaFileAlt } from 'react-icons/fa';

export default function Navbar() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js'); // ensures Bootstrap JS is available
  }, []);

  const handleNavLinkClick = () => {
    const collapseEl = document.getElementById('navbarContent');
    const bsCollapse = window.bootstrap.Collapse.getInstance(collapseEl);
    if (bsCollapse && collapseEl.classList.contains('show')) {
      bsCollapse.hide(); // Only hide if already open
    }
  };
  

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top shadow-sm">
      <div className="container">
        <Link className="navbar-brand" to="/" onClick={handleNavLinkClick}>
          rayrussell.io
        </Link>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler p-1"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ fontSize: '0.9rem', width: '32px', height: '32px' }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsing content */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarContent">
          <ul className="navbar-nav text-white">
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center gap-2" to="/" onClick={handleNavLinkClick}>
                <FaHome /> Home
              </Link>
            </li>
            {/* Uncomment if needed
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center gap-2" to="/about" onClick={handleNavLinkClick}>
                <FaUserAlt /> About
              </Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center gap-2" to="/resume" onClick={handleNavLinkClick}>
                <FaFileAlt /> Resume
              </Link>
            </li>
            {/* GitHub link for mobile only */}
            <li className="nav-item d-lg-none">
              <a
                className="nav-link d-flex align-items-center gap-2"
                href="https://github.com/rayrussell06"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavLinkClick}
              >
                <FaGithub /> GitHub
              </a>
            </li>
          </ul>
        </div>

        {/* GitHub icon for large screens only */}
        <div className="d-none d-lg-flex">
          <a
            href="https://github.com/rayrussell06"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-light github-icon"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </nav>
  );
}
