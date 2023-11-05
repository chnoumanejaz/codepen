import { motion } from 'framer-motion';
import { FaSearchengin } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { SET_SEARCH_QUERY } from '../context/actions/searchAction';
import UserProfileDetails from './UserProfileDetails';

function ActionsSection() {
  const user = useSelector(state => state.user?.user);
  const searchQuery = useSelector(state =>
    state.searchQuery?.searchQuery ? state.searchQuery.searchQuery : ''
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="w-full flex items-center justify-between gap-3">
      <div className="flex items-center bg-secondary px-4 py-2 rounded-md w-full">
        <FaSearchengin className="text-2xl" />
        <input
          type="text"
          value={searchQuery}
          onChange={e => {
            navigate('/home/projects');
            dispatch(SET_SEARCH_QUERY(e.target.value));
          }}
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
        <UserProfileDetails />
      )}
    </div>
  );
}

export default ActionsSection;
