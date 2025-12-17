import JiNan from '@/assets/city/jinan.jpg';
import ZhengZhou from '@/assets/city/zhengzhou.jpg';
import QingDao from '@/assets/city/qingdao.jpg';
import ChongQing from '@/assets/city/chongqing.jpg';
import WuHan from '@/assets/city/wuhan.jpg';
import Korea from '@/assets/city/korea.jpg';
import BeiJing from '@/assets/city/beijing.jpg';
import GalleryConcert from '@/assets/gallery-concert.jpg';
import type { GalleryItem } from '@/types';

export const galleries: GalleryItem[] = [
  {
    id: 1,
    name: '济南·奥体中心',
    date: '2024年05月12日',
    image: JiNan,
    memory: '泉城的热情与感动',
    color: '#22c55e',
  },
  {
    id: 2,
    name: '郑州·奥体中心',
    date: '2024年08月03日',
    image: ZhengZhou,
    memory: '中原大地的音乐狂欢',
    color: '#f59e0b',
  },
  {
    id: 3,
    name: '青岛·健民中心',
    date: '2024年09月21日',
    image: QingDao,
    memory: '海风中的音乐盛宴',
    color: '#3b82f6',
  },
  {
    id: 4,
    name: '重庆·奥体中心',
    date: '2024年11月03日',
    image: ChongQing,
    memory: '山城夜色下的音浪',
    color: '#ec4899',
  },
  {
    id: 5,
    name: '武汉·INTIME音乐公园',
    date: '2025年04月21日',
    image: WuHan,
    memory: '江城春风与歌声交织',
    color: '#06b6d4',
  },
  {
    id: 6,
    name: '韩国·迎仕柏综艺馆',
    date: '2025年06月15日',
    image: Korea,
    memory: '跨越国界的音乐之旅',
    color: '#8b5cf6',
  },
  {
    id: 7,
    name: '北京·鸟巢',
    date: '2025年07月04日',
    image: BeiJing,
    memory: '鸟巢的星光与万人合唱',
    color: '#a855f7',
  },
  {
    id: 8,
    name: '演唱会现场',
    date: 'JJ20巡演',
    image: GalleryConcert,
    memory: '每一次相遇都是奇迹',
    color: '#f59e0b',
  },
];
