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
import GalleryConcert from '@/assets/home/gallery-concert.jpg';
import gallerySong from '@/assets/home/galleryRemember.mp3';
import FinallapTheme from '@/assets/home/finallap-theme.jpg';
import JJ20Theme from '@/assets/home/jj20-theme.jpg';
import type { GalleryItem, ConcertThemeItem, NewConcertInfo } from '@/types';

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

export const concertThemes: ConcertThemeItem[] = [
  {
    id: 'finallap',
    name: 'JJ20 FINAL LAP世界巡回演唱会',
    artist: '林俊杰',
    watchCount: 2,
    description: 'JJ20 世界巡回演唱会收官里程',
    themeMusic: '光阴副本',
    themeColor: 'hsl(200 80% 60%)',
    themeImage: FinallapTheme,
    themeTime: '2024年12月 - 2025年07月',
    venues: [
      '新加坡国家体育场',
      'KIA Forum',
      'Scotiabank Arena',
      'Chase Center',
      'Barclays Center',
      'Boston',
      'The O2',
      'La Defense Arena',
      'Qudos Bank Arena',
      'Rod Laver Arena',
      'Bukit Jalil National Stadium',
      '台北大巨蛋',
      'INSPIRE ARENA 迎仕柏综艺馆',
      '北京市国家体育场-鸟巢',
    ],
    highlights: ['回归音乐本质', '原创歌曲首唱', '酷炫舞台设计', '特邀嘉宾秀'],
    setlistCount: 50,
    avgDuration: '3小时',
    firstShow: '2024-12-28',
  },
  {
    id: 'jj20',
    name: 'JJ 林俊杰 JJ20 世界巡回演唱会',
    artist: '林俊杰',
    watchCount: 5,
    description: '二十年音乐旅程的里程碑巡演',
    themeMusic: '7300多天',
    themeColor: 'hsl(270 80% 60%)',
    themeImage: JJ20Theme,
    themeTime: '2023年09月 - 2024年11月',
    venues: [
      '广州天河体育中心体育场',
      '广西体育中心体育场',
      '国家体育场-鸟巢',
      '武汉五环体育中心体育场',
      '南京奥体中心体育场',
      '咸阳奥体中心体育场',
      '成都东安湖体育公园主体育场',
      '福州海峡奥林匹克体育中心体育场',
      '杭州奥体中心体育场',
      '天津奥体中心体育场',
      '深圳大运中心体育场',
      '济南奥体中心体育场',
      '苏州奥林匹克体育中心体育场',
      '贵阳奥林匹克体育中心体育场',
      '哈尔滨国际会展中心体育场',
      '南昌国际体育中心体育场',
      '兰州奥体中心玫瑰体育场',
      '山西体育中心体育场',
      '郑州奥林匹克体育中心',
      '青岛市民健身中心海之沙体育场',
      '厦门奥林匹克体育中心白鹭体育场',
      'K-ARENA YOKOHAMA',
      'IMPACT ARENA',
      '重庆奥林匹克体育中心体育场',
    ],
    highlights: ['3D全息投影开场', '万人大合唱《江南》', '感动落泪环节'],
    setlistCount: 44,
    avgDuration: '3小时',
    firstShow: '2023-09-08',
  },
];

export const newConcert: NewConcertInfo | undefined = undefined;
