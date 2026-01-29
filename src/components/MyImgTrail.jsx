import React from 'react'
import ImageTrail from './ImageTrail/ImageTrail'
import { motion } from 'framer-motion'

const photos = [
    '/photos/photo_1.jpg', '/photos/photo_2.jpg', '/photos/photo_3.jpg',
    '/photos/photo_4.jpg', '/photos/photo_5.jpg', '/photos/photo_6.jpg',
    '/photos/photo_7.jpg', '/photos/photo_8.jpg', '/photos/photo_9.jpg',
    '/photos/photo_10.jpg', '/photos/photo_11.jpg', '/photos/photo_12.jpg',
    '/photos/photo_13.jpg', '/photos/photo_14.jpg', '/photos/photo_15.jpg',
    '/photos/photo_16.jpg',
]

const MyImgTrail = () => {
  return (
    <div className="relative min-h-screen w-full bg-(--primary-bg) overflow-hidden flex flex-col items-center justify-center py-20">
      
      {/* Title with Caveat Font to match your Chat Session */}
      <h2 className="text-6xl font-['Caveat'] text-center mb-10 z-50 pointer-events-none" 
          style={{ color: 'var(--primary-accent)' }}>
        Our Journey in Every Frame...
      </h2>

      {/* Background Floating Elements (Animated) */}
      <motion.img 
        src='/Tgs/air-balloon.png' 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className='w-32 absolute top-10 left-10 opacity-70 z-0' 
      />
      
      {/* <motion.img 
        src='/Tgs/relationship.png' 
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity }}
        className='w-32 absolute top-20 right-20 opacity-70 z-0' 
      /> */}

      {/* <img src='/Tgs/bouquet.png' className='w-48 absolute bottom-5 right-5 z-50 pointer-events-none' /> */}
        <img 
        src='/Tgs/heart.png' 
       
        className='w-32 absolute bottom-5 right-5 opacity-20 pointer-events-none rotate-280 z-0' 
      />

      {/* The Image Trail Container */}
      <div className="relative w-full h-[70vh] cursor-none">
        <ImageTrail
          items={photos}
          variant="7" // Assuming variant 7 has a nice fading/scaling logic
          // CSS Tip: Add these classes to the ImageTrail's internal img tags via your CSS file:
          // .image-trail-item { 
          //    padding: 10px 10px 30px 10px; 
          //    background: white; 
          //    box-shadow: 0 10px 20px rgba(0,0,0,0.1); 
          //    border: 1px solid #f0f0f0;
          // }
        />
        
        {/* Instructional Sticky Note */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-[#FEF9C3] p-4 shadow-lg -rotate-2 border-l-4 border-yellow-200 pointer-events-none"
        >
          <p className="font-['Caveat'] text-gray-600 text-xl">
            Move your heart to see our memories... ✨
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default MyImgTrail