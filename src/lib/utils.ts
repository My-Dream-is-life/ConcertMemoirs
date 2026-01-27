import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { LyricLine, Music } from '@/types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

export const parseLRC = (lrc: string): LyricLine[] => {
  const lines = lrc.split('\n');
  const result: LyricLine[] = [];

  for (const line of lines) {
    const match = line.match(/\[(\d{2}):(\d{2})\.(\d{2,3})\](.*)/);

    if (match) {
      const minutes = parseInt(match[1]);
      const seconds = parseInt(match[2]);
      const milliseconds = parseInt(match[3]);
      const text = match[4].trim();
      const time =
        minutes * 60 + seconds + milliseconds / (match[3].length === 3 ? 1000 : 100);

      result.push({ time, text });
    }
  }

  return result.sort((a, b) => a.time - b.time);
};

export const getLyrics = (music: Music[], id: Music['id']): LyricLine[] => {
  const findMusic = music.find((m) => m.id === id);

  if (!findMusic) {
    return parseLRC(`[00:00.00]暂无歌词
      [00:05.00]请欣赏音乐
      [00:10.00]感受旋律的美好`);
  }

  return parseLRC(findMusic.lyrics);
};

export const getCurrentLyricIndex = (
  lyrics: LyricLine[],
  currentTime: number
): number => {
  for (let i = lyrics.length - 1; i >= 0; i--) {
    if (currentTime >= lyrics[i].time) {
      return i;
    }
  }

  return 0;
};
