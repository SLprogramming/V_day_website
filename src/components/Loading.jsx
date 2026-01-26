import React from 'react'
import TgsPlayer from '../hooks/TgsPlayer'

const Loading = () => {
  return (
    <div className='absolute top-0 left-0 w-full h-[100vh] z-[1000] bg-(--primary-bg) flex justify-center items-center'>
        <TgsPlayer fileUrl={'/Tgs/AnimatedSticker.tgs'} />
    </div>
  )
}

export default Loading