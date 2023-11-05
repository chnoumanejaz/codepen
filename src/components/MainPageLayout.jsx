import { Outlet, useLocation } from 'react-router-dom';
import ActionsSection from './ActionsSection';
import HomeScreen from './HomeScreen';

function MainPageLayout() {
  const { pathname } = useLocation();
  return (
    <div className="flex-1 min-h-screen max-h-screen flex flex-col items-start justify-start overflow-y-scroll h-full px-8 md:px-12 py-8 md:py-8 text-primaryText">
      <ActionsSection className="text-xl" />
      {pathname === '/home' && <HomeScreen />}
      <Outlet />
    </div>
  );
}

export default MainPageLayout;
