import { FC } from 'react';
import { motion } from 'framer-motion';
import TicketCard from '@/components/molecules/TicketCard';
import { tickets } from '@/static/ticket';

const Tickets: FC = () => {
  const total = tickets.length;
  const cityTotal = Array.from(new Set(tickets.map((ticket) => ticket.name))).length;

  return (
    <div>
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-pulse rounded-full bg-purple-600/20 blur-[120px]" />
        <div
          className="absolute bottom-1/4 right-1/4 h-80 w-80 animate-pulse rounded-full bg-purple-500/15 blur-[100px]"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="absolute left-1/2 top-1/2 h-72 w-72 animate-pulse rounded-full bg-purple-400/10 blur-[80px]"
          style={{ animationDelay: '2s' }}
        />
      </div>

      <div className="relative px-4 pb-16 pt-24">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/20 px-4 py-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-purple-400" />
              <span className="text-sm font-medium text-purple-300">珍藏票根</span>
            </div>

            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              <span className="bg-gradient-to-r from-purple-300 via-purple-100 to-purple-300 bg-clip-text text-transparent">
                我的演唱会门票
              </span>
            </h1>

            <p className="mx-auto max-w-2xl text-lg text-purple-300/70">
              每一张票根，都是一段不可复制的回忆
            </p>

            <div className="mt-8 flex justify-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-300">{total}</div>
                <div className="text-sm text-purple-400/60">场演唱会</div>
              </div>
              <div className="w-px bg-purple-500/30" />
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-300">{cityTotal}</div>
                <div className="text-sm text-purple-400/60">座城市</div>
              </div>
              <div className="w-px bg-purple-500/30" />
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-300">2024 - 2025</div>
                <div className="text-sm text-purple-400/60">年</div>
              </div>
            </div>
          </motion.div>

          <div className="space-y-6">
            {tickets.map((ticket, idx) => (
              <TicketCard key={idx} ticket={ticket} index={idx} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-3 text-purple-400/50">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500/50" />
              <span className="text-sm">感谢每一次相遇</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500/50" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
