import { useSelector } from 'react-redux';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  const projects = useSelector(state => state.projects?.projects);

  return (
    <div className="w-full py-6 flex items-center  justify-center gap-6 flex-wrap">
      {projects?.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  );
}

export default Projects;
