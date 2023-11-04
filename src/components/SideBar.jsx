import { motion } from 'framer-motion';
import { HiChevronDoubleLeft } from 'react-icons/hi2';
import { useLocalStorageState } from '../hooks/useLocalStorage';
import Logo from './Logo';
import Menu from './Menu';

function SideBar() {
  const [isSideMenu, setIsSideMenu] = useLocalStorageState(
    false,
    'sideBarCollapseInfo'
  );

  return (
    <aside
      className={`w-2 ${
        isSideMenu ? 'w-2' : 'flex-[.3] xl:flex-[.3]'
      } min-h-screen max-h-screen relative bg-secondary px-3 py-6 flex flex-col items-center justify-start gap-4 transition-all duration-200 ease-in-out`}>
      <motion.div
        whileTap={{
          scale: 0.9,
        }}
        className="w-8 h-8 bg-secondary rounded-tr-lg rounded-br-lg absolute -right-6 flex items-center justify-center cursor-pointer"
        onClick={() => setIsSideMenu(!isSideMenu)}>
        <HiChevronDoubleLeft
          className={`text-white text-xl transition-transform duration-300 ${
            isSideMenu ? 'rotate-180' : ''
          }`}
        />
      </motion.div>

      <div className="overflow-hidden w-full flex flex-col gap-4">
        <Logo />
        <Menu />
      </div>
    </aside>
  );
}

export default SideBar;
