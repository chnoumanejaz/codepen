import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { MdCheck, MdEdit } from 'react-icons/md';
import Logo from './Logo';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import UserProfileDetails from './UserProfileDetails';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../config/firebase.config';
import toast from 'react-hot-toast';

function NewProjectHeader({ html, css, js, output }) {
  const [isTitle, setIsTitle] = useState(false);
  const [title, setTitle] = useState('New Project');
  const user = useSelector(state => state.user?.user);

  async function saveProject() {
    const id = `${Date.now()}`;
    const _doc = {
      id,
      title,
      html,
      css,
      js,
      output,
      user,
    };

    await setDoc(doc(db, 'Projects', id), _doc)
      .then(response => {
        toast.success('Project Saved ...');
      })
      .catch(err => {
        toast.error(err.message);
      });
  }

  return (
    <header className="w-full flex items-center justify-between px-12 py-4">
      <div className="flex items-center justify-center gap-6">
        <Logo size="small" />
        <div className="flex flex-col items-start justify-start">
          {/* title */}
          <div className="flex items-center justify-center gap-3">
            <AnimatePresence>
              {isTitle ? (
                <motion.input
                  key={'title'}
                  type="text"
                  className="px-3 py-1 rounded-md bg-transparent outline-none text-primaryText w-52"
                  placeholder="Title Here"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                />
              ) : (
                <motion.p key="label" className="px-3 py-2 text-white ">
                  {title}
                </motion.p>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {isTitle ? (
                <motion.div
                  key="md-check"
                  whileTap={{ scale: 0.9 }}
                  className="cursor-pointer"
                  onClick={() => setIsTitle(false)}>
                  <MdCheck className="text-2xl text-emerald-500" />
                </motion.div>
              ) : (
                <motion.div
                  key="md-edit"
                  whileTap={{ scale: 0.9 }}
                  className="cursor-pointer"
                  onClick={() => setIsTitle(true)}>
                  <MdEdit className="text-2xl text-primaryText" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {/* follow section */}
          <div className="flex items-center justify-center px-3 -mt-1 gap-2">
            <p className="text-primaryText text-sm">
              {user?.displayName ? (
                user.displayName
              ) : user?.email ? (
                `${user.email.split('@')[0]}`
              ) : (
                <Link
                  to="/home/auth"
                  className="bg-emerald-600 text-white px-1 mt-1 rounded-md">
                  Login to save the project
                </Link>
              )}
            </p>
            {user && (
              <motion.p
                whileTap={{ scale: 0.9 }}
                className="text-sm bg-emerald-500 rounded-sm px-2 text-primary font-medium cursor-pointer">
                + Follow
              </motion.p>
            )}
          </div>
        </div>
      </div>

      {/* user section */}
      {user && (
        <div className="flex items-center justify-center gap-4 text-primaryText">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={saveProject}
            className="px-4 py-2 bg-primaryText cursor-pointer text-primary rounded-md font-medium">
            Save
          </motion.button>
          <UserProfileDetails />
        </div>
      )}
    </header>
  );
}

export default NewProjectHeader;
