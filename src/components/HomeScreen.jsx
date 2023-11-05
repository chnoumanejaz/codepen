import { motion } from 'framer-motion';
import { fadeInOut, slideUp } from '../animations';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function HomeScreen() {
  const user = useSelector(state => state.user?.user);
  return (
    <div className="w-full h-screen flex flex-col gap-3 justify-center items-center">
      <motion.h1 {...slideUp} className="text-3xl font-mono">
        CodePen Clone!
      </motion.h1>
      <motion.p {...slideUp} className="text-center">
        A replica of the popular online development platform, CodePen, allowing
        users to create, <br /> and experiment with HTML, CSS, and JavaScript
        code snippets.
      </motion.p>
      <motion.div {...slideUp} className="flex gap-6 my-4">
        {user ? (
          <Link
            to="/home/projects"
            className="bg-emerald-600 px-3 py-2 text-white rounded-md transition hover:bg-emerald-800">
            Explore Projects
          </Link>
        ) : (
          <Link
            to="/home/auth"
            className="bg-emerald-600 px-3 py-2 text-white rounded-md transition hover:bg-emerald-800">
            Create an account
          </Link>
        )}
        <Link
          to="/newProject"
          className="bg-emerald-600 px-3 py-2 text-white rounded-md transition hover:bg-emerald-800">
          Create Project
        </Link>
      </motion.div>
      <motion.p {...fadeInOut} className="text-sm mt-8">
        Created by{' '}
        <a
          href="https://www.linkedin.com/in/chnoumanejaz/"
          target="_blank"
          rel="noreferrer"
          className="hover:bg-emerald-600 px-1 rounded-md font-medium tracking-wide text-white bg-emerald-800 transition">
          Nouman Ejaz
        </a>
      </motion.p>
    </div>
  );
}

export default HomeScreen;
