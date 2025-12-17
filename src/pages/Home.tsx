import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Music, Sparkles, Heart, MapPin, Clock } from 'lucide-react';
import RotatingGallery from '@/components/molecules/RotatingGallery';
import { ROUTER_PATH } from '@/constants';
import { galleries } from '@/static/home';
import HomeConcert from '@/assets/home-concert.jpg';

const Home: FC = () => {
  return (
    <div>
      <section className="relative h-screen min-h-[600px]">
        <img
          src={HomeConcert}
          alt="home_concert"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />

        <div className="relative flex h-full flex-col items-center justify-center px-4 text-center">
          <div className="mb-6 animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/20 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
              <Sparkles className="h-4 w-4" />
              二十年音乐旅程
            </span>
          </div>

          <h1
            className="mb-8 animate-fade-up font-display text-5xl font-bold text-foreground md:text-7xl lg:text-8xl"
            style={{ animationDelay: '100ms' }}
          >
            JJ20
            <span className="mt-3 block bg-gradient-to-r from-primary to-amber-300 bg-clip-text text-2xl text-transparent md:text-4xl lg:text-5xl">
              演唱会回忆录
            </span>
          </h1>

          <p
            className="mb-8 max-w-2xl animate-fade-up text-lg text-muted-foreground md:text-xl"
            style={{ animationDelay: '200ms' }}
          >
            用音乐记录每一次相遇，用脚步丈量每一座城市
            <br />
            这是属于JM的JJ20世界巡回之旅
          </p>

          <div
            className="flex animate-fade-up items-center gap-6 text-sm text-muted-foreground"
            style={{ animationDelay: '300ms' }}
          >
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="bg-gradient-to-r from-primary to-amber-300 bg-clip-text font-bold text-transparent">
                40
              </span>
              座城市
            </span>
            <span className="flex items-center gap-2">
              <Music className="h-4 w-4 text-primary" />
              无数回忆
            </span>
            <span className="flex items-center gap-2">
              <Heart className="h-4 w-4 text-primary" />
              永恒热爱
            </span>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-primary/50 p-2">
            <div className="h-3 w-1.5 animate-fade-in rounded-full bg-primary" />
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link
            to={ROUTER_PATH.TIME_LINE}
            className="group block rounded-2xl border border-primary/30 bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 p-8 transition-all duration-300 hover:border-primary/60 hover:shadow-[0_0_40px_hsl(var(--primary)/0.2)]"
          >
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="flex items-center gap-4">
                <div className="animate-pulse rounded-full bg-primary/20 p-3">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-display text-xl font-bold text-foreground">
                    追星时间线
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    按时间顺序回顾每一场演唱会的感动及难忘瞬间
                  </p>
                </div>
              </div>
              <span className="font-medium text-primary transition-transform group-hover:translate-x-2">
                查看详情 →
              </span>
            </div>
          </Link>
        </div>
      </section>

      <section className="bg-background/50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
              追随音乐的脚步
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              每一座城市都承载着独特的记忆，每一场演唱会都是一次心灵的洗礼
            </p>
          </div>

          <div className="mx-auto max-w-7xl">
            <RotatingGallery galleries={galleries} />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
        <div className="relative mx-auto max-w-4xl text-center">
          <Music className="mx-auto mb-6 h-12 w-12 text-primary" />
          <blockquote className="mb-6 font-display text-2xl italic text-foreground md:text-3xl">
            &quot; 二十年的坚持，是因为有你们一路相伴 &quot;
          </blockquote>
          <cite className="text-muted-foreground">—— 林俊杰(JJ Lin)</cite>
        </div>
      </section>
    </div>
  );
};

export default Home;
