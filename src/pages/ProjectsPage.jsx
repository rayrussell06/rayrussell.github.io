import ProjectCard from '../components/ProjectCard';
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
};

const projects = [
  {
    title: 'Portfolio Website',
    description: 'My personal developer portfolio built with React and Bootstrap.',
    link: 'https://rayrussell.io',
    tech: ['React', 'Tailwind', 'Vite'],
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

function ProjectsPage() {
  return (
    <section className="py-5 text-dark">
      <div className="container text-center">
        <h2 className="mb-4 fw-bold">Projects</h2>
        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={index} className="col-sm-12 col-md-6 col-lg-4 d-flex">
              <ProjectCard {...project} techIcons={techIcons} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsPage;
