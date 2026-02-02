import { FC } from 'react';
import { motion } from 'framer-motion';

const BasePulseRings: FC = () => (
  <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute h-full w-full rounded-3xl border border-primary/20"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1.2, opacity: [0, 0.5, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: i * 1,
          ease: 'easeOut',
        }}
      />
    ))}
  </div>
);

export default BasePulseRings;
