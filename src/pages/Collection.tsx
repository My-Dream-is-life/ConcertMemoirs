import { FC, useState } from 'react';
import { Modal } from 'antd';
import { motion } from 'framer-motion';
import { Lock, CheckCircle } from 'lucide-react';
import BaseParticles from '@/components/atoms/BaseParticles';
import { collections, rarityConfig, type CollectionItem } from '@/static/collection';
import CollectionProgress from '@/components/molecules/CollectionProgress';

interface CabinetItemProps {
  item: CollectionItem;
  index: number;
  onClick: () => void;
}

const CabinetItem: FC<CabinetItemProps> = ({ item, index, onClick }) => {
  const config = rarityConfig[item.rarity];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.05, rotateY: 5 }}
      onClick={onClick}
      className={`group cursor-pointer ${!item.collected && 'opacity-70 grayscale'}`}
    >
      <div className="relative">
        <div className="absolute inset-0 -rotate-1 transform rounded-2xl bg-gradient-to-b from-purple-900/80 to-purple-950/90" />

        <div className="relative overflow-hidden rounded-2xl border-4 border-purple-500/30 bg-gradient-to-b from-purple-900/40 to-purple-950/60 p-4 backdrop-blur-sm">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />

          <div className="absolute left-1/2 top-0 h-32 w-24 -translate-x-1/2 bg-gradient-to-b from-purple-300/20 to-transparent blur-xl" />

          <div className="relative">
            <div className="absolute -bottom-2 left-1/2 h-4 w-3/4 -translate-x-1/2 rounded-full bg-gradient-to-t from-purple-800 to-purple-600 blur-sm" />

            <motion.div
              whileHover={{ y: -5 }}
              className={`relative aspect-square w-full overflow-hidden rounded-xl shadow-2xl ${config.glow}`}
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover"
              />

              <div
                className={`absolute inset-0 bg-gradient-to-t ${config.color} opacity-20 transition-opacity group-hover:opacity-40`}
              />

              <motion.div
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ translateX: ['100%', '-100%'] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
              />

              {!item.collected && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                  <Lock className="h-10 w-10 text-purple-400" />
                </div>
              )}

              {item.collected && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute bottom-2 right-2 rounded-full bg-green-500/90 p-1.5 shadow-lg"
                >
                  <CheckCircle className="h-4 w-4 text-white" />
                </motion.div>
              )}
            </motion.div>
          </div>

          <div className="mt-4 text-center">
            <h3 className="truncate text-lg font-bold text-white">{item.name}</h3>
            <div className="mt-2 flex items-center justify-center gap-2">
              <span
                className={`rounded-full bg-gradient-to-r px-2 py-0.5 text-xs font-medium ${config.color} text-white`}
              >
                {config.label}
              </span>
              <span className="text-xs text-purple-300">{item.city}</span>
            </div>

            {!item.collected && (
              <p className="mt-1 text-xs italic text-purple-500">尚未收集</p>
            )}
          </div>

          <div className="absolute left-2 top-2 h-2 w-2 rounded-full bg-purple-400/50" />
          <div className="absolute right-2 top-2 h-2 w-2 rounded-full bg-purple-400/50" />
          <div className="absolute bottom-2 left-2 h-2 w-2 rounded-full bg-purple-400/50" />
          <div className="absolute bottom-2 right-2 h-2 w-2 rounded-full bg-purple-400/50" />
        </div>
      </div>
    </motion.div>
  );
};

const Collection: FC = () => {
  const [selectedItem, setSelectedItem] = useState<CollectionItem | null>(null);

  return (
    <div className="bg-gradient-to-b from-purple-950 via-purple-900 to-black">
      <BaseParticles />

      <div className="container relative mx-auto px-4 pb-16 pt-24">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <motion.h1
            className="mb-4 bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 bg-clip-text text-5xl font-bold text-transparent md:text-7xl"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 5, repeat: Infinity }}
            style={{ backgroundSize: '200% auto' }}
          >
            ✨ 珍藏柜 ✨
          </motion.h1>

          <p className="mb-10 text-lg text-purple-300">收藏每一份珍贵的演唱会周边</p>

          <CollectionProgress items={collections} />
        </motion.div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-8 lg:grid-cols-4">
          {collections.map((item, index) => (
            <CabinetItem
              key={item.id}
              item={item}
              index={index}
              onClick={() => setSelectedItem(item)}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 flex justify-center"
        >
          <div className="w-full max-w-xs cursor-pointer rounded-2xl border-2 border-dashed border-purple-500/30 bg-purple-900/30 p-8 text-center transition-colors hover:border-purple-500/50">
            <div className="mb-2 text-4xl">➕</div>
            <div className="text-purple-400">更多收藏即将到来...</div>
          </div>
        </motion.div>
      </div>

      <Modal
        open={!!selectedItem}
        onCancel={() => setSelectedItem(null)}
        footer={null}
        width={500}
        centered
        className="collection-modal"
      >
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-4"
          >
            <div
              className={`relative overflow-hidden rounded-2xl shadow-2xl ${rarityConfig[selectedItem.rarity].glow} mb-6`}
            >
              <img
                src={selectedItem.image}
                alt={selectedItem.name}
                className="aspect-video w-full object-cover"
              />

              <div
                className={`absolute inset-0 bg-gradient-to-t ${rarityConfig[selectedItem.rarity].color} opacity-20`}
              />

              <div
                className={`absolute right-4 top-4 rounded-full bg-gradient-to-r px-3 py-1 text-sm font-bold ${rarityConfig[selectedItem.rarity].color} flex items-center gap-1 text-white shadow-lg`}
              >
                {(() => {
                  const Icon = rarityConfig[selectedItem.rarity].icon;
                  return <Icon className="h-4 w-4" />;
                })()}
                {rarityConfig[selectedItem.rarity].label}
              </div>

              {selectedItem.collected ? (
                <div className="absolute bottom-4 left-4 flex items-center gap-1 rounded-full bg-green-500/90 px-3 py-1 text-sm text-white">
                  <CheckCircle className="h-4 w-4" />
                  已收集
                </div>
              ) : (
                <div className="absolute bottom-4 left-4 flex items-center gap-1 rounded-full bg-purple-500/90 px-3 py-1 text-sm text-white">
                  <Lock className="h-4 w-4" />
                  未收集
                </div>
              )}
            </div>

            <h2 className="mb-2 text-2xl font-bold text-white">{selectedItem.name}</h2>
            <p className="mb-4 text-purple-300">{selectedItem.description}</p>

            <div className="grid grid-cols-2 gap-4 rounded-xl bg-purple-900/30 p-4">
              <div>
                <div className="text-sm text-purple-400">获得地点</div>
                <div className="font-medium text-white">{selectedItem.city}</div>
              </div>

              <div>
                <div className="text-sm text-purple-400">
                  {selectedItem.collected ? '获得日期' : '预计获得'}
                </div>
                <div className="font-medium text-white">{selectedItem.date}</div>
              </div>
            </div>
          </motion.div>
        )}
      </Modal>
    </div>
  );
};

export default Collection;
