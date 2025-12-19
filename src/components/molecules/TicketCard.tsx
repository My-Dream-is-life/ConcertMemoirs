import { FC } from 'react';
import { motion } from 'framer-motion';
import type { TicketItem } from '@/types';

interface TicketCardProp {
  ticket: TicketItem;
  index: number;
  onClick: () => void;
}

const TicketCard: FC<TicketCardProp> = ({ ticket, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
      whileHover={{
        scale: 1.02,
        rotateY: 5,
        boxShadow: '0 30px 60px -15px rgba(168, 85, 247, 0.4)',
      }}
      className="perspective-1000 group relative cursor-pointer"
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-900/90 via-purple-800/80 to-purple-900/90 shadow-[0_10px_40px_-10px_rgba(168,85,247,0.3)] backdrop-blur-xl">
        <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />

        <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-1000 group-hover:translate-x-[100%]" />

        <div className="absolute right-4 top-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="flex items-center gap-1 text-xs text-purple-300/80">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            点击查看详情
          </span>
        </div>

        <div className="flex">
          <div className="flex-1 space-y-4 p-6">
            <div className="space-y-1">
              <div className="text-xs font-medium uppercase tracking-wider text-purple-300">
                {ticket.tourName}
              </div>
              <h3 className="text-2xl font-bold text-white">
                {ticket.artist} {ticket.name}站
              </h3>
            </div>

            <div className="flex items-center gap-2 text-purple-200">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              <span className="text-sm">{ticket.address}</span>
            </div>

            <div className="flex gap-6">
              <div className="space-y-1">
                <div className="text-xs text-purple-400">日期</div>
                <div className="font-semibold text-white">{ticket.date}</div>
              </div>
              <div className="space-y-1">
                <div className="text-xs text-purple-400">开场时间</div>
                <div className="font-semibold text-white">{ticket.time}</div>
              </div>
            </div>

            <div className="rounded-xl border border-purple-500/20 bg-purple-950/50 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="mb-1 text-xs text-purple-400">座位</div>
                  <div className="font-bold text-white">{ticket.seat}</div>
                </div>
                <div className="text-right">
                  <div className="mb-1 text-xs text-purple-400">区域</div>
                  <div className="font-semibold text-purple-300">{ticket.section}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex w-0 flex-col items-center justify-center">
            <div className="absolute top-0 h-4 w-8 -translate-x-1/2 rounded-b-full bg-background" />
            <div className="h-full border-l-2 border-dashed border-purple-500/40" />
            <div className="absolute bottom-0 h-4 w-8 -translate-x-1/2 rounded-t-full bg-background" />
          </div>

          <div className="flex w-32 flex-col items-center justify-center bg-purple-950/30 p-4">
            <div className="mb-2 text-xs text-purple-300">{ticket.showNumber}</div>
            <div className="mb-2 text-3xl font-bold text-white">
              {ticket.name.slice(0, 2)}
            </div>
            <div className="text-lg font-bold text-purple-400">{ticket.price}</div>

            <div className="mt-4 flex gap-[2px]">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="bg-white/80"
                  style={{
                    width: Math.random() > 0.5 ? '2px' : '1px',
                    height: '30px',
                  }}
                />
              ))}
            </div>
            <div className="mt-1 font-mono text-[8px] text-purple-400">
              {ticket.orderNumber.slice(0, 12)}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
      </div>

      <div className="absolute -inset-4 -z-10 rounded-3xl bg-purple-500/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
    </motion.div>
  );
};

export default TicketCard;
