import { FC } from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { rarityConfig, type CollectionItem } from '@/static/collection';

interface CollectionProgressProps {
  items: CollectionItem[];
}

const CollectionProgress: FC<CollectionProgressProps> = ({ items }) => {
  const { t } = useTranslation();

  const total = items.length;
  const collected = items.filter((item) => item.collected).length;
  const percentage = Math.round((collected / total) * 100);
  const rarityStats = {
    common: {
      total: items.filter((i) => i.rarity === 'common').length,
      collected: items.filter((i) => i.rarity === 'common' && i.collected).length,
    },
    rare: {
      total: items.filter((i) => i.rarity === 'rare').length,
      collected: items.filter((i) => i.rarity === 'rare' && i.collected).length,
    },
    legendary: {
      total: items.filter((i) => i.rarity === 'legendary').length,
      collected: items.filter((i) => i.rarity === 'legendary' && i.collected).length,
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mb-12"
    >
      <div className="rounded-3xl border border-purple-500/30 bg-gradient-to-br from-purple-900/40 to-violet-900/40 p-6 shadow-2xl shadow-purple-900/20 backdrop-blur-xl md:p-8">
        <div className="mb-8 flex flex-col items-center gap-6 md:flex-row">
          <div className="relative">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, delay: 0.4 }}
              className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-violet-600 shadow-lg shadow-purple-500/40 md:h-24 md:w-24"
            >
              <Trophy className="h-8 w-8 text-white md:h-10 md:w-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute -right-2 -top-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-2 py-1 text-xs font-bold text-white"
            >
              {t('Collection.Level', { level: Math.floor(percentage / 20) + 1 })}
            </motion.div>
          </div>

          <div className="w-full flex-1">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-lg font-bold text-white md:text-xl">
                {t('Collection.Progress')}
              </h3>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-xl font-bold text-transparent md:text-2xl"
              >
                {collected} / {total}
              </motion.span>
            </div>

            <div className="relative h-4 overflow-hidden rounded-full bg-purple-950/60">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
                transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
                className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-white/0 via-white/40 to-white/0"
                style={{ width: `${percentage}%` }}
              />
            </div>

            <div className="mt-2 flex justify-between">
              <span className="text-sm text-purple-300">
                {t('Collection.Success', { success: percentage })}
              </span>
              <span className="text-sm text-purple-400">
                {percentage === 100
                  ? `🎉 ${t('Collection.Completed')}`
                  : `${t('Collection.Remaining', { remaining: total - collected })}`}
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {(['common', 'rare', 'legendary'] as const).map((rarity, index) => {
            const config = rarityConfig[rarity];
            const stats = rarityStats[rarity];
            const rarityPercent =
              stats.total > 0 ? Math.round((stats.collected / stats.total) * 100) : 0;
            const Icon = config.icon;

            return (
              <motion.div
                key={rarity}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="rounded-xl border border-purple-500/20 bg-purple-950/40 p-4"
              >
                <div className="mb-3 flex items-center gap-2">
                  <div
                    className={`h-8 w-8 rounded-lg bg-gradient-to-br ${config.color} flex items-center justify-center`}
                  >
                    <Icon className="h-4 w-4 text-white" />
                  </div>
                  <span className="font-medium text-white">{config.label}</span>
                  <span className="ml-auto text-sm text-purple-300">
                    {stats.collected}/{stats.total}
                  </span>
                </div>

                <div className="relative h-2 overflow-hidden rounded-full bg-purple-950/60">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${rarityPercent}%` }}
                    transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                    className={`absolute inset-y-0 left-0 bg-gradient-to-r ${config.color} rounded-full`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default CollectionProgress;
