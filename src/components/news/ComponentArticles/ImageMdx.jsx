import React from 'react'

const ImageMdx = ({ img, alt }) => {
  return (
    <div className=''>
      <img
        src={`https://res.cloudinary.com/caraje/image/upload/c_fill,g_faces,h_300,w_1000/f_webp/q_auto:eco/v1682415704/AdivinaQue/news/${img}`}
        alt={alt}
        width={900}
        height={500}
      />
    </div>
  )
}

export default ImageMdx
