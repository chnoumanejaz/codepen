import { motion } from 'framer-motion';
import { MdBookmark } from 'react-icons/md';
import CodeOutput from './CodeOutput';
import { staggerAnim } from '../animations';

function ProjectCard({ project, index }) {
  return (
    <motion.div
      key={index}
      {...staggerAnim}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="w-full cursor-pointer md:w-[370px] h-[300px] bg-secondary rounded-md p-4 flex flex-col items-center justify-center gap-4">
      <CodeOutput output={project.output} display="home" />
      <div className="flex items-center justify-start gap-3 w-full">
        {/* image */}
        <div className="w-10 h-10 flex items-center justify-center rounded-md  overflow-hidden bg-emerald-500">
          {project?.user?.photoURL ? (
            <motion.img
              whileHover={{ scale: 1.2 }}
              src={project?.user?.photoURL}
              alt={project?.user?.displayName}
              referrerPolicy="no-referrer"
              className="w-full h-full"
            />
          ) : (
            <p className="text-white font-semibold uppercase tracking-wide">
              {project?.user?.email.slice(0, 2)}
            </p>
          )}
        </div>
        {/* name */}
        <div>
          <p className="text-white capitalize">{project.title}</p>
          <p className="text-primaryText text-sm ">
            {project?.user?.displayName
              ? project?.user.displayName
              : project?.user?.email
              ? `${project?.user.email.split('@')[0]}`
              : null}
          </p>
        </div>

        {/* ADD TO collection  */}
        <motion.div
          className="cursor-pointer ml-auto"
          whileTap={{ scale: 0.9 }}>
          <MdBookmark className="text-3xl hover:text-emerald-500 transition" />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
