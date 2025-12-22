import { FC } from 'react';
import { motion } from 'framer-motion';

interface ParticlesProps {
  particleCount?: number;
  textIcon?: string[];
  fontSizeRange?: [number, number];
  speedRange?: [number, number];
}

const BaseParticles: FC<ParticlesProps> = ({
  particleCount = 40,
  textIcon = ['JJ20', '❤', 'FINAL LAP', 'JM', '★', '♫', 'JJ', '♪'],
  fontSizeRange = [6, 12],
  speedRange = [2, 8],
}) => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {[...Array(particleCount)].map((_, i) => {
        const randomTextIcon = textIcon[Math.floor(Math.random() * textIcon.length)];
        const [minSize, maxSize] = fontSizeRange;
        const [minSpeed, maxSpeed] = speedRange;

        return (
          <motion.div
            key={i}
            className="animate-float absolute text-purple-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${minSpeed + Math.random() * (maxSpeed - minSpeed)}s`,
              fontSize: `${minSize + Math.random() * (maxSize - minSize)}px`,
              opacity: 0.1 + Math.random() * 0.5,
              filter: 'drop-shadow(0 0 2px currentColor)',
              transform: `rotate(${Math.random() * 360}deg)`,
              zIndex: Math.floor(Math.random() * 10),
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {randomTextIcon}
          </motion.div>
        );
      })}
    </div>
  );
};

export default BaseParticles;
