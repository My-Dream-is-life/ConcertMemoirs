import { useEffect, useRef } from 'react';

interface UseAudioPlayerOptions {
  isPlaying: boolean;
  url?: string;
  volume?: number;
  onEnded?: () => void;
  onTimeUpdate?: (time: number) => void;
  onLoadedMetadata?: (duration: number) => void;
}

export const useInitMusicPlayer = ({
  isPlaying,
  url,
  volume = 1,
  onEnded,
  onTimeUpdate,
  onLoadedMetadata,
}: UseAudioPlayerOptions) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // 初始化 audio
  useEffect(() => {
    const audio = new Audio();
    audio.volume = volume;
    audioRef.current = audio;

    const handleTimeUpdate = () => {
      onTimeUpdate?.(audio.currentTime);
    };
    const handleLoadedMetadata = () => {
      onLoadedMetadata?.(audio.duration || 0);
    };
    const handleEnded = () => {
      onEnded?.();
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.pause();
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
      audioRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // url 变化
  useEffect(() => {
    if (!audioRef.current || !url) return;

    audioRef.current.src = url;
    audioRef.current.currentTime = 0;
    audioRef.current.load();

    if (isPlaying) {
      audioRef.current.play().catch(() => {});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  // 播放 / 暂停
  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    if (isPlaying) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  // 音量
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  return audioRef;
};
