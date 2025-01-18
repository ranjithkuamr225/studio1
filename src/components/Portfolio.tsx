import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

// Updated portfolio data with categories
const portfolioData = {
  'Wedding Photography': [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1519741497674-611481863552',
      title: 'Beautiful Wedding Ceremony',
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc',
      title: 'Wedding Reception',
    },
  ],
  'Birthday Photography': [
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84',
      title: 'Birthday Celebration',
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d',
      title: 'Kids Birthday Party',
    },
  ],
  'Fashion Photography': [
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e',
      title: 'Fashion Model Shoot',
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b',
      title: 'Street Fashion',
    },
  ],
  'Nature Photography': [
    {
      id: 7,
      url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
      title: 'Scenic Landscape',
    },
    {
      id: 8,
      url: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4',
      title: 'Nature Close-up',
    },
  ],
  'Corporate Events': [
    {
      id: 9,
      url: 'https://images.unsplash.com/photo-1511578314322-379afb476865',
      title: 'Business Conference',
    },
    {
      id: 10,
      url: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b',
      title: 'Corporate Meeting',
    },
  ],
};

export default function Portfolio() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...Object.keys(portfolioData)];

  const getFilteredPhotos = () => {
    if (selectedCategory === 'All') {
      return Object.values(portfolioData).flat();
    }
    return portfolioData[selectedCategory as keyof typeof portfolioData] || [];
  };

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
            Our Photography Portfolio
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore our diverse collection of professional photography across various categories
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {getFilteredPhotos().map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative aspect-square overflow-hidden rounded-lg"
            >
              <motion.img
                src={`${photo.url}?auto=format&fit=crop&w=800&q=80`}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold mb-2">{photo.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}