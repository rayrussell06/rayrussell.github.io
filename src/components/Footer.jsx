import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#404725"}} className="text-light py-4 mt-auto w-100">
      <div className="container-fluid">
        <div className="row text-center text-md-start">
          <div className="col-md-8 mb-2 mb-md-0">
            <small>Developed by Ray Russell</small>
          </div>
         
          <div className="col-md-4 text-md-end">
            <a
              href="https://linkedin.com/in/rayrussell06"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light me-3 fs-5"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/rayrussell06"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light fs-5"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
