export default function ResumePage() {
  return (
<section
  className= "resume-section pt-5 text-dark"
  style={{
    background: 'linear-gradient(to bottom right, #203527, #314736, #2e4535)',
    backgroundImage: `linear-gradient(to bottom right, #203527, #314736, #2e4535), url('https://www.transparenttextures.com/patterns/cream-paper.png')`,
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat',
    color: 'white',
    paddingBottom: '2rem',

  }}
>

  <div className="container text-center pb-3 mb-3 " style={{ marginTop: '4rem' }}>
    <img
      src="/RayResume.png"
      alt="Ray Russell Resume"
      className="img-fluid mb-3"
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

    <a
      href="/RayResume.png"
      download="RayRussellResume.png"
      className="resume-download-btn mt-5  "
    >
      Download Resume
    </a>
  </div>
</section>

  );
}
