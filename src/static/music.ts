import type { Music } from '@/types';
import TomorrowCoordinatesImg from '@/assets/music/tomorrowCoordinates/img.jpg';
import TomorrowCoordinatesLyrics from '@/assets/music/tomorrowCoordinates/lyrics.lrc?raw';
import TomorrowCoordinatesMusic from '@/assets/music/tomorrowCoordinates/music.mp3';
import InAnInstantImg from '@/assets/music/inAnInstant/img.jpg';
import InAnInstantLyrics from '@/assets/music/inAnInstant/lyrics.lrc?raw';
import InAnInstantMusic from '@/assets/music/inAnInstant/music.mp3';
import RevealedToYouImg from '@/assets/music/revealedToYou/img.jpg';
import RevealedToYouLyrics from '@/assets/music/revealedToYou/lyrics.lrc?raw';
import RevealedToYouMusic from '@/assets/music/revealedToYou/music.mp3';
import SkibidiImg from '@/assets/music/skibidi/img.jpg';
import SkibidiLyrics from '@/assets/music/skibidi/lyrics.lrc?raw';
import SkibidiMusic from '@/assets/music/skibidi/music.mp3';

export const music: Music[] = [
  {
    id: 1,
    title: '明日坐标',
    artist: '林俊杰',
    album: '明日坐标',
    cover: TomorrowCoordinatesImg,
    url: TomorrowCoordinatesMusic,
    lyrics: TomorrowCoordinatesLyrics,
    isNew: true,
  },
  {
    id: 2,
    title: '瞬间的瞬间',
    artist: '林俊杰',
    album: '瞬间的瞬间',
    cover: InAnInstantImg,
    url: InAnInstantMusic,
    lyrics: InAnInstantLyrics,
    isNew: true,
  },
  {
    id: 3,
    title: '为你揭晓',
    artist: '林俊杰, 张艺兴',
    album: '为你揭晓',
    cover: RevealedToYouImg,
    url: RevealedToYouMusic,
    lyrics: RevealedToYouLyrics,
    isNew: true,
  },
  {
    id: 4,
    title: 'Skibidi',
    artist: '林俊杰, 成龙',
    album: 'Skibidi',
    cover: SkibidiImg,
    url: SkibidiMusic,
    lyrics: SkibidiLyrics,
    isNew: true,
  },
  {
    id: 5,
    title: '那些你很冒险的梦',
    artist: '林俊杰',
    album: '学不会',
    cover:
      'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    lyrics: TomorrowCoordinatesLyrics,
  },
  {
    id: 6,
    title: '小酒窝',
    artist: '林俊杰 / 蔡卓妍',
    album: 'JJ陆',
    cover:
      'https://images.unsplash.com/photo-1446057032654-9d8885db76c6?w=300&h=300&fit=crop',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
    lyrics: TomorrowCoordinatesLyrics,
  },
  {
    id: 7,
    title: '倒带',
    artist: '林俊杰',
    album: '第二天堂',
    cover:
      'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=300&h=300&fit=crop',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
    lyrics: TomorrowCoordinatesLyrics,
  },
  {
    id: 8,
    title: '手心的蔷薇',
    artist: '林俊杰 / 邓紫棋',
    album: '新地球',
    cover:
      'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=300&h=300&fit=crop',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
    lyrics: TomorrowCoordinatesLyrics,
  },
  {
    id: 9,
    title: '可惜没如果',
    artist: '林俊杰',
    album: '新地球',
    cover:
      'https://images.unsplash.com/photo-1504898770365-14faca6a7320?w=300&h=300&fit=crop',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
    lyrics: TomorrowCoordinatesLyrics,
    isNew: true,
  },
  {
    id: 10,
    title: '曹操',
    artist: '林俊杰',
    album: '曹操',
    cover:
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
    lyrics: TomorrowCoordinatesLyrics,
  },
  {
    id: 11,
    title: '记得',
    artist: '林俊杰',
    album: '西界',
    cover:
      'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=300&h=300&fit=crop',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3',
    lyrics: TomorrowCoordinatesLyrics,
  },
  {
    id: 12,
    title: '醉赤壁',
    artist: '林俊杰',
    album: 'JJ陆',
    cover:
      'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3',
    lyrics: TomorrowCoordinatesLyrics,
    isNew: true,
  },
];
