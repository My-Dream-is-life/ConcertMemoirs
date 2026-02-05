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
import LunarEclipseImg from '@/assets/music/lunarEclipse/img.jpg';
import LunarEclipseLyrics from '@/assets/music/lunarEclipse/lyrics.lrc?raw';
import LunarEclipseMusic from '@/assets/music/lunarEclipse/music.mp3';
import TurnOfAPageImg from '@/assets/music/turnOfAPage/img.jpg';
import TurnOfAPageLyrics from '@/assets/music/turnOfAPage/lyrics.lrc?raw';
import TurnOfAPageMusic from '@/assets/music/turnOfAPage/music.mp3';
import AbsolutelyImg from '@/assets/music/absolutely/img.jpg';
import AbsolutelyLyrics from '@/assets/music/absolutely/lyrics.lrc?raw';
import AbsolutelyMusic from '@/assets/music/absolutely/music.mp3';

export const music: Music[] = [
  {
    id: 1,
    title: '明日坐标',
    artist: '林俊杰',
    album: '明日坐标',
    cover: TomorrowCoordinatesImg,
    url: TomorrowCoordinatesMusic,
    lyrics: TomorrowCoordinatesLyrics,
  },
  {
    id: 2,
    title: '瞬间的瞬间',
    artist: '林俊杰',
    album: '瞬间的瞬间',
    cover: InAnInstantImg,
    url: InAnInstantMusic,
    lyrics: InAnInstantLyrics,
  },
  {
    id: 3,
    title: '为你揭晓',
    artist: '林俊杰, 张艺兴',
    album: '为你揭晓',
    cover: RevealedToYouImg,
    url: RevealedToYouMusic,
    lyrics: RevealedToYouLyrics,
  },
  {
    id: 4,
    title: 'Skibidi',
    artist: '林俊杰, 成龙',
    album: 'Skibidi',
    cover: SkibidiImg,
    url: SkibidiMusic,
    lyrics: SkibidiLyrics,
  },
  {
    id: 5,
    title: '在月蚀里抱紧我',
    artist: '林俊杰, 黄丽玲',
    album: '在月蚀里抱紧我',
    cover: LunarEclipseImg,
    url: LunarEclipseMusic,
    lyrics: LunarEclipseLyrics,
  },
  {
    id: 6,
    title: '光阴副本 / Turn Of A Page',
    artist: '林俊杰',
    album: '光阴副本',
    cover: TurnOfAPageImg,
    url: TurnOfAPageMusic,
    lyrics: TurnOfAPageLyrics,
  },
  {
    id: 7,
    title: '绝不绝(无畏契约一周年瓦友节献礼曲)',
    artist: '林俊杰, VALORANT',
    album: '绝不绝',
    cover: AbsolutelyImg,
    url: AbsolutelyMusic,
    lyrics: AbsolutelyLyrics,
  },
];
