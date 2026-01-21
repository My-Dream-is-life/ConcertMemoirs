import JiNanHome from '@/assets/city/jinan/home.jpg';
import JiNanSong from '@/assets/city/jinan/whereverYouAre.mp3';
import ZhengZhouHome from '@/assets/city/zhengzhou/home.jpg';
import ZhengZhouSong from '@/assets/city/zhengzhou/life.mp3';
import QingDaoHome from '@/assets/city/qingdao/home.jpg';
import QingDaoSong from '@/assets/city/qingdao/windIsRising.mp3';
import ChongQingHome from '@/assets/city/chongqing/home.jpg';
import ChongQingSong from '@/assets/city/chongqing/loveMeOrHim.mp3';
import WuHanHome from '@/assets/city/wuhan/home.jpg';
import WuHanSong from '@/assets/city/wuhan/hero.mp3';
import KoreaHome from '@/assets/city/korea/home.jpg';
import KoreaSong from '@/assets/city/korea/freak.mp3';
import BeiJingHome from '@/assets/city/beijing/home.jpg';
import BeiJingSong from '@/assets/city/beijing/takeABow.mp3';
import GalleryConcert from '@/assets/gallery-concert.jpg';
import gallerySong from '@/assets/galleryRemember.mp3';
import type { GalleryItem } from '@/types';

export const galleries: GalleryItem[] = [
  {
    id: 1,
    name: '济南·奥体中心',
    date: '2024年05月12日',
    image: JiNanHome,
    memory: '泉城的热情与感动',
    color: '#22c55e',
    song: '《只要有你的地方》',
    songFile: JiNanSong,
  },
  {
    id: 2,
    name: '郑州·奥体中心',
    date: '2024年08月03日',
    image: ZhengZhouHome,
    memory: '中原大地的音乐狂欢',
    color: '#f59e0b',
    song: '《生生》',
    songFile: ZhengZhouSong,
  },
  {
    id: 3,
    name: '青岛·健民中心',
    date: '2024年09月21日',
    image: QingDaoHome,
    memory: '海风中的音乐盛宴',
    color: '#3b82f6',
    song: '《起风了》',
    songFile: QingDaoSong,
  },
  {
    id: 4,
    name: '重庆·奥体中心',
    date: '2024年11月03日',
    image: ChongQingHome,
    memory: '山城夜色下的音浪',
    color: '#ec4899',
    song: '《爱我还是他》',
    songFile: ChongQingSong,
  },
  {
    id: 5,
    name: '武汉·INTIME音乐公园',
    date: '2025年04月21日',
    image: WuHanHome,
    memory: '江城春风与歌声交织',
    color: '#06b6d4',
    song: '《真心英雄》',
    songFile: WuHanSong,
  },
  {
    id: 6,
    name: '韩国·迎仕柏综艺馆',
    date: '2025年06月15日',
    image: KoreaHome,
    memory: '跨越国界的音乐之旅',
    color: '#8b5cf6',
    song: '《Freak》',
    songFile: KoreaSong,
  },
  {
    id: 7,
    name: '北京·鸟巢文化中心',
    date: '2025年07月04日',
    image: BeiJingHome,
    memory: '鸟巢的星光与万人合唱',
    color: '#a855f7',
    song: '《谢幕》',
    songFile: BeiJingSong,
  },
  {
    id: 8,
    name: '演唱会Live现场',
    date: '2024年05月12日 - 2025年07月04日',
    image: GalleryConcert,
    memory: '每一次相遇都是奇迹',
    color: '#f59e0b',
    song: '《记得》',
    songFile: gallerySong,
  },
];
