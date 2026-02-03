import { FC } from 'react';
import { motion } from 'framer-motion';
import type { ConcertThemeItem } from '@/types';
import { useTranslation } from 'react-i18next';

interface MiniPieChartProps {
  concert: ConcertThemeItem[];
  total: number;
}

const MiniPieChart: FC<MiniPieChartProps> = ({ concert, total }) => {
  const { t } = useTranslation();

  let currentAngle = 0;

  return (
    <div className="relative h-32 w-32">
      <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
        {concert.map((theme, i) => {
          const angle = (theme.watchCount / total) * 360;
          const startAngle = currentAngle;
          currentAngle += angle;

          const x1 = 50 + 40 * Math.cos((startAngle * Math.PI) / 180);
          const y1 = 50 + 40 * Math.sin((startAngle * Math.PI) / 180);
          const x2 = 50 + 40 * Math.cos(((startAngle + angle) * Math.PI) / 180);
          const y2 = 50 + 40 * Math.sin(((startAngle + angle) * Math.PI) / 180);
          const largeArc = angle > 180 ? 1 : 0;

          return (
            <motion.path
              key={theme.id}
              d={`M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArc} 1 ${x2} ${y2} Z`}
              fill={theme.themeColor}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="cursor-pointer transition-opacity hover:opacity-80"
            />
          );
        })}
        <circle cx="50" cy="50" r="20" className="fill-card" />
      </svg>

      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xs font-bold text-foreground">
          {t('Home.ConcertCount.Matches', { total })}
        </span>
      </div>
    </div>
  );
};

export default MiniPieChart;
