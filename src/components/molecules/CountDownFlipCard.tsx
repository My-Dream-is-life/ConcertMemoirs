import { FC, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { CountDownTimeUnit } from '@/types';

const CountDownFlipCard: FC<CountDownTimeUnit> = ({ value, label }) => {
  const [prevValue, setPrevValue] = useState(value);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    if (prevValue !== value) {
      setIsFlipping(true);
      const timer = setTimeout(() => {
        setPrevValue(value);
        setIsFlipping(false);
      }, 300);

      return () => clearTimeout(timer);
    }

    return undefined;
  }, [value, prevValue]);

  const formatValue = (v: number) => v.toString().padStart(2, '0');

  return (
    <div className="flex flex-col items-center">
      <div className="perspective-500 relative h-20 w-16 sm:h-24 sm:w-20 md:h-28 md:w-24">
        <div className="absolute inset-0 rounded-xl bg-primary/30 blur-xl" />

        <div className="relative h-full w-full overflow-hidden rounded-xl border border-primary/40 bg-gradient-to-b from-zinc-800 to-zinc-900 shadow-[0_0_20px_hsl(var(--primary)/0.3)]">
          <div className="absolute left-0 right-0 top-0 h-1/2 overflow-hidden bg-gradient-to-b from-zinc-700/50 to-transparent">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="translate-y-1/2 font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                {formatValue(value)}
              </span>
            </div>
          </div>

          <div className="absolute left-0 right-0 top-1/2 z-10 h-px bg-black/50">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-1/2 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="-translate-y-[55%] font-display text-3xl font-bold text-white sm:-translate-y-[64%] sm:text-4xl md:text-5xl">
                {formatValue(value)}
              </span>
            </div>
          </div>

          <AnimatePresence>
            {isFlipping && (
              <motion.div
                initial={{ rotateX: 0 }}
                animate={{ rotateX: -90 }}
                exit={{ rotateX: -90 }}
                transition={{ duration: 0.3, ease: 'easeIn' }}
                className="absolute left-0 right-0 top-0 z-20 h-1/2 origin-bottom rounded-t-xl bg-gradient-to-b from-zinc-700 to-zinc-800"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="translate-y-1/2 font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                    {formatValue(prevValue)}
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="absolute left-0 right-0 top-0 h-4 rounded-t-xl bg-gradient-to-b from-white/10 to-transparent" />
        </div>
      </div>

      <span className="mt-2 text-xs font-medium uppercase tracking-wider text-primary/80 sm:text-sm">
        {label}
      </span>
    </div>
  );
};

export default CountDownFlipCard;
