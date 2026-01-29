import { FC } from 'react';
import jjImg from '@/assets/home/home-concert.jpg';
import BaseParticles from '@/components/atoms/BaseParticles';

const ArtistIntro: FC = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a102a] via-[#2d1a4d] to-black">
      <BaseParticles />

      <div className="animate-pulse-slow absolute -top-32 left-1/2 z-0 h-[600px] w-[600px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/30 via-primary/10 to-transparent opacity-60 blur-3xl" />
      <div className="animate-pulse-slow absolute bottom-0 right-0 z-0 h-96 w-96 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-amber-300/20 via-primary/10 to-transparent opacity-40 blur-2xl" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col-reverse gap-10 px-6 py-16 md:flex-row md:items-center md:justify-between">
        <div className="relative flex w-full items-center justify-center md:w-1/2">
          <div className="animate-blob -left-50 absolute -top-10 -z-10 hidden h-[600px] w-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/40 via-amber-300/20 to-transparent opacity-80 blur-3xl md:block" />
          <div className="relative flex items-center justify-center">
            <img
              src={jjImg}
              alt="JJ Lin"
              className="h-[260px] w-[260px] rounded-[20px] object-cover shadow-[0_20px_60px_rgba(0,0,0,0.6)] transition-transform duration-700 hover:scale-105 md:h-[420px] md:w-[420px] md:rounded-[24px]"
            />
            <div className="pointer-events-none absolute -inset-3 rounded-[22px] border-2 border-primary/50 opacity-80 blur-sm md:-inset-4 md:rounded-[28px]" />
          </div>
        </div>

        <div className="flex w-full flex-col gap-6 md:w-1/2">
          <h1 className="bg-gradient-to-r from-primary via-amber-300 to-white bg-clip-text font-display text-4xl font-bold text-transparent drop-shadow-[0_6px_40px_hsl(var(--primary)/0.55)] md:text-7xl">
            林俊杰
            <div className="mt-2 text-base font-medium text-foreground/80 md:text-2xl">
              JJ Lin — 音乐的诗人
            </div>
          </h1>

          <div className="prose prose-p:leading-relaxed prose-p:mb-4 prose-p:text-base md:prose-p:text-lg prose-headings:text-xl md:prose-headings:text-2xl max-w-none text-foreground/90">
            <p>
              <strong>个人成长：</strong>{' '}
              出生于1981年的林俊杰，从小在音乐环境中成长，钢琴与作曲学习为他的创作打下坚实基础。2003年正式出道，凭借深情且极具感染力的作品迅速获得关注。
            </p>
            <p>
              <strong>创作历程：</strong>{' '}
              JJ的创作风格多样，从纯粹抒情到电子实验，从编曲到制作，他始终亲力亲为。代表作包括《江南》《一千年以后》《曹操》《修炼爱情》《她说》等，许多作品成为华语乐坛的经典。
            </p>
            <p>
              <strong>JFJ Productions：</strong>{' '}
              作为创办人，JJ通过JFJ公司支持新秀音乐人的成长，推动跨界合作与独立音乐的发展。JFJ强调原创与制作质量，为华语乐坛注入新鲜血液。
            </p>
            <p>
              <strong>舞台与巡演：</strong>{' '}
              他的演唱会向来以精致的舞台设计与强烈的情感共鸣著称。JJ20巡演不仅是一场视觉听觉盛宴，更是他与歌迷共同书写的音乐篇章。
            </p>
            <p>
              <strong>社会影响与公益：</strong>{' '}
              JJ积极参与公益活动，通过音乐传递关怀与力量，影响并激励着许多年轻人追求梦想。
            </p>
            <p>
              <strong>展望未来：</strong>{' '}
              持续在创作与制作上探索，JJ的音乐道路仍在延展，他将继续用作品连接听众、传递情感与故事。
            </p>
          </div>

          <div className="mt-4 flex flex-col gap-4">
            <div className="flex gap-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-3 py-2 text-sm font-medium text-primary">
                20+ 年
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-amber-300/20 px-3 py-2 text-sm font-medium text-amber-300">
                JFJ Productions
              </span>
            </div>

            <details className="mt-2 rounded-md bg-[rgba(255,255,255,0.02)] p-3">
              <summary className="cursor-pointer font-medium">
                创作年表（点击展开）
              </summary>
              <ul className="mt-2 list-inside list-decimal space-y-2 pl-4 text-sm text-foreground/90">
                <li>
                  <strong>2003：</strong> 出道，发行首张专辑并开始为公众所熟知。
                </li>
                <li>
                  <strong>2005-2010：</strong>{' '}
                  连续推出多张经典专辑，风格逐渐多元化，现场表现力增强。
                </li>
                <li>
                  <strong>2011-2018：</strong> 参与制作与跨界合作，成立JFJ并支持新人。
                </li>
                <li>
                  <strong>2019-2023：</strong>{' '}
                  举办多场大型巡演，持续在创作与现场表现上突破。
                </li>
              </ul>
            </details>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute left-0 top-0 z-10 h-40 w-full bg-gradient-to-b from-black/90 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 z-10 h-40 w-full bg-gradient-to-t from-black/90 to-transparent" />
    </div>
  );
};

export default ArtistIntro;
