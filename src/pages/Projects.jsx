import { useSelector } from 'react-redux';
import ProjectCard from '../components/ProjectCard';
import { Link } from 'react-router-dom';

function Projects() {
  const projects = useSelector(state => state.projects?.projects);
  const searchQuery = useSelector(state =>
    state.searchQuery?.searchQuery ? state.searchQuery.searchQuery : ''
  );

  const filteredProjects = projects?.filter(project => {
    return project?.title
      ?.toLowerCase()
      .includes(searchQuery.trim().toLowerCase());
  });

  return (
    <div className="w-full py-6 flex items-center  justify-center gap-6 flex-wrap">
      {filteredProjects.length ? (
        filteredProjects?.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))
      ) : (
        <div className="flex justify-center items-center flex-col gap-12 mt-8">
          <p className="text-xl">No project found ...</p>
          <Link
            to="/newProject"
            className="bg-emerald-600 px-3 py-2 text-white rounded-md transition hover:bg-emerald-800">
            Create a new
          </Link>
        </div>
      )}
    </div>
  );
}

export default Projects;
