import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  motion,
  animate,
  AnimatePresence,
  useAnimation,
  useMotionValue,
} from 'framer-motion';
import { Slider, Drawer } from 'antd';
import {
  PlayCircleFilled,
  PauseCircleFilled,
  StepBackwardFilled,
  StepForwardFilled,
  SoundOutlined,
  UnorderedListOutlined,
  HeartOutlined,
  HeartFilled,
  LeftOutlined,
  MenuOutlined,
  FileTextOutlined,
} from '@ant-design/icons';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { music } from '@/static/music';
import { formatTime, getLyrics, getCurrentLyricIndex } from '@/lib/utils';
import { ROUTER_PATH } from '@/constants';
import { useInitMusicPlayer } from '@/hooks/useInitMusicPlayer';
import BaseParticles from '@/components/atoms/BaseParticles';
import { useSmallLayout } from '@/hooks/useSmallLayout';

const MusicPlayer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const controls = useAnimation();
  const rotate = useMotionValue(0);
  const isSP = useSmallLayout();
  const { t } = useTranslation();
  const { t: tCommon } = useTranslation('common');

  const [curMusicIdx, setCurMusicIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [showVolume, setShowVolume] = useState(false);
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [showLyrics, setShowLyrics] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const lyricsContainerRef = useRef<HTMLDivElement | null>(null);

  const currentMusic = useMemo(() => music[curMusicIdx], [curMusicIdx]);
  const particles = useMemo(() => <BaseParticles />, []);
  const lyrics = useMemo(() => {
    return currentMusic ? getLyrics(music, currentMusic.id) : [];
  }, [currentMusic]);
  const currentLyricIndex = useMemo(() => {
    return getCurrentLyricIndex(lyrics, currentTime);
  }, [lyrics, currentTime]);
  useEffect(() => {
    if (showLyrics && lyricsContainerRef.current && lyrics.length > 0) {
      const container = lyricsContainerRef.current;
      const activeItem = container.querySelector(
        `[data-lyric-index="${currentLyricIndex}"]`
      );
      if (activeItem) {
        activeItem.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    }
  }, [currentLyricIndex, showLyrics, lyrics]);

  useEffect(() => {
    if (id) {
      const index = music.findIndex((s) => s.id === parseInt(id));
      if (index !== -1) {
        setCurMusicIdx(index);
      }
    }
  }, [id]);
  useEffect(() => {
    if (isPlaying) {
      animate(rotate, rotate.get() + 360, {
        duration: 8,
        ease: 'linear',
        repeat: Infinity,
      });
    } else {
      controls.stop();
    }
  }, [controls, rotate, isPlaying]);

  const handlePrev = useCallback(() => {
    setCurMusicIdx((prev) => (prev - 1 + music.length) % music.length);
    setIsPlaying(true);
  }, []);
  const handleNext = useCallback(() => {
    setCurMusicIdx((prev) => (prev + 1) % music.length);
    setIsPlaying(true);
  }, []);

  const audioRef = useInitMusicPlayer({
    isPlaying,
    url: currentMusic?.url,
    volume,
    onTimeUpdate: setCurrentTime,
    onLoadedMetadata: (d) => {
      setDuration(d);
      setIsLoading(false);
    },
    onEnded: handleNext,
  });

  const handleProgressChange = (value: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value;
      setCurrentTime(value);
    }
  };
  const handleVolumeChange = (value: number) => {
    setVolume(value);
  };
  const toggleFavorite = () => {
    setFavorites((prev) =>
      prev.includes(currentMusic.id)
        ? prev.filter((f) => f !== currentMusic.id)
        : [...prev, currentMusic.id]
    );
  };
  const playMusicFromList = (index: number) => {
    setCurMusicIdx(index);
    setIsPlaying(true);
    setShowPlaylist(false);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-background to-fuchsia-900/30" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute left-1/4 top-1/4 h-[600px] w-[600px] rounded-full bg-primary/20 blur-[150px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-fuchsia-500/15 blur-[120px]"
        />
      </div>

      <div className="pointer-events-none fixed inset-0 overflow-hidden">{particles}</div>

      <header className="relative z-20 flex items-center justify-between px-6 py-4">
        <button
          onClick={() => navigate(ROUTER_PATH.MUSIC_LIST)}
          className="rounded-full bg-secondary/50 p-3 transition-colors hover:bg-secondary"
        >
          <LeftOutlined className="text-lg text-foreground" />
        </button>
        <h1 className="text-lg font-semibold text-foreground">
          {tCommon('Common.Music.Playing')}
        </h1>
        <button
          onClick={() => setShowPlaylist(true)}
          className="rounded-full bg-secondary/50 p-3 transition-colors hover:bg-secondary"
        >
          <MenuOutlined className="text-lg text-foreground" />
        </button>
      </header>

      <main className="relative z-10 flex flex-col items-center justify-center px-6 pb-32 pt-8">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="relative mb-12"
        >
          <div className="absolute -inset-8 animate-pulse rounded-full bg-gradient-to-r from-primary/30 via-purple-500/20 to-fuchsia-500/30 blur-2xl" />

          <motion.div animate={controls} style={{ rotate }} className="relative">
            <div className="h-72 w-72 overflow-hidden rounded-full border-8 border-secondary shadow-2xl shadow-primary/30 md:h-80 md:w-80">
              <img
                src={currentMusic?.cover}
                alt={currentMusic?.title}
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

          <AnimatePresence>
            {isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center rounded-full bg-black/30"
              >
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center"
        >
          <h2 className="mb-2 text-2xl font-bold text-foreground md:text-3xl">
            {currentMusic?.title}
          </h2>
          <p className="text-muted-foreground">{currentMusic?.artist}</p>
          <p className="mt-1 text-sm text-muted-foreground/60">{currentMusic?.album}</p>
        </motion.div>

        <div className="mb-8 w-full max-w-md">
          <Slider
            value={currentTime}
            max={duration || 100}
            onChange={handleProgressChange}
            tooltip={{ formatter: (value) => formatTime(value || 0) }}
            styles={{
              track: { background: 'linear-gradient(90deg, #a855f7, #d946ef)' },
              rail: { background: 'hsl(270 10% 20%)' },
              handle: {
                background: '#a855f7',
                borderColor: '#a855f7',
                boxShadow: '0 0 10px #a855f7',
              },
            }}
          />
          <div className="mt-1 flex justify-between text-sm text-muted-foreground">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        <div className={clsx('mb-8 flex items-center', isSP ? 'gap-4' : 'gap-8')}>
          <button
            onClick={toggleFavorite}
            className="rounded-full p-3 transition-colors hover:bg-secondary/50"
          >
            {favorites.includes(currentMusic?.id || 0) ? (
              <HeartFilled className="text-2xl text-red-500" />
            ) : (
              <HeartOutlined className="text-2xl text-muted-foreground hover:text-foreground" />
            )}
          </button>

          <button
            onClick={handlePrev}
            className="group rounded-full p-3 transition-colors hover:bg-secondary/50"
          >
            <StepBackwardFilled className="text-3xl text-foreground transition-colors group-hover:text-primary" />
          </button>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setIsPlaying(!isPlaying);
            }}
            className="relative"
          >
            <div className="absolute -inset-2 animate-pulse rounded-full bg-primary/30 blur-xl" />
            {isPlaying ? (
              <PauseCircleFilled className="relative text-7xl text-primary transition-colors hover:text-purple-400" />
            ) : (
              <PlayCircleFilled className="relative text-7xl text-primary transition-colors hover:text-purple-400" />
            )}
          </motion.button>

          <button
            onClick={handleNext}
            className="group rounded-full p-3 transition-colors hover:bg-secondary/50"
          >
            <StepForwardFilled className="text-3xl text-foreground transition-colors group-hover:text-primary" />
          </button>

          <div className="relative">
            <button
              onClick={() => setShowVolume(!showVolume)}
              className="rounded-full p-3 transition-colors hover:bg-secondary/50"
            >
              <SoundOutlined
                className={clsx(
                  'text-2xl text-muted-foreground hover:text-foreground hover:text-purple-400',
                  showVolume && 'text-primary'
                )}
              />
            </button>
            <AnimatePresence>
              {showVolume && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute -left-1/4 bottom-full mb-4 rounded-xl bg-secondary p-4 shadow-lg"
                >
                  <div className="flex h-32 justify-center">
                    <Slider
                      vertical
                      value={volume}
                      max={1}
                      step={0.01}
                      onChange={handleVolumeChange}
                      tooltip={{
                        formatter: (value) => `${Math.round((value || 0) * 100)}%`,
                      }}
                      styles={{
                        track: {
                          background: 'linear-gradient(180deg, #a855f7, #d946ef)',
                        },
                        rail: { background: 'hsl(270 10% 20%)' },
                        handle: {
                          background: '#a855f7',
                          borderColor: '#a855f7',
                          boxShadow: '0 0 8px #a855f7',
                        },
                      }}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowLyrics(true)}
            className="flex items-center gap-2 rounded-full bg-secondary/50 px-6 py-3 transition-colors hover:bg-secondary"
          >
            <FileTextOutlined className="text-primary" />
            <span className="text-foreground">
              {showLyrics ? t('Music.Player.LyricsClose') : t('Music.Player.LyricsOpen')}
            </span>
          </button>

          <button
            onClick={() => setShowPlaylist(true)}
            className="flex items-center gap-2 rounded-full bg-secondary/50 px-6 py-3 transition-colors hover:bg-secondary"
          >
            <UnorderedListOutlined className="text-primary" />
            <span className="text-foreground">{t('Music.Player.Playlist')}</span>
            <span className="text-muted-foreground">({music.length})</span>
          </button>
        </div>
      </main>

      <Drawer
        title={
          <div className="flex items-center gap-2">
            <FileTextOutlined className="text-primary" />
            <span>{t('Music.Player.Lyrics')}</span>
            <span className="text-sm text-muted-foreground">- {currentMusic?.title}</span>
          </div>
        }
        placement="right"
        open={showLyrics}
        onClose={() => setShowLyrics(false)}
        styles={{
          header: {
            background: 'hsl(270 20% 8%)',
            borderBottom: '1px solid hsl(270 10% 20%)',
            color: 'white',
          },
          body: {
            background: 'hsl(270 20% 6%)',
            padding: 0,
          },
        }}
      >
        <div
          ref={lyricsContainerRef}
          className="h-full overflow-y-auto scroll-smooth px-4 py-8"
        >
          <div className="mx-auto max-w-2xl space-y-4">
            {lyrics.map((line, index) => (
              <motion.div
                key={index}
                data-lyric-index={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.02 }}
                className={`cursor-pointer rounded-lg px-4 py-3 text-center transition-all duration-300 hover:bg-secondary/30 ${
                  currentLyricIndex === index
                    ? 'scale-105 bg-primary/10 text-xl font-bold text-primary md:text-2xl'
                    : index < currentLyricIndex
                      ? 'text-base text-muted-foreground/60'
                      : 'text-base text-muted-foreground'
                }`}
                onClick={() => {
                  if (audioRef.current) {
                    audioRef.current.currentTime = line.time;
                    setCurrentTime(line.time);
                  }
                }}
              >
                {currentLyricIndex === index && (
                  <motion.div
                    layoutId="lyricHighlight"
                    className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-primary/5 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  />
                )}
                <span className="relative z-10">{line.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </Drawer>

      <Drawer
        title={
          <div className="flex items-center gap-2">
            <UnorderedListOutlined className="text-primary" />
            <span>{t('Music.Player.Playlist')}</span>
            <span className="text-sm text-muted-foreground">
              {t('Music.Player.Playlist.TracksCount', { count: music.length })}
            </span>
          </div>
        }
        placement="right"
        open={showPlaylist}
        onClose={() => setShowPlaylist(false)}
        styles={{
          header: {
            background: 'hsl(270 20% 8%)',
            borderBottom: '1px solid hsl(270 10% 20%)',
            color: 'white',
          },
          body: {
            background: 'hsl(270 20% 6%)',
            padding: 0,
          },
        }}
      >
        <div className="divide-y divide-border/30">
          {music.map(({ id, title, cover, artist }, index) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.03 }}
              onClick={() => playMusicFromList(index)}
              className={`flex cursor-pointer items-center gap-4 p-4 transition-colors ${
                curMusicIdx === index ? 'bg-primary/20' : 'hover:bg-secondary/50'
              }`}
            >
              <div className="flex w-8 justify-center">
                {curMusicIdx === index && isPlaying ? (
                  <div className="flex h-4 items-end gap-0.5">
                    <motion.div
                      animate={{ height: ['40%', '100%', '40%'] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                      className="w-1 rounded-full bg-primary"
                    />
                    <motion.div
                      animate={{ height: ['60%', '30%', '60%'] }}
                      transition={{ duration: 0.5, repeat: Infinity, delay: 0.1 }}
                      className="w-1 rounded-full bg-primary"
                    />
                    <motion.div
                      animate={{ height: ['30%', '80%', '30%'] }}
                      transition={{ duration: 0.5, repeat: Infinity, delay: 0.2 }}
                      className="w-1 rounded-full bg-primary"
                    />
                  </div>
                ) : (
                  <span className="text-sm text-muted-foreground">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                )}
              </div>

              <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg">
                <img src={cover} alt={title} className="h-full w-full object-cover" />
              </div>

              <div className="min-w-0 flex-1">
                <h4
                  className={`truncate font-medium ${
                    curMusicIdx === index ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  {title}
                </h4>
                <p className="truncate text-sm text-muted-foreground">{artist}</p>
              </div>

              <span className="text-sm text-muted-foreground">
                {formatTime(duration)}
              </span>
            </motion.div>
          ))}
        </div>
      </Drawer>
    </div>
  );
};

export default MusicPlayer;
