import { FC, useState } from 'react';
import { Dropdown } from 'antd';
import { GlobalOutlined, CheckOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import type { MenuProps } from 'antd';
import { useLanguages } from '@/hooks/useLanguages';

const LanguagesDropdown: FC = () => {
  const { currentLanguage, languages, changeLanguage } = useLanguages();

  const [isOpen, setIsOpen] = useState(false);

  const items: MenuProps['items'] = languages.map(({ lang, name, nativeName, flag }) => ({
    key: lang,
    label: (
      <motion.div
        className="flex min-w-[200px] items-center justify-between gap-4 px-2 py-1"
        whileHover={{ x: 4 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <div className="flex items-center gap-3">
          <span className="text-xl">{flag}</span>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-foreground">{nativeName}</span>
            <span className="text-xs text-muted-foreground">{name}</span>
          </div>
        </div>
        {currentLanguage.lang === lang && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-primary"
          >
            <CheckOutlined />
          </motion.div>
        )}
      </motion.div>
    ),
    onClick: () => changeLanguage(lang),
  }));

  return (
    <div className="relative">
      <motion.div
        className="absolute inset-0 rounded-xl bg-primary/20 blur-xl"
        animate={{
          opacity: isOpen ? 0.6 : 0.3,
        }}
        transition={{ duration: 0.3 }}
      />

      <Dropdown
        menu={{
          items,
          style: {
            background:
              'linear-gradient(135deg, hsl(270 30% 10%) 0%, hsl(280 40% 15%) 50%, hsl(270 30% 10%) 100%)',
            border: '1px solid hsl(270 70% 60% / 0.3)',
            borderRadius: '16px',
            padding: '8px',
            boxShadow:
              '0 0 40px hsl(270 70% 60% / 0.2), 0 20px 40px -10px hsl(0 0% 0% / 0.5)',
            backdropFilter: 'blur(20px)',
          },
        }}
        trigger={['hover', 'click']}
        placement="topRight"
        onOpenChange={setIsOpen}
        popupRender={(menu) => (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            {menu}
          </motion.div>
        )}
      >
        <motion.button className="group relative flex cursor-pointer items-center gap-3 overflow-hidden rounded-xl border border-primary/30 bg-card/80 px-5 py-3 backdrop-blur-md transition-colors duration-200 hover:border-primary/60">
          <motion.div
            className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background:
                'linear-gradient(135deg, hsl(270 70% 60% / 0.1) 0%, hsl(280 60% 50% / 0.1) 100%)',
            }}
          />

          <motion.div
            className="relative z-10"
            animate={{ rotate: isOpen ? 360 : 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <GlobalOutlined className="text-lg text-primary" />
          </motion.div>

          <div className="relative z-10 flex items-center gap-2">
            <span className="text-lg">{currentLanguage.flag}</span>
            <span className="text-nowrap text-sm font-medium text-foreground">
              {currentLanguage.nativeName}
            </span>
          </div>

          <motion.div
            className="relative z-10"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <svg
              className="h-4 w-4 text-muted-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </motion.div>

          <motion.div
            className="pointer-events-none absolute inset-0 rounded-xl"
            style={{
              boxShadow: 'inset 0 0 20px hsl(270 70% 60% / 0.1)',
            }}
            animate={{
              boxShadow: isOpen
                ? 'inset 0 0 30px hsl(270 70% 60% / 0.2), 0 0 20px hsl(270 70% 60% / 0.3)'
                : 'inset 0 0 20px hsl(270 70% 60% / 0.1)',
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </Dropdown>
    </div>
  );
};

export default LanguagesDropdown;
