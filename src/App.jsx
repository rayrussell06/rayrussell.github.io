import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ResumePage from './pages/ResumePage';
// import ProjectsPage from './pages/ProjectsPage';

import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const allImages = Array.from(document.images);
    let loaded = 0;
  
    if (allImages.length === 0) {
      // ⏳ Simulate slow loading
      setLoading(false); 
      return;
    }
  
    allImages.forEach((img) => {
      if (img.complete) {
        loaded++;
      } else {
        img.addEventListener('load', () => {
          loaded++;
          if (loaded === allImages.length) {
            // ⏳ Simulate slow loading
            setTimeout(() => setLoading(false), 2000);
          }
        });
      }
    });
  
    if (loaded === allImages.length) {
      // ⏳ Simulate slow loading
      setTimeout(() => setLoading(false), 2000);
    }
  }, []);
  

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <Router>
          <Navbar />
         
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/about" element={<AboutPage />} />*/}
            {/* <Route path="/projects" element={<ProjectsPage />} /> */}
            <Route path="/resume" element={<ResumePage />} />
          </Routes>
         
          <Footer />
        </Router>
      )}
    </>
  );
}

export default App;
