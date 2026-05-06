import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown, FiLock } from 'react-icons/fi';

export default function Home({ isLocked = true }) {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateCountdown = () => {
      const targetDate = new Date('2026-05-14').getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setCountdown({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-soft to-secondary flex flex-col items-center justify-center relative overflow-hidden">
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              y: [0, -50, 0],
              x: [0, Math.random() * 50 - 25, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute w-2 h-2 bg-primary rounded-full blur-sm"
          />
        ))}
      </div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center px-4 max-w-4xl"
      >
        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="heading text-primary mb-4"
        >
          Happy 18th Birthday
        </motion.h1>

        {/* Name */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-3xl font-playfair text-accent mb-8"
        >
          Nadya Ivania💖
        </motion.p>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 max-w-2xl mx-auto"
        >
          {[
            { label: 'Hari', value: countdown.days },
            { label: 'Jam', value: countdown.hours },
            { label: 'Menit', value: countdown.minutes },
            { label: 'Detik', value: countdown.seconds },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-60 backdrop-blur-md rounded-2xl p-4 shadow-lg hover:bg-opacity-80 transition-all duration-300"
            >
              <div className="text-2xl sm:text-3xl font-bold text-primary">
                {String(item.value).padStart(2, '0')}
              </div>
              <div className="text-xs sm:text-sm text-accent font-medium">
                {item.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-gray-700 text-lg mb-8 max-w-2xl"
        >
          {isLocked ? (
            <>
              ⏳ Sabar ya, sebentar lagi saatnya tiba! ⏳<br/>
              <span className="text-sm text-gray-600 mt-4 block">
                Hanya bisa dibuka pas hari spesialmu~ 🔐
              </span>
            </>
          ) : (
            <>
              Happy 18th Birthday, sayangku 🤎<br/>
              Hari ini bukan cuma tentang bertambahnya usia,<br/>
              tapi tentang semua hal indah yang ada di kamu.
              <br/><br/>
              Aku punya sesuatu kecil untuk kamu… 🎁
            </>
          )}
        </motion.p>

        {/* CTA Button */}
        {isLocked ? (
          <motion.button
            disabled
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="inline-flex items-center gap-2 bg-gray-400 text-white px-8 py-4 rounded-full font-bold text-lg cursor-not-allowed shadow-lg opacity-75"
          >
            <FiLock size={20} />
            Tunggu Ultahmu Tiba yaa cantikkk
          </motion.button>
        ) : (
          <motion.a
            href="#message"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent transition-all duration-300 shadow-lg"
          >
            Start Surprise 🎁
          </motion.a>
        )}
      </motion.div>

      {/* Scroll indicator - hanya tampil kalau unlocked */}
      {!isLocked && (
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 z-10 text-primary"
        >
          <FiChevronDown size={32} />
        </motion.div>
      )}
    </div>
  );
}
