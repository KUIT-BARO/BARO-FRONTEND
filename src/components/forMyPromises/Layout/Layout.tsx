// src/components/layout/Layout.tsx
import React from 'react';
import Header from './Header/Header.tsx';
import Navigation from './Navigation/Navigation.tsx';

import PromiseButton from '../PromiseButton/PromiseButton.tsx';

import ConfirmPromise from '../ConfirmPromise/ConfirmPromise.tsx';
import UpcomingPromise from '../UpcomingPromise/UpcomingPromise.tsx';
import SuggestPromise from '../SuggestPromise/SuggestPromise.tsx';

import ScheduleCalendar from '../ScheduleCalendar/ScheduleCalendar.tsx';

interface LayoutProps {
  children: React.ReactNode;
  showHeader?: boolean;
  showNavigation?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  showHeader = true, 
  showNavigation = true 
}) => {
  
  const [active, setActive] = React.useState('promise');
  function handleClick(active: string) {
    setActive(active);
  };

  return (
    <div className="min-h-screen" style={{backgroundColor: '#F4F8FB'}}>
      {/* 반응형 컨테이너 */}
      <div className="mx-auto w-full md:w-[768px] lg:w-[1024px] xl:w-[1280px] min-h-screen relative">
        {/* 헤더 */}
        {showHeader && <Header />}
        
        {/* 메인 컨텐츠 */}
        <main className={`
          ${showHeader ? 'pt-24' : ''} 
          ${showNavigation ? 'pb-16' : ''}
        `}>
          {children && <PromiseButton updateActive={handleClick} />}
          {children && (active === 'promise') && <ConfirmPromise />}
          {children && (active === 'promise') && <UpcomingPromise />}
          {children && (active === 'promise') && <SuggestPromise />}
          {children && (active === 'schedule') && <ScheduleCalendar />}
        </main>
        
        {/* 네비게이션 */}
        {showNavigation && <Navigation />}
      </div>
    </div>
  );
};

export default Layout;