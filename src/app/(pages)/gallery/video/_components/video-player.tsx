'use client'

import { FC } from 'react'

interface Props {
  videoUrl: string
}

const VideoPLayer: FC<Props> = ({ videoUrl }) => {

  return (
    <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
      <video
        className="w-full h-full object-cover cld-video-player cld-video-player-skin-dark cld-fluid"
        poster="/assets/placeholder-medium.webp"
        controls
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <div className="absolute inset-0 flex items-center justify-center">
        <button className="bg-white bg-opacity-80 rounded-full p-4 text-gray-800 hover:bg-opacity-100 transition-opacity">
          <Play size={48} />
        </button>
      </div> */}
    </div>
  )
}

export default VideoPLayer