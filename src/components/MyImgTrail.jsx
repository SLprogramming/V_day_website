import React from 'react'
import ImageTrail from './ImageTrail/ImageTrail'

const photos = [
    '/photos/photo_1.jpg',
    '/photos/photo_2.jpg',
    '/photos/photo_3.jpg',
    '/photos/photo_4.jpg',
    '/photos/photo_5.jpg',
    '/photos/photo_6.jpg',
    '/photos/photo_7.jpg',
    '/photos/photo_8.jpg',
    '/photos/photo_9.jpg',
    '/photos/photo_10.jpg',
    '/photos/photo_11.jpg',
    '/photos/photo_12.jpg',
    '/photos/photo_13.jpg',
    '/photos/photo_14.jpg',
    '/photos/photo_15.jpg',
    '/photos/photo_16.jpg',
]

const MyImgTrail = () => {
  return (
    <>
    <h2 className="text-5xl font-serif text-center mb-4" style={{ color: 'var(--primary-accent)' }}>
            Memories Trail
          </h2>
    <div 
  style={{ height: "100vh", position: 'relative' }} 
  className='photo-frame flex items-center justify-center'
>
  <img src='/public/Tgs/air-balloon.png' className='w-40 absolute z-50 -top-25 left-10' />
  <img src='/public/Tgs/relationship.png' className='w-40 absolute z-50 -top-55 right-80' />
  <img src='/public/Tgs/bouquet.png' className='w-40 absolute z-1000 bottom-5 right-10' />

  <ImageTrail
  
    key={'imgTrail'}
    items={photos}
    variant="7"
  />
</div>
    </>
  )
}

export default MyImgTrail