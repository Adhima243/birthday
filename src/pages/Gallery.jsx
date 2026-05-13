import { motion } from 'framer-motion';
import PhotoGrid from '../components/PhotoGrid';
import FlowerAnimation from '../components/FlowerAnimation';

export default function Gallery() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-soft to-secondary px-4 md:px-8 py-20">
      <FlowerAnimation />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="heading text-primary mb-4">
            🖼️ Galeri Kenangan Indah
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Setiap foto adalah foto-foto kamu yang paling aku sukai,
            yang selalu berhasil membuatku tersenyum setiap kali melihatnya. (Jangan lupa di pencet satu satu yaa, hehehe)
          </p>
        </motion.div>

        {/* Photo Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }}
        > 
          <PhotoGrid />
        </motion.div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-center mt-16"
        >
          <a
            href="#closing"
            className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-accent transition-all duration-300 shadow-lg"
          >
            Terakhir... 🎉
          </a>
        </motion.div>
      </div>
    </div>
  );
}
