import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

export default function Closing() {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    // Trigger confetti on component mount
    setShowConfetti(true);
    triggerConfetti();
  }, []);

  const triggerConfetti = () => {
    // Confetti dari atas
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0 },
      colors: ['#6B4226', '#A67B5B', '#D2B48C', '#8B5E3C', '#F5E6D3'],
    });

    // Confetti dari kiri
    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 100,
        origin: { x: 0, y: 0.8 },
        colors: ['#6B4226', '#A67B5B', '#D2B48C'],
      });
    }, 200);

    // Confetti dari kanan
    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 100,
        origin: { x: 1, y: 0.8 },
        colors: ['#8B5E3C', '#F5E6D3', '#D2B48C'],
      });
    }, 400);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              scale: 0,
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              opacity: [0, 0.5, 0],
              scale: [0, 1, 0],
              y: [0, -200, -400],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              delay: i * 0.05,
              repeat: Infinity,
              ease: 'easeOut',
            }}
            className="absolute w-2 h-2 bg-cream rounded-full"
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center max-w-3xl"
      >
        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="heading text-cream mb-6"
        >
          Happy 18th Birthday 🎉
        </motion.h1>

        {/* Message */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-cream text-xl md:text-2xl font-playfair mb-8 leading-relaxed"
        >
          Sekali lagi, <span className="text-soft font-bold">selamat ulang tahun</span> untuk gadis terbaik di dunia! 💖
        </motion.p>

        {/* Wish */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white bg-opacity-20 backdrop-blur-md rounded-2xl p-8 mb-8 border border-cream border-opacity-30"
        >
          <p className="text-cream text-lg">
            Happy 18th Birthday, cintaku 🤎

Di umur kamu yang sekarang,  
aku punya banyak harapan untuk kamu…

Aku harap kamu selalu diberi kesehatan,  
dipermudah setiap langkahnya,  
dan dikuatkan dalam setiap hal yang kamu hadapi.

Aku harap semua mimpi kamu, satu per satu,  
bisa kamu capai dengan penuh kebanggaan.  
Jangan pernah ragu sama diri kamu sendiri ya,  
karena kamu jauh lebih hebat dari yang kamu pikirkan.

Untuk ke depannya…  
aku gak minta semuanya harus sempurna,  
aku cuma berharap kita bisa terus bareng,  
saling jaga, saling ngerti, dan saling tumbuh.

Semoga hubungan kita juga ikut tumbuh,  
jadi lebih kuat, lebih dewasa,  
dan tetap hangat seperti sekarang… atau bahkan lebih.

Terima kasih sudah jadi bagian dari masa depan yang ingin aku perjuangkan.

Aku sayang kamu, hari ini, besok, dan seterusnya 🤎
          </p>
        </motion.div>

        {/* Sign */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-cream text-lg font-playfair mb-12"
        >
          Dengan sepenuh hati,<br />
          <span className="font-bold text-soft text-2xl">—Fauzan ❤️</span>
        </motion.p>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => {
              window.location.href = '/#home';
            }}
            className="bg-cream text-primary px-8 py-4 rounded-full font-bold hover:bg-soft transition-all duration-300 shadow-lg hover:scale-105"
          >
            Replay Lagi 🔁
          </button>

          <motion.a
            href="https://wa.me/+6281237149464"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-cream transition-all duration-300 shadow-lg hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Hubungi Aku 💬
          </motion.a>
        </motion.div>

        {/* Floating hearts */}
        <div className="mt-16 flex justify-center gap-8 text-4xl">
          {['❤️', '💕', '💖', '💗', '💝'].map((heart, i) => (
            <motion.span
              key={i}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2.5,
                delay: i * 0.2,
                repeat: Infinity,
              }}
            >
              {heart}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
