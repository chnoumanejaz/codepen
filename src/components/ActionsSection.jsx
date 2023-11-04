import { useState } from 'react';
import { FaSearchengin } from 'react-icons/fa6';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function ActionsSection() {
  const [user, setUser] = useState(null);

  return (
    <div className="w-full flex items-center justify-between gap-3">
      <div className="flex items-center bg-secondary px-4 py-2 rounded-md w-full">
        <FaSearchengin className="text-2xl" />
        <input
          type="text"
          placeholder="Start searching in to your projects ..."
          className="flex-1 px-4 py-1 bg-transparent outline-none border-none "
        />
      </div>

      {!user ? (
        <motion.div whileTap={{ scale: 0.98 }}>
          <Link
            className="hover:bg-emerald-600 text-emerald-50 px-4 py-3 rounded-md bg-emerald-500 transition"
            to={'/home/auth'}>
            Sign up
          </Link>
        </motion.div>
      ) : (
        <div className="bg-secondary px-4 py-[5px] rounded-md flex items-center gap-2 cursor-pointer">
          <img
            src="https://i.pravatar.cc/"
            alt="avatar"
            className="w-10 rounded-md"
          />
          <AiOutlineArrowDown className="text-3xl" />
        </div>
      )}
    </div>
  );
}

export default ActionsSection;
