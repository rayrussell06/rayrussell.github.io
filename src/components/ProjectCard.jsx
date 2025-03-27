export default function ProjectCard({ title, description, link, tech, techIcons }) {
  return (
    <div className="card-body p-3 text-center d-flex flex-column align-items-center">
     <h6 className="fw-bold mb-2" style={{ color: '#3a5e6a' }}>{title}</h6>

      <p className="text-light medium mb-3" >{description}</p>

      <div className="d-flex justify-content-center flex-wrap gap-2 mb-3" style={{ color:"#3a5e6a",fontSize: '0.85rem' }}>
        {tech.map((techName, i) => (
          <span
            key={i}
            className="badge bg-light text-dark d-flex align-items-center gap-2 px-1 py-1"
            style={{color:"#3a5e6a" ,fontSize: '0.90rem' }}
          >
            <span style={{color:"#3a5e6a", fontSize: '1rem' }}>{techIcons[techName]}</span> {techName}
          </span>
        ))}
      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        
        className="btn btn-sm btn-outline-light"
      >
        View Project
      </a>
    </div>
  );
}
