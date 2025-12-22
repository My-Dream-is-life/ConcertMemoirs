import { Star, Gem, Crown } from 'lucide-react';

export interface CollectionItem {
  id: number;
  name: string;
  description: string;
  image: string;
  city: string;
  date: string;
  rarity: 'common' | 'rare' | 'legendary';
  collected: boolean;
}

export const collections: CollectionItem[] = [
  {
    id: 1,
    name: '北京场应援棒',
    description: '2024年北京演唱会官方应援棒，限量版紫色闪光款',
    image:
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop',
    city: '北京',
    date: '2024-05-18',
    rarity: 'legendary',
    collected: true,
  },
  {
    id: 2,
    name: '青岛场海报',
    description: '青岛站限定海报，印有演唱会场馆全景',
    image:
      'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=300&h=300&fit=crop',
    city: '青岛',
    date: '2024-06-08',
    rarity: 'rare',
    collected: true,
  },
  {
    id: 3,
    name: '济南场手环',
    description: '济南演唱会入场手环，荧光紫色限定',
    image:
      'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop',
    city: '济南',
    date: '2024-06-22',
    rarity: 'common',
    collected: true,
  },
  {
    id: 4,
    name: '郑州场徽章',
    description: '郑州站纪念徽章套装，含5枚精美徽章',
    image:
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
    city: '郑州',
    date: '2024-07-13',
    rarity: 'rare',
    collected: false,
  },
  {
    id: 5,
    name: '重庆场T恤',
    description: '重庆演唱会限定T恤，背面印有巡演日程',
    image:
      'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=300&h=300&fit=crop',
    city: '重庆',
    date: '2024-08-03',
    rarity: 'legendary',
    collected: true,
  },
  {
    id: 6,
    name: '武汉场专辑',
    description: '武汉站特别版签名专辑',
    image:
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300&h=300&fit=crop',
    city: '武汉',
    date: '2024-08-17',
    rarity: 'legendary',
    collected: false,
  },
  {
    id: 7,
    name: '韩国场钥匙扣',
    description: '韩国首尔站限定钥匙扣，金属材质',
    image:
      'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=300&h=300&fit=crop',
    city: '韩国',
    date: '2024-09-07',
    rarity: 'rare',
    collected: true,
  },
  {
    id: 8,
    name: '全巡纪念册',
    description: '2024全国巡演纪念相册，收录所有场次精彩瞬间',
    image:
      'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=300&h=300&fit=crop',
    city: '全国',
    date: '2024-09-30',
    rarity: 'legendary',
    collected: true,
  },
];

export const rarityConfig = {
  common: {
    label: '普通',
    color: 'from-gray-400 to-gray-600',
    icon: Star,
    glow: 'shadow-gray-500/30',
  },
  rare: {
    label: '稀有',
    color: 'from-blue-400 to-purple-600',
    icon: Gem,
    glow: 'shadow-blue-500/50',
  },
  legendary: {
    label: '传说',
    color: 'from-purple-500 to-pink-500',
    icon: Crown,
    glow: 'shadow-purple-500/70',
  },
};
