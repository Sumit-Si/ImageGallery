import React from 'react'
import { useImage } from '../context/ImageContext'

function ImageCard({image}) {
    console.log(image,"img");
    

  return (
    <div className='max-w-full bg-base-100 rounded-lg hover:scale-[1.02] transition duration-200 cursor-pointer hover:shadow-md hover:shadow-secondary/30'>
        <img loading={"lazy"} className='w-full h-full' src={image.img} alt="img" />
    </div>
  )
}

export default ImageCard