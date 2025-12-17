import { FC, useState, useEffect, useCallback, useMemo } from 'react';
import { Card, Typography } from 'antd';
import {
  LeftOutlined,
  RightOutlined,
  PlayCircleOutlined,
  PauseCircleOutlined,
} from '@ant-design/icons';
import type { GalleryItem } from '@/types';

interface RotatingGalleryProps {
  galleries: GalleryItem[];
}

const { Title, Text } = Typography;

const Particles: FC = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {[...Array(100)].map((_, i) => (
        <div
          key={i}
          className="animate-float absolute h-1 w-1 rounded-full bg-purple-400/60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );
};

const RotatingGallery: FC<RotatingGalleryProps> = ({ galleries }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const total = galleries.length;
  const angleStep = 360 / total;

  const currentGallery = useMemo(
    () => galleries[currentIndex],
    [currentIndex, galleries]
  );

  useEffect(() => {
    if (!isPlaying || isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 3500);

    return () => clearInterval(interval);
  }, [isPlaying, isHovered, total]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

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

  return (
    <div className="relative py-12">
      <div
        className="absolute inset-0 opacity-30 blur-3xl transition-all duration-1000"
        style={{
          background: `radial-gradient(ellipse at center, ${currentGallery.color}40 0%, transparent 70%)`,
        }}
      />

      <Particles />

      <Title
        level={2}
        className="relative z-10 mb-2 text-center"
        style={{ color: 'var(--foreground)' }}
      >
        演出回忆相册
      </Title>
      <Text className="relative z-10 mb-8 block text-center text-gray-400">
        {currentGallery.name} · {currentGallery.date}
      </Text>

      <div
        className="relative h-[420px] md:h-[520px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ perspective: '1200px' }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="relative h-[340px] w-[260px] md:h-[380px] md:w-[300px]"
            style={{
              transformStyle: 'preserve-3d',
              transform: `rotateY(${-currentIndex * angleStep}deg)`,
              transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            {galleries.map((item, index) => {
              const angle = index * angleStep;
              const radius = 320;
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
                  <Card
                    hoverable
                    className={`h-full w-full overflow-hidden transition-all duration-500 ${
                      isActive ? 'shadow-2xl' : 'opacity-80'
                    }`}
                    style={{
                      boxShadow: isActive
                        ? `0 25px 50px -12px ${item.color}60, 0 0 30px ${item.color}30`
                        : 'none',
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
                            isActive ? 'scale-105' : 'scale-100'
                          } group-hover:scale-110`}
                        />

                        <div
                          className={`absolute inset-0 transition-opacity duration-500 ${
                            isActive ? 'opacity-100' : 'opacity-0'
                          }`}
                          style={{
                            background: `linear-gradient(45deg, transparent, ${item.color}20, transparent)`,
                            animation: isActive ? 'shimmer 2s infinite' : 'none',
                          }}
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <div
                            className="mb-3 h-0.5 w-8 transition-all duration-500"
                            style={{
                              backgroundColor: item.color,
                              width: isActive ? '3rem' : '2rem',
                            }}
                          />
                          <Text
                            className="mb-1 block text-sm"
                            style={{ color: item.color }}
                          >
                            {item.date}
                          </Text>
                          <Title level={4} className="!mb-1 !text-white">
                            {item.name}
                          </Title>
                          <Text className="line-clamp-2 text-sm italic text-gray-300">
                            {`"${item.memory}"`}
                          </Text>
                        </div>

                        {isActive && (
                          <div
                            className="absolute right-3 top-3 animate-pulse rounded-full px-2 py-1 text-xs text-white"
                            style={{ backgroundColor: item.color }}
                          >
                            正在播放
                          </div>
                        )}
                      </div>
                    }
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 h-20 w-[400px] -translate-x-1/2 rounded-full bg-gradient-to-t from-purple-500/10 to-transparent blur-xl" />

        <div className="absolute bottom-4 left-0 right-0 z-10 flex items-center justify-center gap-4">
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
      `}</style>
    </div>
  );
};

export default RotatingGallery;
