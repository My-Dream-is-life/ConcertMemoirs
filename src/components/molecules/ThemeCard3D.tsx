import { FC } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { CrownOutlined, CustomerServiceOutlined, HeartOutlined } from '@ant-design/icons';
import { Tag } from 'antd';
import { useTranslation } from 'react-i18next';
import type { ConcertThemeItem } from '@/types';

interface ThemeCard3DProps {
  theme: ConcertThemeItem;
  isSelected: boolean;
  rank: number;
  maxCount: number;
  onClick: () => void;
}

const ThemeCard3D: FC<ThemeCard3DProps> = ({
  theme,
  isSelected,
  rank,
  maxCount,
  onClick,
}) => {
  const { t } = useTranslation();

  const rankBgMap: Record<number, string> = {
    1: 'bg-amber-100',
    2: 'bg-amber-200',
    3: 'bg-amber-300',
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02, rotateY: 5 }}
      whileTap={{ scale: 0.98 }}
      className={clsx(
        'relative cursor-pointer overflow-hidden rounded-2xl transition-all duration-300',
        isSelected && 'shadow-[0_0_30px_hsl(var(--primary)/0.3)] ring-2 ring-primary'
      )}
      style={{ transformStyle: 'preserve-3d' }}
      onClick={onClick}
    >
      <div className="absolute inset-0">
        <img
          src={theme.themeImage}
          alt={theme.name}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `linear-gradient(135deg, ${theme.themeColor} 0%, transparent 60%)`,
          }}
        />
      </div>

      <div className="absolute left-3 top-3">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className={clsx(
            'flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-black',
            rankBgMap[rank]
          )}
        >
          {theme.watchCount === maxCount ? <CrownOutlined /> : rank}
        </motion.div>
      </div>

      <div className="absolute right-3 top-3">
        <Tag color={theme.themeColor} className="border-0 font-bold backdrop-blur-sm">
          {t('Home.ConcertCount.Secondary', { secondary: theme.watchCount })}
        </Tag>
      </div>

      <div className="relative p-4 pt-24">
        <h4 className="mb-1 truncate text-lg font-bold text-white">{theme.name}</h4>
        <p className="mb-3 line-clamp-2 text-xs text-white/70">{theme.description}</p>

        <div className="mb-3 flex flex-wrap gap-1">
          {theme.highlights.slice(0, 2).map((h, i) => (
            <span
              key={i}
              className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-white/80 backdrop-blur-sm"
            >
              {h}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-white/60">
            <CustomerServiceOutlined style={{ color: theme.themeColor }} />
            <span>{theme.themeMusic}</span>
          </div>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <HeartOutlined className="text-pink-400" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ThemeCard3D;
