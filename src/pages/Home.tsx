import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { Music, Sparkles, Heart, MapPin, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, Progress, Tooltip, Badge, Tag } from 'antd';
import { useNavigate } from 'react-router-dom';
import {
  BarChartOutlined,
  PlayCircleOutlined,
  CustomerServiceOutlined,
  FireOutlined,
  TrophyOutlined,
  StarOutlined,
  RocketOutlined,
  ThunderboltOutlined,
  CrownOutlined,
  CalendarOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons';
import RotatingGallery from '@/components/molecules/RotatingGallery';
import CityAreaMap from '@/components/molecules/CityAreaMap';
import MiniPieChart from '@/components/molecules/MiniPieChart';
import ThemeCard3D from '@/components/molecules/ThemeCard3D';
import { useSmallLayout } from '@/hooks/useSmallLayout';
import { ROUTER_PATH } from '@/constants';
import { galleries, concertThemes } from '@/static/home';
import HomeConcert from '@/assets/home/home-concert.jpg';
import type { ConcertThemeItem } from '@/types';

const Home: FC = () => {
  const isSP = useSmallLayout();
  const navigate = useNavigate();

  const [selectedTheme, setSelectedTheme] = useState<ConcertThemeItem>(concertThemes[0]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const watchTotalCount = concertThemes.reduce((acc, cur) => acc + cur.watchCount, 0);
  const watchMaxCount = Math.max(...concertThemes.map((t) => t.watchCount));

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

      <section className="px-6 py-12 sm:px-12">
        <Link
          to={ROUTER_PATH.ARTIST_INTRODUCTION}
          className="group relative mb-8 block overflow-hidden rounded-2xl border-2 border-primary/40 bg-gradient-to-br from-background via-primary/30 to-black p-8 transition-all duration-300 hover:border-primary/80 hover:shadow-[0_0_60px_hsl(var(--primary)/0.3)]"
        >
          <div className="pointer-events-none absolute inset-0 z-0 scale-110 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/30 via-background/80 to-black opacity-30 blur-2xl" />

          <div className="relative z-10 flex flex-col items-center gap-8 md:flex-row">
            <img
              src={HomeConcert}
              alt="JJ Lin"
              className="h-32 w-32 animate-fade-in rounded-full border-4 border-primary/40 object-cover shadow-lg"
            />
            <div className="flex-1 text-left">
              <h2 className="mb-2 flex animate-fade-up items-center gap-2 font-display text-3xl font-bold text-primary md:text-4xl">
                <span className="inline-block animate-pulse text-amber-300">★</span>
                林俊杰 · JJ Lin
              </h2>
              <p
                className="mb-2 animate-fade-up text-base text-foreground/90 md:text-lg"
                style={{ animationDelay: '100ms' }}
              >
                华语乐坛灵魂人物，20+年音乐旅程，代表作《江南》《修炼爱情》《她说》等。点击了解更多
                →
              </p>
              <div
                className="mt-2 flex animate-fade-up gap-4"
                style={{ animationDelay: '200ms' }}
              >
                <span className="inline-flex items-center gap-1 rounded-full bg-primary/20 px-3 py-1 text-sm font-medium text-primary">
                  音乐才子
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-amber-300/20 px-3 py-1 text-sm font-medium text-amber-400">
                  20年陪伴
                </span>
              </div>
            </div>
            <span className="hidden text-2xl font-bold text-primary transition-transform group-hover:translate-x-2 md:block">
              →
            </span>
          </div>
        </Link>
      </section>

      <section className="relative overflow-hidden px-6 py-12 sm:px-12">
        <div className="relative">
          <div className="mb-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 inline-flex items-center gap-5"
            >
              <motion.div
                className="rounded-xl border border-primary/30 bg-primary/20 p-3 backdrop-blur-sm"
                animate={{
                  boxShadow: [
                    '0 0 20px hsl(var(--primary)/0.3)',
                    '0 0 40px hsl(var(--primary)/0.5)',
                    '0 0 20px hsl(var(--primary)/0.3)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <BarChartOutlined className="text-2xl text-primary" />
              </motion.div>
              <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
                演唱会计数
              </h2>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              >
                <StarOutlined className="text-2xl text-amber-400" />
              </motion.div>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mx-auto max-w-2xl text-muted-foreground"
            >
              记录每一次与音乐的相遇，见证追星旅程的点点滴滴
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-6 flex justify-center"
            >
              <MiniPieChart concert={concertThemes} total={watchTotalCount} />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4"
          >
            <motion.div whileHover={{ scale: 1.05, y: -5 }}>
              <Card className="group relative overflow-hidden border-primary/30 bg-gradient-to-br from-primary/20 to-primary/5 text-center">
                <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 transition-transform duration-1000 group-hover:translate-x-[100%]" />
                <TrophyOutlined className="mb-2 text-3xl text-primary" />
                <div className="text-3xl font-bold text-foreground">
                  {watchTotalCount}
                </div>
                <div className="text-sm text-muted-foreground">总观看场次</div>
              </Card>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05, y: -5 }}>
              <Card className="group relative overflow-hidden border-purple-500/30 bg-gradient-to-br from-purple-500/20 to-purple-500/5 text-center">
                <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 transition-transform duration-1000 group-hover:translate-x-[100%]" />
                <FireOutlined className="mb-2 text-3xl text-purple-400" />
                <div className="text-3xl font-bold text-foreground">
                  {concertThemes.length}
                </div>
                <div className="text-sm text-muted-foreground">不同主题</div>
              </Card>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05, y: -5 }}>
              <Card className="group relative overflow-hidden border-pink-500/30 bg-gradient-to-br from-pink-500/20 to-pink-500/5 text-center">
                <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-pink-500/0 via-pink-500/10 to-pink-500/0 transition-transform duration-1000 group-hover:translate-x-[100%]" />
                <CustomerServiceOutlined className="mb-2 text-3xl text-pink-400" />
                <div className="text-3xl font-bold text-foreground">{watchMaxCount}</div>
                <div className="text-sm text-muted-foreground">最多观看</div>
              </Card>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05, y: -5 }}>
              <Card className="group relative overflow-hidden border-amber-500/30 bg-gradient-to-br from-amber-500/20 to-amber-500/5 text-center">
                <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-amber-500/0 via-amber-500/10 to-amber-500/0 transition-transform duration-1000 group-hover:translate-x-[100%]" />
                <RocketOutlined className="mb-2 text-3xl text-amber-400" />
                <div className="text-3xl font-bold text-foreground">∞</div>
                <div className="text-sm text-muted-foreground">美好回忆</div>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <h3 className="mb-6 flex items-center gap-2 font-display text-xl font-bold text-foreground">
              <ThunderboltOutlined className="text-primary" />
              全部主题概览
              <Badge count={concertThemes.length} className="ml-2" />
            </h3>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {concertThemes.map((theme, index) => (
                <motion.div
                  key={theme.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * index }}
                >
                  <ThemeCard3D
                    theme={theme}
                    isSelected={selectedTheme.id === theme.id}
                    rank={index + 1}
                    maxCount={watchMaxCount}
                    onClick={() => setSelectedTheme(theme)}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card
                className="h-auto border-border bg-card/50 backdrop-blur-sm"
                styles={{ body: { padding: 24 } }}
              >
                <h3 className="mb-6 flex items-center gap-2 font-display text-xl font-bold text-foreground">
                  <BarChartOutlined className="text-primary" />
                  演唱会次数统计
                  <span className="ml-auto text-sm font-normal text-muted-foreground">
                    点击查看详情
                  </span>
                </h3>

                <div className="space-y-5">
                  {concertThemes.map((theme, index) => (
                    <motion.div
                      key={theme.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index }}
                      className={`-m-3 cursor-pointer rounded-xl p-3 transition-all duration-300 ${
                        selectedTheme.id === theme.id
                          ? 'bg-primary/10 ring-1 ring-primary/30'
                          : 'hover:bg-white/5'
                      }`}
                      onClick={() => setSelectedTheme(theme)}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <div className="mb-2 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <motion.div
                            className="h-3 w-3 rounded-full"
                            style={{ backgroundColor: theme.themeColor }}
                            animate={{ scale: hoveredIndex === index ? [1, 1.3, 1] : 1 }}
                          />
                          <span className="max-w-[50%] truncate text-sm font-medium text-foreground">
                            {theme.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-primary">
                            {theme.watchCount} 次
                          </span>
                          {watchMaxCount === theme.watchCount && (
                            <CrownOutlined className="text-amber-400" />
                          )}
                        </div>
                      </div>
                      <Tooltip title={`${theme.name}: ${theme.watchCount} 次观看`}>
                        <div className="relative">
                          <Progress
                            percent={(theme.watchCount / watchTotalCount) * 100}
                            showInfo={false}
                            strokeColor={{
                              '0%': theme.themeColor,
                              '100%': theme.themeColor.replace('60%', '80%'),
                            }}
                            railColor="hsl(270 10% 20%)"
                            size={{ height: 12 }}
                            className="custom-progress"
                          />
                          {(hoveredIndex === index || selectedTheme.id === theme.id) && (
                            <motion.div
                              layoutId="bar-glow"
                              className="absolute inset-0 rounded-full opacity-50 blur-sm"
                              style={{ backgroundColor: theme.themeColor }}
                            />
                          )}
                        </div>
                      </Tooltip>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 border-t border-border pt-4">
                  <div className="flex flex-wrap gap-3">
                    {concertThemes.map((theme) => (
                      <div
                        key={theme.id}
                        className="flex items-center gap-1.5 text-xs text-muted-foreground"
                      >
                        <div
                          className="h-2 w-2 rounded-full"
                          style={{ backgroundColor: theme.themeColor }}
                        />
                        {theme.name}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedTheme.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    className="h-full overflow-hidden border-border bg-card/50 backdrop-blur-sm"
                    styles={{ body: { padding: 0 } }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={selectedTheme.themeImage}
                        alt={selectedTheme.name}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                      <div
                        className="absolute inset-0 opacity-30"
                        style={{
                          background: `linear-gradient(135deg, ${selectedTheme.themeColor} 0%, transparent 50%)`,
                        }}
                      />

                      <div className="absolute right-4 top-4">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="rounded-full border border-white/20 px-4 py-2 backdrop-blur-md"
                          style={{ backgroundColor: `${selectedTheme.themeColor}40` }}
                        >
                          <span className="text-lg font-bold text-white">
                            {selectedTheme.watchCount} 次观看
                          </span>
                        </motion.div>
                      </div>
                    </div>

                    <div className="p-6">
                      <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-2 font-display text-2xl font-bold text-foreground"
                      >
                        {selectedTheme.name}
                      </motion.h3>

                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mb-2 text-muted-foreground"
                      >
                        {selectedTheme.description}
                      </motion.p>

                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mb-4 text-muted-foreground"
                      >
                        {selectedTheme.themeTime}
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mb-4 grid grid-cols-2 gap-3"
                      >
                        <div className="rounded-lg bg-white/5 p-3">
                          <div className="mb-1 flex items-center gap-2 text-xs text-muted-foreground">
                            <CustomerServiceOutlined />
                            曲目数量
                          </div>
                          <div className="font-bold text-foreground">
                            {selectedTheme.setlistCount} 首
                          </div>
                        </div>
                        <div className="rounded-lg bg-white/5 p-3">
                          <div className="mb-1 flex items-center gap-2 text-xs text-muted-foreground">
                            <CalendarOutlined />
                            演出时长
                          </div>
                          <div className="font-bold text-foreground">
                            {selectedTheme.avgDuration}
                          </div>
                        </div>
                        <div className="rounded-lg bg-white/5 p-3">
                          <div className="mb-1 flex items-center gap-2 text-xs text-muted-foreground">
                            <CalendarOutlined />
                            首场演出
                          </div>
                          <div className="text-sm font-bold text-foreground">
                            {selectedTheme.firstShow}
                          </div>
                        </div>
                        <div className="rounded-lg bg-white/5 p-3">
                          <div className="mb-1 flex items-center gap-2 text-xs text-muted-foreground">
                            <EnvironmentOutlined />
                            演出场馆
                          </div>
                          <div className="font-bold text-foreground">
                            {selectedTheme.venues.length} 个
                          </div>
                        </div>
                      </motion.div>

                      {selectedTheme.highlights && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.15 }}
                          className="mb-4"
                        >
                          <div className="mb-2 flex items-center gap-1 text-xs text-muted-foreground">
                            <StarOutlined className="text-amber-400" />
                            精彩亮点
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {selectedTheme.highlights.map((highlight, i) => (
                              <Tag
                                key={i}
                                className="border-0"
                                style={{
                                  backgroundColor: `${selectedTheme.themeColor}20`,
                                  color: selectedTheme.themeColor,
                                }}
                              >
                                {highlight}
                              </Tag>
                            ))}
                          </div>
                        </motion.div>
                      )}

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="relative overflow-hidden rounded-xl border p-4"
                        style={{
                          borderColor: `${selectedTheme.themeColor}40`,
                          background: `linear-gradient(135deg, ${selectedTheme.themeColor}15 0%, transparent 100%)`,
                        }}
                      >
                        <div className="relative flex items-center gap-4">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full shadow-lg"
                            style={{
                              background: `conic-gradient(from 0deg, ${selectedTheme.themeColor}, ${selectedTheme.themeColor.replace('60%', '40%')}, ${selectedTheme.themeColor})`,
                            }}
                          >
                            <div className="h-6 w-6 rounded-full bg-card" />
                          </motion.div>

                          <div className="min-w-0 flex-1">
                            <div className="mb-1 flex items-center gap-1 text-xs text-muted-foreground">
                              <CustomerServiceOutlined
                                style={{ color: selectedTheme.themeColor }}
                              />
                              限定主题曲
                            </div>
                            <div className="truncate text-lg font-bold text-foreground">
                              {selectedTheme.themeMusic}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {selectedTheme.artist}
                            </div>
                          </div>

                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white shadow-lg"
                            style={{ backgroundColor: selectedTheme.themeColor }}
                            onClick={() => navigate(ROUTER_PATH.MUSIC_LIST)}
                          >
                            <PlayCircleOutlined className="text-xl" />
                          </motion.button>
                        </div>

                        <div className="mt-4 flex h-10 items-end justify-center gap-0.5">
                          {[...Array(isSP ? 40 : 80)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="w-1 rounded-full"
                              style={{ backgroundColor: selectedTheme.themeColor }}
                              animate={{
                                height: [8, 24, 12, 36, 8, 22, 8],
                              }}
                              transition={{
                                duration: 1.2,
                                repeat: Infinity,
                                delay: i * 0.05,
                                ease: 'easeInOut',
                              }}
                            />
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-background/50 px-6 py-12 sm:px-12">
        <div className="text-center">
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
            追随音乐的脚步
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            每一座城市都承载着独特的记忆，每一场演唱会都是一次心灵的洗礼
          </p>
        </div>

        <RotatingGallery galleries={galleries} />
      </section>

      <section className="px-6 py-12 sm:px-12">
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
      </section>

      <section className="relative overflow-hidden px-6 py-12 sm:px-12">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
        <div className="relative mx-auto max-w-4xl text-center">
          <Music className="mx-auto mb-6 h-12 w-12 text-primary" />
          <blockquote className="mb-6 font-display text-2xl italic text-foreground md:text-3xl">
            &quot; 二十年的坚持，是因为有你们一路相伴 &quot;
          </blockquote>
          <cite className="text-muted-foreground">—— 林俊杰(JJ Lin)</cite>
        </div>
      </section>

      <section className="bg-background/50 px-6 py-12 sm:px-12">
        <CityAreaMap />
      </section>
    </div>
  );
};

export default Home;
