import React from 'react'
import ImageTrail from './ImageTrail/ImageTrail'

const photos = [
    '/public/photos/photo_1.jpg',
    '/public/photos/photo_2.jpg',
    '/public/photos/photo_3.jpg',
    '/public/photos/photo_4.jpg',
    '/public/photos/photo_5.jpg',
    '/public/photos/photo_6.jpg',
    '/public/photos/photo_7.jpg',
    '/public/photos/photo_8.jpg',
    '/public/photos/photo_9.jpg',
    '/public/photos/photo_10.jpg',
    '/public/photos/photo_11.jpg',
]

const MyImgTrail = () => {
  return (
    <div style={{ height: "100vh", position: 'relative', overflow: 'hidden'}}>
  <ImageTrail
    key={'imgTrail'}
    items={photos}
    variant="7"
  />
</div>
  )
}

export default MyImgTrail