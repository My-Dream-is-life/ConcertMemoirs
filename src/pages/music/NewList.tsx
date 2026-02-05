import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  PlayCircleOutlined,
  HeartOutlined,
  HeartFilled,
  FireOutlined,
  ThunderboltOutlined,
  SoundOutlined,
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { music } from '@/static/music';
import BaseParticles from '@/components/atoms/BaseParticles';
import { ROUTER_PATH } from '@/constants';
import { formatTime } from '@/lib/utils';

const FavoriteMusic: FC<{ id: number }> = ({ id }) => {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  return (
    <button
      onClick={(e) => toggleFavorite(id, e)}
      className="rounded-full p-2 transition-colors hover:bg-primary/20"
    >
      {favorites.includes(id) ? (
        <HeartFilled className="text-xl text-red-500" />
      ) : (
        <HeartOutlined className="text-xl text-muted-foreground group-hover:text-foreground" />
      )}
    </button>
  );
};

const MusicList: FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [musicList, setMusicList] = useState(music.map((m) => ({ ...m, duration: 0 })));

  const getDuration = (url: string): Promise<number> => {
    return new Promise((resolve, reject) => {
      const audio = new Audio(url);
      audio.preload = 'metadata';
      audio.onloadedmetadata = () => {
        resolve(audio.duration);
      };
      audio.onerror = () => reject(new Error('load error'));
    });
  };

  useEffect(() => {
    music.forEach(async (m) => {
      const d = await getDuration(m.url);
      setMusicList((prev) =>
        prev.map((x) => (x.id === m.id ? { ...x, duration: d } : x))
      );
    });
  }, []);

  const navigateToPlayerPage = (id: number) => {
    navigate(ROUTER_PATH.MUSIC_PLAYER.replace(':id', String(id)));
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-1/4 top-0 h-96 w-96 animate-pulse rounded-full bg-primary/20 blur-[120px]" />
        <div
          className="absolute bottom-1/4 right-1/4 h-80 w-80 animate-pulse rounded-full bg-purple-600/15 blur-[100px]"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="absolute left-1/2 top-1/2 h-64 w-64 animate-pulse rounded-full bg-fuchsia-500/10 blur-[80px]"
          style={{ animationDelay: '2s' }}
        />
      </div>

      <BaseParticles />

      <main className="relative z-10 mx-auto max-w-6xl px-4 pb-16 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <ThunderboltOutlined className="animate-pulse text-3xl text-primary" />
            <h1 className="bg-gradient-to-r from-primary via-purple-400 to-fuchsia-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
              {t('Music.NewList.Title')}
            </h1>
            <ThunderboltOutlined className="animate-pulse text-3xl text-primary" />
          </div>
          <p className="text-lg text-muted-foreground">
            {t('Music.NewList.Description')}
          </p>
        </motion.div>

        <section className="mb-16">
          <div className="mb-6 flex items-center gap-2">
            <FireOutlined className="text-xl text-orange-500" />
            <h2 className="text-2xl font-bold text-foreground">
              {t('Music.NewList.Popular')}
            </h2>
            <span className="rounded-full bg-primary/20 px-2 py-0.5 text-xs text-primary">
              {t('Music.NewList.New')}
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {musicList.map(({ id, title, cover, artist, album }, index) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setHoveredId(id)}
                onHoverEnd={() => setHoveredId(null)}
                onClick={() => navigateToPlayerPage(id)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-secondary/80 to-secondary/40 p-4 backdrop-blur-sm transition-all duration-300 hover:border-primary/50"
              >
                <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 transition-transform duration-700 group-hover:translate-x-[100%]" />

                <div className="relative flex items-center gap-4">
                  <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl">
                    <img
                      src={cover}
                      alt={title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <AnimatePresence>
                      {hoveredId === id && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 flex items-center justify-center bg-black/50"
                        >
                          <PlayCircleOutlined className="text-3xl text-white" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="truncate font-semibold text-foreground transition-colors group-hover:text-primary">
                      {title}
                    </h3>
                    <p className="truncate text-sm text-muted-foreground">{artist}</p>
                    <p className="truncate text-xs text-muted-foreground/60">{album}</p>
                  </div>

                  <FavoriteMusic id={id} />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-foreground">
            <SoundOutlined className="text-primary" />
            {t('Music.NewList.AllMusic')}
          </h2>

          <div className="overflow-hidden rounded-2xl border border-border/50 bg-secondary/30 backdrop-blur-sm">
            <div className="grid grid-cols-12 gap-4 border-b border-border/50 px-6 py-4 text-sm text-muted-foreground">
              <div className="col-span-1"></div>
              <div className="col-span-5">{t('Music.NewList.Music')}</div>
              <div className="col-span-3">{t('Music.NewList.Album')}</div>
              <div className="col-span-2">{t('Music.NewList.Duration')}</div>
              <div className="col-span-1"></div>
            </div>

            {musicList.map(({ id, title, cover, artist, album, duration }, index) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => navigateToPlayerPage(id)}
                className="group grid cursor-pointer grid-cols-12 gap-4 border-b border-border/20 px-6 py-4 transition-all duration-300 last:border-0 hover:bg-primary/10"
              >
                <div className="col-span-1 flex items-center">
                  <span className="text-muted-foreground group-hover:hidden">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <PlayCircleOutlined className="hidden text-lg text-primary group-hover:block" />
                </div>

                <div className="col-span-5 flex items-center gap-3">
                  <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg">
                    <img
                      src={cover}
                      alt={title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="truncate font-medium text-foreground transition-colors group-hover:text-primary">
                        {title}
                      </span>
                      <span className="rounded bg-primary/20 px-1.5 py-0.5 text-[10px] text-primary">
                        {t('Music.NewList.New')}
                      </span>
                    </div>
                    <p className="truncate text-sm text-muted-foreground">{artist}</p>
                  </div>
                </div>

                <div className="col-span-3 flex items-center">
                  <span className="truncate text-sm text-muted-foreground">{album}</span>
                </div>

                <div className="col-span-2 flex items-center">
                  <span className="text-sm text-muted-foreground">
                    {formatTime(duration)}
                  </span>
                </div>

                <div className="col-span-1 flex items-center justify-end">
                  <FavoriteMusic id={id} />
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default MusicList;
