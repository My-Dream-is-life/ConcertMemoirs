import { FC, useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { Card, Typography } from 'antd';
import {
  LeftOutlined,
  RightOutlined,
  PlayCircleOutlined,
  PauseCircleOutlined,
  SoundOutlined,
  MutedOutlined,
} from '@ant-design/icons';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import type { GalleryItem } from '@/types';
import { useSmallLayout } from '@/hooks/useSmallLayout';
import BaseParticles from '../atoms/BaseParticles';
import { formatTime } from '@/lib/utils';
import { useInitMusicPlayer } from '@/hooks/useInitMusicPlayer';

interface RotatingGalleryProps {
  galleries: GalleryItem[];
}

const { Title, Text } = Typography;

const RotatingGallery: FC<RotatingGalleryProps> = ({ galleries }) => {
  const isSP = useSmallLayout();
  const { t } = useTranslation();
  const { t: tCommon } = useTranslation('common');

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const progressRef = useRef<HTMLDivElement>(null);
  const isSwitchingRef = useRef(false);

  const total = galleries.length;
  const angleStep = 360 / total;

  const currentGallery = useMemo(
    () => galleries[currentIndex],
    [currentIndex, galleries]
  );
  const particles = useMemo(() => <BaseParticles />, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
    setIsPlaying(true);
  }, [total]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
    setIsPlaying(true);
  }, [total]);

  const audioRef = useInitMusicPlayer({
    isPlaying,
    url: currentGallery.songFile,
    volume: 0.5,
    onTimeUpdate: setCurrentTime,
    onLoadedMetadata: setDuration,
    onEnded: () => {
      if (isSwitchingRef.current) return;
      if (!isPlaying) return;
      setCurrentIndex((prev) => (prev + 1) % total);
    },
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === ' ') {
        e.preventDefault();
        setIsPlaying((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext]);

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current || !progressRef.current) return;

    const rect = progressRef.current.getBoundingClientRect();
    const percentage = (e.clientX - rect.left) / rect.width;
    const newTime = percentage * duration;

    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  return (
    <div className="relative py-12">
      <div
        className="absolute inset-0 opacity-30 blur-3xl transition-all duration-1000"
        style={{
          background: `radial-gradient(ellipse at center, ${currentGallery.color}40 0%, transparent 70%)`,
        }}
      />

      {particles}

      <Title
        level={2}
        className="relative z-10 mb-2 text-center"
        style={{ color: 'var(--foreground)' }}
      >
        {t('Home.MemoryAlbum')}
      </Title>
      <Text className="relative z-10 mb-8 block text-center text-gray-400">
        {currentGallery.name} · {currentGallery.date}
      </Text>

      <div className="relative z-10 mb-6 flex flex-col items-center gap-3 px-4">
        <div
          className="flex items-center gap-2 rounded-full border px-4 py-2 backdrop-blur-sm transition-all duration-300"
          style={{
            backgroundColor: `${currentGallery.color}20`,
            borderColor: `${currentGallery.color}50`,
          }}
        >
          <div className="flex h-4 items-end gap-0.5">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`w-1 rounded-full transition-all duration-300 ${
                  isPlaying ? 'animate-music-bar' : 'h-1'
                }`}
                style={{
                  backgroundColor: currentGallery.color,
                  animationDelay: `${i * 0.2}s`,
                  height: isPlaying ? undefined : '4px',
                }}
              />
            ))}
          </div>
          <span className="text-sm font-medium text-white">
            {isPlaying
              ? `♪ ${tCommon('Common.Music.Playing')}`
              : `⏸ ${tCommon('Common.Music.Paused')}`}{' '}
            · {currentGallery.song}
          </span>
          <button
            onClick={() => {
              setIsPlaying(!isPlaying);
            }}
            className="ml-2 rounded-full p-1 transition-colors hover:bg-white/10"
          >
            {!isPlaying ? (
              <MutedOutlined className="text-gray-400" />
            ) : (
              <SoundOutlined style={{ color: currentGallery.color }} />
            )}
          </button>
        </div>

        <div className="flex w-full max-w-md items-center gap-3">
          <span className="w-10 text-right text-xs text-gray-400">
            {formatTime(currentTime)}
          </span>
          <div
            ref={progressRef}
            onClick={handleProgressClick}
            className="group relative h-2 flex-1 cursor-pointer overflow-hidden rounded-full bg-white/10"
          >
            <div
              className="absolute inset-0 rounded-full transition-all duration-100"
              style={{
                width: duration > 0 ? `${(currentTime / duration) * 100}%` : '0%',
                background: `linear-gradient(90deg, ${currentGallery.color}, ${currentGallery.color}cc)`,
              }}
            />
            <div
              className="absolute bottom-0 top-0 -mt-0.5 h-3 w-3 rounded-full opacity-0 shadow-lg transition-opacity group-hover:opacity-100"
              style={{
                left:
                  duration > 0 ? `calc(${(currentTime / duration) * 100}% - 6px)` : '0%',
                backgroundColor: currentGallery.color,
                boxShadow: `0 0 10px ${currentGallery.color}`,
              }}
            />
          </div>
          <span className="w-10 text-xs text-gray-400">{formatTime(duration)}</span>
        </div>
      </div>

      <div className="relative h-[400px]" style={{ perspective: '1200px' }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="relative h-[300px] w-[220px] md:h-[340px] md:w-[260px]"
            style={{
              transformStyle: 'preserve-3d',
              transform: `rotateY(${-currentIndex * angleStep}deg)`,
              transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            {galleries.map((item, index) => {
              const angle = index * angleStep;
              const radius = isSP ? 280 : 390;
              const isActive = index === currentIndex;

              return (
                <div
                  key={item.id}
                  className="absolute inset-0 h-full w-full cursor-pointer"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                    backfaceVisibility: 'hidden',
                  }}
                  onClick={() => setCurrentIndex(index)}
                >
                  <div
                    className={`h-full w-full transition-all duration-500 ${
                      isActive ? 'scale-105' : 'scale-95'
                    }`}
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: isActive ? 'translateZ(20px)' : 'translateZ(0)',
                    }}
                  >
                    <div
                      className="absolute inset-0 rounded-xl transition-all duration-500"
                      style={{
                        transform: 'translateZ(-15px)',
                        background: `linear-gradient(135deg, ${item.color}30, transparent)`,
                        filter: 'blur(20px)',
                        opacity: isActive ? 1 : 0.3,
                      }}
                    />

                    <div
                      className={`absolute -inset-1 rounded-xl transition-all duration-500 ${
                        isActive ? 'opacity-100' : 'opacity-0'
                      }`}
                      style={{
                        background: `linear-gradient(135deg, ${item.color}60, transparent, ${item.color}40)`,
                        transform: 'translateZ(-5px)',
                      }}
                    />

                    <Card
                      hoverable
                      className={`h-full w-full overflow-hidden rounded-xl border-2 transition-all duration-500 ${
                        isActive ? 'shadow-2xl' : 'opacity-70'
                      }`}
                      style={{
                        borderColor: isActive
                          ? `${item.color}80`
                          : 'rgba(255,255,255,0.1)',
                        boxShadow: isActive
                          ? `0 30px 60px -15px ${item.color}50, 0 0 40px ${item.color}20, inset 0 1px 0 rgba(255,255,255,0.2)`
                          : '0 10px 30px -10px rgba(0,0,0,0.5)',
                        background:
                          'linear-gradient(145deg, rgba(30,30,40,0.9), rgba(20,20,30,0.95))',
                      }}
                      styles={{
                        body: { padding: 0, height: '100%' },
                      }}
                      cover={
                        <div className="group relative h-full overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className={`h-full w-full object-cover transition-transform duration-700 ${
                              isActive ? 'scale-110' : 'scale-100'
                            } group-hover:scale-115`}
                          />

                          <div
                            className={`absolute inset-0 transition-opacity duration-500 ${
                              isActive ? 'opacity-100' : 'opacity-0'
                            }`}
                            style={{
                              background: `linear-gradient(45deg, transparent, ${item.color}30, transparent)`,
                              animation: isActive ? 'shimmer 2s infinite' : 'none',
                            }}
                          />

                          <div
                            className="pointer-events-none absolute left-0 right-0 top-0 h-24"
                            style={{
                              background:
                                'linear-gradient(to bottom, rgba(255,255,255,0.15), transparent)',
                            }}
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <div
                              className="mb-3 h-1 rounded-full transition-all duration-500"
                              style={{
                                backgroundColor: item.color,
                                width: isActive ? '3rem' : '2rem',
                                boxShadow: isActive ? `0 0 10px ${item.color}` : 'none',
                              }}
                            />
                            <Text
                              className="mb-1 block text-sm font-medium"
                              style={{ color: item.color }}
                            >
                              {item.date}
                            </Text>
                            <Title level={4} className="!mb-1 !text-white drop-shadow-lg">
                              {item.name}
                            </Title>
                            <Text className="line-clamp-2 text-sm italic text-gray-300">
                              {`"${item.memory}"`}
                            </Text>
                          </div>

                          {isActive && (
                            <div
                              className="absolute right-3 top-3 rounded-full px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm"
                              style={{
                                backgroundColor: `${item.color}cc`,
                                boxShadow: `0 4px 15px ${item.color}50`,
                                animation: isPlaying ? 'pulse 2s infinite' : 'none',
                              }}
                            >
                              {isPlaying
                                ? tCommon('Common.Music.Playing')
                                : tCommon('Common.Music.Paused')}
                            </div>
                          )}
                        </div>
                      }
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 h-20 w-[400px] -translate-x-1/2 rounded-full bg-gradient-to-t from-purple-500/10 to-transparent blur-xl" />

        <div
          className={clsx(
            'absolute left-0 right-0 z-10 flex items-center justify-center gap-4',
            isSP ? '-bottom-8' : '-bottom-12'
          )}
        >
          <button
            onClick={handlePrev}
            className="rounded-full border border-white/20 bg-white/10 p-3 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-purple-400/50 hover:bg-white/20"
          >
            <LeftOutlined className="text-lg" />
          </button>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="rounded-full bg-purple-600/80 p-4 text-white shadow-lg shadow-purple-500/30 transition-all duration-300 hover:scale-110 hover:bg-purple-600"
          >
            {isPlaying ? (
              <PauseCircleOutlined className="text-xl" />
            ) : (
              <PlayCircleOutlined className="text-xl" />
            )}
          </button>

          <button
            onClick={handleNext}
            className="rounded-full border border-white/20 bg-white/10 p-3 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-purple-400/50 hover:bg-white/20"
          >
            <RightOutlined className="text-lg" />
          </button>
        </div>

        <div className="absolute bottom-20 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
          {galleries.map((item, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="group relative"
            >
              <div
                className={`h-1 rounded-full transition-all duration-500 ${
                  index === currentIndex ? 'w-8' : 'w-2 bg-gray-600 hover:bg-gray-400'
                }`}
                style={{
                  backgroundColor: index === currentIndex ? item.color : undefined,
                }}
              />

              <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black/80 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                {item.name}
              </div>
            </button>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.6; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        @keyframes music-bar {
          0%, 100% { height: 4px; }
          50% { height: 16px; }
        }
        .animate-music-bar {
          animation: music-bar 0.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default RotatingGallery;
