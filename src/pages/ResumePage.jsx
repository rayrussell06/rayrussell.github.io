export default function ResumePage() {
  return (
    <section className="py-5 text-dark"   style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #203527, #314736, #2e4535)',
      backgroundImage: `linear-gradient(to bottom right, #203527, #314736, #2e4535), url('https://www.transparenttextures.com/patterns/cream-paper.png')`,
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      backgroundRepeat: 'repeat',
      color: 'white'
    }}>
      <div className="container text-center">
      

        {/* Resume Image */}
        <img
  src="/RayResume.png"
  alt="Ray Russell Resume"
  className="img-fluid mb-4"
  style={{
    width: '100%',
    maxWidth: '800px',
    height: 'auto',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
  }}
/>


        {/* Download Button Styled Like Footer Icons */}
        <div>
        <a
  href="/RayResume.png"
  download="RayRussellResume.png"
  className="resume-download-btn"
>
  Download Resume
</a>

        </div>
      </div>
    </section>
  );
}
