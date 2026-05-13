import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const FlowerAnimation = () => {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    // Create multiple flowers with random positions and timing
    const flowerList = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 8 + Math.random() * 4,
      flower: ['🌸', '🌼', '🌺', '🌷', '🌹'][Math.floor(Math.random() * 5)],
    }));
    setFlowers(flowerList);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {flowers.map((flower) => (
        <motion.div
          key={flower.id}
          initial={{
            y: -100,
            x: 0,
            opacity: 0,
          }}
          animate={{
            y: window.innerHeight + 100,
            x: Math.sin(flower.id) * 100,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: flower.duration,
            delay: flower.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute text-3xl md:text-4xl"
          style={{ left: `${flower.left}%` }}
        >
          {flower.flower}
        </motion.div>
      ))}
    </div>
  );
};

export default FlowerAnimation;
