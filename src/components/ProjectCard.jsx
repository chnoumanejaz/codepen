import { motion } from 'framer-motion';
import CodeOutput from './CodeOutput';

function ProjectCard({ project, index }) {
  return (
    <motion.div
      key={index}
      className="w-full cursor-pointer md:w-[370px] h-[300px] bg-secondary rounded-md p-4 flex items-center justify-center gap-4">
      <CodeOutput output={project.output} display="home" />
      <div className="flex items-center justify-start gap-3 w-full">
        {/* image */}

        {/* name */}
      </div>
    </motion.div>
  );
}

export default ProjectCard;
