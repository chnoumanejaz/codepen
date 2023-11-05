import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Menu() {
  const user = useSelector(state => state.user?.user);
  return (
    <>
      <Link to="/newProject">
        <div className="px-6 py-3 flex items-center justify-center rounded-lg border border-gray-400 bg-gray-300 cursor-pointer group hover:border-gray-600 hover:bg-secondary transition">
          <p className="text-gray-800 group-hover:text-gray-200 capitalize transition">
            Create new project
          </p>
        </div>
      </Link>

      {user && (
        <Link to="/home/projects">
          <div className="px-6 py-3 flex items-center justify-center rounded-lg border border-gray-400 cursor-pointer group hover:border-gray-200 transition">
            <p className="text-gray-400 group-hover:text-gray-200 capitalize transition">
              All projects
            </p>
          </div>
        </Link>
      )}
    </>
  );
}

export default Menu;
