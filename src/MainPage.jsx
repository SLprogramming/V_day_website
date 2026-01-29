import React from 'react'
import Timeline from './components/TimeLine'
import MyImgTrail from './components/MyImgTrail'
import MemoryChat from './components/MemoryChat'
import FloatingMusicPlayer from './components/FloatingMusicPlayer'
import HandwrittenLetter from './components/HandwrittenLetter'
const MainPage = () => {
  return (
    <>
    <MemoryChat/>
    <Timeline/>
    <MyImgTrail/>
    <FloatingMusicPlayer/>
    <HandwrittenLetter/>
    </>
  )
}

export default MainPage