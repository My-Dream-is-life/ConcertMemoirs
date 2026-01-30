import { FC } from 'react';
import { Layout } from 'antd';
import { useLocation } from 'react-router-dom';
import BaseLogo from '../atoms/BaseLogo';
import BaseNavBar from '../atoms/BaseNavBar';
import { ROUTER_PATH } from '@/constants';

const { Header: HeaderLayout } = Layout;

const Header: FC = () => {
  const location = useLocation();

  if (location.pathname === ROUTER_PATH.HOME) {
    return (
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <BaseLogo />
            <BaseNavBar />
          </div>
        </div>
      </nav>
    );
  }

  return (
    <HeaderLayout
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 9999,
        padding: 0,
      }}
    >
      <nav className="border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <BaseLogo />
            <BaseNavBar />
          </div>
        </div>
      </nav>
    </HeaderLayout>
  );
};

export default Header;
