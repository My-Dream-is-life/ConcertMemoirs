import { Tag, Timeline as AntTimeline } from 'antd';
import {
  CalendarOutlined,
  EnvironmentOutlined,
  StarOutlined,
  HeartOutlined,
} from '@ant-design/icons';
import { Music, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import TimelineConcert from '@/assets/timeline-concert.jpg';

const timelineEvents = [
  {
    date: '2023年10月28日',
    city: '北京',
    venue: '国家体育场（鸟巢）',
    path: '/beijing',
    highlight: '八万人大合唱《江南》',
    memory:
      '第一次在鸟巢看JJ，当全场齐唱《江南》的时候，眼泪不自觉地流了下来。二十年了，这首歌依然有魔力。',
    songs: ['江南', '她说', '不为谁而作的歌', '修炼爱情'],
  },
  {
    date: '2023年11月18日',
    city: '青岛',
    venue: '青岛国信体育场',
    path: '/qingdao',
    highlight: '海风中的《会有那么一天》',
    memory:
      '青岛的海风带着咸味，JJ唱《会有那么一天》时，我仿佛看到了自己的青春。演唱会结束后去海边吹风，完美的一天。',
    songs: ['会有那么一天', '曹操', '小酒窝', '学不会'],
  },
  {
    date: '2023年12月9日',
    city: '济南',
    venue: '济南奥体中心',
    path: '/jinan',
    highlight: '雪夜里的《Always Online》',
    memory:
      '济南下雪了！散场时漫天飞雪，大家都在哼唱《Always Online》，那个画面我会记一辈子。',
    songs: ['Always Online', '背对背拥抱', '可惜没如果', '那些你很冒险的梦'],
  },
];

const Timeline = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px]">
        <img
          src={TimelineConcert}
          alt="timeline_concert"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
        <div className="relative flex h-full flex-col items-center justify-center px-4 text-center">
          <Sparkles className="mb-4 h-8 w-8 animate-pulse text-primary" />
          <h1 className="mb-4 font-display text-4xl font-bold text-foreground md:text-6xl">
            追星时间线
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground">
            记录每一场演唱会，每一次感动，每一个难忘的瞬间
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <AntTimeline
            mode="alternate"
            items={timelineEvents.map((event) => ({
              color: '#a855f7',
              dot: <div className="h-4 w-4 animate-pulse rounded-full bg-primary" />,
              children: (
                <Link to={event.path} className="group block">
                  <div className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_hsl(270_70%_60%/0.2)]">
                    <div className="mb-4 flex flex-wrap items-center gap-3">
                      <Tag icon={<CalendarOutlined />} color="purple">
                        {event.date}
                      </Tag>
                      <Tag icon={<EnvironmentOutlined />} color="geekblue">
                        {event.city}
                      </Tag>
                    </div>

                    <h3 className="mb-2 font-display text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                      {event.venue}
                    </h3>

                    <div className="mb-3 flex items-center gap-2 text-accent">
                      <StarOutlined className="text-primary" />
                      <span className="text-sm font-medium text-primary">
                        {event.highlight}
                      </span>
                    </div>

                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                      {event.memory}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {event.songs.map((song) => (
                        <Tag
                          key={song}
                          className="border-0 bg-secondary text-muted-foreground"
                        >
                          <Music className="mr-1 inline h-3 w-3" />
                          {song}
                        </Tag>
                      ))}
                    </div>
                  </div>
                </Link>
              ),
            }))}
          />

          {/* End Heart */}
          <div className="mt-8 flex flex-col items-center">
            <div className="flex h-12 w-12 animate-pulse items-center justify-center rounded-full border-2 border-primary bg-primary/20">
              <HeartOutlined className="text-xl text-primary" />
            </div>
            <p className="mt-4 italic text-muted-foreground">未完待续...期待下一场相遇</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Timeline;
