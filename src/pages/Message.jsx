import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Message() {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const fullMessage = `Hai kamu yang paling aku sayang 🤎

Selamat ulang tahun yang ke-18 yaa.  
Akhirnya kamu sampai di umur yang baru,  
umur dimana kamu semakin dewasa, semakin kuat,  
dan semoga… semakin bahagia juga.

Aku cuma mau bilang,  
terima kasih sudah hadir di hidup aku.  
Terima kasih sudah jadi tempat aku cerita,  
tempat aku pulang, dan tempat aku merasa tenang.

Mungkin aku bukan orang yang sempurna,  
tapi aku selalu berusaha jadi yang terbaik buat kamu.  
Dan di hari spesial ini, aku berharap  
semua hal baik datang ke kamu, satu per satu.

Semoga semua yang kamu impikan bisa tercapai,  
semoga kamu selalu dikelilingi hal-hal baik,  
dan semoga… aku masih ada di setiap cerita bahagia kamu nanti.

Aku bangga sama kamu.  
Aku sayang kamu, selalu 🤎`;

  useEffect(() => {
    if (!isTyping) return;

    if (displayedText.length < fullMessage.length) {
      const timer = setTimeout(() => {
        setDisplayedText(fullMessage.slice(0, displayedText.length + 1));
      }, 30);
      return () => clearTimeout(timer);
    } else {
      setIsTyping(false);
    }
  }, [displayedText, isTyping, fullMessage]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-soft to-secondary flex items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="max-w-2xl w-full"
      >
        {/* Glass card */}
        <div className="bg-white bg-opacity-70 backdrop-blur-2xl rounded-3xl shadow-glass p-8 md:p-12 border border-white border-opacity-30">
          {/* Decorative header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-playfair text-primary mb-2">
              💌 Sebuah Surat Untukmu
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>

          {/* Message */}
          <div className="text-gray-700 font-poppins text-base md:text-lg leading-relaxed min-h-[400px]">
            {displayedText}
            {isTyping && (
              <span className="animate-pulse text-primary">|</span>
            )}
          </div>

          {/* Scroll hint */}
          {!isTyping && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center text-sm text-gray-600 mt-8"
            >
              ✨ Lanjut ke galeri foto mu ✨
            </motion.p>
          )}
        </div>

        {/* Next button */}
        {!isTyping && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-8"
          >
            <a
              href="#gallery"
              className="inline-block bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-accent transition-all duration-300 shadow-lg"
            >
              Lihat Galeri 📸
            </a>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
