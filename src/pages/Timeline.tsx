import { FC } from 'react';
import { Tag, Timeline as AntTimeline } from 'antd';
import {
  CalendarOutlined,
  EnvironmentOutlined,
  StarOutlined,
  HeartOutlined,
} from '@ant-design/icons';
import { Music, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import TimelineConcert from '@/assets/timeline-concert.jpg';
import { timeline } from '@/static/timeline';
import { ROUTER_PATH } from '@/constants';

const Timeline: FC = () => {
  const { t } = useTranslation();

  return (
    <div>
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
            {t('Timeline.Title')}
          </h1>

          <p className="max-w-xl text-lg text-muted-foreground">
            {t('Timeline.Description')}
          </p>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <AntTimeline
            mode="alternate"
            items={timeline.map((time) => ({
              color: '#a855f7',
              dot: <div className="h-4 w-4 animate-pulse rounded-full bg-primary" />,
              children: (
                <Link
                  to={ROUTER_PATH.CITY_DETAIL.replace(':id', time.id)}
                  className="group block"
                >
                  <div className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_hsl(270_70%_60%/0.2)]">
                    <div className="mb-4 flex flex-wrap items-center gap-3">
                      <Tag icon={<CalendarOutlined />} color="purple">
                        {time.date}
                      </Tag>
                      <Tag icon={<EnvironmentOutlined />} color="geekblue">
                        {time.name}
                      </Tag>
                    </div>

                    <h3 className="mb-2 font-display text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                      {time.address}
                    </h3>

                    <div className="mb-3 flex items-center gap-2 text-accent">
                      <StarOutlined className="text-primary" />
                      <span className="text-sm font-medium text-primary">
                        {time.highlight}
                      </span>
                    </div>

                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                      {time.memory}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {time.songs.map((song) => (
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

          <div className="mt-8 flex flex-col items-center">
            <div className="flex h-12 w-12 animate-pulse items-center justify-center rounded-full border-2 border-primary bg-primary/20">
              <HeartOutlined className="text-xl text-primary" />
            </div>
            <p className="mt-4 italic text-muted-foreground">{t('Timeline.Continue')}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Timeline;
