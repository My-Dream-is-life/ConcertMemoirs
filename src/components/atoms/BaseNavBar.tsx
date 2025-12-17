import { FC, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Drawer } from 'antd';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { ROUTER_PATH } from '@/constants';

interface NavItem {
  path: string;
  label: string;
}

const navItem: NavItem[] = [
  { path: ROUTER_PATH.TIME_LINE, label: '时间线' },
  { path: ROUTER_PATH.CITY_LIST, label: '巡演城市' },
];

const BaseNavBar: FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* pc */}
      <div className="hidden items-center gap-1 md:flex">
        {navItem.map((item, idx) => (
          <Link
            key={idx}
            to={item.path}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
              location.pathname === item.path
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* sp */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-lg p-2 text-foreground transition-colors hover:bg-secondary md:hidden"
      >
        {isOpen ? (
          <CloseOutlined className="text-lg" />
        ) : (
          <MenuOutlined className="text-lg" />
        )}
      </button>
      <Drawer
        placement="right"
        open={isOpen}
        size={280}
        styles={{
          header: { display: 'none' },
          body: { padding: 0, background: 'hsl(270 20% 6%)' },
        }}
        onClose={() => setIsOpen(false)}
      >
        <div className="space-y-2 p-4">
          {navItem.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`block rounded-lg px-4 py-3 text-sm font-medium transition-all duration-300 ${
                location.pathname === item.path
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </Drawer>
    </>
  );
};

export default BaseNavBar;
