function AboutPage() {
    return (
      <section className="py-5 text-dark">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">About Me</h2>
          <p className="lead mb-3">
            Hi, I'm <strong>Ray Russell</strong> from New York. I'm a self-taught software developer with over 2 years of experience.
            I'm currently working at <strong>Le Vian Jewelers</strong>.
          </p>
  
          <h3 className="fw-bold mt-5 mb-3">Interests</h3>
          <p>
            Outside of development, I enjoy <strong>playing basketball</strong>, <strong>kayaking</strong>,
            <strong> fishing</strong>, and <strong>gaming</strong>.
          </p>
  
          <h3 className="fw-bold mt-5 mb-4">Professional Skillset</h3>
          <div className="d-flex flex-wrap justify-content-center align-items-center gap-4 fs-1 text-primary">
            <i className="devicon-dot-net-plain-wordmark"></i>
            <i className="devicon-javascript-plain"></i>
            <i className="devicon-nodejs-plain"></i>
            <i className="devicon-react-original"></i>
            <i className="devicon-microsoftsqlserver-plain"></i>
            <i className="devicon-graphql-plain"></i>
          </div>
        </div>
      </section>
    );
  }
  
  export default AboutPage;
  