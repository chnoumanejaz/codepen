import { AnimatePresence, motion } from 'framer-motion';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { auth } from '../config/firebase.config';
import { SET_USER } from '../context/actions/userActions';
import { useState } from 'react';
import { slideUp } from '../animations';

function UserProfileDetails() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const user = useSelector(state => state.user?.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userDetailsMenu = [
    { id: uuidv4(), name: 'Projects', url: '/home/projects' },
    { id: uuidv4(), name: 'Collections', url: '/home/collections' },
    { id: uuidv4(), name: 'Profile', url: '/home/profile' },
  ];

  const handleLogOut = async () => {
    await auth.signOut().then(() => {
      dispatch(SET_USER(null));
      navigate('/home/auth', { replace: true });
    });
  };

  return (
    <div className="relative">
      <motion.div
        whileTap={{ translateY: 1 }}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="bg-secondary px-4 py-[5px] rounded-md flex items-center justify-center gap-2 cursor-pointer">
        <div className="w-10 h-10 flex items-center justify-center rounded-md  overflow-hidden bg-emerald-500">
          {user?.photoURL ? (
            <>
              <motion.img
                whileHover={{ scale: 1.2 }}
                src={user?.photoURL}
                alt={user?.displayName}
                referrerPolicy="no-referrer"
                className="w-full h-full"
              />
            </>
          ) : (
            <p className="text-white font-semibold uppercase tracking-wide">
              {user?.email.slice(0, 2)}
            </p>
          )}
        </div>
        <AiOutlineArrowDown className="text-2xl" />
      </motion.div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            {...slideUp}
            className="bg-secondary absolute top-14 right-0 px-4 py-3 rounded-md shadow-md z-20 flex flex-col items-start justify-start gap-2 min-w-[140px]">
            {userDetailsMenu.map(menu => (
              <Link
                to={menu.url}
                key={menu.id}
                className="hover:bg-emerald-600 hover:text-emerald-50 px-2 py-1 w-full rounded-md transition ">
                {menu.name}
              </Link>
            ))}

            <motion.p
              onClick={handleLogOut}
              className="hover:bg-emerald-600 hover:text-emerald-50 px-2 py-1 w-full rounded-md transition cursor-pointer opacity-80 hover:opacity-100 bg-emerald-900">
              Log Out
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default UserProfileDetails;
