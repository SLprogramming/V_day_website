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