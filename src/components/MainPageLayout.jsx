import { Outlet } from 'react-router-dom';
import ActionsSection from './ActionsSection';

function MainPageLayout() {
  return (
    <div className="flex-1 min-h-screen max-h-screen flex flex-col items-start justify-start overflow-y-scroll h-full px-8 md:px-12 py-8 md:py-8 text-primaryText">
      <ActionsSection className="text-xl" />
      <Outlet />
    </div>
  );
}

export default MainPageLayout;
