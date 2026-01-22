import { Train, Clock, Wallet, Camera } from 'lucide-react';
import type { BaseCityItem } from '@/types';
import JiNanHome from '@/assets/city/jinan/home.jpg';
import JiNanExclusive1 from '@/assets/city/jinan/exclusiveImg/exclusive1.jpg';
import JiNanExclusive2 from '@/assets/city/jinan/exclusiveImg/exclusive2.jpg';
import JiNanExclusive3 from '@/assets/city/jinan/exclusiveImg/exclusive3.jpg';
import JiNanExclusive4 from '@/assets/city/jinan/exclusiveImg/exclusive4.jpg';
import JiNanExclusive5 from '@/assets/city/jinan/exclusiveImg/exclusive5.jpg';
import JiNanExclusive6 from '@/assets/city/jinan/exclusiveImg/exclusive6.jpg';
import JiNanExclusive7 from '@/assets/city/jinan/exclusiveImg/exclusive7.jpg';
import JiNanExclusive8 from '@/assets/city/jinan/exclusiveImg/exclusive8.jpg';
import JiNanAttraction1 from '@/assets/city/jinan/attraction/attraction1.jpg';
import JiNanAttraction2 from '@/assets/city/jinan/attraction/attraction2.jpg';
import JiNanAttraction3 from '@/assets/city/jinan/attraction/attraction3.jpg';
import JiNanAttraction4 from '@/assets/city/jinan/attraction/attraction4.jpg';
import JiNanFood1 from '@/assets/city/jinan/food/food1.jpg';
import JiNanFood2 from '@/assets/city/jinan/food/food2.jpg';
import JiNanFood3 from '@/assets/city/jinan/food/food3.jpg';
import JiNanFood4 from '@/assets/city/jinan/food/food4.jpg';

import ZhengZhouHome from '@/assets/city/zhengzhou/home.jpg';
import ZhengZhouExclusive1 from '@/assets/city/zhengzhou/exclusiveImg/exclusive1.jpg';
import ZhengZhouExclusive2 from '@/assets/city/zhengzhou/exclusiveImg/exclusive2.jpg';
import ZhengZhouExclusive3 from '@/assets/city/zhengzhou/exclusiveImg/exclusive3.jpg';
import ZhengZhouExclusive4 from '@/assets/city/zhengzhou/exclusiveImg/exclusive4.jpg';
import ZhengZhouExclusive5 from '@/assets/city/zhengzhou/exclusiveImg/exclusive5.jpg';
import ZhengZhouExclusive6 from '@/assets/city/zhengzhou/exclusiveImg/exclusive6.jpg';
import ZhengZhouExclusive7 from '@/assets/city/zhengzhou/exclusiveImg/exclusive7.jpg';
import ZhengZhouExclusive8 from '@/assets/city/zhengzhou/exclusiveImg/exclusive8.jpg';
import ZhengZhouAttraction1 from '@/assets/city/zhengzhou/attraction/attraction1.jpg';
import ZhengZhouAttraction2 from '@/assets/city/zhengzhou/attraction/attraction2.jpg';
import ZhengZhouAttraction3 from '@/assets/city/zhengzhou/attraction/attraction3.jpg';
import ZhengZhouAttraction4 from '@/assets/city/zhengzhou/attraction/attraction4.jpg';
import ZhengZhouFood1 from '@/assets/city/zhengzhou/food/food1.jpg';
import ZhengZhouFood2 from '@/assets/city/zhengzhou/food/food2.jpg';
import ZhengZhouFood3 from '@/assets/city/zhengzhou/food/food3.jpg';
import ZhengZhouFood4 from '@/assets/city/zhengzhou/food/food4.jpg';

import QingDaoHome from '@/assets/city//qingdao/home.jpg';
import QingDaoExclusive1 from '@/assets/city/qingdao/exclusiveImg/exclusive1.jpg';
import QingDaoExclusive2 from '@/assets/city/qingdao/exclusiveImg/exclusive2.jpg';
import QingDaoExclusive3 from '@/assets/city/qingdao/exclusiveImg/exclusive3.jpg';
import QingDaoExclusive4 from '@/assets/city/qingdao/exclusiveImg/exclusive4.jpg';
import QingDaoExclusive5 from '@/assets/city/qingdao/exclusiveImg/exclusive5.jpg';
import QingDaoExclusive6 from '@/assets/city/qingdao/exclusiveImg/exclusive6.jpg';
import QingDaoExclusive7 from '@/assets/city/qingdao/exclusiveImg/exclusive7.jpg';
import QingDaoExclusive8 from '@/assets/city/qingdao/exclusiveImg/exclusive8.jpg';
import QingDaoAttraction1 from '@/assets/city/qingdao/attraction/attraction1.jpg';
import QingDaoAttraction2 from '@/assets/city/qingdao/attraction/attraction2.jpg';
import QingDaoAttraction3 from '@/assets/city/qingdao/attraction/attraction3.jpg';
import QingDaoAttraction4 from '@/assets/city/qingdao/attraction/attraction4.jpg';
import QingDaoFood1 from '@/assets/city/qingdao/food/food1.jpg';
import QingDaoFood2 from '@/assets/city/qingdao/food/food2.jpg';
import QingDaoFood3 from '@/assets/city/qingdao/food/food3.jpg';
import QingDaoFood4 from '@/assets/city/qingdao/food/food4.jpg';

import ChongQingHome from '@/assets/city/chongqing/home.jpg';
import ChongQingExclusive1 from '@/assets/city/chongqing/exclusiveImg/exclusive1.jpg';
import ChongQingExclusive2 from '@/assets/city/chongqing/exclusiveImg/exclusive2.jpg';
import ChongQingExclusive3 from '@/assets/city/chongqing/exclusiveImg/exclusive3.jpg';
import ChongQingExclusive4 from '@/assets/city/chongqing/exclusiveImg/exclusive4.jpg';
import ChongQingExclusive5 from '@/assets/city/chongqing/exclusiveImg/exclusive5.jpg';
import ChongQingExclusive6 from '@/assets/city/chongqing/exclusiveImg/exclusive6.jpg';
import ChongQingExclusive7 from '@/assets/city/chongqing/exclusiveImg/exclusive7.jpg';
import ChongQingExclusive8 from '@/assets/city/chongqing/exclusiveImg/exclusive8.jpg';

import WuHanHome from '@/assets/city/wuhan/home.jpg';
import KoreaHome from '@/assets/city/korea/home.jpg';
import BeiJingHome from '@/assets/city/beijing/home.jpg';

export const allCities: BaseCityItem[] = [
  {
    id: 'jinan',
    name: '济南',
    address: '奥林匹克体育中心',
    image: JiNanHome,
    date: '2024年05月12日',
    description:
      '泉城济南，千泉汇聚。趵突泉的灵动，大明湖的静谧，为这次音乐之旅增添了几分诗意。',
    memory: '泉水叮咚作响，歌声温暖如初。在这座温柔的城市，遇见最好的JJ',
    exclusiveVideo: [
      {
        title: 'JJ20济南站 - 泉城之夜的感动',
        thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800',
        url: 'https://www.bilibili.com/',
        duration: '5:12',
      },
      {
        title: '《修炼爱情》催泪现场',
        thumbnail: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800',
        url: 'https://www.bilibili.com/',
        duration: '4:38',
      },
      {
        title: '全场万人合唱《曹操》',
        thumbnail: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800',
        url: 'https://www.bilibili.com/',
        duration: '6:02',
      },
    ],
    exclusivePicture: [
      {
        src: JiNanExclusive1,
        alt: '济南奥体现场',
      },
      {
        src: JiNanExclusive2,
        alt: 'JJ深情演唱',
      },
      {
        src: JiNanExclusive3,
        alt: ' JJ与JM互动',
      },
      {
        src: JiNanExclusive4,
        alt: '灯光璀璨',
      },
      {
        src: JiNanExclusive5,
        alt: 'Patti蔡宥绮',
      },
      {
        src: JiNanExclusive6,
        alt: '济南场涂鸦',
      },
      {
        src: JiNanExclusive7,
        alt: '舞台特效',
      },
      {
        src: JiNanExclusive8,
        alt: '难忘瞬间',
      },
    ],
    attractions: [
      {
        name: '趵突泉',
        image: JiNanAttraction1,
        description: '天下第一泉，三股清泉昼夜喷涌，冬日更有水汽缭绕的仙境景象。',
      },
      {
        name: '大明湖',
        image: JiNanAttraction2,
        description: '四面荷花三面柳，一城山色半城湖。泛舟湖上，感受老舍笔下的济南之美。',
      },
      {
        name: '千佛山',
        image: JiNanAttraction3,
        description: '登高望远，俯瞰泉城全貌。佛像、古刹，感受千年佛教文化。',
      },
      {
        name: '芙蓉街',
        image: JiNanAttraction4,
        description: '济南最热闹的老街，美食、文创、老建筑，感受地道的济南市井气息。',
      },
    ],
    foods: [
      {
        name: '油旋',
        image: JiNanFood1,
        description:
          '济南特色小吃，外酥里嫩，层层分明，配上一碗甜沫是老济南人的早餐标配。',
      },
      {
        name: '把子肉',
        image: JiNanFood2,
        description: '肥而不腻，入口即化。一块把子肉、一碗米饭，简单却满足。',
      },
      {
        name: '济南烧烤',
        image: JiNanFood3,
        description: '山东烧烤看济南！羊肉串、烤腰子、烤馒头片，配上大蒜，绝了！',
      },
      {
        name: '草包包子',
        image: JiNanFood4,
        description: '百年老字号，皮薄馅大，汤汁丰富。猪肉大葱馅最经典。',
      },
    ],
    travels: [
      {
        name: '交通建议',
        description:
          '济南地铁2号线贯穿东西，老城区可步行游览。建议住在泉城路附近，方便游玩。',
        icon: Train,
      },
      {
        name: '最佳时间',
        description: '秋季赏菊、冬季看雪后趵突泉都很美。避开五一、十一等节假日高峰期。',
        icon: Clock,
      },
      {
        name: '预算参考',
        description:
          '趵突泉门票40元，千佛山25元，大明湖免费。美食人均50-80元，物价很亲民。',
        icon: Wallet,
      },
      {
        name: '拍照打卡',
        description:
          '趵突泉李清照纪念馆、曲水亭街、宽厚里都是出片好地方，穿汉服拍照别有韵味。',
        icon: Camera,
      },
    ],
  },
  {
    id: 'zhengzhou',
    name: '郑州',
    address: '奥林匹克体育中心',
    image: ZhengZhouHome,
    date: '2024年08月03日',
    description:
      '郑州地处嵩山东麓、黄河之滨，居中华腹地，史谓“天地之中”，古为“商都”，今为“绿城”。',
    memory: '中原大地的音乐狂欢，八万颗心脏跟着JJ的节拍一起跳动',
    exclusiveVideo: [
      {
        title: 'JJ20郑州站 - 中原大地的音浪',
        thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800',
        url: 'https://www.bilibili.com/',
        duration: '5:45',
      },
      {
        title: '《她说》现场版感动全场',
        thumbnail: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800',
        url: 'https://www.bilibili.com/',
        duration: '4:22',
      },
      {
        title: '八万人齐唱《一千年以后》',
        thumbnail: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800',
        url: 'https://www.bilibili.com/',
        duration: '5:58',
      },
    ],
    exclusivePicture: [
      {
        src: ZhengZhouExclusive1,
        alt: '深情传递',
      },
      {
        src: ZhengZhouExclusive2,
        alt: '彩排现场',
      },
      {
        src: ZhengZhouExclusive3,
        alt: '深情演绎',
      },
      {
        src: ZhengZhouExclusive4,
        alt: '震撼舞台',
      },
      {
        src: ZhengZhouExclusive5,
        alt: '专属弹唱',
      },
      {
        src: ZhengZhouExclusive6,
        alt: '郑州奥体现场',
      },
      {
        src: ZhengZhouExclusive7,
        alt: '绚丽灯光',
      },
      {
        src: ZhengZhouExclusive8,
        alt: '深情演绎',
      },
    ],
    attractions: [
      {
        name: '少林寺',
        image: ZhengZhouAttraction1,
        description: '天下武功出少林，感受千年古刹的禅武文化，观赏精彩的少林功夫表演。',
      },
      {
        name: '龙门石窟',
        image: ZhengZhouAttraction2,
        description: '中国四大石窟之一，卢舍那大佛的微笑穿越千年，震撼人心。',
      },
      {
        name: '黄河风景区',
        image: ZhengZhouAttraction3,
        description: '母亲河畔感受黄河文化，炎黄二帝巨塑气势磅礴。',
      },
      {
        name: '河南博物院',
        image: ZhengZhouAttraction4,
        description: '馆藏文物17万余件，贾湖骨笛、妇好鸮尊等国宝级文物不容错过。',
      },
    ],
    foods: [
      {
        name: '烩面',
        image: ZhengZhouFood1,
        description: '河南特色面食，面条筋道，汤底浓郁，配上香菜、豆腐丝，暖胃又暖心。',
      },
      {
        name: '胡辣汤',
        image: ZhengZhouFood2,
        description: '河南人的早餐灵魂，麻辣鲜香，配上油条油饼，开启元气满满的一天。',
      },
      {
        name: '灌汤包',
        image: ZhengZhouFood3,
        description: '皮薄馅大汤汁多，先开窗后喝汤再吃肉，才是正确吃法。',
      },
      {
        name: '道口烧鸡',
        image: ZhengZhouFood4,
        description: '三百年历史的中华名吃，色泽金黄，肉质酥烂，香味浓郁。',
      },
    ],
    travels: [
      {
        name: '交通建议',
        description:
          '郑州是全国重要的交通枢纽，高铁四通八达。市内地铁便捷，去少林寺可乘坐旅游专线或高铁到登封。',
        icon: Train,
      },
      {
        name: '最佳时间',
        description: '春秋两季气候宜人，4-5月和9-10月最佳。夏季炎热，冬季较冷但游客少。',
        icon: Clock,
      },
      {
        name: '预算参考',
        description:
          '少林寺门票80元，龙门石窟90元。烩面人均20-30元，普通餐饮人均40-60元。',
        icon: Wallet,
      },
      {
        name: '拍照打卡',
        description: '少林寺塔林、龙门石窟卢舍那大佛、二七纪念塔都是经典打卡点。',
        icon: Camera,
      },
    ],
  },
  {
    id: 'qingdao',
    name: '青岛',
    address: '市民健身中心',
    image: QingDaoHome,
    date: '2024年09月21日',
    description:
      '海风拂面，啤酒飘香。在这座美丽的海滨城市，我们一起唱响那些陪伴我们成长的旋律。',
    memory: '海风里飘着啤酒的香气，歌声里满是青春的味道，这是最惬意的一场演唱会',
    exclusiveVideo: [
      {
        title: 'JJ20青岛站 - 海边的浪漫夜晚',
        thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800',
        url: 'https://www.bilibili.com/',
        duration: '4:56',
      },
      {
        title: '《小酒窝》全场大合唱',
        thumbnail: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800',
        url: 'https://www.bilibili.com/',
        duration: '3:42',
      },
      {
        title: '安可返场《不为谁而作的歌》',
        thumbnail: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800',
        url: 'https://www.bilibili.com/',
        duration: '5:18',
      },
    ],
    exclusivePicture: [
      {
        src: QingDaoExclusive1,
        alt: '吉他solo',
      },
      {
        src: QingDaoExclusive2,
        alt: '亲情弹唱',
      },
      {
        src: QingDaoExclusive3,
        alt: 'SMG青岛限定',
      },
      {
        src: QingDaoExclusive4,
        alt: '深情演绎',
      },
      {
        src: QingDaoExclusive5,
        alt: '璀璨星空',
      },
      {
        src: QingDaoExclusive6,
        alt: '灯光秀',
      },
      {
        src: QingDaoExclusive7,
        alt: '可爱小林',
      },
      {
        src: QingDaoExclusive8,
        alt: '完美ending',
      },
    ],
    attractions: [
      {
        name: '栈桥',
        image: QingDaoAttraction1,
        description: '青岛地标，百年历史。漫步栈桥，感受海风拂面，远眺小青岛灯塔。',
      },
      {
        name: '八大关风景区',
        image: QingDaoAttraction2,
        description: '万国建筑博览会，红瓦绿树、碧海蓝天，每条街道都是一幅画。',
      },
      {
        name: '崂山',
        image: QingDaoAttraction3,
        description: '海上名山第一，道教圣地。推荐太清宫线路，欣赏海天一色。',
      },
      {
        name: '青岛啤酒博物馆',
        image: QingDaoAttraction4,
        description: '了解青岛啤酒的百年历史，品尝原浆和纯生，感受啤酒文化。',
      },
    ],
    foods: [
      {
        name: '青岛大虾',
        image: QingDaoFood1,
        description: '个大肉鲜，白灼或椒盐都好吃。推荐去台东夜市或劈柴院品尝。',
      },
      {
        name: '海鲜大餐',
        image: QingDaoFood2,
        description: '蛤蜊、海蛎子、海虹、八爪鱼...配上青岛啤酒，人间美味！',
      },
      {
        name: '鲅鱼水饺',
        image: QingDaoFood3,
        description: '青岛特色，鲅鱼肉馅鲜嫩爽滑，一口一个鲜。',
      },
      {
        name: '排骨米饭',
        image: QingDaoFood4,
        description: '青岛人的日常美食，酱香浓郁的排骨配上白米饭，满足感爆棚。',
      },
    ],
    travels: [
      {
        name: '交通建议',
        description:
          '青岛地铁覆盖主要景点，1号线可到崂山。老城区景点步行即可，沿海木栈道适合骑行。',
        icon: Train,
      },
      {
        name: '最佳时间',
        description:
          '夏季（7-8月）是旺季，可参加青岛啤酒节。春秋季节人少、天气舒适，更适合深度游。',
        icon: Clock,
      },
      {
        name: '预算参考',
        description:
          '崂山门票130元，啤酒博物馆50元。海鲜大餐人均150-200元，普通餐饮人均40-60元。',
        icon: Wallet,
      },
      {
        name: '拍照打卡',
        description:
          '八大关公主楼、信号山观景台、燕儿岛栈道日落都是出片神地，穿浅色衣服更上镜。',
        icon: Camera,
      },
    ],
  },
  {
    id: 'chongqing',
    name: '重庆',
    address: '奥林匹克体育中心',
    image: ChongQingHome,
    date: '2024年11月03日',
    description:
      '山城重庆，江河纵横。两江交汇的磅礴、立体城市的霓虹，让这场音乐之旅多了几分热烈与江湖气。',
    memory: '山城夜色下的音浪，灯火阑珊中与JJ共唱那些年的青春',
    exclusiveVideo: [
      {
        title: 'JJ20重庆站 - 山城之夜的狂欢',
        thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800',
        url: 'https://www.bilibili.com/',
        duration: '5:33',
      },
      {
        title: '《学不会》深情演绎',
        thumbnail: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800',
        url: 'https://www.bilibili.com/',
        duration: '4:48',
      },
      {
        title: '重庆歌迷大合唱《记得》',
        thumbnail: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800',
        url: 'https://www.bilibili.com/',
        duration: '5:15',
      },
    ],
    exclusivePicture: [
      {
        src: ChongQingExclusive1,
        alt: '重量级嘉宾',
      },
      {
        src: ChongQingExclusive2,
        alt: '演唱会现场',
      },
      {
        src: ChongQingExclusive3,
        alt: '绚丽舞台',
      },
      {
        src: ChongQingExclusive4,
        alt: '深情时刻',
      },
      {
        src: ChongQingExclusive5,
        alt: '热情互动',
      },
      {
        src: ChongQingExclusive6,
        alt: '重庆涂鸦板',
      },
      {
        src: ChongQingExclusive7,
        alt: '林距离',
      },
      {
        src: ChongQingExclusive8,
        alt: '难忘夜晚',
      },
    ],
    attractions: [
      {
        name: '洪崖洞',
        image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800',
        description:
          '现实版千与千寻，夜景璀璨。11层吊脚楼依山而建，每一层都是不同的风景。',
      },
      {
        name: '解放碑',
        image: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=800',
        description:
          '重庆地标，繁华的商业中心。周边美食云集，是感受山城夜生活的最佳起点。',
      },
      {
        name: '磁器口古镇',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800',
        description: '千年古镇，石板路蜿蜒。陈麻花、毛血旺的香味飘散在青石巷中。',
      },
      {
        name: '长江索道',
        image: 'https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=800',
        description: '山城特有的空中交通，横跨长江，俯瞰两岸风光，体验8D魔幻城市。',
      },
    ],
    foods: [
      {
        name: '重庆火锅',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400',
        description:
          '麻辣鲜香，牛油锅底是灵魂。毛肚鸭肠涮七上八下，配上油碟蒜泥，巴适得很！',
      },
      {
        name: '重庆小面',
        image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400',
        description: '重庆人的早餐标配，麻辣味十足。一碗小面，开启地道的山城一天。',
      },
      {
        name: '酸辣粉',
        image: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=400',
        description: '酸辣爽口，粉条滑嫩。配上花生碎和香菜，酸爽开胃。',
      },
      {
        name: '江湖菜',
        image: 'https://images.unsplash.com/photo-1518492104633-130d0cc84637?w=400',
        description: '来凤鱼、辣子鸡、毛血旺...大盆大碗，麻辣鲜香，是重庆人的豪爽性格。',
      },
    ],
    travels: [
      {
        name: '交通建议',
        description:
          '重庆是8D魔幻城市，导航可能会迷路。地铁穿楼、轻轨跨江都是特色。打车或地铁出行最方便。',
        icon: Train,
      },
      {
        name: '最佳时间',
        description: '春秋两季最佳，3-5月和9-11月。夏季是火炉，冬季多雾。夜景一定要看！',
        icon: Clock,
      },
      {
        name: '预算参考',
        description: '火锅人均80-150元，小面10-15元。长江索道单程20元，洪崖洞免费。',
        icon: Wallet,
      },
      {
        name: '拍照打卡',
        description: '洪崖洞夜景、南山一棵树观景台、李子坝轻轨穿楼都是网红打卡点。',
        icon: Camera,
      },
    ],
  },
  {
    id: 'wuhan',
    name: '武汉',
    address: 'INTIME音乐公园',
    image: WuHanHome,
    date: '2025年04月21日',
    description:
      '这一夜，舞台灯光如江潮翻涌，旋律在体育馆内回荡。那些陪伴多年的旋律，穿过人海，也穿过时间，在武汉的夜空中重新相遇。有人轻声跟唱，有人放声呐喊，歌声与心跳同频，情绪在副歌处彻底释放。',
    memory: '江城春风与歌声交织，樱花树下我们一起唱着那些温暖的旋律',
    exclusiveVideo: [
      {
        title: '武汉站音乐节 - 江城春风中的歌声',
        thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800',
        url: 'https://www.bilibili.com/',
        duration: '5:28',
      },
      {
        title: '《黑键》钢琴独奏惊艳全场',
        thumbnail: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800',
        url: 'https://www.bilibili.com/',
        duration: '4:35',
      },
      {
        title: '武汉歌迷合唱《背对背拥抱》',
        thumbnail: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800',
        url: 'https://www.bilibili.com/',
        duration: '5:42',
      },
    ],
    exclusivePicture: [
      {
        src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600',
        alt: '武汉体育中心',
      },
      {
        src: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=600',
        alt: '江城夜色',
      },
      {
        src: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600',
        alt: '华丽舞台',
      },
      {
        src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600',
        alt: '深情演唱',
      },
      {
        src: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=600',
        alt: '歌迷互动',
      },
      {
        src: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600',
        alt: '万人合唱',
      },
      {
        src: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=600',
        alt: '灯光璀璨',
      },
      {
        src: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600',
        alt: '完美落幕',
      },
    ],
    attractions: [
      {
        name: '黄鹤楼',
        image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800',
        description:
          '江南三大名楼之首，崔颢题诗、李白搁笔的传奇之地。登楼远眺，尽览江城风光。',
      },
      {
        name: '东湖风景区',
        image: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=800',
        description: '中国最大的城中湖，樱花盛开时节美不胜收，骑行环湖是最佳体验方式。',
      },
      {
        name: '武汉长江大桥',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800',
        description: '万里长江第一桥，承载着新中国的建设记忆。桥上漫步，感受长江的壮阔。',
      },
      {
        name: '户部巷',
        image: 'https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=800',
        description: '汉味小吃第一巷，热干面、豆皮、面窝...一条巷子吃遍武汉美食。',
      },
    ],
    foods: [
      {
        name: '热干面',
        image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400',
        description:
          '武汉人的灵魂早餐，芝麻酱香浓郁，面条筋道爽滑。加卤蛋和酸豆角更地道！',
      },
      {
        name: '武昌鱼',
        image: 'https://images.unsplash.com/photo-1518492104633-130d0cc84637?w=400',
        description: '才饮长沙水，又食武昌鱼。清蒸最佳，肉质细嫩，鲜美无比。',
      },
      {
        name: '豆皮',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400',
        description: '老通城的招牌，金黄酥脆的外皮包裹着糯米和肉丁，香气四溢。',
      },
      {
        name: '鸭脖',
        image: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=400',
        description: '精武鸭脖、周黑鸭...麻辣鲜香，是追剧看球的最佳伴侣。',
      },
    ],
    travels: [
      {
        name: '交通建议',
        description:
          '武汉有三大火车站，注意区分。地铁网络发达，过江隧道和大桥是特色。轮渡过江别有风味。',
        icon: Train,
      },
      {
        name: '最佳时间',
        description: '春季3-4月樱花盛开最美，秋季9-11月气候宜人。夏季是著名的火炉城市。',
        icon: Clock,
      },
      {
        name: '预算参考',
        description: '黄鹤楼门票70元，东湖樱花园60元。热干面5-8元，普通餐饮人均40-70元。',
        icon: Wallet,
      },
      {
        name: '拍照打卡',
        description: '黄鹤楼、东湖樱花园、江汉路步行街、晴川阁都是热门打卡地。',
        icon: Camera,
      },
    ],
  },
  {
    id: 'korea',
    name: '韩国',
    address: '迎仕柏综艺馆',
    image: KoreaHome,
    date: '2025年06月15日',
    description:
      '首尔的夜色缓缓亮起，霓虹映照着城市的节奏，也点燃了这场特别的相遇。跨越语言与国界，JJ的歌声在韩国响起，旋律依旧熟悉，却在异国的空气中多了一层浪漫与力量。',
    memory: '跨越国界的音乐之旅，在异国他乡与来自世界各地的JM相聚',
    exclusiveVideo: [
      {
        title: 'JJ20首尔站 - 跨越国界的感动',
        thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800',
        url: 'https://www.bilibili.com/',
        duration: '6:12',
      },
      {
        title: '韩国歌迷中文合唱《江南》',
        thumbnail: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800',
        url: 'https://www.bilibili.com/',
        duration: '4:55',
      },
      {
        title: '《不潮不用花钱》嗨翻全场',
        thumbnail: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800',
        url: 'https://www.bilibili.com/',
        duration: '5:08',
      },
    ],
    exclusivePicture: [
      {
        src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600',
        alt: '首尔演唱会现场',
      },
      {
        src: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=600',
        alt: '异国歌迷',
      },
      {
        src: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600',
        alt: '震撼舞台',
      },
      {
        src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600',
        alt: '深情演绎',
      },
      {
        src: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=600',
        alt: '热情互动',
      },
      {
        src: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600',
        alt: '万人齐唱',
      },
      {
        src: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=600',
        alt: '绚丽特效',
      },
      {
        src: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600',
        alt: '难忘首尔夜',
      },
    ],
    attractions: [
      {
        name: '景福宫',
        image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800',
        description:
          '朝鲜王朝的正宫，穿韩服免费入场。守门将换岗仪式庄严肃穆，仿佛穿越时空。',
      },
      {
        name: '北村韩屋村',
        image: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=800',
        description: '保存完好的传统韩屋聚落，青瓦白墙间感受韩国传统之美。',
      },
      {
        name: '明洞',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800',
        description: '首尔最繁华的购物天堂，化妆品、美食、潮流应有尽有。',
      },
      {
        name: '南山首尔塔',
        image: 'https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=800',
        description: '首尔地标，夜景绝美。情侣锁墙见证无数爱情，是浪漫约会圣地。',
      },
    ],
    foods: [
      {
        name: '韩式烤肉',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400',
        description: '五花肉、牛排骨在烤盘上滋滋作响，包上生菜蘸酱，一口下去满足感爆棚。',
      },
      {
        name: '部队锅',
        image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400',
        description: '泡菜、年糕、午餐肉、泡面...大杂烩的美味，韩剧里的经典美食。',
      },
      {
        name: '炸鸡啤酒',
        image: 'https://images.unsplash.com/photo-1518492104633-130d0cc84637?w=400',
        description: '韩国国民美食组合，酥脆炸鸡配冰啤酒，看球追剧的完美搭配。',
      },
      {
        name: '石锅拌饭',
        image: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=400',
        description: '滚烫石锅里的米饭配上各色蔬菜和辣酱，锅巴香脆是灵魂所在。',
      },
    ],
    travels: [
      {
        name: '交通建议',
        description:
          '仁川机场到市区可乘机场快线或机场大巴。首尔地铁发达，买T-money卡最方便。',
        icon: Train,
      },
      {
        name: '最佳时间',
        description:
          '春季4-5月樱花盛开，秋季9-11月红叶漫山。夏季炎热多雨，冬季寒冷但可滑雪。',
        icon: Clock,
      },
      {
        name: '预算参考',
        description:
          '景福宫门票3000韩元（约15元），烤肉人均150-250元。可提前兑换韩元或使用支付宝。',
        icon: Wallet,
      },
      {
        name: '拍照打卡',
        description: '景福宫穿韩服、北村韩屋村、南山塔、弘大街头都是网红打卡点。',
        icon: Camera,
      },
    ],
  },
  {
    id: 'beijing',
    name: '北京',
    address: '鸟巢文化中心',
    image: BeiJingHome,
    date: '2025年07月04日',
    description:
      '在首都的夜空下，与万千歌迷共同见证JJ20的震撼现场。故宫的红墙、长城的雄伟，都成为这次旅程的美好记忆。',
    memory: '那一晚，八万人的大合唱响彻鸟巢上空，仿佛整个北京都在为JJ欢呼',
    exclusiveVideo: [
      {
        title: 'JJ20北京站 - 开场《圣所》震撼全场',
        thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800',
        url: 'https://www.bilibili.com/',
        duration: '5:32',
      },
      {
        title: '万人大合唱《江南》感动瞬间',
        thumbnail: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800',
        url: 'https://www.bilibili.com/',
        duration: '4:18',
      },
      {
        title: '《那些你很冒险的梦》全场泪目',
        thumbnail: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800',
        url: 'https://www.bilibili.com/',
        duration: '6:45',
      },
    ],
    exclusivePicture: [
      {
        src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600',
        alt: '鸟巢演唱会现场',
      },
      {
        src: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=600',
        alt: '万人合唱时刻',
      },
      {
        src: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600',
        alt: '舞台灯光秀',
      },
      {
        src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600',
        alt: 'JJ深情演唱',
      },
      {
        src: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=600',
        alt: '现场气氛',
      },
      {
        src: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600',
        alt: '歌迷互动',
      },
      {
        src: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=600',
        alt: '烟火表演',
      },
      {
        src: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600',
        alt: '演唱会ending',
      },
    ],
    attractions: [
      {
        name: '故宫博物院',
        image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800',
        description:
          '世界上现存规模最大、保存最为完整的木质结构古建筑群，感受600年皇家气派。',
      },
      {
        name: '长城',
        image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800',
        description: '不到长城非好汉！推荐慕田峪段，人少景美，适合拍照。',
      },
      {
        name: '颐和园',
        image: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=800',
        description: '中国现存最大的皇家园林，昆明湖畔漫步，感受皇家园林的精致。',
      },
      {
        name: '天坛公园',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800',
        description: '明清两代帝王祭天的场所，祈年殿的建筑之美令人叹为观止。',
      },
    ],
    foods: [
      {
        name: '北京烤鸭',
        image: 'https://images.unsplash.com/photo-1518492104633-130d0cc84637?w=400',
        description: '外皮酥脆，肉质鲜嫩。推荐全聚德、大董，记得提前预约！',
      },
      {
        name: '老北京炸酱面',
        image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400',
        description: '面条劲道，酱香浓郁，配上黄瓜丝、豆芽等菜码，绝对地道。',
      },
      {
        name: '涮羊肉',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400',
        description: '冬天必吃！鲜嫩的羊肉配上麻酱蘸料，暖胃又暖心。',
      },
      {
        name: '豆汁儿配焦圈',
        image: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=400',
        description: '老北京特色早点，酸中带甜的独特风味，敢尝试才是真正的旅行家！',
      },
    ],
    travels: [
      {
        name: '交通建议',
        description:
          '地铁出行最便捷，推荐办理一卡通或使用手机支付。去长城可乘坐877路公交或S2线城铁。',
        icon: Train,
      },
      {
        name: '最佳时间',
        description:
          '秋季（9-11月）气候宜人，是北京最美的季节。故宫、长城建议早上开门就去，避开人流高峰。',
        icon: Clock,
      },
      {
        name: '预算参考',
        description:
          '故宫门票60元，长城40-65元不等。烤鸭人均200-300元，普通餐饮人均50-80元。',
        icon: Wallet,
      },
      {
        name: '拍照打卡',
        description: '故宫角楼、景山万春亭、798艺术区都是绝佳的拍摄地点，日落时分最美。',
        icon: Camera,
      },
    ],
  },
];
