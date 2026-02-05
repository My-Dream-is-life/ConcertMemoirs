import { FC, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Drawer } from 'antd';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { useNavBar } from '@/hooks/useNavBar';

const BaseNavBar: FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { navItems } = useNavBar();

  return (
    <>
      {/* pc */}
      <div className="hidden items-center gap-1 md:flex">
        {navItems.map((item, idx) => (
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
          {navItems.map((item, idx) => (
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
