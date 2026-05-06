import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar({ currentPage }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Message', id: 'message' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Closing', id: 'closing' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white bg-opacity-80 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-playfair text-2xl font-bold text-primary">
          ❤️ Sweet 18
        </div>

        <div className="flex gap-6 items-center">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`/#${item.id}`}
              className={`text-sm font-poppins transition-colors duration-300 ${
                currentPage === item.id
                  ? 'text-primary font-bold'
                  : 'text-gray-700 hover:text-primary'
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
