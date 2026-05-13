import { useState } from 'react';
import { motion } from 'framer-motion';
import { MdZoomOutMap } from 'react-icons/md';
import photo1 from '../assets/images/photo1.jpeg';
import photo2 from '../assets/images/photo2.jpeg';
import photo3 from '../assets/images/photo3.jpeg';
import photo4 from '../assets/images/photo4.jpeg';
import photo5 from '../assets/images/photo5.jpeg';

export default function PhotoGrid() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Placeholder images dengan captions
  const photos = [
    { 
      id: 1, 
      src: photo1, 
      span: 'col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 row-span-2 md:row-span-3 lg:row-span-3',
      caption: 'Aku suka caramu marah kepadaku (meskipun agak ngeri)',
      objectPosition: 'center top'
    },
    { 
      id: 2, 
      src: photo2, 
      span: 'col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 row-span-2 md:row-span-2 lg:row-span-2',
      caption: 'Senyuman mu adalah hal terindah di dunia',
      objectPosition: 'center top'
    },
    { 
      id: 3, 
      src: photo3, 
      span: 'col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 row-span-2 md:row-span-2 lg:row-span-2',
      caption: 'Mata mu yang berbicara lebih dari ribuan kata',
      objectPosition: 'center top'
    },
    { 
      id: 4, 
      src: photo4, 
      span: 'col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2 row-span-1 md:row-span-1 lg:row-span-1',
      caption: 'Setiap momen denganmu terasa seperti mimpi indah' 
    },
    { 
      id: 5, 
      src: photo5, 
      span: 'col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2 row-span-2 md:row-span-2 lg:row-span-2',
      caption: 'Kamu adalah alasan terbaik untuk tersenyum setiap hari' 
    },
  ];

  return (
    <div className="space-y-8">
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-[200px] sm:auto-rows-[250px]">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`${photo.span} relative group overflow-hidden rounded-2xl cursor-pointer`}
            onClick={() => setSelectedPhoto(photo)}
          >
            <img
              src={photo.src}
              alt={`Photo ${photo.id}`}
              style={{ objectPosition: photo.objectPosition || 'center' }}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex flex-col items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedPhoto(photo);
                }}
                className="bg-white rounded-full p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <MdZoomOutMap size={24} className="text-primary" />
              </motion.button>

              {/* Caption preview on hover */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="text-white text-center text-sm font-poppins px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2"
              >
                {photo.caption}
              </motion.p>
            </div>

            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white via-transparent to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.8, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ type: 'spring', damping: 15 }}
            onClick={(e) => e.stopPropagation()}
            className="flex flex-col items-center gap-6 max-w-3xl"
          >
            {/* Modal Image */}
            <img
              src={selectedPhoto.src}
              alt="Modal"
              className="w-full max-h-[70vh] rounded-2xl object-cover shadow-2xl"
            />

            {/* Modal Caption */}
            <div className="bg-white bg-opacity-95 backdrop-blur-md rounded-2xl p-6 max-w-2xl shadow-2xl">
              <p className="text-center text-gray-800 font-poppins text-lg leading-relaxed">
                "{selectedPhoto.caption}"
              </p>
            </div>

            {/* Close hint */}
            <p className="text-white text-sm text-center opacity-75">
              Klik di luar atau tekan ESC untuk tutup
            </p>
          </motion.div>
        </motion.div>
      )}

    </div>
  );
}
