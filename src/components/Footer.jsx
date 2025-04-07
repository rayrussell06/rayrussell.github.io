import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer
    style={{
      backgroundImage: `linear-gradient(to bottom right, rgba(60, 61, 31, 0.95), rgba(87, 91, 43, 0.95), rgba(88, 90, 44, 0.95)), url('https://www.transparenttextures.com/patterns/cream-paper.png')`,
    
    
    
 
     
 
    
    }}
    className="text-light py-4 mt-auto"
  >
  
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
    className="text-light me-3 fs-5 footer-icon"
  >
    <FaLinkedin />
  </a>
  
  <a
    href="https://github.com/rayrussell06"
    target="_blank"
    rel="noopener noreferrer"
    className="text-light fs-5 footer-icon"
  >
    <FaGithub />
  </a>
</div>

        </div>
      </div>
    </footer>
  );
}
